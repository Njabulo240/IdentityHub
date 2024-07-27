using System.ComponentModel.DataAnnotations;

namespace Shared.DTO.Account
{
    public class UpdateUserRoleDto
    {
        [Required]
        public List<string>? Roles { get; set; }
    }
}
