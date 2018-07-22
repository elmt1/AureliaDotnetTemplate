using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AureliaDotnetTemplate.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class LocaleController : Controller
    {

        [HttpGet("Terminology")]

        public Terminology[] GetTermionology()
        {
            var terminology = new Terminology[]
            {
                new Terminology() { Name = "home", Term = "Home" },
                new Terminology() { Name = "about", Term = "About" },
                new Terminology() { Name = "some-term", Term = "Some Term" }
            };

            return terminology;
        }

        public class Terminology
        {
            public string Name { get; set; }
            public string Term { get; set; }
        }
    }
}
