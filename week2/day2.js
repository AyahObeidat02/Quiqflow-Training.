// async-demo.js

// Simulate async fetch with setTimeout
function fetchData(callback) {
  setTimeout(() => {
    callback("Fetched data using callback");
  }, 1000);
}

// Using callback
fetchData((data) => {
  console.log(data);
});

// Promise example
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fetched data using Promise");
    }, 1000);
  });
}

fetchDataPromise()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Async/Await example
async function fetchAsyncData() {
  try {
    const data = await fetchDataPromise();
    console.log("Async/Await:", data);
  } catch (err) {
    console.error(err);
  }
}

fetchAsyncData();
