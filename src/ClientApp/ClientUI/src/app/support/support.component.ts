import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { Guid } from 'guid-typescript';
import { environment } from 'src/environments/environment.development';
import { AccountService } from '../account/account.service';
import { MessageService } from '../shared/service/message.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

   loggedInUser: any = null;
  //loggedInUser = JSON.parse(localStorage.getItem("login-user"));
  users:any;
  chatUser:any;

  messages: any[] = [];
  displayMessages: any[] = []
  message: string |any;
  hubConnection: HubConnection |any;

 
  connectedUsers: any[] = []
  constructor(private router: Router, private service: AccountService, private messageService: MessageService) { }

  ngOnInit() {

    this.service.user$.subscribe(user => {
      if (user) {
       this.loggedInUser = user.user;
       console.log(this.loggedInUser.id)
      } else {
        console.log('No user data available');
      }
    });
     this.messageService.getUserReceivedMessages(this.loggedInUser.id).subscribe((item:any)=>{
       if(item){
         this.messages=item;
         this.messages.forEach(x=>{
          x.type=x.receiver===this.loggedInUser.id?'recieved':'sent';
         })
         console.log(this.messages);
       }
     })
    
     this.service.getAll().subscribe(
      (user:any) => {
        if(user){
        this.users=user.filter((x: { email: any; })=>x.email!==this.loggedInUser.email);
        this.users.forEach((item: { [x: string]: boolean; })=>{
          item['isActive']=false;
        })
        this.makeItOnline();
        }
      },
      err => {
        console.log(err);
      },
    );




    this.message = ''
    this.hubConnection = new HubConnectionBuilder().withUrl(environment.chatHubUrl).build();
    const self = this
    this.hubConnection.start()
      .then(() => {
        self.hubConnection.invoke("PublishUserOnConnect", this.loggedInUser.id, this.loggedInUser.firstName, this.loggedInUser.userName)
          .then(() => console.log('User Sent Successfully'))
          .catch((err: any) => console.error(err));

        this.hubConnection.on("BroadcastUserOnConnect", (Usrs: any[]) => {
          this.connectedUsers = Usrs;
          this.makeItOnline();
        })
        this.hubConnection.on("BroadcastUserOnDisconnect", (Usrs: any[]) => {
          this.connectedUsers = Usrs;
          this.users.forEach((item: { isOnline: boolean; }) => {
            item.isOnline = false;
          });
          this.makeItOnline();
        })
      })
      .catch((err: any) => console.log(err));

    // this.hubConnection.on("UserConnected", (connectionId) => this.UserConnectionID = connectionId);

    this.hubConnection.on('BroadCastDeleteMessage', (connectionId: any, message: { id: any; isReceiverDeleted: any; isSenderDeleted: any; }) => {
     let deletedMessage=this.messages.find(x=>x.id===message.id);
     if(deletedMessage){
       deletedMessage.isReceiverDeleted=message.isReceiverDeleted;
       deletedMessage.isSenderDeleted=message.isSenderDeleted;
       if(deletedMessage.isReceiverDeleted && deletedMessage.receiver===this.chatUser.id){
        this.displayMessages = this.messages.filter(x => (x.type === 'sent' && x.receiver === this.chatUser.id) || (x.type === 'recieved' && x.sender === this.chatUser.id));
       }
     }

    })

    this.hubConnection.on('ReceiveDM', (connectionId: any, message: { type: string; sender: any; }) => {
      console.log(message);
      message.type = 'recieved';
      this.messages.push(message);
      let curentUser = this.users.find((x: { id: any; }) => x.id === message.sender);
      this.chatUser = curentUser;
      this.users.forEach((item: { [x: string]: boolean; }) => {
        item['isActive'] = false;
      });
      var user = this.users.find((x: { id: any; }) => x.id == this.chatUser.id);
      user['isActive'] = true;
      this.displayMessages = this.messages.filter(x => (x.type === 'sent' && x.receiver === this.chatUser.id) || (x.type === 'recieved' && x.sender === this.chatUser.id));
    })
  }

  SendDirectMessage() {
    if (this.message != '' && this.message.trim() != '') {
      let guid=Guid.create();
      var msg = {
        id:guid.toString(),
        sender: this.loggedInUser.id,
        receiver: this.chatUser.id,
        messageDate: new Date(),
        type: 'sent',
        content: this.message
      };
      this.messages.push(msg);
      this.displayMessages = this.messages.filter(x => (x.type === 'sent' && x.receiver === this.chatUser.id) || (x.type === 'recieved' && x.sender === this.chatUser.id));

      this.hubConnection.invoke('SendMessageToUser', msg)
        .then(() => console.log('Message to user Sent Successfully'))
        .catch((err: any) => console.error(err));
      this.message = '';
    }
  }

  openChat(user: { [x: string]: boolean; }) {
    this.users.forEach((item: { [x: string]: boolean; }) => {
      item['isActive'] = false;
    });
    user['isActive'] = true;
    this.chatUser = user;
    this.displayMessages = this.messages.filter(x => (x.type === 'sent' && x.receiver === this.chatUser.id) || (x.type === 'recieved' && x.sender === this.chatUser.id));;
  }

  makeItOnline() {
    if (this.connectedUsers && this.users) {
      this.connectedUsers.forEach(item => {
        var u = this.users.find((x: { userName: any; }) => x.userName == item.username);
        if (u) {
          u.isOnline = true;
        }
      })
    }
  }
  deleteMessage(message: { isSenderDeleted: any; isReceiverDeleted: boolean; },deleteType: any,isSender: any){
    let deleteMessage={
      'deleteType':deleteType,
      'message':message,
      'deletedUserId':this.loggedInUser.id
    }
    this.hubConnection.invoke('DeleteMessage', deleteMessage)
        .then(() => console.log('publish delete request'))
        .catch((err: any) => console.error(err));
    message.isSenderDeleted=isSender;
    message.isReceiverDeleted=!isSender;
  }

  onLogout() {
    this.hubConnection.invoke("RemoveOnlineUser", this.loggedInUser.id)
      .then(() => {
        this.messages.push('User Disconnected Successfully')
      })
      .catch((err: any) => console.error(err));
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }


}
