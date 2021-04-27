export const getDetail=[
    {
        method:'getDetail',
        data:{
            "code":200,
            "result":{
                data:{
                    name:'调度器名称', //调度器名称
                    explain:'名说明说',//说明
                    startTime: '2020-08-08',//执行时间段开始
                    endTime:'2020-09-09',//执行时间段结束
                    timeSet: '9:30',//定时设置
                    collectionTask:'1'//采集任务 1 黄金糕 2 双皮奶 3蚵仔煎
                }
            }
        }
        // data:{
        //     "code":500,
        //     "msg":"请求失败，请稍后再试！"
        // }
    }

    // 所需上送
// {
//     id:String
// }
]