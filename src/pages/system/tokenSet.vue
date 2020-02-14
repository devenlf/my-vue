<template>
    <div class="setTokenDiv">
        <p class="title">设置token</p>
        <div><span class="fontBold">Token</span>
        <input type="text" placeholder="请输入token" v-model.trim="formData.token"></div>
        <div><span class="fontBold">Cookies</span>
        <input type="text" placeholder="请输入cookies" v-model.trim="formData.cookies"></div>
        <button @click="submitToken">提交</button>
    </div>
</template>
<script>
import '../../assets/common/css/list.less';
export default {
    data(){
        return{
            formData:{
                token:'',
                cookies:''
            }
        }
    },
    methods:{
        async submitToken(){
            const  {code}= await this.$system.setTokenIndo(this.formData);
            if(code==200){
                this.$message.success('修改成功')
            }
        }
    }
}
</script>
<style lang="less" scoped>
    
</style>