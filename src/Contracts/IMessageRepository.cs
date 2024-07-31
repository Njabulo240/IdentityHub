using Entities.Models;

namespace Contracts
{
    public interface IMessageRepository
    {
        Task<IEnumerable<Message>> GetAllMessages(bool trackChanges);
        Task<IEnumerable<Message>> GetReceivedMessages(string userId, bool trackChanges);
        void CreateMessage(Message message);
        void UpdateMessage(Message message);
        void DeleteMessage(MessageDeleteModel messageDeleteModel);
    }
}
