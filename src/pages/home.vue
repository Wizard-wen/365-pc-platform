<template>
<div class="product">
    <div class="classify-header">
        <div class="header">
            <img class="logo" src="./classifyContent/images/logo.jpg" alt="">
            <div class="des">生活服务平台</div>
            <div class="hot-box">
                <div class="hot-box-content">
                    <div class="hot-item" @click="goClassifyContent(6)">保姆</div>
                    <div class="hot-item" @click="goClassifyContent(7)">小时工</div>
                    <div class="hot-item" @click="goClassifyContent(8)">白班保姆</div>
                </div>
            </div>
            <div class="phone">
                <span>4006625365</span>
            </div>
        </div>
    </div>

    <div class="product-box">
        <div class="mini">
            <img src="./classifyContent/images/client-mini.jpg" alt="">
            <div>
                <p>扫码关注小程序</p>
                <p>下单便捷又实惠</p>
            </div>
        </div>
        <div class="mini-service">
            <img src="./classifyContent/images/service-mini.jpg" alt="">
            <div>
                <p>扫码关注小程序</p>
                <p>加入我们找工作</p>
            </div>
        </div>
        <div class="banner-list">
            <div class="banner" @click="goClassifyContent(adPosition['firstpage-icon-1'].resource[0].client_category_id)">
                <img :src="adPosition['firstpage-icon-1'].resource[0].url" alt="">
                <p class="des">{{ findTargetId(adPosition['firstpage-icon-1'].resource[0].client_category_id)}}</p>
            </div>
            <div class="banner" @click="goClassifyContent(adPosition['firstpage-icon-2'].resource[0].client_category_id)">
                <img :src="adPosition['firstpage-icon-2'].resource[0].url" alt="">
                <p class="des">{{ findTargetId(adPosition['firstpage-icon-2'].resource[0].client_category_id)}}</p>
            </div>
            <div class="banner" @click="goClassifyContent(adPosition['firstpage-icon-3'].resource[0].client_category_id)">
                <img :src="adPosition['firstpage-icon-3'].resource[0].url" alt="">
                <p class="des">{{ findTargetId(adPosition['firstpage-icon-3'].resource[0].client_category_id)}}</p>
            </div>
            <div class="banner" @click="goClassifyContent(adPosition['firstpage-icon-4'].resource[0].client_category_id)">
                <img :src="adPosition['firstpage-icon-4'].resource[0].url" alt="">
                <p class="des">{{ findTargetId(adPosition['firstpage-icon-4'].resource[0].client_category_id)}}</p>
            </div>
        </div>
        <div class="product-content">
            <classify-box 
                v-for="(item, index) in productList"
                :key="index"
                :productList="item"></classify-box>
        </div>
        
    </div>
</div>
    
</template>
<script>


import {homeService} from '@/service/index.js'
import classifyBox from './home/classifyBox.vue'
export default {
    components: {
        classifyBox,
    },
    data(){
        return {
            productList: [],
            adPosition: {},
            workerConfigForm: {},
        }
    },
    methods:{
        testClick(){
            alert(1)
        },
        goClassifyContent(item){
            this.$router.push({
                path: '/classifyContent',
                query: {
                    id: item
                }
            })
        },
        /**
         * 查找属性组件字段
         */
        findTargetId(targetId){
            // console.log(targetId,arr)
            var arr = this.workerConfigForm.skill
            var targetObject = null;
        
            function findTagId(arr) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].id == targetId) {
                        targetObject = arr[i]
                    }
                    if (arr[i].children) {
                        findTagId(arr[i].children)
                    }
                }
            }
            findTagId(arr)
            if (targetObject != null) {
                return targetObject.name
            }
        }
    },
    async mounted(){
        await homeService.getProductList().then(data =>{
            this.productList = data.data.data
        })
        await homeService.getAdPosition().then(data =>{
            this.adPosition = data.data.data
        })
        await homeService.getWorkConfigForm().then(data =>{
            this.workerConfigForm = data.data.data
        })
    }
}
</script>

<style scoped lang="scss">
.product{
    .classify-header{
        height: 100px;
        width: 100%;
        background: #fff;
        .header{
            width: 1200px;
            height: 100px;
            margin: 0 auto;
            position: relative;
            .logo{
                position: absolute;
                left: 0;
                margin: 10px;
                height: 80px;
                width: 130px;
            }
            .des{
                position: absolute;
                left: 140px;
                bottom: 10px;
                width: 300px;
                height: 50px;
                color: #ff7832;
                line-height: 50px;
                font-weight: bold;
                font-size: 35px;
            }
            .hot-box{
                position: absolute;
                right: 20px;
                bottom: 15px;
                height: 30px;
                width: 225px;
                .hot-box-content{
                    display: flex;
                    .hot-item{
                        height: 30px;
                        line-height: 30px;
                        width: 60px;
                        text-align: center;
                        margin-right: 15px;
                        cursor: pointer;
                        &:hover{
                            color: #ff7832;
                        }
                    }
                }
            }
            .phone{
                background: url(./home/images/phone.svg) no-repeat;
                background-size: 30px 30px;
                background-position: 0 0;
                
                position: absolute;
                text-indent: 40px;
                top: 10px;
                right: 20px;

                height: 30px;
                line-height: 30px;
                width: 200px;
                color: #ff7832;
                font-size: 25px;
            }
        }
    }
    .test{
        height: 100px;
        width: 800px;
        border: 1px dashed #ccc;
        text-align: center;
        line-height: 100px;
        font-size: 20px;
        color: #ff7832;
        margin: 0 auto;
        background: #fff;
    }
    .product-box{
        width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        background: #fff;
        position: relative;
        .mini{
            position: fixed;
            left: calc(50% + 620px);
            top: 220px;
            width: 106px;
            height: 156px;
            background: rgba(255,255,255,1);
            img{
                margin: 12px 13px 7px 13px;
                padding: 0px;
                height: 80px;
                width: 80px;
            }
            p{
                display: block;
                text-align: center;
                font-size: 13px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(51,51,51,1);
                line-height: 22px;
            }
        }
        .mini-service{
            position: fixed;
            left: calc(50% + 620px);
            top: 396px;
            width: 106px;
            height: 156px;
            background: rgba(255,255,255,1);
            img{
                margin: 12px 13px 7px 13px;
                padding: 0px;
                height: 80px;
                width: 80px;
            }
            p{
                display: block;
                text-align: center;
                font-size: 13px;
                font-family: PingFangSC-Medium;
                font-weight: 500;
                color: rgba(51,51,51,1);
                line-height: 22px;
            }
        }
        .banner-list{
            display: flex;
            .banner{
                height: 180px;
                width: 300px;
                padding: 25px 100px;
                cursor: pointer;
                img{
                    height: 100px;
                    width: 100px;
                }
                .des{
                    height: 30px;
                    width: 100%;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }
        .product-content{
            &:after{
                content: '';
                display: block;
                clear: both;
            }
        }
    }
}

</style>




