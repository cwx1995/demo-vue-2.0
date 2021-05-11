export const getMenuList=[
    {
        method:'getMenuList',
        data:{
            "code":200,
            "result":{
                data: [{
                    id: '1',
                    title: '一级菜单',
                    menu: [{
                            id: '1-1',
                            path: '/firstMod',
                            name: 'demo1'
                        },
                        {
                            id: '1-2',
                            path: '/secondMod',
                            name: 'demo2'
                        }
                    ]
                }, {
                    id: '2',
                    title: '二级菜单',
                    menu: [{
                            id: '2-1',
                            path: '/pieDemo',
                            name: 'demo3'
                        },
                        {
                            id: '2-2',
                            path: '/doubleTable',
                            name: 'demo4'
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
