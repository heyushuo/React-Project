import React from 'react'

import Logo from '../../component/logo/logo'
import {  List, InputItem ,Button ,WingBlank , WhiteSpace } from 'antd-mobile'
export default class Login extends React.Component{
	constructor(props){
		super(props)
	}
	register(){
		this.props.history.push('/register')
	}
	render(){
		return(
			<div>
				<Logo></Logo>
				<WingBlank>
					<List>
						<InputItem>用户</InputItem>
						<WhiteSpace/>
						<InputItem>密码</InputItem>
						<WhiteSpace/>
					</List>
					<Button type = 'primary' >登陆</Button>
					<WhiteSpace/>
					<Button onClick={this.register.bind(this)} type = 'primary' >注册</Button>
				</WingBlank>
			</div>
		)
	}
}