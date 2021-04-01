<template>
	<div class="typeWrap cf">
		<div v-for="item in type" @click="getTypeList(item.type)">
			<img :src="item.icon"/>
			<span>{{item.title}}</span>
		</div>
	</div>
</template>
<style>
	.typeWrap {
		margin-top:10px;
	}
	.typeWrap div{
		float:left;
		width:25%;
		margin-bottom:10px;
	}
	.typeWrap img{
		width:60%;
	}
	.typeWrap span{
		display: block;
	}
</style>
<script>
	import Msg from './msg.js'
	export default{
		data(){
			var _this = this;
			_this.$http.get("../../static/json/type.json").then((res) => {
				_this.type = res.data;
			})
			return {
				type:[],
				curType:1
			}
		},
		methods:{
			getTypeList(type){
				Msg.$emit('listType',type);
			}
		}
	}
</script>