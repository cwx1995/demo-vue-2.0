<template>
	<div class="doubleTable">
		<div class="nav">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>调度管理</el-breadcrumb-item>
				<el-breadcrumb-item>调度任务执行日志</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="informationLog">
			<el-form :inline="true" :model="formInline" ref="formInline" class="demo-form-inline">
				<el-row :gutter="10">
					<el-col :md="5" :lg="5" class="five">
						<el-form-item label="调度批次号:" prop="batch">
							<el-input v-model="formInline.batch" placeholder="请输入"></el-input>
						</el-form-item>
					</el-col>
					<el-col :md="5" :lg="5" class="five">
						<el-form-item label="调度器编号:" prop="num">
							<el-input v-model="formInline.num" placeholder="请输入"></el-input>
						</el-form-item>
					</el-col>
					<el-col :md="5" :lg="5" class="six">
						<el-form-item label="任务实例编号:" prop="exampleNum">
							<el-input v-model="formInline.exampleNum" placeholder="请输入"></el-input>
						</el-form-item>
					</el-col>
					<el-col :md="5" :lg="5" class="five">
						<el-form-item label="任务编号:" prop="taskNum">
							<el-input v-model="formInline.taskNum" placeholder="请输入"></el-input>
						</el-form-item>
					</el-col>
					<el-col :md="4" :lg="4" class="five">
						<div class="packup" @click="packUp">
							{{show?'收起':'展开'}}
							<i class="el-icon-arrow-down" v-if="show"></i>
							<i class="el-icon-arrow-up" v-if="!show"></i>
						</div>
					</el-col>
					<div class="hidden" v-if="show">
						<el-col :md="5" :lg="5" class="four">
							<el-form-item label="任务类型:" prop="taskType">
								<el-select v-model="formInline.taskType" placeholder="元数据采集">
									<el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :md="5" :lg="5" class="four">
							<el-form-item label="子系统:" prop="sunSystem">
								<el-select v-model="formInline.sunSystem" placeholder="数据质量">
									<el-option v-for="item in system" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :md="7" :lg="7" class="time">
							<el-form-item label="执行开始时间:" prop="startTime">
								<el-time-picker value-format="hh:mm:ss" format="hh:mm:ss" is-range v-model="formInline.startTime" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
								</el-time-picker>
							</el-form-item>
						</el-col>
						<el-col :md="7" :lg="7" class="time">
							<el-form-item label="执行完成时间:" prop="endTime">
								<el-time-picker is-range v-model="formInline.endTime" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
								</el-time-picker>
							</el-form-item>
						</el-col>
						<el-col :md="5" :lg="5" class="four">
							<el-form-item label="执行状态:" prop="state">
								<el-select v-model="formInline.state" placeholder="请选择">
									<el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :md="5" :lg="5" class="four">
							<el-form-item label="耗费时长:" prop="longing">
								<el-select v-model="formInline.longing" placeholder="请选择">
									<el-option v-for="item in long" :key="item.value" :label="item.label" :value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
					</div>
					<el-col :md="8" :lg="8">
						<el-form-item class="button">
							<div class="queryBtn" @click="queryForm()">
								<i class="el-icon-search"></i> 查询
							</div>
							<div class="resetBtn" @click="resetForm(formInline)">
								<i class="el-icon-refresh-right"></i> 重置
							</div>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</div>
		<div class="tableLog">
			<div class="title">质量规则执行日志</div>
			<div class="logForm">
				<el-table :data="tableData" border style="width: 100%" :header-cell-style="{background:'#E8ECF5'}">
					<el-table-column prop="id" align="center" label="序号" min-width="60">
					</el-table-column>
					<el-table-column prop="beach" align="center" label="调度批次号" min-width="100">
					</el-table-column>
					<el-table-column prop="schedulerNum" align="center" label="调度器编号" min-width="100">
					</el-table-column>
					<el-table-column prop="exampleNum" align="center" label="任务实例编号" min-width="120">
					</el-table-column>
					<el-table-column prop="taskNum" align="center" label="任务编号" min-width="100">
					</el-table-column>
					<el-table-column prop="name" align="center" label="任务名称" wimin-widthdth="120">
					</el-table-column>
					<el-table-column prop="type" align="center" label="任务类型" min-width="100">
					</el-table-column>
					<el-table-column prop="system" align="center" label="子系统" min-width="80">
					</el-table-column>
					<el-table-column prop="startTime" align="center" label="执行开始时间" min-width="200">
					</el-table-column>
					<el-table-column prop="overTime" align="center" label="执行完成时间" min-width="200">
					</el-table-column>
					<el-table-column fixed="right" align="center" label="操作" min-width="140">
						<template slot-scope="scope">
	             <el-button @click="handleClick(scope.row)"><i class="el-icon-document"></i></el-button>
				        </template>
			</el-table-column>
		</el-table>
			</div>
			<div class="page">
				<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[10, 20, 30, 40]"
			:page-size="10"
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
				formInline: {
					batch: '',
					num: '',
					exampleNum: '',
					taskNum: '',
					taskType: '',
					sunSystem: '',
					startTime:  '',
					endTime: '',
					state: '',
					longing: ''
				},
				type: [{
					value: '1',
					label: '原数据采集'
				}, {
					value: '2',
					label: '调查数据采集'
				}, {
					value: '3',
					label: '已有数据采集'
				}],
				system: [{
					value: '1',
					label: '数据质量'
				}, {
					value: '2',
					label: '系统质量'
				}],
				value: '',
				status: [{
					value: '1',
					label: '全部'
				}, {
					value: '2',
					label: '局部'
				}],
				long: [{
					value: '1',
					label: '大于'
				}, {
					value: '2',
					label: '小于'
				}],
				show: true,
				tableData: [],
				pageSize: 10,
				currentPage: 1,
				total: 0
			}
		},
		created() {
			this.queryForm()
		},
		methods: {
			getData(data) {
				this.$post('getQualityRules',data).then((res) => {
					console.log(res)
					if(res.code === 200){
						this.total = res.result.total
						this.tableData = res.result.qualityRulesList
					}
				})
			},
			queryForm() {
				let params = {
					batch: this.formInline.beach,
					schedulerNum:this.formInline.num,
					exampleNum:this.formInline.exampleNum,
					taskNum:this.formInline.taskNum,
					type:this.formInline.taskType,
					startTime:this.formInline.startTime,
					overTime:this.formInline.endTime,
					system:this.formInline.sunSystem,
					longtime:this.formInline.longing,
					status:this.formInline.state,
					pageSize:this.pageSize,
					pageNum:this.currentPage
				}
				console.log(params)
				this.getData(params)

			},
			packUp() {
				this.show = !this.show
			},
			resetForm() {
				this.$refs.formInline.resetFields()
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.pageSize = val
				this.handleCurrentChange(1)
			},
			handleCurrentChange(val) {
				console.log(val);
				this.currentPage = val
			}
		}
	}
</script>

<style lang="scss" scoped>
	.doubleTable {
		margin: 10px;
		.nav {
			>>>.el-breadcrumb {
				height: 50px;
				margin-left: 20px;
				line-height: 50px;
			}
			>>>.el-breadcrumb__separator[class*=icon] {
				color: #333;
			}
		}
		.informationLog {
			background-color: #fff;
			padding: 10px 15px;
			margin-bottom: 20px;
			>>>.el-form--inline .el-form-item__content {
				vertical-align: initial;
			}
			>>>.el-input__inner {
				height: 30px;
				line-height: 30px;
				vertical-align: middle;
			}
			.el-input__icon {
				height: 0;
			}
			.el-form-item {
				margin-bottom: 10px;
			}
			.five {
				>>>.el-form-item__label {
					width: 80px;
					padding: 0;
				}
				>>>.el-form-item__content {
					width: calc(100% - 85px);
					margin-left: 5px;
				}
			}
			.six {
				>>>.el-form-item__label {
					width: 100px;
					padding: 0;
				}
				>>>.el-form-item__content {
					width: calc(100% - 105px);
					margin-left: 5px;
				}
			}
			.packup {
				display: inline-block;
				margin-top: 15px;
				margin-left: 30px;
				font-size: 12px;
				color: #409eff;
			}
			.hidden {
				margin: 0;
				padding: 0;
				.four {
					>>>.el-form-item__label {
						width: 60px;
						padding: 0;
					}
					>>>.el-form-item__content {
						width: calc(80% - 65px);
						margin-left: 5px;
					}
				}
				.time {
					>>>.el-form-item__label {
						width: 100px;
						padding: 0;
					}
					>>>.el-form-item__content {
						width: calc(100% - 105px);
						margin-left: 5px;
					}
					>>>.el-range-editor.el-input__inner {
						width: 100%;
						height: 30px;
						line-height: 30px;
					}
					>>>.el-date-editor .el-range-separator {
						height: 30px;
						line-height: 30px;
					}
					>>>.el-date-editor .el-range__icon {
						height: 30px;
						line-height: 30px;
					}
				}
			}
			.button {
				>>>.el-form-item__content {
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
		}
		.tableLog {
			background-color: #fff;
			.title {
				height: 50px;
				line-height: 50px;
				font-size: 14px;
				background-color: #fff;
				padding-left: 25px;
				border-bottom: 1px solid #ccc;
			}
			.logForm {
				padding: 10px 15px;
			}
			.page {
				text-align: center;
			}
		}
	}
</style>>
