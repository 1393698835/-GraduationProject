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
            Users users = db.Users.SingleOrDefault(p => p.UsersPhone == user.UsersPhone && p.UsersPassword == user.UsersPassword);
            if (users != null)
            {                           
                Session["ID"] = users.UsersID;
                Session["UserName"] = users.UsersName;
                Session["Users"] = users;
                return RedirectToAction("Index", "HomePage");
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
            List<Users> list = db.Users.Where(p => p.UsersPhone == user.UsersPhone).ToList();
            if (list.Count==1)
            {
                return Content("<script>alert('改手机号已注册，请重新注册一个新的手机号码！');history.go(-1);</script>");
            }
            else
            {
                db.Users.Add(user);
                db.SaveChanges();
                return RedirectToAction("Login", "Login");
            }
            
        }
    }
}