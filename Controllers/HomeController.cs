using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPMVC004.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ChooseAngular()
        {
            var id = Request.QueryString["ID"];
            ViewData["id"] = id;
            return View();
        }



    }
}