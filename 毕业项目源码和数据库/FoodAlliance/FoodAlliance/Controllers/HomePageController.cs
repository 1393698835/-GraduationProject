using FoodAlliance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PagedList;
namespace FoodAlliance.Controllers
{
    public class HomePageController : Controller
    {
        GourmetLeagueEntities db = new GourmetLeagueEntities();
        // GET: HomePage
        //首页查询
        public ActionResult Index()
        {
            List<Recipe> list = db.Recipe.ToList();
            ViewBag.list2 = db.Typess.ToList();
            ViewBag.list3 = db.Journalism.OrderByDescending(p=>p.JournalismID).ToList();
            return View(list);
        }
        //搜索模糊查询
        public ActionResult QueryMenu(string sreach_text)
        {
            List<Recipe> recipes= db.Recipe.Where(p => p.RecipeName.Contains(sreach_text)&&p.Audit==1).ToList();
            ViewBag.text = sreach_text;
            return View(recipes);
        }
        //个人中心
        //个人信息查询
        public ActionResult PersonalCenter()
        {
            int id = Convert.ToInt32(Session["ID"]);
            List<Users> list = db.Users.Where(p=>p.UsersID== id).ToList();
            return View(list);
        }
        //个人信息修改
        public ActionResult Apudata(Users users)
        {
            if (users != null)
            {
                db.Entry(users).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
            }

            return Content("<script>alert('修改成功！');history.go(-1);</script>");
        }
        //个人发布的菜谱（查询--已审核）
        public ActionResult MenuQuery()
        {
            int id = (int)Session["ID"];            
            List<Recipe> list = db.Recipe.Where(p=>p.UsersID==id).ToList();
            return View(list);
        }
        //个人发布的菜谱（查询--未审核）
        public ActionResult NoMenuQuery()
        {
            int id = (int)Session["ID"];
            List<Recipe> list = db.Recipe.Where(p => p.UsersID == id).ToList();
            return View(list);
        }
        //删除菜谱
        public ActionResult Delete(int id)
        {
            Recipe recipe = db.Recipe.Find(id);
            db.Recipe.Remove(recipe);
            db.SaveChanges();
            return RedirectToAction("MenuQuery");
        }
        //查看新闻
        public ActionResult SeeNews(int id)
        {
            List<Journalism> list = db.Journalism.Where(p => p.JournalismID == id).ToList();
            ViewBag.list2 = db.Typess.ToList();
            return View(list);
        }
        //新闻资讯
        public ActionResult NewsInformation(int? page)
        {
            List<Journalism> list = db.Journalism.ToList();
            ViewBag.list2 = db.Typess.ToList();
            var pageSize = 8;
            var pageNumber = page ?? 1;
            IPagedList<Journalism> pagedList = list.ToPagedList(pageNumber, pageSize);
            return View(pagedList);;
        }
    }
}