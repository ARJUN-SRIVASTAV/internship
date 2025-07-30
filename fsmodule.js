
 const fs = require("node:fs");
 fs.writeFileSync("./test.txt", "hello world");
// there are two function to create a file there are two arguments where the first arguments are file name where as the other one has include the content which we are write in a file writefilesync and writefile
// //when we write writeFile then it is a asynchronous function it has include a call back function in which we include just in case if any error will come then it can handle by it.

 fs.writeFile("./test1.txt","hello world",(err)=>{})
     const fs =require("node:fs");
 fs.writeFileSync("./test.txt","hello world");
 fs.writeFile("./test.txt","hello world",()=>{});


 const result =fs.readFileSync("./contacts.txt","utf-8");

console.log(result);
// // when you use synchronous task to yeh result ko variable me store kar ke de deta hai
// // but asynchronous wale me result ko return kar ke nahi deta hai

fs.readFile("./contacts.txt", "utf-8",(err,result)=> // yaha pe "./contact.txt" me aagar space doge to error aati hai
 {
 if (err)
{
 console.log("error",err);
 }
 else{
     console.log(result)
 }
 })
 // async expect that ek call back function return karo jiske aandar result return karunga asynchronous kuch bhi return nahi karta hai jabki synchronous kuch bhi return nahi karta hai 

// // sync me result ko ek variable me store karke de deta hai

 fs.appendFileSync('./contacts.txt',new Date().getDate().toLocaleString()); //append file ko override nahi karta hai uske aage data ko append karta hai

// // to delete a file there is a unlinkSync() 
 fs.unlinkSync("./contacts.txt");

 console.log( fs.statSync('./videonine.txt')); // this can help to shown the statistics of any file 

 fs.mkdirSync('my-docs') //help to create the folder 
