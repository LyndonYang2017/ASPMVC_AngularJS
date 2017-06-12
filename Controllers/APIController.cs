using ASPMVC004.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ASPMVC004.Controllers
{
    [RoutePrefix("api/UserInfo")]
    public class APIController : ApiController
    {
        [HttpGet, Route()]
        public IHttpActionResult GetUserInfo()
        {
            var person = new List<Person>
            {
                new Person("Lin Yang", 23, 'X'),
                new Person("Emily Yang", 3, 'X'),
                new Person("Baofang Zhang", 33, 'X'),
            };
            return Ok(person);
        }
    }
}
