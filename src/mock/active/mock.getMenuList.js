export const getMenuList=[
    {
        method:'getMenuList',
        data:{
            "code":200,
            "result":{
                data: [{
                    id: '1', //页面id
                    title: '第一迭代',//一级菜单标题
                    menu: [{
                            id: '1-1',//二级页面id
                            path: '/firstMod/dispatchManage',//跳转路由
                            name: '调度管理' //菜单名称
                        },
                        {
                            id: '1-2',
                            path: '/firstMod/doubleTable',
                            name: '双表格'
                        }
                    ]
                }, {
                    id: '2',
                    title: '第二迭代',
                    menu: [{
                            id: '2-1',
                            path: '/secondMod/pieDemo',
                            name: '饼图案例'
                        },
                        {
                            id: '2-2',
                            path: '/secondMod/dispatcherTask',
                            name: '调度任务执行日志'
                        }
                    ]
                },
                {
                    id: '3',
                    title: '综合练习',
                    menu: [{
                            id: '3-1',
                            path: '/testOne/index',
                            name: '练习1'
                        },
                        {
                            id: '3-2',
                            path: '/baidu/index',
                            name: 'baidu'
                        }
                       
                    ]
                },
                {
                    id: '4',
                    title: '第三迭代',
                    menu: [{
                            id: '4-1',
                            path: '/threeMod/i18nTest',
                            name: 'i18n'
                        }
                       
                    ]
                },
                {
                    id: '5',
                    title: '记录文档',
                    menu: [{
                            id: '5-1',
                            path: '/readMe/index',
                            name: 'readMe'
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
