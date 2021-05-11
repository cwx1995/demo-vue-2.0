export const getCollectionTask=[
    {
        method:'getCollectionTask',
        data:{
            "code":200,
            "result":{
                "total":0,
                "collectionTaskList": [{
                    id:'0001', //id
                    name:'任务1',//任务名称
                    type:'1',//任务类型 1 容易 2 困难
                    inner:'发互粉互粉',//任务说明
                    time: '2020-08-08',//任务时间
                    system:'数据资产01',//子系统
                    status:'1',//任务状态 1 启用 2禁用
                },{
                    id:'0002', //id
                    name:'任务2',//任务名称
                    type:'2',//任务类型 1 容易 2 困难
                    inner:'发互粉互粉',//任务说明
                    time: '2020-08-08',//任务时间
                    system:'数据资产05',//子系统
                    status:'2',//任务状态 1 启用 2禁用
                }
]
            }
        }
    }
]

// 所需上送
// {
//                     pageNum: Number,
//                     pageSize: Number
// }