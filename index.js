let day;
let hour;
let minute;
let second;
let click = 0;
let hover = 0;
const marryChrismasDay = 25;

document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let heart = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  let size = Math.random() * 80;
  heart.style.width = 20 + size + "px";
  heart.style.height = 20 + size + "px";

  let transformValue = Math.random() * 360;
  heart.style.transform = "rotate(" + transformValue + "deg)";

  body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 1000);
});

const changeTextBtn = (text) => {
  var button = document.getElementById("btn");

  button.innerHTML = "";
  var text = document.createTextNode(text);
  button.appendChild(text);
};

const clickToBtn = () => {
  wordflick();
  changeTextBtn("Don't Chase me");
};

$(function () {
  $(".tricky").on({
    click: function () {
      if (click === 0 && day >= marryChrismasDay) {
        click++;
        clickToBtn();
      }
    },
    mouseover: function () {
      hover++;
      if (click === 0 && hover === 100) {
        changeTextBtn("Try more");
      }
      $(this).css({
        left: Math.random() * 90 + "%",
        top: Math.random() * 90 + "%",
      });
    },
  });
});

var words = [
    "Hi, Cam yêu ơi",
    "Thời gian trôi qua nhanh thật",
    "Tụi mình biết nhau chắc cũng đc 3 năm rồi đó",
    "Nhớ ngày đầu, còn cục súc với nhau",
    "Nhớ ngày buồn vui, mình tâm sự cùng nhau",
    "A thích nụ cười của cam",
    "A thích giọng nói của cam",
    "A thích cả tính cách khùng khùng của em nữa",
    "A không biết sau này sẽ như thế nào",
    "Nhưng hiện tại a cảm thấy rất vui",
    "Cảm ơn em, Cục Cam",
    "Chúc cam luôn xinh đẹp và hạnh phúc",
    "Chúc cam luôn trẻ trung và năng động",
    "Chúc cam một giáng sinh an lành bên gia đình",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;
var wordflick = function () {
  const myAudio = new Audio("christmas.wav");
  myAudio.play();

  setInterval(function () {
    if (forwards) {
      if (offset >= words[i]?.length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          $(".word").text("");
          var button = document.getElementById("btn");

          button.innerHTML = "";
          var text = document.createTextNode(
            `Merry Christmas then click to see how is an angel`
          );
          button.appendChild(text);

          return $(".tricky")
            .off("mouseover")
            .on({
              click: function () {
                $("#time").removeClass("hide-carousel");
                $("#btn").hide();
                const myAudio = new Audio("chrismas1.wav");
                myAudio.loop = true;
                myAudio.play();
              },
            });
        }
      }
    }
    part = words[i]?.substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }

    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });

  getDate();
});

const getDate = () => {
  const date = new Date();
  day = date.getDate();
  hour = date.getHours();
  minute = date.getMinutes();
  second = date.getSeconds();

  var button = document.getElementById("btn");
  var text = document.createTextNode(
    `Ngày ${day}, ${hour}:${minute}:${second}`
  );
  button.innerHTML = "";
  button.appendChild(text);
};

const interVal = setInterval(() => {
  var button = document.getElementById("btn");
  var text = document.createTextNode(
    `Ngày ${day}, ${hour}:${minute}:${second}`
  );

  if (day >= marryChrismasDay) {
    button.innerHTML = "";
    var text = document.createTextNode(`Try to click here`);
    button.appendChild(text);
    clearInterval(interVal);
  }

  second++;
  if (second > 60) {
    minute++;
    second = 0;
  }
  if (minute > 60) {
    hour++;
    minute = 0;
  }

  if (hour > 23) {
    day++;
    hour = 0;
  }

  button.innerHTML = "";
  button.appendChild(text);
}, 1000);
