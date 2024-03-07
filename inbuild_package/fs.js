const fs = require("fs");

const data = "hello world !"

// fs.writeFile("greetings.text", data, (err)=>{
//     console.log("Completed writing")
// })

// const [,,n] = process.argv

// for(let i =1 ; i<=n; i++){
//     fs.writeFile(`./backup/Text-${i}.text`,data, (err=>{
//         console.log(`Text-${i} created`)
//     }));
// }

// fs.readFile("./cool.text", "utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

const data1 = "Welcome"

// fs.appendFile("greetings.text", data1, (err)=>{
//     console.log("Completed writing")
// })

// fs.unlink("./Text-2.html",(err)=>{
//     console.log("Deleted")
// })

// fs.readdir("./backup",(err,files)=>{
//     console.log("All files",files)
// })

// TO delete all files
// in order => use unlinkSync, while using Sync callback should be removed

// fs.readdir("./backup",(err,files)=>{
//     console.log("All files",files)
//     files.forEach(filename =>{
//         fs.unlink(`./backup/${filename}`, (err)=>{
//             console.log("Deleted Successfully", filename)
//         })
//     })
// })

