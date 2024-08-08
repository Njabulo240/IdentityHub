using Contracts;
using Entities.Models;
using Microsoft.AspNetCore.SignalR;

namespace IdentityHub.Hubs
{
    public class ChatHub : Hub
    {
        private readonly IMessageRepository messageRepository;

        public ChatHub(IMessageRepository messageRepository)
        {
            this.messageRepository = messageRepository;
        }

        static IList<UserConnection> Users = new List<UserConnection>();

        public class UserConnection
        {
            public string UserId { get; set; }
            public string ConnectionId { get; set; }
            public string FullName { get; set; }
            public string Username { get; set; }
        }

        public Task SendMessageToUser(Message message)
        {
            var receiver = Users.FirstOrDefault(x => x.UserId == message.Receiver);
            var connectionId = receiver == null ? "offlineUser" : receiver.ConnectionId;
            messageRepository.CreateMessage(message);
            return Clients.Client(connectionId).SendAsync("ReceiveDM", Context.ConnectionId, message);
        }

        public async Task DeleteMessage(MessageDeleteModel messageDeleteModel)
        {
            messageRepository.DeleteMessage(messageDeleteModel);
            await Clients.All.SendAsync("BroadCastDeleteMessage", Context.ConnectionId, messageDeleteModel);
        }

        public async Task PublishUserOnConnect(string id, string fullname, string username)
        {
            var existingUser = Users.FirstOrDefault(x => x.Username == username);
            var indexExistingUser = Users.IndexOf(existingUser);

            UserConnection user = new UserConnection
            {
                UserId = id,
                ConnectionId = Context.ConnectionId,
                FullName = fullname,
                Username = username
            };

            if (existingUser == null)
            {
                Users.Add(user);
            }
            else
            {
                Users[indexExistingUser] = user;
            }

            await Clients.All.SendAsync("BroadcastUserOnConnect", Users);
        }

        public void RemoveOnlineUser(string userID)
        {
            var user = Users.FirstOrDefault(x => x.UserId == userID);
            if (user != null)
            {
                Users.Remove(user);
                Clients.All.SendAsync("BroadcastUserOnDisconnect", Users);
            }
        }
    }

}
