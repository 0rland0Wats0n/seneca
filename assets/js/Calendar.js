function Calendar(container, month, year) {
  this.container = document.querySelector(container);
  this.month = month || new Date().getMonth();
  this.year = year || new Date().getFullYear();

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

Calendar.prototype.render = function() {
  
}

Calendar.prototype.setMonth = function(newMonth) {
  document.querySelector(".calendar__current_month").innerHTML = this.getFullMonth(newMonth);
}

Calendar.prototype.renderDays = function() {

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

Calendar.prototype.goToNextMonth = function() {
  if (this.month === 11) {
    this.month = 0;
  } else {
    this.month += 1
  }

  this.setMonth(this.month);
}

Calendar.prototype.goToPreviousMonth = function () {
  if (this.month === 0) {
    this.month = 11;
  } else {
    this.month -= 1
  }

  this.setMonth(this.month);
}