using Entities.Models;

namespace Contracts
{
    public interface IMessageRepository
    {
        Task<IEnumerable<Message>> GetAllMessages(bool trackChanges);
        Task<IEnumerable<Message>> GetReceivedMessages(Guid userId, bool trackChanges);
        void CreateMessage(Message message);
        void UpdateMessage(Message message);
        void DeleteMessage(Message message);
    }
}
