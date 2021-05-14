<template>
    <div class='bg'>
        <h2 align="center">欢迎，{{$route.params.sname}}老师，您共需监考{{tableData.length}}场。</h2>
        <el-button type="primary" icon="el-icon-arrow-left" @click="logout()">登出</el-button>
        <el-table :data="tableData" border style="width: 90%">
            <el-table-column prop="invigilationTeacher" label="监考教师" width="120">
            </el-table-column>
            <el-table-column fixed prop="courseName" label="课程名称" width="150">
            </el-table-column>
            <el-table-column prop="teacherName" label="授课教师" width="120">
            </el-table-column>
            <el-table-column prop="location" label="考试教室" width="120">
            </el-table-column>
            <el-table-column prop="weekDay" label="星期" width="120">
            </el-table-column>
            <el-table-column prop="startTime" label="开始时间" width="120">
            </el-table-column>
            <el-table-column prop="endTime" label="结束时间" width="120">
            </el-table-column>
            <el-table-column prop="weeksId" label="考试周" width="120">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$router.replace('/login')
            }
        },
        data() {
            return {
                tableData: [],
            }
        },
        created() {
            const _this = this
            axios.get('http://ffrfree.site:9901/api/exam/t/' + this.$route.params.sname).then(function (resp) {
                console.log(resp.data.gets)
                _this.tableData = resp.data

                // _this.total = resp.data.totalElements
            })
        }
    }
</script>

<style scoped>
    .bg {
        background: url("../assets/images/login_bg.png") no-repeat;
        width: 100%;
        height: 1080px;
        background-size: cover;
        overflow: hidden;
    }
</style>