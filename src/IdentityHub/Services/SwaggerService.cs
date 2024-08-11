using Microsoft.OpenApi.Models;

namespace IdentityHub.Services
{
    public static class SwaggerService
    {
        public static void ConfigureSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(s =>
            {
                s.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "IdentityHub API",
                    Version = "v1",
                    Description = "IdentityHub API by MatechCoding",
                    Contact = new OpenApiContact
                    {
                        Name = "Njabulo Mamba",
                        Email = "njebzeliny@gmail.com",
                        Url = new Uri("https://matechcoding.com"),
                    },
                    License = new OpenApiLicense
                    {
                        Name = "IdentityHub",
                        Url = new Uri("https://github.com/Njabulo240/IdentityHub/blob/master/LICENSE"),
                    }
                });
                s.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    In = ParameterLocation.Header,
                    Description = "Place to add JWT with Bearer",
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer"
                });

                s.AddSecurityRequirement(new OpenApiSecurityRequirement()
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        },
                        Name = "Bearer",
                    },
                    new List<string>()
                }
            });
            });
        }
    }
}
