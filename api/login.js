import request from '@/utils/request'
export default {
    submitLogin(user) {
        return request({
            url: `/educenter/member/login`,
            method: 'post',
            data: user
        })
    },
    getLoginInfo() {
        return request({
            url: `/educenter/member/getMemberInfo`,
            method: 'get',
        })
    }

}