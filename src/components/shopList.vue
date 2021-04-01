<template>
	<div>
		<a href="#" class="shopItem cf">
			<div class="left shopImg"><img :src="item.pic_url"/></div>
			<div class="right">
				<p class="title">{{item.name}}{{item.id}}</p>
				<p class="cf"><span class="fl">月售{{item.month_sale_num}}</span><span class="fr">{{item.avg_delivery_time}}分钟 | {{distance}}</span></p>
				<p>起送25 | 配送3.5 | 人均31<span v-show="item.delivery_type==1" class="fr zhuansong">美团专送</span></p>
				<p>{{replace}}<span class="iconfont icon-dilanxianxingiconyihuifu_huabanfuben" @click="add(item)"></span></p>
			</div>
		</a>
	</div>
</template>
<style>
	.fl{
		float:left;
	}
	.fr{
		float:right;
	}
	.shopImg{
		width:30%;
	}
	.shopImg img{
		width:100%;
	}
	.shopItem{
		display: flex;
		padding:10px 20px;
		text-align: left;
		color:#333;
		font-size:12px;
		line-height: 20px;
		text-decoration: none;
	}
	.title{
		font-size:16px;
		font-weight:bold;
		line-height: 24px;
	}
	.zhuansong{
		background:orange;
		color:white;
	}
	.shopItem .left{
		flex:1;
	}
	.shopItem .right{
		flex:2;
		margin-left:10px;
	}
	.shopItem .icon-dilanxianxingiconyihuifu_huabanfuben{
		float:right;
		font-size:16px;
		color:orange;
	}
</style>
<script>
	import Msg from './msg.js'
	export default{
		data(){
			return{
				shopcart:[]
			}
		},
		props:{
			item:{
				type:Object
			}
		},
		methods:{
			findMaxMin(arr){
				var min = arr[0],
					max = arr[0];
				for(var i = 0;i<arr.length;i++){
					if(arr[i]>max){
						max = arr[i];
					}else if(arr[i]<min){
						min = arr[i];
					}
				}
				return {min,max}
			},
			add(item){
				this.shopcart.push(item.id);
				Msg.$emit("carNumber",this.shopcart.length);
			}
		},
		computed:{
			distance(){
				if(this.item.delivery_distance>1000){
					return (this.item.delivery_distance/1000).toFixed(1) + 'km'
				}else{
					return  this.item.delivery_distance + 'm'
				}
			},
			replace(){
				 if (this.item.shop_discount.dis_money.length === 1) {
			     	return "可领" + this.item.shop_discount.dis_money[0] +"元代金券"
			  	 }else {
				  	let {min,max} = this.findMaxMin(this.item.shop_discount.dis_money);
				  	return "可领"+min+"~"+max+"代金券";
				  }
			}
		}
	}
</script>