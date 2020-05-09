<template>
    <div class="classify">
        <div class="classify-header">
            <div class="header">
                <img @click="gohome" class="logo" src="./classifyContent/images/logo.jpg" alt="">
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
        <div class="tab">
            <div 
                :class="['list',currentTab == item.id? 'list-active':'']" v-for="(item, index) in tabList" :key="index"
                @click="changeTab(item)">{{item.name}}</div>
        </div>
        <div class="classify-box">
            <div class="classify-title">
                {{currentService.name}}&nbsp;·&nbsp;<span class="sub-title">提供专业的服务</span>
            </div>
            
            <div class="content" v-if="currentTab == 1">
                
                <img 
                    v-for="(item, index) in classifyContent.files" :key="index" 
                    :src="item" alt="">
            </div>
            <div class="content" v-if="currentTab == 2">
                <div 
                    class="service-item" 
                    v-for="(item, index) in classifyContent.data" :key="index">
                    <div class="icon-box">
                        <img class="icon" v-if="item.icon" :src="item.icon" alt="">
                        <img class="icon" v-else src="./classifyContent/images/icon-no.svg" alt="">
                    </div>
                    <div class="base">
                        <div class="line">姓名：{{item.name}}</div>
                        <div class="line">年龄：{{item.age}}</div>
                    </div>
                    <div class="interview" @click="openInterViewDialog">预约面试</div>
                </div>
            </div>
            
        </div>
        <interview-dialog
            :title="'预约面试'"
            :logDialogVisible="isInterviewDialogShow"
            v-if="isInterviewDialogShow"
            @closeLogDialog="isInterviewDialogShow = false"></interview-dialog>
    </div>
</template>

<script>
import {homeService} from '@/service/index.js'
import {$utils} from '@/utils/index.js'
import interviewDialog from './classifyContent/interviewDialog.vue'
export default {
    components: {
        interviewDialog,
    },
    data(){
        return {
            classifyContent: {
                data: [],
                files: [],
            },
            currentTab: 1,
            tabList:[{id: 1, name: '服务说明'},{id: 2, name: '管家风采'}],
            productList: [],
            isInterviewDialogShow: false,
            currentService: {}
        }
    },
    methods: {
        async getClassifyContent(){
            let id = this.$route.query.id
            await homeService.getClassifyContent(id).then(data =>{
                this.classifyContent.data = data.data.data.data
                this.classifyContent.files = data.data.data.files

            }) 
        },
        async getProductList(){
            await homeService.getProductList().then(data =>{
                this.productList = data.data.data
                let id = this.$route.query.id
                let productList = this.productList
                this.currentService = $utils.findTargetId(id,productList)
            })
            
        },
        goClassifyContent(item){
            this.$router.push({
                path: '/classifyContent',
                query: {
                    id: item
                }
            })
        },
        async init(){
            await this.getClassifyContent()
            await this.getProductList()
        },
        gohome(){
            this.$router.push('/')
        },
        changeTab(item){
            this.currentTab = item.id
        },
        openInterViewDialog(){
            this.isInterviewDialogShow = true
        }
    },

    watch: {
        '$route' (to, from) { //监听路由是否变化
            if(to.query.id != from.query.id){
                this.id = to.query.id;
                this.init();//重新加载数据
            }
        }
    },
    created() {
        if(this.$route.query) {
            this.id = this.$route.query.id;
            this.init();
        }
    },
    async mounted(){
        await this.init()
    }
}
</script>

<style scoped lang="scss">
    .classify{
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
                    cursor: pointer;
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
        .classify-box{
            width: 100%;
            min-height: 100vh;
            background: #f5f5f5;
            
            
            .classify-title{
                margin: 0 auto;
                width: 1000px;
                height: 100px;

                line-height: 100px;
                font-size: 30px;
                font-weight: bold;
                .sub-title{
                    color: #333;
                    font-size: 20px;
                    font-weight: normal;
                }
            }
            .content{
                width: 1000px;
                margin: 0 auto;
                position: relative;
                img{
                    width: 1000px;
                }
                .service-item{
                    height: 200px;
                    width: 100%;
                    background: #fff;
                    margin-bottom: 20px;
                    position: relative;
                    .icon-box{
                        position: absolute;
                        left: 0;
                        top: 0;
                        height: 200px;
                        width: 200px;
                        .icon{
                            height: 200px;
                            width: 200px;
                        }
                    }
                    .base{
                        position: absolute;
                        left: 220px;
                        top: 10px;
                        .line{
                            line-height: 40px;
                            font-size: 18px;
                        }
                    }
                    .interview{
                        position: absolute;
                        right: 20px;
                        bottom: 20px;
                        width: 166px;
                        height: 48px;
                        line-height: 48px;
                        text-align: center;
                        background: #ff7832;
                        color:#fff;
                        cursor: pointer;
                    }
                }
            }
            
        }
    }
    .mini{
        position: fixed;
        left: calc(50% + 520px);
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
        left: calc(50% + 520px);
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
    .tab{
        position: fixed;
        left: calc(50% - 580px);
        top: 220px;
        width: 60px;
        height: 60px;
        background: rgba(255,255,255,1);
        .list{
            text-align: center;
            line-height: 30px;
            // border-bottom: 1px solid #ccc;
            font-size: 12px;
        }
        .list-active{
            background: #ff7832;
            color: #fff;
        }
    }
</style>