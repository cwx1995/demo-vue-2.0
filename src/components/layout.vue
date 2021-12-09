<template>
    <div>
        <headers></headers>
        <div class="main">
            <el-menu default-active="2" router class="el-menu-vertical-demo" @select="select" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu v-for="(item,index) in menuData" :key="index" :index="item.id">
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
import headers from './header.vue'
    export default {
        data() {
            return {
                menuData: []
            }
        },
        created(){
            this.getMenu()
        },
        components:{
            headers
        },
        methods: {
            select(key, keyPath) {
                console.log(key, keyPath, 'key, keyPath')
            },
            // 获取菜单
            getMenu(){
                this.$post('getMenuList', ''
                ).then((res) => {
                    if (res.code === 200) {
                        this.menuData=res.result.data
                    }else{
                        this.$message.error('请求失败，请稍后再试')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        margin-top: 50px;
        background-color: #ccc;
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
