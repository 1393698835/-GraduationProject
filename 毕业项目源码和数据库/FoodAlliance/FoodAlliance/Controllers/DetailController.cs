using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FoodAlliance.Models;

namespace FoodAlliance.Controllers
{
    public class DetailController : Controller
    {
        GourmetLeagueEntities db = new GourmetLeagueEntities();
        // GET: Detail
        public ActionResult Index(int id)
        {
            List<Recipe> list = db.Recipe.Where(p => p.RecipeID == id).ToList();
            return View(list);
        }
    }
}