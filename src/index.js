import { getOutput, fibonacci } from "./utils";

// setup output
const output = document.querySelector("#output");

let iteration = 0;
const iterator = document.querySelector("#iteration");
iterator.addEventListener("change", (e) => {
  iteration = e.target.value;
  console.log(iteration);
});
iteration = iterator.value;
// setup cheap function event
document.querySelector("#cheap").addEventListener("click", () => {
  console.log("clicked");
  output.innerHTML += getOutput("clicked");
});

// setup expensive function event
document.querySelector("#expensive").addEventListener("click", () => {
  console.log("start expensive function!");
  output.innerHTML += getOutput("start expensive function!");
  const result = fibonacci(iteration);
  console.log(result);
  output.innerHTML += getOutput(result);
  console.log("expensive function is done!");
  output.innerHTML += getOutput("expensive function is done!");
});

// set up WebWorker
// set up new WebWorker with URL to make the syntax compatible with webpack
const worker = new Worker(new URL("./worker.js", import.meta.url));
worker.onmessage = (e) => {
  console.log("worker result arriving");
  output.innerHTML += getOutput("worker result arriving");
  output.innerHTML += getOutput(e.data);
  console.log(e.data);
};

function withWorker(n) {
  worker.postMessage(n);
}

// setup expensive function event in WebWorker
document
  .querySelector("#expensive-web-worker")
  .addEventListener("click", () => {
    withWorker(iteration);
    output.innerHTML += getOutput("done worker click event");
    console.log("done worker click event");
  });
