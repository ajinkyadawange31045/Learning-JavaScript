// // fetch('https://jsonplaceholder.typicode.com/posts')
// // .then((res)=>{
// //     res.json().then((result)=>{console.log(result)})
// // })


// // lets do that using a function
// function fetchJSon(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res)=>{
//         return res.json()
//     })
//     .then((result)=>{
//         return console.log(result)
//     })
//     .catch((err)=>{
//         return console.log(err)
//     })
//     //to see the error in the function, we can go in networks which is beside the console, and in that we can change that from No throttling to Offline. and then type the function name in console and check it will show we can't fetch data.
// }

// fetchJSon()