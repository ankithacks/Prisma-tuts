// bring in prisma and cookie

const prisma=require('../prisma/index')
const cookieToken = require('../utils/cookieToken')

const cookie=require('../utils/cookieToken')


// user signup:-
exports.signup= async(req,res,next)=>{
    try {
        const {name, email, password}= req.body
        // check for the functionality:-
        if(!name || !email || !password){
            throw new Error('please write the details correctly and fill all the feilds')
        }

        const user=await prisma.user.create({
            data:{
                name: name,
                email: email,
                password: password
            }
        })

        // send user a token:-
        cookieToken(user, res)
    } catch (error) {
        throw new Error(error)
    }
}



// user login:-
exports.login=async(req,res, next)=>{
    try {
        // take the info from the user:-
        const {email, password}= req.body

        if(!email || !password){
            throw new Error("please provide the valid email and password for login function");
        }
        // find a user based on email 
        const user=await prisma.user.findUnique({
            where:{
                email
            }
        })

        // when thereis no user:-
        if(!user){
            throw new Error('the user does not exists')
        }

        // password mismatch:-
        if(user.password !== password){
            throw new Error('password not valid')
        }

        // user is there validation:-
        cookieToken(user, res)

    } catch (error) {
        throw new Error(error)
    }
}


// logout user:-
exports.logout=async(req,res,next)=>{
    try {
        res.clearCookie('token');
        res.status(200).json({success: true})
    } catch (error) {
        throw new Error(error)
    }
}