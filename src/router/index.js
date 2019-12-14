import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Subteacher from "@/components/Subteacher";
import Job from "@/components/Job";
import Information from "@/components/Information";
import TeacherDetail from "@/components/teacherInfo/TeacherDetail";
import StarDetail from "@/components/starInfo/StarDetail";
import SemesterDetail from "@/components/jiuye/SemesterDetail";
import newsDetail from "@/components/information/NewsDetail";
import CommonQuestion from "@/components/commonQuestion/CommonQuestion";
import ClassPage from "@/components/classPage/ClassPage";
import About from "@/components/about/About";
import Video from "@/components/video/S-video";
import Wechat from "@/components/Wechat";
// import VideoList from "@/components/Information/VideoList.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
      meta: { keepAlive: false }
    },
    {
      path: "/teacher",
      name: "Subteacher",
      component: Subteacher,
    },
    {
      path: "/teacherDetail/:id",
      name: "TeacherDetail",
      component: TeacherDetail,
      props: true,
    },
    {
      path: "/job",
      name: "Job",
      component: Job,
      meta: { keepAlive: true }
    },
    {
      path: "/jobDetail",
      name: "SemesterDetail",
      component: SemesterDetail,
    },
    {
      path: "/Information",
      name: "Information",
      component: Information,
      
    },
    {
      path: "/stardetail",
      name: "StarDetail",
      component: StarDetail
      // meta: { keepAlive: true }
    },
    {
      path: "/newsDetail/:id/:type",
      name: "NewsDetail",
      component: newsDetail,
      props: true
      // meta: { keepAlive: true }
    },
    {
      path: "/CommonQuestion",
      name: "CommonQuestion",
      component: CommonQuestion,
    },
    {
      path: "/ClassPage/:id",
      name: "ClassPage",
      component: ClassPage,
      props: true
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/video",
      name: "Video",
      component: Video,
 
    },
    {
      path: "/wechat",
      name: "Wechat",
      component: Wechat
    }
  ]
});
