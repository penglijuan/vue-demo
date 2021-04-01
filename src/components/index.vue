<template>
	<div>
		<Swipe></Swipe>
		<Type></Type>
		<div class="listWrap">
			<shopList v-for="item in shopList" :item ="item" :type="type"></shopList>
		</div>
	</div>
</template>

<style>
	.listWrap{
		margin-bottom:50px;
	}
</style>
<script>
	import Swipe from '@/components/swipe'
	import Type from '@/components/type'
	import shopList from '@/components/shopList'
	import Msg from './msg'
	export default {
		data(){
			return {
				shopList:[],
				type:1
			}
		},
		components:{
			Swipe,
			Type,
			shopList
		},
		methods:{
			//获取列表数据
			getList(){
				var _this = this;
				var url = "../../static/json/shopList" + this.type + ".json";
				_this.$http.get(url).then((res)=>{
					_this.shopList = res.data;
				})
			}
		},
		mounted:function(){
			var _this = this;
			this.getList();
			//点击切换列表数据
			Msg.$on("listType",function(data){
				_this.type = data;
			})
		},
		watch:{
			type:function(){
				this.getList();
			}
		}
	}
</script>