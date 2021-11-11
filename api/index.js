import request from '@/utils/request'
export default {
    getHotCourseAndTeacher() {
        return request({
            url: `/eduservice/indexfront/index`,
            method: 'get'
        })
    }

}