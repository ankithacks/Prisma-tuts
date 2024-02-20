const prisma=require('../prisma/index')


// create a post:-
exports.createPost=async(req,res, next)=>{
    try {
        const {sluf, title, body, authorId}=req.body

        const result=await prisma.post.create({
            data:{
                sluf,
                title: title,
                body: body,
                author: {connect: {id:authorId}}
            }
        });
        res.json(result)

    } catch (error) {
        throw new Error(error)
    }
}


// update the post:-
exports.updatePost=async(req,res, next)=>{
    const {id}=req.params
    const {title, body}= req.body

    try {
        const result=await prisma.post.update({
            where:{id: id},
            data:{
                title: title,
                body: body
            }
        })
        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}


// delete the post:-
exports.deletePost=async(req,res,next)=>{
    const {id}=req.params
    try {
        const result=await prisma.post.delete({
            where:{
                id: id
            }
        })
        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}


// get all the post:-
exports.getPost=async(req,res, next)=>{
    try {
        const result=await prisma.post.findMany()
        res.json(result)
    } catch (error) {
        throw new Error(error)
    }
}
