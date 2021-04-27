export const editData=[
    {
        method:'editData',
        data:{
            "code":200,
            "result":{
                "message":"编辑成功"
            }
        }
        // data:{
        //     "code":403,
        //     "msg":"编辑失败，请稍后再试！"
        // }
    }
]

// 所需上送
// {
//     id:String, //数据的id
//     name:String, //调度器名称
//     explain:String,//说明
//     startTime: String,//执行时间段开始
//     endTime:String,//执行时间段结束
//     timeSet: String,//定时设置
//     collectionTask:String//采集任务 1 黄金糕 2 双皮奶 3蚵仔煎
// }