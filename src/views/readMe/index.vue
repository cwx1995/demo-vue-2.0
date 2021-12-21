<template>
  <div class="readMe">
      <a class="textStyle" href="/static/readMe/es6笔记.html">es6笔记</a>
      <a class="textStyle" href="/static/readMe/vue3笔记.html">vue3笔记</a>
      <a class="textStyle" href="/static/readMe/vue模拟实现">vue模拟实现</a>
       <a class="textStyle" href="/static/readMe/vue笔记.html">vue笔记</a>
        <a class="textStyle" href="/static/readMe/面试知识01.html">面试知识01</a>
        <a class="textStyle" href="javascript:void(0)" @click="alertErr('static/nodeJs笔记')">nodeJs笔记</a>
        <a class="textStyle" href="javascript:void(0)" @click="alertErr('static/webpack 配置文档')">webpack配置笔记</a>
        <a class="textStyle" href="/static/readMe/面试知识02.html">面试知识02</a>
        <a class="textStyle" href="/static/readMe/每日三题.html">理论知识整理</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    alertErr(v){
      alert(v)
    }
  }
};
</script>

<style lang="scss" scoped>
.readMe {
  background-color: #fff;
  padding: 30px 20px;
  .textStyle {
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
    display: block;
  }
}
</style>