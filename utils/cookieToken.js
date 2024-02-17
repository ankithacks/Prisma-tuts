const getJwtToken=require('../helpers/getJwtToken')

const cookieToken=(user,res)=>{
    const token=getJwtToken(user.id)
    const options={
        expires: new Date(
            Date.now()+ 3 *24 *60 *60 *1000
            // this means 3 days where 1000 means milliseconds and 24 means hours
        ),
        httpOnly: true
        // this means this cookie can only be changed from the server side and not the client side!!
    }
    user.password= undefined
    // set the cookie:-
    res.status(200).cookie('token', token, options).json({
        success:true,
        token,
        user
    })
}


module.exports=cookieToken