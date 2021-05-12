export const getQualityRules = [{
  method: 'getQualityRules',
  data: {
    "code": 200,
    "result": {
      "total": 50,
      "qualityRulesList": [{
          id: '0001', //id
          batch: '000111', //批次号
          schedulerNum: '345633', //调度器编号
          exampleNum: '5555', //实例编号
          taskNum: '44422', //任务编号
          name: '任务1', //任务名称
          type: '1', //任务类型 1 原数据采集 2 调查数据采集  3 已有数据采集1 容易 2 困难
          inner: '发互粉互粉', //任务说明
          startTime: '08:30:00 - 17:30:00', //开始时间
          overTime: '08:30:00 - 17:30:00', //完成时间
          longtime:'1', //耗费时长 1 大于  2 小于
          system: '1', //子系统 1 数据质量  2系统质量
          status: '1', //任务状态 1 全部 2 局部
        },
        {
          id: '0002', //id
          batch: '0001141', //批次号
          schedulerNum: '3445633', //调度器编号
          exampleNum: '55455', //实例编号
          taskNum: '444422', //任务编号
          name: '任务2', //任务名称
          type: '2', //任务类型 1 原数据采集 2 调查数据采集  3 已有数据采集
          inner: '发互粉互粉', //任务说明
          startTime: '08:30:00 - 17:30:00', //开始时间
          overTime: '08:30:00 - 17:30:00', //完成时间
          longtime:'1', //耗费时长 1 大于  2 小于
          system: '2', //子系统 1 数据质量  2系统质量
          status: '2', //任务状态 1 全部 2 局部
        }
      ]
    }
  }
}]

// 所需上送
// {         
//   batch:'',//批次号
//   schedulerNum:'',//调度器编号
//   exampleNum:'',//实例编号
//   taskNum:'',//任务编号
//  type:'',//任务类型 1 原数据采集 2 调查数据采集  3 已有数据采集
//  startTime: '',//开始时间
//  overTime: '',//完成时间
// system:'',//子系统 1 数据质量  2系统质量
// longtime:'1', //耗费时长 1 大于  2 小于
// status:'2',//执行状态 1 全部 2 局部
//  pageNum: Number,
//  pageSize: Number
// }
