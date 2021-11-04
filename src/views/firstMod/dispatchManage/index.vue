<template>
    <div class="firstMod">
        <div class="break">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>调度管理</el-breadcrumb-item>
                <el-breadcrumb-item>调度设置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="query">
            <el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
                <el-row :gutter="15">
                <el-col :md="8" :lg="8" class="five" >
                <el-form-item label="调度器信息：" prop="name">
                                    <el-input v-model="formInline.name" placeholder="调度器编号/名称/说明"></el-input>
                                </el-form-item>
                </el-col>
                 <el-col :md="8" :lg="8" class="four">
                     <el-form-item label="适用系统：" prop="system">
                    <el-select v-model="formInline.system" placeholder="数据资产">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                 <el-col :md="8" :lg="8" class="four">
                    <el-form-item label="启用状态：" prop="status">
                    <el-select v-model="formInline.status" placeholder="启用">
                        <el-option v-for="item in option" :key="item.value" :latimerbel="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                </el-col>
                 <el-col :md="10" :lg="10" class="five">
                    <el-form-item label="执行时间段：" class="timer" v-if="show" prop="time">
                    <el-date-picker v-model="formInline.time" value-format="yyyy-MM-dd" format="yyyy-MM-dd" type="daterange" :picker-options="pickerOptions" range-separator="--" start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                </el-col>
                 <el-col :md="8" :lg="8" >
                    <el-form-item class="button">
                    <div class="queryBtn" @click="queryInf('1')">
                        <i class="el-icon-search"></i> 查询
                    </div>
                    <div class="resetBtn" @click="resetForm('formInline')">
                        <i class="el-icon-refresh-right"></i> 重置
                    </div>
                    <div class="packup" @click="packup">
                {{show?'收起':'展开'}}
                <i class="el-icon-arrow-down" v-if="show"></i>
                <i class="el-icon-arrow-up" v-if="!show"></i>
            </div>
                </el-form-item>
                </el-col>  
                </el-row>
            </el-form>
            
        </div>
        <div class="box">
            <div class="list">调度器列表</div>
            <div class="add" @click="addNum">
                <i class="el-icon-plus"></i> 新增
            </div>
        </div>
        <div class="form">
            <el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#E8ECF5'}">
                <el-table-column align="center" prop="num" label="序号" width="100">
                </el-table-column>
                <el-table-column align="center" prop="serial" label="调度器编号" width="120">
                </el-table-column>
                <el-table-column align="center" prop="name" label="调度器名称" width="220">
                </el-table-column>
                <el-table-column align="center" prop="system" label="使用系统" width="220">
                </el-table-column>
                <el-table-column align="center" prop="time" label="执行时间段" width="300">
                    <template slot-scope="scope">
                        {{scope.row.startTime + '--' + scope.row.endTime}}
            </template>
                </el-table-column>
                <el-table-column align="center" prop="timeSet" label="定时设置" width="220">
                </el-table-column>
                <el-table-column align="center" label="启用状态" width="120">
            <template slot-scope="scope">
            {{sta[scope.row.states]}}
            </template>
                </el-table-column>
                <el-table-column align="center" fixed="right" label="操作" width="220">
            <template slot-scope="scope" align="center">
            <el-button @click="handleClick(scope.row)" type="text" size="small">
                查看
            </el-button>
            <el-button type="text" size="small" @click="handleEdit(scope.row.id)"><i class="el-icon-edit"></i></el-button>
            <el-button type="text" size="small" @click="handleDelete(scope.row.id)"><i class="el-icon-delete"></i></el-button>
            </template>
                </el-table-column>
            </el-table>
            	<div class="page">
			<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[10, 20, 30, 40]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="total">
			</el-pagination>
		</div>
        </div>
        <div class="wrapper">
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        
  			<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
			</div>
    		</el-dialog>
        </div>
	
    </div>
</template>

<script>
    export default {
        name:'firstMod',
        data() {
            return {
                formInline: {
                    name: '',
                    time: '', //时间选择器的值 数组
                    system: '',
                    status: ''
                },
                sta: {
                    '1': '未启用',
                    '2': '已启用',
                    '3': '已禁用'
                },
                options: [{
                    value: '0011',
                    label: '黄金糕'
                }, {
                    value: '0022',
                    label: '双皮奶'
                }, {
                    value: '0033',
                    label: '蚵仔煎'
                }],
                option: [{
                        value: '选项1',
                        label: '启用'
                    },
                    {
                        value: '选项2',
                        label: '禁用'
                    }
                ],
                valueone: '',
                pickerOptions: {
                    shortcuts: [{
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                show: true,
                tableData: [],
                dialogTableVisible: false,
                dialogFormVisible: false,
                currentPage: 1,
                total: 50,
                pageSize: 10
            }
        },
        created() {
            this.queryInf()
        },
        methods: {
            // 获取列表
            getData(params) {
                console.log(params,'getData入参')
                this.$post('getData', params).then((res) => {
                    console.log(res)
                    if (res.code === 200) {
                        this.tableData = res.result.tableData
                    } else {}
                }).catch((err) => {
                    console.log(error)
                })
            },
            handleNodeClick(data) {
                console.log(data);
            },
            // 查询
            queryInf(res) {
                if (res === '1') {
                    this.currentPage = 1
                    this.pageSize = 10
                }
                let data = {
                    name: this.formInline.name,
                    system: this.formInline.system,
                    startTime: this.formInline.time[0],
                    endTime: this.formInline.time[1],
                    status: this.formInline.status,
                    current: this.currentPage,
                    pageSize: this.pageSize
                }
                console.log(data, 'data')
                this.getData(data)
            },
            // 重置
            resetForm(form) {
                // this.$refs[form].resetFields();
                this.$refs.formInline.resetFields();
                this.currentPage = 1
                this.pageSize = 10
                this.queryInf()
            },
            // 收起
            packup() {
                this.show = !this.show
            },
            // 点击查看
            handleClick(row) {
                console.log(row);
            },
            // 删除
            handleDelete(id) {
                let params = {
                    id:id
                }
                console.log(params, 'delData 入参')
                this.$post('delData', params).then((res) => {
                    if (res.code == 200) {
                        this.tableData.splice(params,1);
                        this.$message({
                            showClose: true,
                            message: '删除成功',
                            type: 'success'
                        });
                    } 
                }).catch((err) => {
                    console.log(error)
                 })
            },
            // 编辑
            handleEdit(id) {
                console.log(id,'编辑id')
                       this.$router.push({
                        path: '/firstMod/dispatchManageAdd',
                        query: {
                            'id': id,
                            flag: 'edit'
                        }
                    })
            },
            // 每页显示多少条数据
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val;
                // 重置当前页为1
                this.handleCurrentChange(1)
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
                this.queryInf()
            },
            //新增
            addNum() {
                this.$router.push({
                    path: '/firstMod/dispatchManageAdd',
                    query: {
                        id: '',
                        flag: 'add'
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .firstMod {
        .break {
            >>>.el-breadcrumb {
                line-height: 60px;
                height: 60px;
                margin-left: 20px;
            }
        }
        .query {
            overflow: hidden;
            background-color: #fff;
            margin: 0 20px;
            padding: 15px;
            padding-bottom: 0;
            >>>.el-input .el-input__inner {
                height: 30px;
                line-height: 30px;
                font-size: 12px;
            }
            .el-input__prefix,
            .el-input__suffix {
                top: 5px;
            }
            >>>.el-form-item {
                margin-bottom: 15px;
                width: 100%;
            }
            .four{
                >>>.el-form-item__label {
                color: #333;
                padding: 0;
                width: 75px;
            } 
             >>>.el-form-item__content{
                width: calc(100% - 75px);
            }
            }
            .five{
                    >>>.el-form-item__label {
                color: #333;
                padding: 0;
                width: 85px;
            }  
             >>>.el-form-item__content{
                width: calc(100% - 85px);
            }
            }
             >>>.el-select{
                width: 100%;
            }
            .el-date-editor .el-range-input,
            .el-date-editor .el-range-separator {
                height: 0;
            }
            .el-input__icon {
                height: 0;
            }
            .button {
                >>>.el-form-item__content{
                    width: 100%;
                }
                .queryBtn,
                .resetBtn {
                    width: 65px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border-radius: 5px;
                    display: inline-block;
                    color: #fff;
                    font-size: 12px;
                    background-color: #409eff;
                    cursor: pointer;
                    margin-left: 10px;
                }
            }
            .el-button--primary {
                width: 50px;
                height: 20px;
                line-height: 20px;
                vertical-align: middle;
                span {
                    display: block;
                }
            }
            .timer {
                
            >>> .el-range-editor.el-input__inner{
                height: 30px;
                width: 100%;
            }
            >>> .el-date-editor .el-range__icon{
                height: 30px;
                line-height: 30px;
            }
            >>> .el-date-editor .el-range-separator{
                height: 30px;
                line-height: 30px;
            }
            }
            .packup {
                display: inline-block;
                margin-left: 5px;
                height: 20px;
                font-size: 12px;
                color: #409eff;
            }
        }
        .box {
            height: 50px;
            line-height: 50px;
            margin: 0 20px;
            background-color: #fff;
            margin-top: 20px;
            padding-left: 10px;
            font-size: 14px;
            color: #333;
            border-bottom: 1px solid #ccc;
            position: relative;
        }
        .add {
            position: absolute;
            right: 50px;
            top: 10px;
            width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 5px;
            display: inline-block;
            color: #fff;
            font-size: 12px;
            background-color: #409eff;
            cursor: pointer;
        }
        .el-icon-edit {
            width: 20px;
            height: 20px;
        }
        .edit {
            position: absolute;
            right: 120px;
            top: 10px;
            width: 50px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border-radius: 5px;
            display: inline-block;
            color: #fff;
            font-size: 12px;
            background-color: #409eff;
            cursor: pointer;
        }
        .form {
            padding: 10px;
            margin: 0 20px;
            background-color: #fff;
        }
        .page {
            height: 60px;
            background-color: #fff;
            text-align: center;
            margin-top: 20px;
            padding-top: 10px;
        }
    }
</style>