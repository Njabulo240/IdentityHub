using AutoMapper;
using Entities.Models;
using Shared.DTO.Message;

namespace IdentityHub
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Message, MessageDto>();
        }
    }
}