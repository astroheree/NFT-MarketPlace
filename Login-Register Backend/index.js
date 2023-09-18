import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app  = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const start = async() => {
    await mongoose.connect('mongodb+srv://prakhar:prakhar@nftproject.ecmjec2.mongodb.net/?retryWrites=true&w=majority',
   { useNewUrlParser: true,
    useUnifiedTopology:true,
   }
    );
    app.listen(9002, () => {
        console.log("BE started port 9002")
    });
};
start();

const userSchema = new mongoose.Schema ({
    name: {
      type:String,
      required:true
    },
    email: {
      type:String,
      required:true
    },
    password: {
      type:String,
      required:true
    }
})
const loginSchema = new mongoose.Schema ({
    email: {
      type:String,
      required:true
    },
    password: {
      type:String,
      required:true
    }
})

const UserModel =  mongoose.model("User" , userSchema)
const LoginModel =  mongoose.model("Login" , loginSchema)



//Routes
// app.post("/login" ,async (req , res)=> {
//   const loginUser=new LoginModel(req.body);
//   const loguser=await LoginModel.findOne(
//      { email:loginUser.email });
//      if(loguser){
//       if(password === loguser.password) {
//               res.send({message: "Login Successfull"} , loguser)
//             } else {
//               res.send({message: "Password didn't match"})
//             }
//       } else {
//           res.send("User not registered")
  
//      }

//   res.send("User found");
// })

//----------------------------

const red=(req,res)=>{
  app.get("/login", function(){
    res.redirect("/");
  })
}

// app.get("/response",function(req,res){
//   res.send(`${home}`);
// })

app.post("/login", async (req, res) => {
  const mail = req.body.email;
  const password = req.body.password;
  try {
    const user1 = await UserModel.find({ email: mail });
    if (user1.length === 0) {
        // res.json({msg: "Invalid User"})
    } else {
      if (password == user1[0].password) {
        const ourUser = user1[0];
        const temp = {password : ourUser.password, email : ourUser.email};
        Object.assign(temp, {msg: "Success"})
      
        console.log(temp);
        // red(req,res);
        res.send({message: "Login Success", ourUser: ourUser})
        // res.json(temp);
      }

      else res.json({msg : "Pls enter correct Password"});
      
    }
  } catch (err) {
    console.log(err);
    res.send({message: "Login Success", ourUser: ourUser})
  }
});




    // loginUser.find({email: loginUser.email } , (err , loginUser)=> {
    //     if(loginUser){
    //           if(password === loginUser.password) {
    //             res.send({message: "Login Successfull"} , loginUser)
    //           } else {
    //             res.send({message: "Password didn't match"})
    //           }
    //     } else {
    //         res.send("User not registered")
    //     }
    // })
    // res.send("My Api login")



app.post("/Signup" ,async (req , res)=> {
  const newUser=new UserModel(req.body);
  await newUser.save();
  console.log(newUser.email);
  res.status(200).json({
    "Message":"User created successfully"
  })
});
// const createUser=(name, password, email)=>{
//     const newUser =new User({
//             name: name,
//             email: email,
//             password: password
//            });
//            newUser.save(function(err){
//             if(!err){
//                 res.redirect("/");
//             }
//            })
// };


   //const {name , email , password} = req.body;
//    console.log(name);
   //createUser(name,email,password);
//    const newUser =new User({
//     name: name,
//     email: email,
//     password: password
//    });
//    const savedUser=await newUser.save();
   
//    catch(err){
//     console.log(err);
//    }
    //-----------

    // const user = async (req, res) => {

    //==============
        // const user1 = new User({
        //   name: req.body.name,
        //   email: req.body.email,
        //   password: req.body.password,
        // });
        //==============

        //console.log(`${user1} added`);

        //==============
        //console.log("user added");
        //==============

        // try {

          //==============
        // await user1.save()
        //==============

          //.then(() => res.status(201).json({ newUser: user1 }));
        // } catch (error) {
        //   res.send(`cant save new user: ${error.message}`);
        // }
      //};
    //-----------

//    const reqUser= await User.create({
//         name: name,
//         email: email,
//         password: password
//        });
    //    console.log(req.body.name)
    // reqUser.save();
    // console.log(reqUser)
    //-----------
    // console.log(result)
//     (err,user) => {
    
//     if(user){
//         res.send({message: "User already registered"})
//     } else {
//         const user = new User ({
//             name,
//             email,
//             password
//            })
//            user.save(err => {
//             if(err){
//                 res.send(err)
//             } else {
//                 res.send({message:"Successfully Registered"})
//             }
//            })
//     }
//    }
   
   

