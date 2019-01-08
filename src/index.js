let timingpromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Promise is resolved!");
  }, 1000);
});

timingpromise.then((msg) => {
  console.log("%c"+msg, "font-size:25px;color:red;");
});

let arrX = new Array(4).fill('b', 0, 4)
for (let i of arrX) {
  console.warn(i)
  console.log(i)
}

