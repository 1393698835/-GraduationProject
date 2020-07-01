using FoodAlliance.Models;
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
        public ActionResult Index()
        {
            List<Recipe> list = db.Recipe.ToList();
            ViewBag.list2 = db.Typess.ToList();
            return View();
        }
    }
}