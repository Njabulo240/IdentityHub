using Contracts;
using Repository.Data;

namespace Repository
{
    public class RepositoryManager : IRepositoryManager
    {
        private Context _repoContext;

        public RepositoryManager(Context repositoryContext)
        {
            _repoContext = repositoryContext;
        }

        public void SaveAsync() => _repoContext.SaveChanges();
    }
}
