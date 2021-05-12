export const getMenuList=[
    {
        method:'getMenuList',
        data:{
            "code":200,
            "result":{
                data: [{
                    id: '1',
                    title: '第一迭代',
                    menu: [{
                            id: '1-1',
                            path: '/firstMod',
                            name: '调度管理'
                        },
                        {
                            id: '1-2',
                            path: '/secondMod',
                            name: '双表格'
                        }
                    ]
                }, {
                    id: '2',
                    title: '第二迭代',
                    menu: [{
                            id: '2-1',
                            path: '/pieDemo',
                            name: '饼图案例'
                        },
                        {
                            id: '2-2',
                            path: '/doubleTable',
                            name: '调度任务执行日志'
                        }
                    ]
                },
                {
                    id: '3',
                    title: '综合练习',
                    menu: [{
                            id: '3-1',
                            path: '/testOne',
                            name: '练习1'
                        }
                       
                    ]
                }]
            }
        }
        // data:{
        //     "code":500,
        //     "msg":"请求失败，请稍后再试！"
        // }
    }
]
