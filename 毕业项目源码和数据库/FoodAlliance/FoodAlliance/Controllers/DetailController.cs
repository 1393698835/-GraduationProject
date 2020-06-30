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
        [HttpPost]
        public ActionResult Comment(Comment comment)
        {
            comment.CommentUser = Session["UserName"].ToString();
            comment.CommentonTime = DateTime.Now;
            db.Comment.Add(comment);
            db.SaveChanges();
            return Content("<script>window.location.href='/Detail/Index/"+comment.RecipeID+"'</script>");
        }
    }
}