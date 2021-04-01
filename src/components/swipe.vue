<template>
	<div class="wrap">
		<mt-swipe :auto="3000">
			<mt-swipe-item v-for="item in swipeData" :key="item.url">
				<img :src="item.url"/>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<style>
	.wrap{
		width:100%;
		height:200px;
		overflow: hidden;
	}
	.wrap img{
		width:100%;
	}
</style>
<script>
	export default{
		data(){
			var _this = this;
			_this.$http.get("../../static/json/banner.json").then((res) => {
				_this.swipeData = res.data;
			});
			return{
				swipeData:[]
			} 
		}
	}
</script>