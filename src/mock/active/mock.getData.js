export const getData=[
    {
        method:'getData',
        data:{
            "code":200,
            "result":{
                "total":50,
                "tableData": [{
                    id:'0001', //id
                    num: '0001',//调度器序号
                    serial: '1001',//调度器编号
                    name: '调度1',//调度器名称
                    system: 'windows',//调度器编号
                    startTime: '2020-08-08',//执行时间段开始
                    endTime:'2020-09-09',//执行时间段结束
                    timeSet: '2021-4-23 12:21:13',//定时设置
                    states: '1' //启用状态 1 未启用 2 已启用 3 已禁用
                }, {
                    id:'0002', //id
                    num: '0002',//调度器序号
                    serial: '2001',//调度器编号
                    name: '调度2',//调度器名称
                    system: 'windows',//调度器编号
                    startTime: '2020-07-08',//执行时间段开始
                    endTime:'2020-07-09',//执行时间段结束
                    timeSet: '2021-47-23 12:21:13',//定时设置
                    states: '2' //启用状态 1 未启用 2 已启用 3 已禁用
                },{
                    id:'0003', //id
                    num: '0003',//调度器序号
                    serial: '3001',//调度器编号
                    name: '调度3',//调度器名称
                    system: 'ios',//调度器编号
                    startTime: '2020-06-08',//执行时间段开始
                    endTime:'2020-06-09',//执行时间段结束
                    timeSet: '2021-4-23 12:21:13',//定时设置
                    states: '3' //启用状态 1 未启用 2 已启用 3 已禁用
                },{
                    id:'0004', //id
                    num: '0004',//调度器序号
                    serial: '4001',//调度器编号
                    name: '调度4',//调度器名称
                    system: 'macOs',//调度器编号
                    startTime: '2020-04-08',//执行时间段开始
                    endTime:'2020-04-09',//执行时间段结束
                    timeSet: '2021-4-23 12:21:13',//定时设置
                    states: '2' //启用状态 1 未启用 2 已启用 3 已禁用
                }]
            }
        }
    }
]

// 所需上送
// {
//                     name: String,
//                     system: String,
//                     startTime: String,
//                     endTime: String,
//                     status: String,
//                     current: Number,
//                     pageSize: Number
// }

