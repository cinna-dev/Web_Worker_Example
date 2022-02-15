import { fibonacci } from "./utils";

onmessage = (e) => {
  console.log("worker is starting working");
  const result = fibonacci(e.data);
  // let i = e.data;
  // let result;
  // if (!e.data) postMessage("idiot!");
  // while (i > 1) {
  //   i--;
  //   result = (i * 10e16).toString(16);
  // }

  console.log("worker is done working");
  postMessage(result);
};
