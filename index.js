let day;
let hour;
let minute;
let second;
let click = 0;
let hover = 0;
const marryChrismasDay = 25;
const myAudio = new Audio("christmas.wav");
const myAudio1 = new Audio("angle.wav");
const myAudio2 = new Audio("noinaycoanh.wav");

var animation = function (e) {
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
};

const newAnimation = () => {
  const bodyEl = document.querySelector("body");
  const xPosition = event.offsetX;
  const ypoistion = event.offsetY;
  const spanEl = document.createElement("h6");

  spanEl.style.left = xPosition + "px";
  spanEl.style.top = ypoistion + "px";

  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
};

const changeTextBtn = (text) => {
  var button = document.getElementById("btn");

  button.innerHTML = "";
  var text = document.createTextNode(text);
  button.appendChild(text);
};

const changeTextBtn3 = (text) => {
  var button = document.getElementById("btn3");

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
      if (click === 0 && day === marryChrismasDay) {
        click++;
        clickToBtn();
      }
    },
    mouseover: function () {
      hover++;
      if (click === 0) {
        switch (hover) {
          case 15:
            changeTextBtn("Try more !!!");
            break;
          case 30:
            changeTextBtn("Closes it , Try more more!!!");
            break;
          case 50:
            changeTextBtn("HaHa, Do you still do it?");
            break;
          case 75:
            changeTextBtn("I promise, this button can click");
            break;
          case 100:
            changeTextBtn("I swear...");
          case 110:
            $(".tricky").off("mouseover");
            break;
        }
      }

      $(this).css({
        left: Math.random() * 90 + "%",
        top: Math.random() * 90 + "%",
        zIndex: 99999
      });
    },
  });
});

var words = [
    "Hi, Cam yêu ơi",
    "Thời gian trôi qua nhanh thật ha",
    "Mới ngày nào mà giờ đã là 3 năm rồi đó",
    "Ngày đầu, còn nói chuyện cục súc với nhau lắm",
    "Rồi tới những ngày tám chuyện không biết mệt luôn, vui ha?",
    "Mình cùng nhau kể chuyện nữa",
    "A thích ngắm nụ cười của cam á",
    "Thích cả tính cách của em nữa",
    "A không biết sau này sẽ như thế nào",
    "Nhưng hiện tại a cảm thấy rất hạnh phúc",
    "Cảm ơn em, Cục Cam",
    "Chúc cam luôn trẻ trung, năng động",
    "Chúc cam luôn xinh đẹp và hạnh phúc",
    "Chúc cam một giáng sinh an lành, Yêu em",
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
            `Merry Christmas \n then click to see how is an angel`
          );
          button.appendChild(text);
          $(document).off("mousemove");
          $(this).off("mousemove", animation);
          $(this).on("mousemove", newAnimation);

          return $(".tricky")
            .off("mouseover")
            .on({
              click: function () {
                $("#time").removeClass("hide");
                $("#btn").hide();
                myAudio1.loop = true;
                myAudio1.play();
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
  $(this).on("mousemove", animation);

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });

  getDate();

  $(window).on("keydown", function (event) {
    if (event.originalEvent.key == "Enter") {
      event.preventDefault();
      return false;
    }
  });
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

  if (day === marryChrismasDay) {
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

const onClickBtn2 = () => {
  $("#time").addClass("hide");
  myAudio1.pause();

  $("#gift").removeClass("hide");
  myAudio2.loop = true;
  myAudio2.play();
};

const GITF = [];

var data = [
  {
    label: "Gift 1",
    value: 1,
    question: "",
  },
  {
    label: "Gift 2",
    value: 1,
    question: "",
  },
  {
    label: "Gift 3",
    value: 1,
    question: "",
  },
  {
    label: "Gift 4",
    value: 1,
    question: "",
  },
  {
    label: "Gift 5",
    value: 1,
    question: "",
  },
];

const GIFT = [];

const onClickSubmit = () => {
  var value = document.getElementById("input").value;
  if (value.trim() === 0) {
    return;
  }

  const object = {
    label: value,
    value: 1,
    question: value,
  };

  GIFT.push(object);
  document.getElementById("input").value = "";

  switch (GIFT.length) {
    case 1:
      changeTextBtn3("Second");
      break;
    case 2:
      changeTextBtn3("Third");
      break;
    case 3:
      changeTextBtn3("4th");
      break;
    case 4:
      changeTextBtn3("5th");
      break;
    case 5:
      data = GIFT;
      changeTextBtn3("Vòng quay măn máy");
      $("#chart").removeClass("hide");
      $("#question").removeClass("hide");
      $("#gift").addClass("hide");
      break;
  }
};

const sentSMS = (message) => {
  // Download the helper library from https://www.twilio.com/docs/node/install
  // Set environment variables for your credentials
  // Read more at http://twil.io/secure
  var SID = "ACa74adaaa889f6b4c02d0635a1db5376b";
  var Key = "1c6160a107744d18dd6b6eb94ca6d0e4";

  $.ajax({
    type: "POST",
    url: "https://api.twilio.com/2010-04-01/Accounts/" + SID + "/Messages.json",
    data: {
      To: "+84933524382",
      From: "+12053862618",
      Body: `${message}`,
    },
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Authorization", "Basic " + btoa(SID + ":" + Key));
    },
    success: function (data) {
      console.log(data);
    },
    error: function (data) {
      console.log(data);
    },
  });
};

// Draw
var padding = { top: 20, right: 40, bottom: 0, left: 0 },
  w = 400 - padding.left - padding.right,
  h = 400 - padding.top - padding.bottom,
  r = Math.min(w, h) / 2,
  rotation = 0,
  oldrotation = 0,
  picked = 100000,
  oldpick = [],
  color = d3.scale.category20(); //category20c()
//randomNumbers = getRandomNumbers();

//http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results

var svg = d3
  .select("#chart")
  .append("svg")
  .data([data])
  .attr("width", w + padding.left + padding.right)
  .attr("height", h + padding.top + padding.bottom);

var container = svg
  .append("g")
  .attr("class", "chartholder")
  .attr(
    "transform",
    "translate(" + (w / 2 + padding.left) + "," + (h / 2 + padding.top) + ")"
  );

var vis = container.append("g");

var pie = d3.layout
  .pie()
  .sort(null)
  .value(function (d) {
    return 1;
  });

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis
  .selectAll("g.slice")
  .data(pie)
  .enter()
  .append("g")
  .attr("class", "slice");

arcs
  .append("path")
  .attr("fill", function (d, i) {
    return color(i);
  })
  .attr("d", function (d) {
    return arc(d);
  });

// add the text
arcs
  .append("text")
  .attr("transform", function (d) {
    d.innerRadius = 0;
    d.outerRadius = r;
    d.angle = (d.startAngle + d.endAngle) / 2;
    return (
      "rotate(" +
      ((d.angle * 180) / Math.PI - 90) +
      ")translate(" +
      (d.outerRadius - 10) +
      ")"
    );
  })
  .attr("text-anchor", "end")
  .text(function (d, i) {
    return data[i].label;
  });

container.on("click", spin);

function spin(d) {
  container.on("click", null);

  //all slices have been seen, all done
  console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
  if (oldpick.length == data.length) {
    console.log("done");
    container.on("click", null);
    return;
  }

  var ps = 360 / data.length,
    pieslice = Math.round(1440 / data.length),
    rng = Math.floor(Math.random() * 1440 + 360);

  rotation = Math.round(rng / ps) * ps;

  picked = Math.round(data.length - (rotation % 360) / ps);
  picked = picked >= data.length ? picked % data.length : picked;

  if (oldpick.indexOf(picked) !== -1) {
    d3.select(this).call(spin);
    return;
  } else {
    oldpick.push(picked);
  }

  rotation += 90 - Math.round(ps / 2);

  vis
    .transition()
    .duration(3000)
    .attrTween("transform", rotTween)
    .each("end", function () {
      //mark question as seen
      d3.select(".slice:nth-child(" + (picked + 1) + ") path").attr(
        "fill",
        "#111"
      );

      $("#chart").addClass("hide");

      const mes =
        data?.map((item) => item.question).join(", ") +
        " - " +
        data[picked].question;

      //populate question
      d3.select("#question h1").text(
        "Đây là quà của bé cam: " +
          data[picked].question +
          ", hãy liên hệ ông già noel để lấy quà nhé !!!"
      );

      console.log(mes)

      // sentSMS(mes);
    });
}

//make arrow
svg
  .append("g")
  .attr(
    "transform",
    "translate(" +
      (w + padding.left + padding.right) +
      "," +
      (h / 2 + padding.top) +
      ")"
  )
  .append("path")
  .attr("d", "M-" + r * 0.15 + ",0L0," + r * 0.05 + "L0,-" + r * 0.05 + "Z")
  .style({ fill: "black" });

//draw spin circle
container
  .append("circle")
  .attr("cx", 0)
  .attr("cy", 0)
  .attr("r", 60)
  .style({ fill: "white", cursor: "pointer" });

//spin text
container
  .append("text")
  .attr("x", 0)
  .attr("y", 15)
  .attr("text-anchor", "middle")
  .text("SPIN")
  .style({ "font-weight": "bold", "font-size": "30px" });

function rotTween(to) {
  var i = d3.interpolate(oldrotation % 360, rotation);
  return function (t) {
    return "rotate(" + i(t) + ")";
  };
}

function getRandomNumbers() {
  var array = new Uint16Array(1000);
  var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);

  if (
    window.hasOwnProperty("crypto") &&
    typeof window.crypto.getRandomValues === "function"
  ) {
    window.crypto.getRandomValues(array);
    console.log("works");
  } else {
    //no support for crypto, get crappy random numbers
    for (var i = 0; i < 1000; i++) {
      array[i] = Math.floor(Math.random() * 100000) + 1;
    }
  }

  return array;
}
