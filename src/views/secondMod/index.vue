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
					<el-table-column prop="num" align="center" label="序号" width="120">
					</el-table-column>
					<el-table-column prop="operationType" align="center" label="操作类型" width="180">
					</el-table-column>
					<el-table-column prop="description" align="center" label="内容描述" width="400">
					</el-table-column>
					<el-table-column prop="operationTime" align="center" label="操作时间" width="300">
					</el-table-column>
					<el-table-column prop="operater" align="center" label="操作人">
					</el-table-column>
				</el-table>
			</div>
			<div class="pagingLog">
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
		<div class="operationLog">
			<div class="log">
				<img src="@/assets/img/round.png" alt=""> 关联的采集任务
			</div>
			<div class="collectTask">
				<el-table :data="collectTask" height="200"  border  :header-cell-style="{background:'#E8ECF5'}">
					<el-table-column prop="number" align="center" label="序号" width="120">
					</el-table-column>
					<el-table-column prop="taskName" align="center" label="任务名称" width="180">
					</el-table-column>
					<el-table-column prop="taskExplain" align="center" label="任务说明" width="260">
					</el-table-column>
					<el-table-column prop="taskType" align="center" label="任务类型" width="120">
					</el-table-column>
					<el-table-column prop="sunSystem" align="center" label="子系统" width="120">
					</el-table-column>
					<el-table-column prop="taskState" align="center" label="任务状态" width="120">
					</el-table-column>
					<el-table-column prop="taskTime" align="center" label="任务时间">
					</el-table-column>
				</el-table>
			</div>
			<div class="taskLog">
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
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableLog: [{
					num: '1',
					operationType: '更新',
					description: '系统更改为质量规则',
					operationTime: 'yyyy-mm-dd--yyyy-mm-dd',
					operater: '管理员'
				}, {
					num: '2',
					operationType: '启用',
					description: '系统更改为质量规则',
					operationTime: 'yyyy-mm-dd--yyyy-mm-dd',
					operater: '管理员'
				}, {
					num: '3',
					operationType: '已使用',
					description: '系统更改为质量规则',
					operationTime: 'yyyy-mm-dd--yyyy-mm-dd',
					operater: '管理员'
				}, {
					num: '4',
					operationType: '停用',
					description: '系统更改为质量规则',
					operationTime: 'yyyy-mm-dd--yyyy-mm-dd',
					operater: '管理员'
				}],
				collectTask:[{
					number:'001',
					taskName:'任务1',
					taskExplain:'任务的难易程度怎么样',
					taskType:'容易',
					sunSystem:'数据资产',
					taskState:'启用',
					taskTime:'yyyy-mm-dd -- yyyy-mm-dd'
				},{
					number:'001',
					taskName:'任务1',
					taskExplain:'任务的难易程度怎么样',
					taskType:'容易',
					sunSystem:'数据资产',
					taskState:'启用',
					taskTime:'yyyy-mm-dd -- yyyy-mm-dd'
				},{
					number:'001',
					taskName:'任务1',
					taskExplain:'任务的难易程度怎么样',
					taskType:'容易',
					sunSystem:'数据资产',
					taskState:'启用',
					taskTime:'yyyy-mm-dd -- yyyy-mm-dd'
				}],
				currentPage: 1,
                total: 100,
                pageSize: 10
			}
		},
		created() {
			this.getData()
		},
		methods: {
			cancel() {
				this.$router.go(-1)
			},
			getData(){
				let params1 = {
					num: this.tableLog.num,
					operationType:this.tableLog.operationType,
					description:this.tableLog.description,
					startTimelog:this.tableLog.operationTime[0],
					ehdTimelog:this.tableLog.operationTime[1],
					operater:this.tableLog.operater,
					pageSize:this.pageSize,
					currentPage:this.currentPage,
					total:this.total
				}
				let params2 = {
					number:this.collectTask.number,
					taskName:this.collectTask.taskName,
					taskExplain:this.collectTask.taskExplain,
					taskType:this.collectTask.taskType,
					sunSystem:this.collectTask.sunSystem,
					taskState:this.collectTask.taskState,
					startTimetask:this.collectTask.taskTime[0],
					endTimetask:this.collectTask.taskTime[1]
				}
				let params = {
					params1,
					params2
				}
				this.$post('getData',params).then((res)=>{
					if(res.code === '200'){
						this.tableLog = res.data.tableLog
						this.collectTask = res.data.collectTask
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
	}
</style>>