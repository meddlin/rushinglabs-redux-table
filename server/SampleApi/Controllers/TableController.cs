using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Cors;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SampleApi.Models;

namespace SampleApi.Controllers
{
    [EnableCors("AppPolicy")]
    [ApiController]
    [Produces("application/json")]
    [Route("[controller]")]
    public class TableController : ControllerBase
    {
        private static readonly List<UserProfile> Profiles = new List<UserProfile>
        {
            new UserProfile{ Id = 1, Name = "John" },
            new UserProfile{ Id = 2, Name = "Jane" }
        };

        private readonly ILogger<TableController> _logger;

        public TableController(ILogger<TableController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public List<UserProfile> Get()
        {
            return Profiles;
        }
    }
}
