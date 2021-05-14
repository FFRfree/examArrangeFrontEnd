<template>
    <div>
        <el-button type="primary" icon="el-icon-arrow-left" @click="logout()">登出</el-button>
        <el-table
                :data="tableData"
                border
                style="width: 90%">
            <el-table-column
                    fixed
                    prop="courseName"
                    label="课程名称"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="teacherName"
                    label="授课教师"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="invigilationTeacher"
                    label="监考教师"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="location"
                    label="考试教室"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="weekDay"
                    label="星期"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="startTime"
                    label="开始时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="endTime"
                    label="结束时间"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="weeksId"
                    label="考试周"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                    <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        methods: {
            deleteBook(row){
                const _this = this
                axios.post('http://ffrfree.site:9901/api/exam/delete',{"location":row.location,"startTime":row.startTime,"weekDay":row.weekDay,"weekId":row.weeksId}).then(function(resp){
                    if(resp.data >=1){
                    _this.$alert(row.courseName+'课程的一场考试删除成功！', '消息', {
                        confirmButtonText: '确定',
                        callback: action => {
                            _this.$router.go(0)
                        }
                    })
                    }else{
                        _this.$alert('删除失败,检查课程名称或教室可能被占用', '消息', {
                        confirmButtonText: '确定',
                        callback: action => {
                            _this.$router.go(0)
                        }
                    })
                    }
                })
            },
            edit(row) {
                this.$router.push({
                    name:'考试更新',
                    params:{
                        'courseName':row.courseName,
                        'teacherName':row.teacherName,
                        'invigilationTeacher':row.invigilationTeacher,
                        'location':row.location,
                        'weekDay':row.weekDay,
                        'startTime':row.startTime,
                        'endTime':row.endTime,
                        'weeksId':row.weeksId,
                    }
                })
            },
            // page(currentPage){
            //     const _this = this
            //     axios.get('http://ffrfree.site:8181/book/findAll/'+(currentPage-1)+'/6').then(function(resp){
            //         console.log(resp)
            //         _this.tableData = resp.data.content
            //         _this.pageSize = resp.data.size
            //         _this.total = resp.data.totalElements
            //     })
            // }
            logout(){
                this.$router.replace('/login')
            }
        },

        data() {
            return {
                // pageSize:'1',
                // total:'11',
                tableData: [{
                    
                }
            ]
            }
        },

        created() {
            const _this = this
            axios.get('http://ffrfree.site:9901/api/exam').then(function(resp){
                // console.log(resp.data[0])
                _this.tableData = resp.data
                
                // _this.total = resp.data.totalElements
            })
        }
    }
</script>