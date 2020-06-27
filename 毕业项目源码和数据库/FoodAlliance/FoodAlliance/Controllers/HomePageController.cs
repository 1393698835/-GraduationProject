﻿using FoodAlliance.Models;
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
        public ActionResult Index()
        {
            List<Recipe> list = db.Recipe.ToList();
            return View(list);
        }
    }
}