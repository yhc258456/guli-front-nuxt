import request from '@/utils/request'
export default {
    submitRegister(params) {
        return request({
            url: `/educenter/member/register`,
            method: 'post',
            data: params
        })
    },
    getMobile(phoneNum) {
        return request({
            url: `/msmservice/msm/sendMsg/${phoneNum}`,
            method: 'get'
        })
    }

}