<template>
	<view class="content">
		<web-view :webview-styles="webiewStyles" :src="apsurl">
		</web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				apsurl:null,
				urls:['http://112.15.190.218:9999/#/Screen10','http://112.15.190.218:9999/#/Screen11','http://112.15.190.218:9999/#/Screen12','http://112.15.190.218:9999/#/Screen13'],
				webiewStyles: 'webiewStyles',
				index:0,
				intervalId: null
			}
		},
		onLoad() {
		    // 执行一次循环逻辑，确保页面加载时显示第一个链接
		    this.apsurl = this.urls[this.index];
		
		    // 设置循环，每100秒执行一次
		    this.intervalId = setInterval(() => {
		      // 移动到下一个url，如果到了数组末尾，则回到第一个url
		      this.index = (this.index + 1) % this.urls.length;
		
		      // 更新apsurl变量为当前url数组的项
		      this.apsurl = this.urls[this.index];
		
		      // 输出或执行其他操作，例如发送请求等
		      console.log(this.apsurl);
		    }, 60000); 
		  },
		  onUnload() {
		    // 在页面销毁前清除定时器，防止内存泄漏
		    clearInterval(this.intervalId);
		  },
		methods: {

		}
	}
</script>

<style>
	.content,
	.webiewStyles {
		/* display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center; */
		height: 100vh !important;
	}

	.iframe {
		height: 100% !important;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
