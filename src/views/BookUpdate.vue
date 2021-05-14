<template>
    <div>
    <el-button type="primary" icon="el-icon-arrow-left" @click="goback()">返回</el-button>
    <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
        class="demo-ruleForm">
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
        <el-form-item label="考试周" prop="weeksId">
            <el-input v-model="ruleForm.weeksId"></el-input>
        </el-form-item>
        <el-form-item label="监考老师" prop="invigilationTeacher">
            <el-input v-model="ruleForm.invigilationTeacher"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

    </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    courseName:'',
                    teacherName:'',
                    invigilationTeacher:'',
                    location:'',
                    timeId:'2',
                    weeksId:'',
                },
                rules: {
                    // name: [
                    //     { required: true, message: '图书名称不能为空', trigger: 'blur' }
                    // ],
                    // author: [
                    //     { required: true, message: '作者不能为空', trigger: 'blur' }
                    // ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.put('http://ffrfree.site:8181/book/update', this.ruleForm).then(function (resp) {
                            if (resp.data == 'success') {
                                _this.$alert('《' + _this.ruleForm.name + '》修改成功！', '消息', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/BookManage')
                                    }
                                })
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            goback(){
                this.$router.go(-1)
            }
        },
        created() {
            this.ruleForm.courseName = this.$route.params.courseName
            this.ruleForm.teacherName = this.$route.params.teacherName
            this.ruleForm.invigilationTeacher = this.$route.params.invigilationTeacher
            this.ruleForm.location = this.$route.params.location
            this.ruleForm.weeksId = this.$route.params.weeksId
            console.log(this.$route.params)
        }
    }
</script>