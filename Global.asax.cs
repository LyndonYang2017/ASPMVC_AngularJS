using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace ASPMVC004
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            Application["totalNumber"] = 0;
        }

        protected void Session_Start()
        {
            Application["totalNumber"] = (int)Application["totalNumber"] + 1;
            Random r = new Random();
            Session["myNumber"] = r.Next(1000, 9999);
        }
    }
}
