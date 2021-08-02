<template>
	<div class="secondMod">
		<div class="back" @click="cancel">
			<i class="el-icon-arrow-left"></i> 返回
		</div>
		<div class="operationLog">
			<div class="log">
				<img src="@/assets/img/round.png" alt=""> 操作日志
			</div>
			<div class="tableLog">
				<el-table :data="tableLog"  border :header-cell-style="{background:'#E8ECF5'}">
					<el-table-column prop="id" align="center" label="序号" width="120">
					</el-table-column>
					<el-table-column prop="type" align="center" label="操作类型" width="180">
					<template slot-scope="scope">
						{{type[scope.row.type]}}
					</template>	
					</el-table-column>
					<el-table-column prop="inner" align="center" label="内容描述" width="400">
					</el-table-column>
					<el-table-column prop="operationTime" align="center" label="操作时间" width="300">
						<template slot-scope="scope">
                        {{scope.row.startTime + '--' + scope.row.endTime}}
            			</template>
					</el-table-column>
					<el-table-column prop="operator" align="center" label="操作人">
						<template slot-scope="scope">
						{{operator[scope.row.operator]}}
					</template>	
					</el-table-column>
				</el-table>
			</div>
			<div class="pagingLog">
				<el-pagination
				@size-change="handleSizeChange1"
				@current-change="handleCurrentChange1"
				:current-page="currentPage1"
				:page-sizes="[10, 20, 30, 40]"
				:page-size="pageSize1"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total1">
			 	</el-pagination>
			</div>
		</div>
		<div class="operationLog">
			<div class="log">
				<img src="@/assets/img/round.png" alt=""> 关联的采集任务
			</div>
			<div class="collectTask">
				<el-table :data="collectTask" height="200"  border  :header-cell-style="{background:'#E8ECF5'}">
					<el-table-column prop="id" align="center" label="序号" width="120">
					</el-table-column>
					<el-table-column prop="name" align="center" label="任务名称" width="180">
					</el-table-column>
					<el-table-column prop="inner" align="center" label="任务说明" width="260">
					</el-table-column>
					<el-table-column prop="type" align="center" label="任务类型" width="120">
					<template slot-scope="scope">
						{{type[scope.row.type]}}
					</template>	
					</el-table-column>
					<el-table-column prop="system" align="center" label="子系统" width="120">
					</el-table-column>
					<el-table-column prop="status" align="center" label="任务状态" width="120">
						<template slot-scope="scope">
						{{status[scope.row.status]}}
						</template>	
					</el-table-column>
					<el-table-column prop="time" align="center" label="任务时间">
					</el-table-column>
				</el-table>
			</div>
			<div class="none" v-if="active">
				暂无数据
			</div>
			<div class="taskLog">
				<el-pagination
				@size-change="handleSizeChange2"
				@current-change="handleCurrentChange2"
				:current-page="currentPage2"
				:page-sizes="[10, 20, 30, 40]"
				:page-size="pageSize2"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total2">
			 	</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				type:{
					'1':'更新',
					'2':'启用',
					'3':'已使用',
					'4':'停用'
				},
				operator:{
					'1':'管理员',
					'2':'业务员'
				},
				status:{
					'1':'容易',
					'2':'困难'
				},
				tableLog:[],
				collectTask:[],
				currentPage1: 1,
				total1:0,
                pageSize1: 10,
				currentPage2: 1,
				total2:0,
                pageSize2: 5,
				active:false
			}
		},
		created() {
			this.getData1()
			this.getData2()
		},
		methods: {
			cancel() {
				this.$router.go(-1)
			},
			getData1(){
				let params1 = {
					pageNum :this.currentPage1,
					pageSize:this.pageSize1
				}
				console.log(params1,'getoperation入参')
				this.$post('getoperation',params1).then((res)=>{
					if(res.code === 200){
						console.log(res)
						this.total1 = res.result.total
						this.tableLog = res.result.operationList
					}
				}).catch((err)=>{
						err
				})
				
			},
			getData2() {
				let params2 = {
					pageNum :this.currentPage2,
					pageSize:this.pageSize2
				}
				console.log(params2,'getCollectionTask入参')
				this.$post('getCollectionTask',params2).then((res)=>{
					if(res.code === 200){
						console.log(res)
						this.total2 = res.result.total
						if(this.total == 0){
							this.active = !this.active
							this.collectTask = res.result.collectionTaskList
						}
						
					}
				}).catch((err)=> {
					err
				})
			},
			// 每页显示多少条数据
            handleSizeChange1(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize1 = val;
                // 重置当前页为1
                this.handleCurrentChange1(1)
            },
            handleCurrentChange1(val) {
                console.log(`当前页: ${val}`);
                this.currentPage1 = val;
				this.getData1();
            }, 
			handleSizeChange2(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize2 = val;
                // 重置当前页为1
                this.handleCurrentChange2(1)
            },
            handleCurrentChange2(val) {
                console.log(`当前页: ${val}`);
                this.currentPage2 = val;
				this.getData2()
            },

		}
	}
</script>

<style lang="scss" scoped>
	.secondMod {
		.back {
			height: 50px;
			line-height: 50px;
			font-size: 14px;
			margin: 0 20px;
			background-color: #ccc;
		}
		.operationLog {
			margin: 10px 10px;
			background-color: #fff;
			.log {
				height: 40px;
				line-height: 40px;
				padding: 0 15px;
				font-size: 12px;
				color: #333;
				border-bottom: 1px solid #f2f2f2;
				img {
					height: 20px;
					width: 20px;
					vertical-align: text-bottom;
					margin-right: 5px;
				}
			}
			.tableLog, .collectTask {
				padding: 10px 10px  0 10px;
			}
			.pagingLog, .taskLog {
				padding: 20px 0;
				text-align: center;
			}
		}
		.none {
			text-align: center;
		}
	}
</style>>