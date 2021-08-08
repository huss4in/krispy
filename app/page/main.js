const end = new Date("Jan 1, 2022").getTime();

let lastSec = -1;

let updateTime = setInterval(() => {
  const time = end - new Date().getTime();

  document.getElementById("ms").innerHTML = Math.floor(time % 1000) + "ms";

  const sec = Math.floor((time % 60000) / 1000);
  if (sec !== lastSec) {
    lastSec = sec;
    document.getElementById("time").innerHTML = Object.entries({
      d: Math.floor(time / 86400000),
      h: Math.floor((time % 86400000) / 3600000),
      m: Math.floor((time % 3600000) / 60000),
      s: sec,
    })
      .map((entry) => {
        return entry[1] ? entry[1] + entry[0] : "";
      })
      .filter((time) => time)
      .join(" ");
  }

  if (time < 0) {
    document.getElementById("time").innerHTML = "Time Expired!";
    clearInterval(updateTime);
  }
}, 1);
