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
        public ActionResult HouTaiHome(int UsersID = 0, string UsersName = "", int pageIndex = 1, int pageCount = 5)
        {
            //获得根据条件所查的总行数
            int tatalCount = db.Users.OrderBy(p => p.UsersID)
                .Where(p => (UsersID == 0 || p.UsersID == UsersID) && (UsersName == "" || p.UsersName.Contains(UsersName)))
                .Count();

            //获得总页数Ceiling()向上取整 2.1 3  2.9 3  round四舍五入 2.1 2  2.6  3
            double tataoPage = Math.Ceiling(tatalCount / (double)pageCount);

            //获得用户表，先按照主键正序排列，条件过滤，转成集合
            //slip()跳过指定数量的元素，返回剩下的集合
            //Take()从剩下集合数中，从第一条开始获取指定数量的集合
            List<Users> list = db.Users.OrderBy(p => p.UsersID)
                .Where(p => (UsersID == 0 || p.UsersID == UsersID) && (UsersName == "" || p.UsersName.Contains(UsersName)))
                .Skip((pageIndex - 1) * pageCount).Take(pageCount)
                .ToList();
            //列表加载的同时，将条件存储并在对应控件显示
            ViewBag.UsersID = UsersID;
            ViewBag.UsersName = UsersName;
            //当前页
            ViewBag.pageIndex = pageIndex;
            //每页行数
            ViewBag.pageCount = pageCount;
            //总行数
            ViewBag.tatalCount = tatalCount;
            //总页数
            ViewBag.tataoPage = tataoPage;
            return View(list);
        }
        
        public ActionResult Delete(int userID)
        {
           var user= db.Users.Find(userID);
            user.Audit = 1;
            db.SaveChanges();
            return RedirectToAction("HouTaiHome", "HouTai");
        }
        //后台未审核列表
        public ActionResult HouTaiAudit(int? pageCount, int RecipeID = 0, string RecipeName = "", int pageIndex = 1 )
        {
            //获得根据条件所查的总行数
            int tatalCount = db.Recipe.OrderBy(p => p.RecipeID)
                .Where(p => (RecipeID == 0 || p.RecipeID == RecipeID && p.Audit == 0) && (RecipeName == "" || p.RecipeName.Contains(RecipeName)))
                .Count();

            //获得总页数Ceiling()向上取整 2.1 3  2.9 3  round四舍五入 2.1 2  2.6  3
            double tataoPage = Math.Ceiling(tatalCount / (double)(pageCount??5));

            //获得用户表，先按照主键正序排列，条件过滤，转成集合
            //slip()跳过指定数量的元素，返回剩下的集合
            //Take()从剩下集合数中，从第一条开始获取指定数量的集合
            List<Recipe> list = db.Recipe.OrderBy(p => p.RecipeID)
                .Where(p => (p.Audit == 0&&(RecipeID == 0 || p.RecipeID == RecipeID)) && (RecipeName == "" || p.RecipeName.Contains(RecipeName)))
                .Skip((pageIndex - 1) * (pageCount??5)).Take(pageCount??5)
                .ToList();
            //列表加载的同时，将条件存储并在对应控件显示
            ViewBag.RecipeID = RecipeID;
            ViewBag.RecipeName = RecipeName;
            //当前页
            ViewBag.pageIndex = pageIndex;
            //每页行数
            ViewBag.pageCount = (pageCount??5);
            //总行数
            ViewBag.tatalCount = tatalCount;
            //总页数
            ViewBag.tataoPage = tataoPage;
            return View(list);
        }
        public ActionResult HouTaiAuditzd(int audit, string RecipeName,int pageIndex,int pageCount)
        {
            Recipe list = db.Recipe.Find(audit);
            list.Audit = 1;
            db.SaveChanges();
            return RedirectToAction("HouTaiAudit",new { pageCount=pageCount,pageIndex=pageIndex,RecipeName= RecipeName });
        }
        //后台审核列表
        public ActionResult HouTaiAuditcg(int RecipeID = 0, string RecipeName = "", int pageIndex = 1, int pageCount = 5)
        {
            //获得根据条件所查的总行数
            int tatalCount = db.Recipe.OrderBy(p => p.RecipeID)
                .Where(p => (RecipeID == 0 || p.RecipeID == RecipeID&&p.Audit==1) && (RecipeName == "" || p.RecipeName.Contains(RecipeName)))
                .Count();

            //获得总页数Ceiling()向上取整 2.1 3  2.9 3  round四舍五入 2.1 2  2.6  3
            double tataoPage = Math.Ceiling(tatalCount / (double)pageCount);

            //获得用户表，先按照主键正序排列，条件过滤，转成集合
            //slip()跳过指定数量的元素，返回剩下的集合
            //Take()从剩下集合数中，从第一条开始获取指定数量的集合
            List<Recipe> list = db.Recipe.OrderBy(p => p.RecipeID)
                .Where(p => (RecipeID == 0 || p.RecipeID == RecipeID&&p.Audit==1) && (RecipeName == "" || p.RecipeName.Contains(RecipeName)))
                .Skip((pageIndex - 1) * pageCount).Take(pageCount)
                .ToList();
            //列表加载的同时，将条件存储并在对应控件显示
            ViewBag.RecipeID = RecipeID;
            ViewBag.RecipeName = RecipeName;
            //当前页
            ViewBag.pageIndex = pageIndex;
            //每页行数
            ViewBag.pageCount = pageCount;
            //总行数
            ViewBag.tatalCount = tatalCount;
            //总页数
            ViewBag.tataoPage = tataoPage;
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