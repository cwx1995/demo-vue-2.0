export const addData=[
    {
        method:'addData',
        data:{
            "code":200,
            "result":{
                "message":"添加成功"
            }
        }
        // data:{
        //     "code":403,
        //     "msg":"添加失败，请稍后再试！"
        // }
    }
]

// 所需上送
// {
//     name:String, //调度器名称
//     explain:String,//说明
//     startTime: String,//执行时间段开始
//     endTime:String,//执行时间段结束
//     timeSet: String,//定时设置
//     collectionTask:String//采集任务 1 黄金糕 2 双皮奶 3蚵仔煎
// }