using Contracts;
using Repository.Data;

namespace Repository
{
    public class RepositoryManager : IRepositoryManager
    {
        private Context _repoContext;
        private IMessageRepository _messageRepository;

        public RepositoryManager(Context repositoryContext)
        {
            _repoContext = repositoryContext;

        }

        public IMessageRepository Message
        {
            get
            {
                if (_messageRepository == null)
                {
                    _messageRepository = new MessageRepository(_repoContext);
                }

                return _messageRepository;
            }
        }
        public void Save() => _repoContext.SaveChanges();

    }
}
