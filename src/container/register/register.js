import React from 'react'
import Logo from '../../component/logo/logo'
import { Radio , List, InputItem ,Button ,WingBlank , WhiteSpace } from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
@connect(
	//直接把user对象传进props里
	state=> state.user,
	{ register }
)
export default class Register extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			type:'genius',
			user:'',
			pwd:'',
			repeatpwd:''
		}
	}
	handleChange(key,val){
		this.setState({
			//一定要加个中括号
			[key]:val
		})
	}
	handleRegister(){

		this.props.register(this.state)
		console.log(this.props)
	}
	render(){
		const RadioItem = Radio.RadioItem;
		return(
			<div>
				{this.props.redirectTo?<Redirect to={this.props.redirectTo} />: null }
				<Logo></Logo>
				{ this.props.msg ? <p className ='error-msg'>{this.props.msg}</p> : '' }
				<List>
					<InputItem
						onChange={(v)=>this.handleChange('user',v)}
					>用户</InputItem>
					<WhiteSpace/>
					<InputItem
						onChange={(v)=>this.handleChange('pwd',v)}
						type ='password'
					>密码</InputItem>
					<WhiteSpace/>
					<InputItem
						onChange={(v)=>this.handleChange('repeatpwd',v)}
						type ='password'
					>确认密码</InputItem>
					<WhiteSpace/>
					<RadioItem
						checked={this.state.type=='genius'}
						onChange={()=>this.handleChange('type','genius')}
					>
						牛人
					</RadioItem>
					<RadioItem
						checked={this.state.type=='boss'}
						onChange={()=>this.handleChange('type','boss')}
					>
						BOSS
					</RadioItem>
					<WhiteSpace/>
					<Button type = 'primary' onClick={this.handleRegister.bind(this)} >注册</Button>
				</List>
			</div>
		)
	}
}