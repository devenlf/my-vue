<template>

  <div id="app">
    <el-container style="height:100vh;">
    <el-header class="system-header">
      <div class="logo">  
        <img src="@/assets/common/11.png" alt="">
      </div>
      <div class="user-info">
        <span>账户名:{{userInfo.display_name}}</span>
        <span>用户ID:{{userInfo.id}}</span>
      </div>     
    </el-header>
    <el-container class="container-box">


      <el-aside>
    <el-menu>
      <template v-for="(item,index) in menuList">
        <el-submenu :index="item.order" :key="index">
        <template slot="title"><i :class="item.icon"></i>{{item.text}}</template>
          <el-menu-item v-for="(item2,index2) in item.submenu" 
          :index="item2.order" 
          :key="index2">
            <router-link class="rouLink" :to="item2.router">
              {{item2.text}}
            </router-link>
            </el-menu-item>
      </el-submenu>
      </template>
    </el-menu>
  </el-aside>
    <el-main>
          <router-view/>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userInfo:{},
      menuList:this.$dataConfig.menuList
    }
  },
  created(){
    this.getData();
    console.log(this.$dataConfig)
  },
  methods:{
    async getData(){
      const { code , data }=await this.$api.getUserInfo();
        if(code==200){
            this.userInfo=data;
        }     
    }
  } 
}
</script>

<style lang="less">

html,body{
margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .system-header{
    height: 64px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 0 20px;
    .logo{
      width: 123px;
      height: 36px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .user-info{
      color:#666;
    }
  }ß
  
  .el-aside {
    background-color: rgb(238, 241, 246);
    color: #333;
    text-align: center;
    width: 10%;
    border-right: 0px;
  }
  
  .el-main {
    // background-color: #E9EEF3;
    // color: #333;
    // text-align: center;
    // width: 80%;
    border-left: solid 1px #e6e6e6;
  }
  
  .container-box{
    display: flex;
    width: 100%;
    height: 100%;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .rouLink{
    text-decoration: none;
    color:rgb(7, 6, 6);
  }
  // .rouLink .-active{
  //   color:red;
  // }
   .el-menu .-active {
  color: #2233b6;
}
</style>
