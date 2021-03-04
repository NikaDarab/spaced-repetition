// async function f() {
//   return Promise.resolve(1);
// }

// f().then(console.log); // 1
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  let result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

f();
