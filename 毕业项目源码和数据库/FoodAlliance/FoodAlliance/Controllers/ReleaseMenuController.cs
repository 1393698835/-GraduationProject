using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FoodAlliance.Models;
using System.IO;


namespace FoodAlliance.Controllers
{
    public class ReleaseMenuController : Controller
    {
        GourmetLeagueEntities db = new GourmetLeagueEntities();
        // GET: ReleaseMenu
        //添加食谱
        public ActionResult Index()
        {
            List<Recipe> list = db.Recipe.ToList();
            return View(list);
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