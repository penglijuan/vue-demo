<template>
	<ul class="tab-bar">
		<router-link tag="li" to='/index'><i class="iconfont icon-gengduo"></i><span>首页</span></router-link>
		<router-link tag="li" to='/order'><i class="iconfont icon-dilanxianxingiconyihuifu_huabanfuben"></i><span>购物车</span><span class="number">{{carNumber}}</span></router-link>
		<router-link tag="li" to='/mine'><i class="iconfont icon-liangdu"></i><span>我的</span></router-link>
	</ul>
</template>


<style>
@import '../assets/font/iconfont.css';
	*{
		margin:0;
		padding:0;
		list-style-type: none;
	}
	.tab-bar{
		display:flex;
		position:fixed;
		bottom:0;
		left: 0;
		width:100%;
		height: 49px;
		border-top:1px solid rgb(182,182,182);
		background: #fcfcfc;
		flex-direction: row;
		text-align: center;
		align-items: center;
	}
	.tab-bar li{
		flex:1;
		color:#999;
	}
	.tab-bar .iconfont{
		display: block;
	}
	.tab-bar li{
		position: relative;
	}
	.tab-bar .router-link-active {
	    color: orange;
	}
	.number{
		position: absolute;
		width:16px;
		height:16px;
		right:30%;
		top:-10px;
		color:white;
		border-radius:50%;
		background: orange;
		text-align: center;
	}
</style>

<script>
	import Msg from './msg.js'
	export default{
		data(){
			return {
				carNumber:0
			}
		},
		mounted(){
			var _this = this;
			Msg.$on("carNumber",function(data){
				_this.carNumber = data;
			})
		}
	}
</script>