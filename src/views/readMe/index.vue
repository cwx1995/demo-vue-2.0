<template>
  <div class="readMe">
    <ul>
      <li class="textStyle" @click="goPage('1')">es6笔记</li>
      <li class="textStyle" @click="goPage('2')">vue3笔记</li>
      <li class="textStyle" @click="goPage('3')">vue模拟实现</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goPage(v) {
      switch (v) {
        case "1":
          window.open("/static/readMe/es6笔记.html");
          break;
        case "2":
          window.open("/static/readMe/vue3笔记.html");
          break;
        case "3":
          window.open("/static/readMe/vue模拟实现.html");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.readMe {
  background-color: #fff;
  padding: 30px 20px;
  .textStyle {
    cursor: pointer;
    font-size: 20px;
    color: skyblue;
    margin-top: 20px;
  }
}
</style>