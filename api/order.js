import request from '@/utils/request'

export default {
    createOrder(courseId) {
        return request({
            url: `/eduorder/order/createOrder/${courseId}`,
            method: 'post'
        })
    },
    getOrderInfo(orderNo) {
        return request({
            url: `/eduorder/order/getOrderInfo/${orderNo}`,
            method: 'get'
        })
    },
    createNative(orderNo) {
        return request({
            url: `/eduorder/paylog/createNative/${orderNo}`,
            method: 'get'
        })
    },
    queryPayStatus(orderNo) {
        return request({
            url: `/eduorder/paylog/queryPayStatus/${orderNo}`,
            method: 'get'
        })
    },


}