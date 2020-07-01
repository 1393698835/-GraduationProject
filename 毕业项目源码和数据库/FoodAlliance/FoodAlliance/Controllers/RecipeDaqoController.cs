using FoodAlliance.Models;
using PagedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FoodAlliance.Controllers
{
    public class RecipeDaqoController : Controller
    {
        GourmetLeagueEntities db = new GourmetLeagueEntities();
        // GET: RecipeDaqo
        public ActionResult Index(int ?page)
        {
            List<Recipe> list = db.Recipe.ToList();
            ViewBag.list2 = db.Typess.ToList();
            var pageSize = 8;
            var pageNumber = page ?? 1;
            IPagedList<Recipe> pagedList = list.ToPagedList(pageNumber, pageSize);
            return View(pagedList);
        }
    }
}