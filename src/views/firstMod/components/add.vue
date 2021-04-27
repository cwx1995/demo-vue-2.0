<template>
    <div class="box">
        <div class="back" @click="callback">
            返回
        </div>
        <div class="center">
            <div class="addScheduler">{{title}}</div>
            <div class="formNum">
                <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="调度器名称" prop="name" required>
                        <el-input type="name" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="说明" prop="information">
                        <el-input type="information" v-model="ruleForm.information"></el-input>
                    </el-form-item>
                    <el-form-item label="执行时间段" class="timer" prop="time">
                        <el-date-picker v-model="ruleForm.time" type="daterange" :picker-options="pickerOptions" range-separator="--" start-placeholder="开始日期" end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="定时设置" class="settime" prop="setTiming" required>
                        <el-time-select v-model="ruleForm.setTiming" :picker-options="{
                                    start: '08:30',
                                    step: '00:15',
                                    end: '14:30'
                                    }">
                        </el-time-select>
                        <div class="order">每周五下午2点30分</div>
                    </el-form-item>
                    <el-form-item label="采集任务选择" prop="collect">
                        <el-select v-model="ruleForm.collect" multiple filterable allow-create default-first-option placeholder="请选择文章标签">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="btn">
                        <div class="cancel" @click="cancel">
                            取消
                        </div>
                        <div class="save" @click="saveNum(ruleForm)">
                            保存
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            var validateName =(rule,value,callback)=> {
                if(value === ''){
                   callback(new Error('请输入名称')) 
                }else {
                    callback()
                }
            };
            var validateSettime = (rule,value,callback) => {
                if(value === ''){
                   callback(new Error('请设置时间')) 
                }else {
                   
                    // if(this.ruleForm.setTiming !== ''){
                    //     this.$ref.ruleForm.validateField('setTiming')
                    // }
                    // this.$refs.ruleForm.validateField('name')
                    callback()
                }
            }
            return {
                title: '',
                ids: '',
                ruleForm: {
                    name: '',
                    information: '',
                    time: '',
                    setTiming: '',
                    collect: []
                },
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                options: [{
                    value: '1',
                    label: '黄金糕'
                }, {
                    value: '2',
                    label: '双皮奶'
                }, {
                    value: '3',
                    label: '蚵仔煎'
                }],
                value: '',
                flag: '',
                rules: {
                    name: [{
                        validator: validateName,
                        trigger: 'blur'
                    }],
                    setTiming: [{
                        validator: validateSettime,
                        trigger: 'blur'
                    }]
                }
            }
        },
        created() {
            this.ids = this.$route.query.id
            this.flag = this.$route.query.flag
            if (this.flag === 'add') {
                this.title = '新增调度器'
            } else if (this.flag === 'edit') {
                this.title = '编辑调度器'
            }
        },
        methods: {
            callback() {
                this.$router.go(-1)
            },
            saveNum(form) {
                console.log(form)
                this.$message('已保存');
                this.$router.go(-1)
            },
            cancel() {
                console.log('取消')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        .back {
            height: 50px;
            line-height: 50px;
            font-size: 14px;
            margin-left: 20px;
            background-color: #f2f2f2;
        }
        .center {
            background-color: #fff;
            height: 100%;
            padding: 15px;
            margin: 15px;
            position: relative;
            .addScheduler {
                background-color: skyblue;
                height: 50px;
                line-height: 50px;
                font-size: 14px;
                padding-left: 10px;
                border-radius: 3px;
            }
            .formNum {
                padding-top: 20px;
                position: absolute;
                left: 32%;
                >>>.el-input__inner {
                    width: 300px;
                    height: 30px;
                    line-height: 30px;
                }
                >>>.el-date-editor .el-range__icon {
                    height: 32px;
                }
                >>>.el-date-editor .el-range-separator {
                    height: 32px;
                }
                >>>.el-input__prefix,
                .el-input__suffix {
                    right: -330px;
                }
                element.style {
                    margin-left: 0;
                }
                .cancel,
                .save {
                    width: 100px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    border-radius: 5px;
                    display: inline-block;
                    color: #fff;
                    font-size: 12px;
                    background-color: #409eff;
                    margin: 0 20px;
                }
                .el-form-item__content {
                    text-align: center;
                }
                .order {
                    margin-top: 5px;
                    font-size: 10px;
                    color: #b4bccc;
                    line-height: 0;
                }
            }
        }
    }
</style>