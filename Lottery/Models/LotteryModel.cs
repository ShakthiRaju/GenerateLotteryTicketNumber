using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lottery.Models
{
    public class LotteryModel
    {
       // public IEnumerable<SelectListItem> TicketNumber { get; set; }
        public IEnumerable<string> SelectedTicket { get; set; }
    }
}