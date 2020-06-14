using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FoodAlliance.Models;

namespace FoodAlliance.Controllers
{
    public class LoginController : Controller
    {
        GourmetLeagueEntities db = new GourmetLeagueEntities();
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(Users user)
        {
            Users list = db.Users.Where(p => p.UsersName == user.UsersName && p.UsersPassword == user.UsersPassword).SingleOrDefault();
            if (list != null)
            {
                Session["ID"] = list.UsersID;
                Session["Name"] = list.UsersName;
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return Content("<script>alert('账号或密码输入错误，请重新输入！');history.go(-1);</script>");
            }
        }
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(Users user)
        {
            db.Users.Add(user);
            db.SaveChanges();
            return RedirectToAction("Index","Home");
        }
    }
}