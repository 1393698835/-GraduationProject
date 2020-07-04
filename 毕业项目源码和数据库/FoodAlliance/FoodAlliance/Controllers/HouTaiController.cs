using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FoodAlliance.Models;
using PagedList;
using System.IO;
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
                return RedirectToAction("HouTaiHome", "HouTai");
            }
            else
            {
                return Content("<script>alert('账号或密码输入错误，请重新输入！');history.go(-1);</script>");
            }
        }
        //后台首页
        //后台用户查询
        public ActionResult HouTaiHome()
        {
            List<Users> list = db.Users.ToList();
            return View(list);
        }
        
        public ActionResult Delete(int userID)
        {
            Users user = db.Users.Find(userID);
            db.Users.Remove(user);
            db.SaveChanges();
            return RedirectToAction("HouTaiHome");
        }
        //后台未审核列表
        public ActionResult HouTaiAudit()
        {
            List<Recipe> list = db.Recipe.ToList();
            return View(list);
        }
        public ActionResult HouTaiAuditzd(int audit)
        {
            Recipe list = db.Recipe.Find(audit);
            list.Audit = 1;
            db.SaveChanges();
            return RedirectToAction("HouTaiAudit");
        }
        //后台审核列表
        public ActionResult HouTaiAuditcg()
        {
            List<Recipe> list = db.Recipe.ToList();
            return View(list);
        }
        public ActionResult HouTaiAuditzdcg(int audit)
        {
            Recipe list = db.Recipe.Find(audit);
            list.Audit = 0;
            db.SaveChanges();
            return RedirectToAction("HouTaiAudit");
        }
        //后台新闻管理
        public ActionResult NewsManagement()
        {
            ViewBag.time = DateTime.Now;
            return View();
        }
        [HttpPost]
        public ActionResult NewsManagement(Journalism jou, HttpPostedFileBase file)
        {
            string fileName = null;
            //图片上传
            if (file != null)
            {
                if (file.ContentLength==0)
                {
                    return View();
                }
                else
                {
                    fileName = Path.GetFileName(file.FileName);
                    file.SaveAs(Server.MapPath("~/Content/Imges/" + file.FileName));
                }
            }
            //新闻上传
            if (ModelState.IsValid)
            {
                Journalism journalism = new Journalism()
                {
                    JournalismType = jou.JournalismType,
                    JournalismTitle = jou.JournalismTitle,
                    Issuer = jou.Issuer,
                    ReleaseTime = jou.ReleaseTime,
                    Content = jou.Content,
                    Picture = fileName

                };
                db.Journalism.Add(journalism);
                db.SaveChanges();
                return Content("<script>alert('发布成功！');history.go(-1);</script>");

            }
            return Content("<script>alert('发布不成功！');history.go(-1);</script>");
        }

    }
}