import request from '@/utils/request'
export default {
    // 分页讲师
    getTeacherList(current,limit) {
        return request({
            url: `/eduservice/teacherfront/getFrontTeacherList/${current}/${limit}`,
            method: 'post'
        })
    },
    getTeacherInfo(teacherId) {
        return request({
            url: `/eduservice/teacherfront/getTeacherInfo/${teacherId}`,
            method: 'get'
        })
    }

}