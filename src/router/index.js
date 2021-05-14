import Vue from 'vue'
import VueRouter from 'vue-router'
import ExamManage from '../views/ExamManage'
import AddExam from '../views/AddExam'
import BookUpdate from '../views/BookUpdate'
import StudentExam from '../views/StudentExam'
import Jwc from '../views/Jwc'
import Login from '../views/Login'
import TeacherExam from '../views/TeacherExam'
Vue.use(VueRouter)

const routes = [
  {
    path:"/jwc",
    name:"考试管理",
    component:Jwc,
    show:true,
    redirect:"/jwc/ExamManage",
    children:[
      {
        path:"/jwc/ExamManage",
        name:"查询考试",
        component:ExamManage
      },
      {
        path:"/jwc/AddExam",
        name:"添加考试",
        component:AddExam
      }
    ]
  },
  {
    name:'考试更新',
    path:'/update',
    component:BookUpdate,
    show:false
  },
  {
    path:'/student/:sname',
    component: StudentExam,
    show:false
  },
  {
    path:'/teacher/:sname',
    component: TeacherExam,
    show:false
  },
  {
    path:'/',
    redirect:"/login"

  },
  {
    path:'/login',
    component: Login,
    show:false
  }

]

const router = new VueRouter({
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
