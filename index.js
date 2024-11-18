const https = require("node:https");

// const crypto = require("node:crypto");

// process.env.UV_THREADPOOL_SIZE = 16; // Or any number >= MAX_CALLS

const MAX_CALLS = 5;
const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
  // crypto.pbkdf2(
  //   "password",
  //   "salt",
  //   100000,
  //   512,
  //   "sha512",
  //   (err, derivedKey) => {
  //     if (err) throw err;
  //     console.log(`Hash ${i + 1}; Time taken: ${Date.now() - start}ms`);
  //   }
  // );

  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
