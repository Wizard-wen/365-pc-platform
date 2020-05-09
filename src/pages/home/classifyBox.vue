<template>
    <div class="classify-box">
        <div class="pic-box">
            <img class="pic" :src="productList.banner_url" alt="">
        </div>
        <div class="title">{{productList.name}}</div>
        <div class="classify-content">
            <div 
                @click="goClassifyContent(item)"
                v-for="(item, index) in productList.children" :key="index"
                class="classify-content-item">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // 商品列表
        productList: {
            type: Object,
            default(){return {}}
        },
    },
    methods: {
        goClassifyContent(item){
            this.$router.push({
                path: '/classifyContent',
                query: {
                    id: item.id
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .classify-box{
        float: left;
        width: 380px;
        height: 240px;
        margin: 0 10px 10px 10px;
        &:after{
            content: '';
            display: block;
            clear: both;
        }
        .pic-box{
            width: 380px;
            height: 120px;
            .pic{
                width: 380px;
                height: 120px;
            }
        }
        .title{
            padding: 0 20px;
            margin-top: 10px;
            line-height: 30px;
            color: #ff7832;
            font-size: 16px;
        }
        .classify-content{
            padding: 10px;
            &:after{
                content: '';
                display: block;
                clear: both;
            }
            .classify-content-item{
                // padding: 0 px;
                float: left;
                height: 25px;
                text-align: center;
                line-height: 25px;
                width: 84px;
                margin: 0 5px 5px 0;
                background: #f5f5f5;
                border-radius: 4px;
                cursor: pointer;
            }
        }
    }
</style>