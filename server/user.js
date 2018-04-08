const express = require('express')
const mongoose = require('mongoose')
const utils = require("utility")
const Router = express.Router()
const model=require('./model')
const User=model.getModel('user')

//统一查询条件
const _filter={'pwd':0,'_v':0}
Router.get('/list',function (req, res) {
	/*User.remove({},function (e, d) {
		return res.json({msg:'数据清除成功'})
	})*/
	User.find({},function(err,doc){
		return res.json(doc)
	})
})

Router.post('/register',function (req, res) {
	const { user, pwd, type } = req.body
	//用户名不能重复先查询一次user
	User.findOne({user:user},function (err, doc) {
		if (doc){
			return res.json({code:1,msg:'用户名重复'})
		}
		const userModel = new User({user,pwd:utils.md5(pwd),type})
		userModel.save(function (e, d) {
			if (e){
				return res.json({code:1,msg:'后端报错'})
			}
			const {user,type,_id} = d;
			res.cookie('userid',_id)
			return res.json({code:0,data:{user,type,_id}})
		})
	})
})

Router.post('/login',function (req, res) {
	const { user, pwd } = req.body
	//用户名不能重复先查询一次user
	//第一个是查询条件，第二个是限制不显示那个的条件
	User.findOne({user:user,pwd:utils.md5(pwd)},_filter,function (err, doc) {
		if (!doc){
			return res.json({code:1,msg:'用户名或者密码错误'})
		}
		res.cookie('userid',doc._id)
		return res.json({code:0,data:doc})
	})
})

Router.get('/info',function (req, res) {
	const {userid}=req.cookies
	if (!userid){
		return res.json({code:1})
	}
	User.findOne({ '_id':userid }, _filter ,function (err , doc) {
		if (err){
			return res.json({code:1,msg:'后端出错'})
		}
		if (doc){
			return res.json({code:0,data:doc})
		}
	})
})

module.exports = Router