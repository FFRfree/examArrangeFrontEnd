<template>
    <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="课程名称" prop="courseName">
            <el-input v-model="ruleForm.courseName"></el-input>
        </el-form-item>

        <el-form-item label="授课教师" prop="teacherName">
            <el-input v-model="ruleForm.teacherName"></el-input>
        </el-form-item>

        <el-form-item label="教室位置" prop="location">
            <el-input v-model="ruleForm.location"></el-input>
        </el-form-item>
        <el-form-item label="时间id" prop="timeId">
            <el-input v-model="ruleForm.timeId"></el-input>
        </el-form-item>
        <el-form-item label="考试周" prop="weekId">
            <el-input v-model="ruleForm.weekId"></el-input>
        </el-form-item>
        <el-form-item label="监考老师" prop="inviligation">
            <el-input v-model="ruleForm.inviligation"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    courseName: '',
                    teacherName: '',
                    location: '',
                    timeId: '',
                    weekId: '',
                    inviligation: ''
                },
                rules: {
                    courseName: [
                        { required: true, message: '课程名称不能为空', trigger: 'blur' }
                    ],
                    teacherName:[
                        { required: true, message: '授课教师不能为空', trigger: 'blur' }
                    ],
                    location:[
                        { required: true, message: '教室不能为空', trigger: 'blur' }
                    ],
                    timeId:[
                        { required: true, message: '时间不能为空', trigger: 'blur' }
                    ],
                    weekId:[
                        { required: true, message: '考试周不能为空', trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://ffrfree.site:9901/api/exam/add',this.ruleForm).then(function(resp){
                            console.log(resp.data)
                            if(resp.data == true){
                                _this.$alert(_this.ruleForm.courseName+'的考试 添加成功！', '消息', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/jwc/ExamManage')
                                        
                                        
                                    }
                                })
                            }else{
                                _this.$alert('添加失败', '消息', {
                                    confirmButtonText: '确定',
                                })
                            }
                        }) 
                    }
                    else
                    {
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            }
        }
    }
</script>