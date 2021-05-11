export const getoperation=[
    {
        method:'getoperation',
        data:{
            "code":200,
            "result":{
                "total":200,
                "operationList": [{
                    id:'0001', //id
                    type:'1',//操作类型 1 更新 2 启用 3已使用 4 停用
                    inner:'发互粉互粉',//内容描述
                    startTime: '2020-08-08',//操作时间开始
                    endTime:'2020-09-09',//操作时间结束
                    operator:'1'//操作人 1 管理员  2 业务员
                    
                },
                {
                    id:'0002', //id
                    type:'3',//1 更新 2 启用 3已使用 4 停用
                    inner:'发互粉互粉',//内容描述
                    startTime: '2020-09-08',//操作时间开始
                    endTime:'2020-09-09',//操作时间结束
                    operator:'1'// 1 管理员  2 业务员
                    
                },
                {
                    id:'0003', //id
                    type:'4',//1 更新 2 启用 3已使用 4 停用
                    inner:'发互粉互粉',//内容描述
                    startTime: '2020-02-08',//操作时间开始
                    endTime:'2020-09-09',//操作时间结束
                    operator:'1'// 1 管理员  2 业务员
                    
                },
                {
                    id:'0004', //id
                    type:'2',//1 更新 2 启用 3已使用 4 停用
                    inner:'发互粉互粉',//内容描述
                    startTime: '2020-03-08',//操作时间开始
                    endTime:'2020-09-09',//操作时间结束
                    operator:'2'// 1 管理员  2 业务员
                    
                }]
            }
        }
    }
]

// 所需上送
// {
//                     pageNum: Number,
//                     pageSize: Number
// }