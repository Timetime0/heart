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

$(function () {
  $(".tricky").on({
    mouseover: function () {
      $(this).css({
        left: Math.random() * 90 + "%",
        top: Math.random() * 90 + "%",
      });
    },
  });
});

let playSound = () => new Audio('./chrismas1.wav').play()

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
    "Cảm ơn em, Cục Cam của anh",
    "Chúc cam luôn luôn xinh đẹp và hạnh phúc",
    "Chúc cam luôn luôn trẻ trung và năng động",
    "Chúc cam một giáng sinh an lành",
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
          return $(".tricky")
            .off("mouseover")
            .on({
              click: function () {
                $("#time").removeClass("hide-carousel");
                new Audio('chrismas1.wav').play()
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

setTimeout(() => {
  wordflick();
}, 1000);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });
});
