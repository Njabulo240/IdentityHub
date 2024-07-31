﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SupportPortal.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PlayController : ControllerBase
    {
        [HttpGet("get-players")]
        public IActionResult Players()
        {
            return Ok(new JsonResult(new { message = "Only authorized users can view players" }));
        }
    }
}
