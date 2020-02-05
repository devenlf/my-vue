<template>

  <div id="app">
    <el-container>
    <el-header class="system-header">
      <div class="logo">  
        <img src="@/assets/common/11.png" alt="">
      </div>
      <div class="user-info">
        <span>账户名:guanggao</span>
        <span>用户ID:123456</span>
      </div>     
    </el-header>

    <el-container class="container-box">
      <el-aside>
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>系统设置</template>
        <el-menu-item-group>
          <template slot="title">金币设置</template>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">订单去重</template>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>数据分析</template>
          <el-menu-item-group>
          <template slot="title">站点列表</template>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">金币抵扣列表</template>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>错误分析</template>
         <el-menu-item-group>
          <template slot="title">图表</template>
        </el-menu-item-group>
         <el-menu-item-group>
          <template slot="title">Vue错误列表</template>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>






    <el-main>Main
          <router-view/>

    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      
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
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    width: 80%;
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
</style>
