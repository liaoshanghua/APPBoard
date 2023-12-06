var num = 0;

function request(url, method, data, header) {
	num++;
	if (url == '/Login/CheckAccount') {
		header = {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	} else {
		header = {
			'token': uni.getStorageSync('token'),
			'Content-Type': 'application/json'
		}
	}
	if (num == 1) {
		uni.showLoading({
			title: '加载中...'
		})
	}
	return new Promise((resolve, reject) => {
		let newUrl = uni.getStorageSync('url');
		uni.request({
			url: newUrl + url,
			method: method,
			data: data,
			header,
			success: function(res) {
				if (res) {
					resolve(res);
				} else if (res.statusCode == 401) {
					uni.showToast({
						title: "登录信息失效，请重新登录！",
						icon: "none"
					})
					setTimeout(function() {
						uni.reLaunch({
							url: '/pages/login/login'
						})
					}, 1500);
				} else {
					uni.showToast({
						title: res.data.msg,
						icon: "none"
					})
				}
			},
			fail: function(res) {
				uni.showToast({
					title: '服务器加载失败！',
					icon: "none"
				})
				reject(res);
			},
			complete() {
				num--;
				if (num === 0) {
					uni.hideLoading()
				}
			}
		})
	})
}

// 封装get方法

function get(obj) {
	return request(obj.url, 'GET', obj.data)
}
// 封装post方法
function post(obj) {
	return request(obj.url, 'POST', obj.data)
}

export default {
	request,
	get,
	post
}
