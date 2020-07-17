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
        //菜谱大全全部查询
        public ActionResult Index(int ?page)
        {
            List<Recipe> list = db.Recipe.Where(p=>p.Audit==1).ToList();
            ViewBag.list2 = db.Typess.ToList();
            var pageSize = 8;
            var pageNumber = page ?? 1;
            IPagedList<Recipe> pagedList = list.ToPagedList(pageNumber, pageSize);
            return View(pagedList);
        }
        //菜谱分类查询
        public ActionResult FenLei(int id,int? page)
        {
            List<Recipe> list = db.Recipe.Where(p => p.TypessID ==id).ToList();
            ViewBag.list2 = db.Typess.ToList();
            var pageSize = 8;
            var pageNumber = page ?? 1;
            IPagedList<Recipe> pagedList = list.ToPagedList(pageNumber, pageSize);
            return View(pagedList);
        }
    }
}