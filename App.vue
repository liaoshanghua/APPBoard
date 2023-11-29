<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS
			// 锁定屏幕方向 横屏正方向
			plus.screen.lockOrientation('landscape-primary');
			// #endif
		},
		onShow: function() {
			// #ifdef APP-PLUS
			// 锁定屏幕方向 横屏正方向
			plus.screen.lockOrientation('landscape-primary');
			// #endif
		},
		onHide: function() {
			// #ifdef APP-PLUS
			// 锁定屏幕方向 横屏正方向
			plus.screen.lockOrientation('landscape-primary');
			// #endif
		}
	}
</script>

<style>
	/*每个页面公共css */

	uni-page-head {
		display: none;
	}

	uni-page-wrapper {
		height: 100% !important;
	}
</style>
