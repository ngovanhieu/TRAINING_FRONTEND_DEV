function myFunction(param) {
  if (typeof param === "function") {
    param("trainning FE DEV");
  }
}

function myCallback(value) {
  console.log("value: ", value);
}

myFunction(myCallback);
