using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FoodAlliance.Models;
namespace FoodAlliance.Controllers
{
    public class HouTaiController : Controller
    {
        GourmetLeagueEntities db = new GourmetLeagueEntities();
        // GET: HouTai
        public ActionResult Index()
        {
            return View();
        }
        //后台登录
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(Admini admini)
        {
            Admini list = db.Admini.Where(p => p.AdminiName == admini.AdminiName && p.AdminiPassword == admini.AdminiPassword).SingleOrDefault();
            if (list != null)
            {
                Session["ID"] = list.AdminiID;
                Session["Name"] = list.AdminiName;
                return RedirectToAction("Index", "Home");
            }
            else
            {
                return Content("<script>alert('账号或密码输入错误，请重新输入！');history.go(-1);</script>");
            }
        }
        //后台首页
        public ActionResult HouTaiHome()
        {
            List<Users> list = db.Users.ToList();
            return View(list);
        }
    }
}