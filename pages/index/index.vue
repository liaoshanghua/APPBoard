<template>
	<view class="content">
		<web-view :webview-styles="webiewStyles" :src="apsurl">
		</web-view>
	</view>
</template>

<script>
	var _this;
	import request from '../../common/request.js';
	export default {
		data() {
			return {
				apsurl: null,
				urls: [],
				webiewStyles: 'webiewStyles',
				index: 0,
				intervalId: null,
				//http://112.15.190.218:9999       --瑞能
				url: 'http://112.15.190.218:9999'
			}
		},
		onLoad() {
			_this = this
			uni.setStorageSync('url', this.url);
			this.getBoardUrl().then(() => {
				// 执行一次循环逻辑，确保页面加载时显示第一个链接
				_this.apsurl = _this.urls[_this.index];
				// 设置循环，每100秒执行一次
				_this.intervalId = setInterval(() => {
					// 移动到下一个url，如果到了数组末尾，则回到第一个url
					_this.index = (_this.index + 1) % _this.urls.length;

					// 更新apsurl变量为当前url数组的项
					_this.apsurl = _this.urls[_this.index];

					// 输出或执行其他操作，例如发送请求等
					// console.log(_this.apsurl);
				}, 1000 * 60 * 5);
			}).catch(error => {
				console.error('Error during onLoad:', error);
			});
		},
		onUnload() {
			// 在页面销毁前清除定时器，防止内存泄漏
			clearInterval(this.intervalId);
		},
		methods: {
			async getBoardUrl() {
				try {
					const res = await request.post({
						url: '/APSAPI/APSData',
						data: {
							dicID: 15219,
							rows: 0
						}
					});
					if (res.data.result) {
						this.urls = res.data.data.map(x => x.Url);
					} else {
						// 使用uni.showToast显示错误信息
						uni.showToast({
							title: res.data.msg,
							icon: 'error', // 'none'表示不显示图标
							duration: 2000 // 弹窗持续时间，单位为毫秒
						});
					}
				} catch (error) {
					uni.showToast({
						title: '请求失败',
						icon: 'error', // 'none'表示不显示图标
						duration: 2000 // 弹窗持续时间，单位为毫秒
					});
				}
			}
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