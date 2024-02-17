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