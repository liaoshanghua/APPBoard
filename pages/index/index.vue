<template>
	<view class="content">
		<web-view :webview-styles="webiewStyles" src="http://112.15.190.218:9999/#/Screen10">
		</web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// webiewStyles: 'webiewStyles'
			}
		},
		onLoad() {

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
