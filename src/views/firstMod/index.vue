<template>
    <div>
        <!-- 示例 -->
        <!-- 共计{{count}}条
                                          <div @click="getData">
                                              请求数据
                                          </div> -->
        <div class="break">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>调度管理</el-breadcrumb-item>
                <el-breadcrumb-item>调度设置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="query">
            <el-form :inline="true"  :model="formInline" class="demo-form-inline">
                <el-form-item label="调度器信息：">
                    <el-input v-model="formInline.name" placeholder="调度器编号/名称/说明"></el-input>
                </el-form-item>
                <el-form-item label="适用系统：">
                    <el-select v-model="formInline.system" placeholder="数据资产">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="启用状态：">
                    <el-select v-model="formInline.status" placeholder="启用">
                        <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="button">
                    <el-button type="primary" @click="queryInf(formInline)">查询</el-button>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button type="primary">重置</el-button>
                </el-form-item>
                <el-form-item label="执行时间段：" class="timer" v-if="show">
                    <el-date-picker v-model="formInline.time" type="daterange" :picker-options="pickerOptions" range-separator="--" start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
        </div>
        <div class="list">调度器列表</div>
        <div class="form">
            <el-table :data="tableData" border  style="width: 100%">
                <el-table-column align="center" prop="num" label="序号" width="100">
                </el-table-column>
                <el-table-column prop="serial" label="调度器编号" width="120">
                </el-table-column>
                <el-table-column prop="name" label="调度器名称" width="220">
                </el-table-column>
                <el-table-column prop="system" label="使用系统" width="220">
                </el-table-column>
                <el-table-column prop="time" label="执行时间段" width="300">
                </el-table-column>
                <el-table-column prop="timing" label="定时设置" width="220">
                </el-table-column>
                <el-table-column prop="states" label="启用状态" width="120">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="220">
                    <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button type="text" size="small" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="wrapper">
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        
  			<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
			</div>
    		</el-dialog>
        </div>
		<div class="page">
			<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[100, 200, 300, 400]"
			:page-size="100"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400">
			</el-pagination>
		</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //    count:'' 
                formInline: {
                    name: '',
                    system: '',
                    status: '',
                    time: ''
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
                show: false,
                tableData: [{
                    id:'1',
                    num: '03',
                    serial: '12',
                    name: '质量调度',
                    system: '数据',
                    time: 'yyyy-mm-dd -- yyyy-mm-dd',
                    timing: '2021-4-23 12:21:13',
                    states: '启用',
                    option: 'a'
                }, {
                    id:'2',
                    num: '06',
                    serial: '008',
                    name: '规则调度',
                    system: '质量',
                    time: 'yyyy-mm-dd -- yyyy-mm-dd',
                    timing: '2021-4-23 12:21:13',
                    states: '启用',
                    option: 'a'
                }],
				dialogTableVisible: false,
        		dialogFormVisible: false,
				currentPage:2
            }
        },
        created() {
            // this.getData()
        },
        methods: {
            // 示例模拟请求接口
            // getData(){
            //     let data={
            //     }
            //     console.log(data,'data')
            //     this.$post('getData',data).then((res)=>{
            //         if(res.code==='200'){
            //             this.count=res.result.count.count
            //         }else{
            //             alert('error')
            //         }
            //     }).catch((err)=>{
            //         console.log(err,'222')
            //     })
            // }
            handleNodeClick(data) {
                console.log(data);
            },
            queryInf(res) {
                console.log(res)
            },
            // 点击查看
            handleClick(row) {
                console.log(row);
            },
            handleDelete(index,row){
                console.log(index)
                // this.tableData.splice(index,1)
            },
			handleEdit(row){
				console.log(row)
				this.dialogFormVisible = true
			},
			 handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			}
        }
    }
</script>

<style>
    .break .el-breadcrumb {
        line-height: 60px;
        height: 60px;
        margin-left: 20px;
    }
    .query {
        overflow: hidden;
        background-color: #fff;
        margin: 0 20px;
        padding: 20px 0;
    }
    .el-form-item {
        margin-bottom: 0;
    }
    .el-form-item__label {
        color: #333;
    }
    .el-form--inline .el-form-item {
        display: inline-block;
        vertical-align: top;
    }
    .button,
    .btn {
        float: right;
        margin-right: 40px;
    }
    .timer {
        margin-top: 20px;
    }
    .packup {
        float: right;
    }
    .list {
        height: 50px;
        line-height: 50px;
        margin-left: 20px;
        padding-left: 5px;
        background-color: #fff;
        margin-top: 20px;
    }
    .form {
        margin-left: 20px;
        background-color: #fff;
    }
	.page {
		height: 60px;
		background-color: #fff;
		text-align: center;
		margin-top: 20px;
		padding-top: 10px;
	}
</style>