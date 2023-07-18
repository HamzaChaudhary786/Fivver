

// import React from 'react'


// const datas = [
//   {
//     "name": "Hamza",
//     "Profession": "coding",
//     "city": "sahiwal"
//   },
//   {
//     "name": "Moiz",
//     "Profession": "Speaker",
//     "city": "okara"
//   }
// ];


// const mydata = () => {

//   setTimeout(() => {
//     let output = "";

//     datas.forEach((data, index) => {

//       output += `<li>${data.name}</li>`
//       document.body.innerHTML = output;

//     })
//   }, 1000)


// }

// // CallBack Function Use ();


// // const createData = (data, callback) => {
// //   setTimeout(() => {
// //     datas.push(data)
// //     callback();
// //   }, 2000)

// // }

// // createData({ "name": "Ali", "Profession": "Engineer", "city": "lahore" }, mydata)



// //Async And Await Function

// const createData = (data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       datas.push(data)
//       let error = false;
//       if (!error) {
//         resolve();
//       }
//       else {
//         reject();
//       }

//     }, 2000)
//   })

// }

// // await createData({ "name": "Ali", "Profession": "Engineer", "city": "lahore" })
// //   .then(mydata)
// //   .catch((e) => { console.log("error") })

// const start = async () => {
//   await createData({ "name": "Ali", "Profession": "Engineer", "city": "lahore" })
//   mydata();
// }
// start();


// const Promises = () => {

//   return (
//     <div></div>
//   )
// }

// export default Promises