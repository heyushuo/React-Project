import React from 'react'

import AvatarSelector from '../../component/avatar-selector/avatar-selector'

import {NavBar} from 'antd-mobile'
export default class BossInfo extends React.Component{

	render(){
		return (
			<div>
				<NavBar mode="dark" >BOSS完善信息页</NavBar>
				<AvatarSelector></AvatarSelector>

			</div>
		)
	}
}
