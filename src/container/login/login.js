import React from 'react'

import Logo from '../../component/logo/logo'
import {  List, InputItem ,Button ,WingBlank , WhiteSpace } from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'

@connect(
	state=>state.user,
	{login}
)
export default class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			user:'',
			pwd:''
		}
	}
	handleChange(key,val){
		this.setState({
			//一定要加个中括号
			[key]:val
		})
	}
	register(){
		this.props.history.push('/register')
	}
	handleLogin(){
		//login方法是redux提供的
		this.props.login(this.state)
	}
	render(){
		return(
			<div>
				{this.props.redirectTo?<Redirect to={this.props.redirectTo} />: null }
				<Logo></Logo>
				<WingBlank>
					{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
					<List>
						<InputItem
							onChange={(v)=>this.handleChange('user',v)}
						>用户</InputItem>
						<WhiteSpace/>
						<InputItem
							onChange={(v)=>this.handleChange('pwd',v)}
						>密码</InputItem>
						<WhiteSpace/>
					</List>
					<Button onClick={this.handleLogin.bind(this)} type = 'primary' >登陆</Button>
					<WhiteSpace/>
					<Button onClick={this.register.bind(this)} type = 'primary' >注册</Button>
				</WingBlank>
			</div>
		)
	}
}