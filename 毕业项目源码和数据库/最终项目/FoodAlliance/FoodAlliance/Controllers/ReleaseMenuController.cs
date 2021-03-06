﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FoodAlliance.Models;
using System.IO;
using FoodAlliance.File;

namespace FoodAlliance.Controllers
{
    [Filer]
    public class ReleaseMenuController : Controller
    {
        GourmetLeagueEntities db = new GourmetLeagueEntities();
        // GET: ReleaseMenu
        //添加食谱
        public ActionResult Index()
        {
            List<SelectListItem> Typelist = db.Typess.Select(p => new SelectListItem()
            {
                Text = p.TypessName,
                Value = p.TypessID.ToString()
            }).ToList();
            ViewBag.Typelist = Typelist;
            ViewBag.list2 = db.Typess.ToList();
            return View();
        }
        [HttpPost]
        public ActionResult Index(Recipe rec,HttpPostedFileBase file)
        {
            //Users user= Session["Users"] as Users;
            if (ModelState.IsValid)
            {
                Recipe recipe = new Recipe()
                {
                    RecipeName = rec.RecipeName,
                    RecipePicture = Path.GetFileName(file.FileName),
                    RecipeDifficulty = rec.RecipeDifficulty,
                    RecipeTime = rec.RecipeTime,
                    TypessID= rec.TypessID,
                    RecipeStory = rec.RecipeStory,
                    Ingredient = rec.Ingredient,
                    RecipeDosage = rec.RecipeDosage,
                    Particular = rec.Particular,
                    UsersID = int.Parse(Session["ID"].ToString()),
                    Audit = rec.Audit

                };
                db.Recipe.Add(recipe);
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View();
        }

        public ActionResult SavePic(List<HttpPostedFileBase> file)
        {
            if (file == null || file.Count <= 0)
            {
                return Json(new { IsSuccessed = false, msg = "未上传文件！" });
            }
            string fileName = null;
            foreach (var a in file)
            {
                 fileName = Path.GetFileName(a.FileName);
                var dic = Server.MapPath("~/Content/Imges/");
                if (!Directory.Exists(dic))
                {
                    Directory.CreateDirectory(dic);
                }
                if (fileName == null) continue;
                string path = Path.Combine(dic, fileName);
                a.SaveAs(path);
            }
            
            return Json(new { IsSuccessed = true, msg = "上传成功。", fileName = fileName });
        }
    }
}