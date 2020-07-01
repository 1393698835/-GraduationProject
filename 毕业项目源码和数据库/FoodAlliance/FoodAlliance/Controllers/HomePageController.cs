using FoodAlliance.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
            return View(list);
        }
        //搜索模糊查询
        public ActionResult QueryMenu(string sreach_text)
        {
            List<Recipe> recipes= db.Recipe.Where(p => p.RecipeName.Contains(sreach_text)&&p.Audit==1).ToList();
            ViewBag.text = sreach_text;
            return View(recipes);
        }
    }
}