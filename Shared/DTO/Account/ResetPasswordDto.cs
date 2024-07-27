﻿using System.ComponentModel.DataAnnotations;

namespace Shared.DTO.Account
{
    public class ResetPasswordDto
    {
        [Required(ErrorMessage = "Password is required")]
        public string? Password { get; set; }

        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string? ConfirmPassword { get; set; }

        public string? Email { get; set; }
        public string? Token { get; set; }
    }
}
