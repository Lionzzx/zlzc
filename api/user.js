import request from '@/libs/request'
var url = 'admin'
// 登录
export const login = (data) => {
	return request({
		url: 'adminLogin',
		method: 'POST',
		data
	})
}

// 获取用户信息
export const getAdminUserInfo = (userId) => {
	return request({
		url,
		method: 'getAdminUserInfo',
		data: {
			userId
		}
	})
}

// 获取用户列表
export const getAdminUserList = (data) => {
	return request({
		url,
		method: 'GET',
		data
	})
}

export const deleteAdminUser = (data) => {
	return request({
		url,
		method: 'DELETE',
		data
	})
}

export const getAdminUser = (data) => {
	return request({
		url,
		method: 'GETONE',
		data
	})
}

export const batchdelete = (data) => {
	return request({
		url,
		method: 'BATCHDELETE',
		data
	})
}

export const addAdminUser = (data) => {
	return request({
		url,
		method: 'POST',
		data
	})
}

export const editAdminUser = (data) => {
	return request({
		url,
		method: 'EDIT',
		data
	})
}

export const getUserList = (data) => {
	return request({
		url: "user",
		method: 'EDIT',
		data
	})
}
