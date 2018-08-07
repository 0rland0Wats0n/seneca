function Calendar(container, month, year, day) {
  this.container = document.querySelector(container);
  this.month = month || new Date().getMonth();
  this.year = year || new Date().getFullYear();
  this.day = day || new Date().getDate();
  this.days = this.getNumberOfDays();
  this.firstDay = this.getFirstDay();

  // event specific
  this.eventMonth = month;
  this.eventDay = day;

  this.container.classList.add("calendar");

  this.container.innerHTML = this.createHTMLString([
    "<div class='calendar__month'>",
    "<span class='calendar__previous_month'>",
    "<i class='fas fa-arrow-left'></i>",
    "</span>",
    "<h6 class='calendar__current_month'>",
    this.getFullMonth(this.month),
    "</h6>",
    "<span class='calendar__next_month'>",
    "<i class='fas fa-arrow-right'></i>",
    "</span>",
    "</div>",
    "<div class='calendar__days_of_week'>",
    "<p>S</p>", "<p>M</p>", "<p>T</p>", "<p>W</p>", "<p>T</p>", "<p>F</p>", "<p>S</p>",
    "</div>",
    "<div class='calendar__days'>",

    "</div>"
  ]);

  document.querySelector(".calendar__previous_month").addEventListener("click", this.goToPreviousMonth.bind(this), false);
  document.querySelector(".calendar__next_month").addEventListener("click", this.goToNextMonth.bind(this), false);
}

Calendar.prototype.setMonth = function(value) {
  this.month = value;
} 

Calendar.prototype.render = function() {
  this.renderDays();
}

Calendar.prototype.renderNewMonth = function(newMonth) {
  document.querySelector(".calendar__current_month").innerHTML = this.getFullMonth(newMonth);
}

Calendar.prototype.renderDays = function() {
  var prevMonth = (this.month === 0) ? 11 : this.month - 1;
  var prevMonthDays = new Date(this.year, prevMonth, 0).getDate();
  var days = [];
  var cells = this.firstDay >= 5 ? 42 : 35;

  for (var i = 0; i < cells; i++) {
    if (i < this.firstDay) {
      days.push("<span class='calender__day type__fade'>" + (prevMonthDays - this.firstDay + i + 1) + "</span>");
      continue;
    }
    
    if (i >= this.days + this.firstDay) {
      days.push("<span class='calender__day type__fade'>" + (i - (this.days + this.firstDay) + 1) + "</span>");
      continue;
    }

    if (((new Date().getDate() === i - this.firstDay + 1) && this.month === new Date().getMonth()) ||
    ((this.eventDay === i - this.firstDay + 1) && this.month === this.eventMonth)) {
      days.push("<span class='calender__day current'>" + (i - this.firstDay + 1) + "</span>");
    } else {
      days.push("<span class='calender__day'>" + (i - this.firstDay + 1) + "</span>");
    }
  }

  document.querySelector(".calendar__days").innerHTML = this.createHTMLString(days);
}

Calendar.prototype.createHTMLString = function(arr) {
  return arr.join("");
}

Calendar.prototype.getFullMonth = function(month) {
  switch (month) {
    case 0:
      return "january";
    case 1:
      return "february";
    case 2:
      return "march";
    case 3:
      return "april";
    case 4:
      return "may";
    case 5:
      return "june";
    case 6:
      return "july";
    case 7:
      return "august";
    case 8:
      return "september";
    case 9:
      return "october";
    case 10:
      return "november";
    case 11:
      return "december";
    default:
      return "invalid month";
  }
}

Calendar.prototype.getNumberOfDays = function() {
  return new Date(this.year, this.month, 0).getDate();
}

Calendar.prototype.getFirstDay = function() {
  return new Date(this.year, this.month, 1).getDay();
}

Calendar.prototype.goToNextMonth = function() {
  if (this.month === 11) {
    this.setMonth(0);
  } else {
    this.setMonth(this.month + 1);
  }

  this.days = this.getNumberOfDays();
  this.firstDay = this.getFirstDay();

  this.renderNewMonth(this.month);
  this.renderDays();
}

Calendar.prototype.goToPreviousMonth = function () {
  if (this.month === 0) {
    this.setMonth(11);
  } else {
    this.setMonth(this.month - 1);
  }

  this.days = this.getNumberOfDays();
  this.firstDay = this.getFirstDay();

  this.renderNewMonth(this.month);
  this.renderDays();
}