using Contracts;
using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Repository.Data;

namespace Repository
{
    public class MessageRepository : RepositoryBase<Message>, IMessageRepository
    {
        public MessageRepository(Context repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateMessage(Message message)
        {
            Create(message);
        }

        public void DeleteMessage(MessageDeleteModel messageDeleteModel)
        {
            var existingMessage = RepositoryContext.Set<Message>().Find(messageDeleteModel.Message?.Id);
            if (existingMessage == null)
            {
                throw new ArgumentException("Message not found");
            }

            if (messageDeleteModel.Message == null || string.IsNullOrEmpty(messageDeleteModel.DeletedUserId))
            {
                throw new ArgumentException("Invalid message or user information");
            }

            switch (messageDeleteModel.DeleteType)
            {
                case "DeleteForMe":
                    if (existingMessage.Receiver == messageDeleteModel.DeletedUserId)
                    {
                        existingMessage.IsReceiverDeleted = true;
                    }
                    else if (existingMessage.Sender == messageDeleteModel.DeletedUserId)
                    {
                        existingMessage.IsSenderDeleted = true;
                    }
                    break;

                case "DeleteForEveryone":
                    existingMessage.IsSenderDeleted = true;
                    existingMessage.IsReceiverDeleted = true;
                    break;

                default:
                    throw new ArgumentException("Invalid delete type");
            }

            if (existingMessage.IsSenderDeleted && existingMessage.IsReceiverDeleted)
            {
                RepositoryContext.Set<Message>().Remove(existingMessage);
            }
            else
            {
                RepositoryContext.Set<Message>().Update(existingMessage);
            }
        }

        public async Task<IEnumerable<Message>> GetAllMessages(bool trackChanges)
        {
            return await FindAll(trackChanges).ToListAsync();
        }

        public async Task<IEnumerable<Message>> GetReceivedMessages(string userId, bool trackChanges)
        {
            return await FindByCondition(c => c.Receiver.Equals(userId), trackChanges)
             .ToListAsync();
        }

        public void UpdateMessage(Message message)
        {
            throw new NotImplementedException();
        }
    }
}
