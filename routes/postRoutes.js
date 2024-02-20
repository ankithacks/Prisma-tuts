const express=require('express')
const Router=express.Router()
const isLoggedIn=require('../middlewares/IsLoggedIn')
const { createPost, updatePost, deletePost, getPost } = require('../controllers/postController')


Router.route('/post/create').post(isLoggedIn, createPost)
Router.route('/post/update/:id').put(isLoggedIn, updatePost)
Router.route('/post/delete/:id').delete(isLoggedIn, deletePost)
Router.route('/post/get').get(getPost)



module.exports=Router
