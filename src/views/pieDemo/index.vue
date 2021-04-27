<template>
    <div class="pieDemo">
        <div class="pieDemoInner">
            <div class="left">
                <div @click="getOther('Left')">
                    更新左边数据
                </div>
                <div class="myEchartLeft" id="leftBox">
                    <div id="echart1" ref="echart1"></div>
                </div>
            </div>
            <div class="right">
                <div @click="getOther('Right')">
                    更新右边数据
                </div>
                <div class="myEchartRight" id="rightBox">
                    <div id="echart2" ref="echart2"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // 引入echarts
    let echarts = require('echarts')
    // 定义charts 全局
    var myEchart;
    var myEchart2;
    export default {
        name: 'pieDemo',
        data() {
            return {
                optionsLeft: {
                    // 悬浮提示框
                    tooltip: {
                        trigger: 'item',
                        show: true
                    },
                    // 图例
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    // 数据配置
                    series: [{
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: []
                    }]
                },
                optionsRight: {
                    // 悬浮提示框
                    tooltip: {
                        trigger: 'item',
                        show: true
                    },
                    // 图例
                    legend: {
                        top: '5%',
                        left: 'center'
                    },
                    // 数据配置
                    series: [{
                        name: '其他来源',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: []
                    }]
                }
            }
        },
        mounted() {
            this.getDataLeft()
            this.getDataRight()
        },
        created() {},
        methods: {
            // 画图
            drawChart(res) {
                if (res === 'Left') {
                    // 当页面已存在echarts时销毁之前的 防止报错
                    if (myEchart != null && myEchart != "" && myEchart != undefined) {
                        myEchart.dispose(); //销毁
                    }
                    //  建立新的echarts
                    myEchart = echarts.init(document.getElementById("echart1"));
                    // 监听浏览器分辨率自适应
                    window.addEventListener("resize", function() {
                        myEchart.resize()
                    })
                    //设置参数画图
                    myEchart.setOption(this.optionsLeft);
                } else if (res === 'Right') {
                    // 当页面已存在echarts时销毁之前的 防止报错
                    if (myEchart2 != null && myEchart2 != "" && myEchart2 != undefined) {
                        myEchart2.dispose(); //销毁
                    }
                    //  建立新的echarts
                    myEchart2 = echarts.init(document.getElementById("echart2"));
                    // 监听浏览器分辨率自适应
                    window.addEventListener("resize", function() {
                        myEchart2.resize()
                    })
                    //设置参数画图
                    myEchart2.setOption(this.optionsRight);
                }
            },
            // 获取左边数据 接口
            getDataLeft() {
                this.$post('getPieData', '').then(res => {
                    if (res.code === 200) {
                        this.optionsLeft.series[0].data = res.result.data
                        this.drawChart('Left')
                    }
                }).catch(err => {
                    err
                })
            },
            // 获取右边数据 接口
            getDataRight() {
                this.$post('getPieData', '').then(res => {
                    if (res.code === 200) {
                        this.optionsRight.series[0].data = res.result.data
                        this.drawChart('Right')
                    }
                }).catch(err => {
                    err
                })
            },
            // 模拟随机数
            getOther(res) {
                this[`options${res}`].series[0].data = [{
                        value: parseInt(Math.random() * 1000),
                        name: '搜索引擎'
                    },
                    {
                        value: parseInt(Math.random() * 1000),
                        name: '直接访问'
                    },
                    {
                        value: parseInt(Math.random() * 1000),
                        name: '邮件营销'
                    },
                    {
                        value: parseInt(Math.random() * 1000),
                        name: '联盟广告'
                    },
                    {
                        value: parseInt(Math.random() * 1000),
                        name: '视频广告'
                    }
                ]
                this.drawChart(res)
            },
        }
    }
</script>

<style lang="scss" scoped>
    .pieDemo {
        .pieDemoInner {
            overflow: hidden;
        }
        .left,
        .right {
            display: inline-block;
            width: 50%;
            float: left;
        }
        .myEchartLeft {
            width: 100%;
            height: 400px;
            #echart1 {
                width: 100%;
                height: 100%;
            }
        }
        .myEchartRight {
            width: 100%;
            height: 400px;
            #echart2 {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>