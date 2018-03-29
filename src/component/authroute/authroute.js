import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
//这样包裹一下就可以看到router数据了
@withRouter
export default class AuthRoute extends React.Component{
	componentDidMount(){
		//获取用户信息

		//是否登录
		//现在的url地址
		//用的type身份是boss还是牛人
		//用户是否完善信息（选择头像和个人简介）
		const publicList=['/login',"/register"]
		const pathname=this.props.location.pathname;
		if (publicList.indexOf(pathname)>-1){
			return;
		}
		axios.get('/user/info').
			then(res=>{
			if (res.status==200){
				if (res.data.code==0){
					//有登陆信息
				}else{
					//undefined,因为这个不是路由组件只是一个不同的组件
					this.props.history.push('./login')
				}
			}
		})
	}
	render(){
		return null
	}
}