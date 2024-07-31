using AutoMapper;
using Contracts;
using Microsoft.AspNetCore.Mvc;
using Shared.DTO.Message;

namespace SupportPortal.Controllers
{
    [Route("api/message")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IRepositoryManager _repository;
        private readonly IMapper _mapper;

        public MessageController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBrands()
        {
            try
            {
                var messages = await _repository.Message.GetAllMessages(trackChanges: false);

                var messagesResult = _mapper.Map<IEnumerable<MessageDto>>(messages);
                return Ok(messagesResult);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("received-messages/{userId}")]
        public async Task<IActionResult> GetAllBrands(string userId)
        {
            try
            {
                var messages = await _repository.Message.GetReceivedMessages(userId, trackChanges: false);

                var messagesResult = _mapper.Map<IEnumerable<MessageDto>>(messages);
                return Ok(messagesResult);
            }
            catch (Exception)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    }

}
