﻿using Entities.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Repository.Data
{
    public class Context : IdentityDbContext<User>
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }
    }
}