<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe>
            <mt-swipe-item v-for="item in slider_show_list" :key="item.url">
                <img :src="'http://www.sosososolong.com/poorcms/images' + item.img.url" alt="">
            </mt-swipe-item>            
        </mt-swipe>

        <!--九宫格 到 六宫格 改造-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu1.png" />
                    <div class="mui-media-body">新闻资讯</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu2.png" />
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu3.png" />
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu4.png" />
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu5.png" />
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/menu6.png" />
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>            
        </ul>
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
            this.$http.get('http://www.sosososolong.com/poorcms/banner/1').then(result => {                
                if(result.body.id > 0) {
                    // 成功
                    this.slider_show_list = result.body.items
                }else{
                    // 失败
                    Toast('加载轮播图失败 ...')
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
.mui-grid-view.mui-grid-9 {
    margin: 0;
    padding: 0;
    border: 0;
    background-color: #fff;
    img {
        width: 60px;
    }
    .mui-media-body {
        font-size: 13px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
    font-size: 9px;
}
</style>
