<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe>
            <mt-swipe-item v-for="item in slider_show_list" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>            
        </mt-swipe>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    data() {
        return {
            slider_show_list: []
        }
    },
    created() {
        this.get_slider_show()
    },
    methods: {        
        get_slider_show() { // 获取轮播图
            this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
                if(result.body.status === 0){
                    //成功
                    this.slider_show_list = result.body.message
                }else{
                    //失败
                    Toast('加载轮播图失败... ');
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    overflow: hidden;
    position: relative;
    height: 200px;    

    .mint-swipe-item{
        &:nth-child(1){
            background-color: #922;
        }
        &:nth-child(2){
            background-color: #292;
        }
        &:nth-child(3){
            background-color: #229;
        }
        &:nth-child(4){
            background-color: #ddd;
        }
        position: relative;
        overflow: hidden;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
