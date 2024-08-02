const mongoose = require('mongoose');

// let url = "https://localhost:8000/users"

// mongoose.connect('mongodb://127.0.0.1:27017/test');
main()
.then(()=>
{
    console.log("Connection successful");
}).catch((err) => console.log(err));



async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  
  
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
const User = mongoose.model("User",userSchema);
// User.find({age:{$gt:40}}).then((res)=>
// {

//     console.log(res[0].name);

// }).catch((err)=>{
//     console.log(err);
// });

// const user2 = new User({
//     name:"Adamee",
//     email:"gungunsaleeeu16@gmail.com",
//     age:48,
// });
// user2.save().then((res)=>{
//     console.log(res);
// }).catch(err=>
//     console.log(err));


// User.insertMany([
//     {name:"Gungun",email:"gungun@16gmail.com,age:50"},
//     {name:"Peter",email:"ggungun@16gmail.com,age:55"},
//     {name:"Guungun",email:"gunguniiiii@16gmail.com,age:90"},
// ]).then((res)=>{
//     console.log(res);
// })
// User.findOneAndUpdate({name:"Gungun"},{email:55}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

