const end = new Date("Jan 1, 2022").getTime();

let updatems = setInterval(() => {
  const time = end - new Date().getTime();

  let ms = Math.floor(time % 1000);

  document.getElementById("ms").innerHTML = ms + "ms";

  if (ms < 10)
    document.getElementById("time").innerHTML = Object.entries({
      d: Math.floor(time / 86400000),
      h: Math.floor((time % 86400000) / 3600000),
      m: Math.floor((time % 3600000) / 60000),
      s: Math.floor((time % 60000) / 1000),
    })
      .map((entry) => {
        const [key, value] = entry;
        return value ? value + key : "";
      })
      .filter((time) => time)
      .join(" ");
}, 1);

// let updateTime = setInterval(() => {

//   const time = end - new Date().getTime()

//   document.getElementById("time").innerHTML =
//     Object
//       .entries({
//         d: Math.floor((time / 86400000)),
//         h: Math.floor((time % 86400000) / 3600000),
//         m: Math.floor((time % 3600000) / 60000),
//         s: Math.floor((time % 60000) / 1000),
//       })
//       .map(entry => {
//         const [key, value] = entry;
//         return value ? value + key : ''
//       })
//       .filter(time => time)
//       .join(' ');

//   if (time < 0) {
//     clearInterval(updateTime);
//     document.getElementById("time").innerHTML = "LATE!";
//   }
// }, random_number(5, 19));

// function random_number(start, end) {
//   let result = Math.floor(Math.random() * (end) + start);

//   if (result === 10)
//     if (Math.floor(Math.random() * (2) + 1) === 1)
//       result = random_number(start, 9)
//     else
//       result = random_number(11, end)

//   return result;
// }
