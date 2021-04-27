export const getPieData=[
    {
        method:'getPieData',
        data:{
            "code":200,
            "result":{
                "data":[{
                    value:Math.ceil(Math.random()*100),
                    name: '搜索引擎'
                },
                {
                    value: Math.ceil(Math.random()*100),
                    name: '直接访问'
                },
                {
                    value: Math.ceil(Math.random()*100),
                    name: '邮件营销'
                },
                {
                    value: Math.ceil(Math.random()*100),
                    name: '联盟广告'
                },
                {
                    value: Math.ceil(Math.random()*100),
                    name: '视频广告'
                }
            ]
            }
        }
        // data:{
        //     "code":500,
        //     "msg":"请求失败，请稍后再试！"
        // }
    }
]

// 所需上送
// {
//     id:String
// }