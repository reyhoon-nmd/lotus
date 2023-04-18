let mybutton =
  document.getElementById("Btn_to_top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



document.getElementById('timer').innerHTML =
  002 + ":" + 00;
startTimer();
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s == 59) { m = m - 1 }

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
  if (sec < 0) { sec = "59" };
  return sec;
}



function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



function changeTheme() {
  const theme = document.getElementById("theme");
  const theme_header = document.getElementById("theme_header");
  const theme_footer = document.getElementById("theme_footer");
  const special_theme = document.getElementById("special_theme");
  const lightTheme_general = "general_styles/general_style.css";
  const lightTheme_header = "general_styles/header_style.css";
  const lightTheme_footer = "general_styles/footer_style.css";
  const darkTheme_general = "general_styles/general_style_dark.css";
  const darkTheme_header = "general_styles/header_style_dark.css";
  const darkTheme_footer = "general_styles/footer_style_dark.css";
  const special_theme_light = "pages/main_page/main_page/style.css";
  const special_theme_dark = "pages/main_page/main_page/style_dark.css";
  const sunIcon = "assets/sun.png";
  const moonIcon = "assets/moon.png";
  var icon = document.getElementById("theme-Icon");
  if (icon.getAttribute("src") == sunIcon) {
    icon.setAttribute("src", moonIcon);
    theme.setAttribute("href", darkTheme_general);
    theme_header.setAttribute("href", darkTheme_header);
    theme_footer.setAttribute("href", darkTheme_footer);
    special_theme.setAttribute("href", special_theme_dark);
  }
  else {
    icon.setAttribute("src", sunIcon);
    theme.setAttribute("href", lightTheme_general);
    theme_header.setAttribute("href", lightTheme_header);
    theme_footer.setAttribute("href", lightTheme_footer);
    special_theme.setAttribute("href", special_theme_light);
  }
}
function changeTheme2() {
  const theme = document.getElementById("theme");
  const theme_header = document.getElementById("theme_header");
  const theme_footer = document.getElementById("theme_footer");
  const lightTheme_general = "../../../general_styles/general_style.css";
  const lightTheme_header = "../../../general_styles/header_style.css";
  const lightTheme_footer = "../../../general_styles/footer_style.css";
  const darkTheme_general = "../../../general_styles/general_style_dark.css";
  const darkTheme_header = "../../../general_styles/header_style_dark.css";
  const darkTheme_footer = "../../../general_styles/footer_style_dark.css";
  const sunIcon = "../../../assets/sun.png";
  const moonIcon = "../../../assets/moon.png";
  var icon = document.getElementById("theme-Icon");
  if (icon.getAttribute("src") == sunIcon) {
    icon.setAttribute("src", moonIcon);
    theme.setAttribute("href", darkTheme_general);
    theme_header.setAttribute("href", darkTheme_header);
    theme_footer.setAttribute("href", darkTheme_footer);
  }
  else {
    icon.setAttribute("src", sunIcon);
    theme.setAttribute("href", lightTheme_general);
    theme_header.setAttribute("href", lightTheme_header);
    theme_footer.setAttribute("href", lightTheme_footer);
  }
}



function submit() {
  var txtvalue = document.getElementById('textbox').value;
  if (txtvalue == "") {
    alert("شماره موبایل یا ایمیل وارد نشده");
  }
  else {
    location.replace("../after_sign_in/after_sign_in_to_site_page.html");
  }

}

function support() {
  var txtvalue = document.getElementById('textbox').value;
  if (txtvalue == "") {
    alert("کد تایید وارد نشده");
  }
  else {
    location.replace("../../../index.html");
  }
}

function subsets() {
  const menu = document.getElementById("mySidenav");
  document.menu.style.width = ("310px");
}


function like_save() {
  alert("ابتدا وارد سایت شوید");
}

function shopping_cart() {
  alert("ابتدا وارد سایت شوید");
}

// function data() {
//   var data = document.getElementById("data");
//   data.innerHTML = "اطلاعات کمتر";
// }

function data() {
  var data = document.getElementById("data");
  if (data = "اطلاعات بیشتر") {
    data.innerHTML = "اطلاعات کمتر";
  }
  else {
    data.innerHTML = "اطلاعات بیشتر";
  }
}


// var stickyHeaders = (function () {

//   var $window = $(window),
//     $stickies;

//   var load = function (stickies) {

//     if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

//       $stickies = stickies.each(function () {

//         var $thisSticky = $(this).wrap('<div class="followWrap" />');

//         $thisSticky
//           .data('originalPosition', $thisSticky.offset().top)
//           .data('originalHeight', $thisSticky.outerHeight())
//           .parent()
//           .height($thisSticky.outerHeight());
//       });

//       $window.off("scroll.stickies").on("scroll.stickies", function () {
//         _whenScrolling();
//       });
//     }
//   };

//   var _whenScrolling = function () {

//     $stickies.each(function (i) {

//       var $thisSticky = $(this),
//         $stickyPosition = $thisSticky.data('originalPosition');

//       if ($stickyPosition <= $window.scrollTop()) {

//         var $nextSticky = $stickies.eq(i + 1),
//           $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

//         $thisSticky.addClass("fixed");

//         if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {

//           $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
//         }

//       } else {

//         var $prevSticky = $stickies.eq(i - 1);

//         $thisSticky.removeClass("fixed");

//         if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {

//           $prevSticky.removeClass("absolute").removeAttr("style");
//         }
//       }
//     });
//   };

//   return {
//     load: load
//   };
// })();

// $(function () {
//   stickyHeaders.load($(".titles"));
// });