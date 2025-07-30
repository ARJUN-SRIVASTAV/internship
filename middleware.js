import varexpress from 'express';
const app= varexpress(); // ye  braces ki wajha se varexpress ko humne run kiya hai.

//website a first page slash(/) route hi hota hai.

app.use(function(req,res,next)
{
    console.log("middleware working");

    next() // next middleware ya route ko call karta hai

})

app.get('/',(req,res,next)=>{
    console.log("middleware 2 working")
res.send("hello world");
next()
});
app.get("/profile",(req,res)=>{
    console.log("middleware 3 working")
res.send("hello from profile");
})

app.listen(3000);
