using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Text;
using Lottery.Models;

namespace Lottery.Controllers
{
    public class LotteryController : Controller
    {
        //
        // GET: /Lottery/

        public ActionResult Index()
        {

            ViewData["random"] = new List<SelectListItem>();
            return View();
        }

        #region Generate Random Lottery Ticket Number
        [HttpPost]
        public ActionResult GenerateTicket() //Generate the Random Lottery Ticket Number
        {
            Random _random = new Random();
            StringBuilder _ticket = new StringBuilder(); 
            int[] _randomvalue = new int[7];
            for (int i = 0; i < 7;i++ )
            {
                _randomvalue[i] = _random.Next(1, 40);
            }
            Array.Sort(_randomvalue);
            foreach(var val in _randomvalue)
            {
                _ticket.Append(Convert.ToString(val)+",");
            }

            // return the random lottery ticket number in JSON format
            return Json(new { Number = _ticket.ToString().TrimEnd(','), Value= _ticket.ToString().TrimEnd(',') });
        }
        #endregion
    }
}
