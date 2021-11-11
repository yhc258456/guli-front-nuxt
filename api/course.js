import request from '@/utils/request'
export default {
    // 分页讲师
    getPageList(current, limit, courseVo) {
        return request({
            url: `/eduservice/coursefront/getFrontCousrList/${current}/${limit}`,
            method: 'post',
            data: courseVo
        })
    },
    getNestedTreeList2() {
        return request({
            url: `/eduservice/subject/getAllSubject`,
            method: 'get'
        })
    },
    // 获取课程详情
    getCourseInfo(courseId) {
        return request({
            url: `/eduservice/coursefront/getFrontCousrInfo/${courseId}`,
            method: 'get'
        })
    }

}