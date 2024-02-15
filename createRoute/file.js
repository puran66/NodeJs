const fs = require('fs')

// fs.writeFileSync("./test1.text","Hello there !")

// fs.writeFile("./test2.text","Hello i am write file",(err)=>{
//   console.log(err);
// })

// fs.appendFile("./test2.text",`\n ${Date.now()} i'm logged in !`,(err)=>{
//   console.log(err);
// })

fs.unlinkSync("./test1.text")