namespace Shared.DTO.Account
{
    public class UserDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string JWT { get; set; }
        public UserDetailsDto User { get; set; }
    }
}
