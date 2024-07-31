namespace Contracts
{
    public interface IRepositoryManager
    {
        IMessageRepository Message { get; }
        void Save();
    }
}
