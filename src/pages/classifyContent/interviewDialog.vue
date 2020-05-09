<template>
    <el-dialog 
        :title="title" 
        :visible.sync="logDialogVisible"
        :show-close="false"
        :close-on-press-escape="false"
        :close-on-click-modal="false">
        <el-form :model="logForm" :label-width="'120px'" ref="logForm" :rules="logRules">
            <el-form-item label="姓名" prop="name">
                <el-input placeholder="请输入您的姓名" :maxlength="100" autosize v-model="logForm.name" ></el-input>
            </el-form-item>
            <el-form-item label="电话" prop="phone">
                <el-input placeholder="请输入您的电话" :maxlength="100" autosize v-model="logForm.phone"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeLogDialog">取 消</el-button>
            <el-button type="primary" @click="commitLog('logForm')">提交</el-button>
        </div>
    </el-dialog>
</template>
<script>
import {homeService} from '@/service/index.js'
export default {
    props: {
        //弹出框显示隐藏
        logDialogVisible: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '日志'
        }
    },
    data(){
        return {
            //日志信息
            logForm : {
                name: '',//用户id
                phone: '',//日志信息
            },
            //日志表单验证
            logRules: {
                phone: [
                    { required: true, message: '电话不能为空', trigger: 'blur' }
                ]
            }
        }
    }, 
    methods: {
        /**
         * 提交日志信息
         */
        async commitLog(formName){  
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    let logForm = {
                        ...this.logForm
                    }
                    await homeService.submitRequire(logForm).then(data =>{
                        if(data.data.code == '0'){
                            //关闭日志弹出框
                            
                            this.$message({
                                type: 'success',
                                message: '预约成功!'
                            })
                            this.$emit('closeLogDialog')
                        }
                    })


                    
                } else {
                    return false;
                }
            });
            
        },  
        //关闭日志弹框
        closeLogDialog(){
            //关闭日志弹出框
            this.$emit('closeLogDialog')
        }
    }
}
</script>
<style lang="scss" scoped>


</style>


