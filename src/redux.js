import { createStore } from 'redux'

// 新建store
//通过reducer创建
//reducer---根据老的state和action 生成新的state

function counter(state=0,action){
	switch (action.type){
		case '加机关枪':
			return state+1
		case '减机关枪':
			return state-1
		default:
			return 10
	}
}
//新建一个store
const store = createStore(counter)

//获取数据，
const init=store.getState()

//订阅事件
function listener(){
	const current = store.getState();
	console.log(`现在一共有${current}把机关枪`)
}
//每次变化都会触发subscribe函数
store.subscribe(listener)
//派发事件 ,,事件是一个action======传递action
//action就是reducer接受的action，action默认有一个type类型
store.dispatch({type:"加机关枪"})