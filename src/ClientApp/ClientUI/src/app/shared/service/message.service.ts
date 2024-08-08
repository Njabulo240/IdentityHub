import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class MessageService {
    readonly BaseURI = environment.appUrl;
    constructor(private http: HttpClient){

    }
    getUserReceivedMessages(userId:string) {
        return this.http.get(this.BaseURI + 'api/message');
      }
      deleteMessage(message: any) {
        return this.http.post(this.BaseURI + 'api/message',message);
      }
  }