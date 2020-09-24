// Create a JavaScript Promise
const myPromise = new Promise((resolve, reject) => {
    if(condition here) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
  });

  // handle a fulfilled promise
  myPromise.then(result => {
    // do something with the result.
  });

  // handle a rejected promise
  myPromise.catch(error => {
    // do something with the error.
  });