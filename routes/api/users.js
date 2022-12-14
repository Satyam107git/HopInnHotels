const express = require('express');
const router = express.Router();
const gravatar= require('gravatar');
const bcrypt= require('bcryptjs');
const jwt=require('jsonwebtoken');
const config= require('config');

const { check, validationResult }= require('express-validator');

const User= require('../../models/User');
const Profile= require('../../models/Profile');

//@route  POST api/users
//@desc   Register route
//@access Public

router.post('/',[
    check('name','Name is Required').not().isEmpty(),
    check('creature','Please select an option').not().isEmpty(),
    check('email','Please include a valid email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({ min: 6})

],

async (req,res) =>{
    const errors= validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({ errors: errors.array()});
    }
    const {name,creature,email,password} = req.body;

    try{
        //See If user Exists
        let user =await User.findOne({ email});

        if(user){
           return res.status(400).json({ errors: [{ msg: 'User already exists'}]});
        }

        //Get Users Gravatar
        const avatar=gravatar.url(email,{
            s: '200',
            r: 'pg',
            d: 'mm'
        })


        //creating unique id
        if (creature == "monster")
        var user_id = "m-"+Date.now()
         else
        var user_id = "h-" + Date.now()

        // console.log(user_id)
        user= new User({
            name,
            creature,
            email,
            avatar,
            password,
            userId:user_id
        });


        profile=new Profile()
        //Encrypting Password

        const salt =await bcrypt.genSalt(10);

        user.password= await bcrypt.hash(password,salt);

        await user.save();


        //Return jswebtoken

        const payload= {
            user :{
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'),{ expiresIn: 360000},(err ,token) =>{
            if(err) throw err;
            res.json({ token});

        });


        res.send('User Registered');
    }catch(err){
    console.error(err.message);
    res.status(500).send('Server error');
    }

   
});


module.exports=router;