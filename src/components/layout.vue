<template>
    <div>
        <div class="header">
        </div>
        <div class="main">
            <el-menu default-active="2" router class="el-menu-vertical-demo" @select="select" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu v-for="(item,index) in menuData" :key="index" :index="item.id">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{item.title}}</span>
                    <el-menu-item-group>
                        <el-menu-item v-for="(item2,index2) in item.menu" :key="index2" :index="item2.path">{{item2.name}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <div class="view">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuData: [{
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
                            path: '',
                            name: 'demo3'
                        },
                        {
                            id: '2-2',
                            path: '',
                            name: 'demo4'
                        }
                    ]
                }]
            }
        },
        methods: {
            select(key, keyPath) {
                console.log(key, keyPath, 'key, keyPath')
            }
        }
    }
</script>

<style>
    .header {
        width: 100%;
        height: 50px;
        z-index: 99999;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #666;
    }
    .main {
        margin-top: 50px;
        background-color: #f5f5f5;
    }
    .el-menu-vertical-demo {
        width: 200px;
        height: 100%;
        position: fixed;
        left: 0;
        top: 50px;
    }
    .view {
        margin-left: 200px;
    }
</style>
