using ASPMVC004.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPMVC004.Controllers
{
    public class PersonController : Controller
    {
        // GET: Person
        public ActionResult Person()
        {
            return View();
        }


        public JsonResult GetPerson()
        {
            var person = new List<Person>
            {
                new Person("Lin Yang", 23, 'X'),
                new Person("Emily Yang", 3, 'X'),
                new Person("Baofang Zhang", 33, 'X'),
            };
            var res = new JsonResult();
            res.Data = person;
            res.JsonRequestBehavior = JsonRequestBehavior.AllowGet; 
            return res;
        }

        public JavaScriptResult GetJavaScript()
        {
            string script = "alert('This script is from server side!');";
            return JavaScript(script);
        }

        public string SetSession()
        {
            Session["PersonName"] = "Lin Yang";
            return "OK";
        }

        public string GetSession()
        {
            return Session["PersonName"].ToString();
        }
    }
}