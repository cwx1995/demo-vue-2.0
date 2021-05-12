<template>
  <div>
    <div>test1:{{ test1 }}</div>
    <div>test2:{{ test2 }}</div>
    <div>test3:{{ test3 }}</div>
    <div>test4:{{ test4 }}</div>
    <div>test5:{{ test5 }}</div>
    <div>test6:{{ test6 }}</div>
    <div>test7:{{ test7 }}</div>
    <div>test8:{{ test8 }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test1: "",
      test2: "",
      test3: "",
      test4: "",
      test5: "",
      test6: "",
      test7: "",
      test8: "",
    };
  },
  methods:{
    //   test1输出当前时间,如2021年01月12日
    test1(){

    }
  },
//   将2021-05-12转换为2021年05月12日
    test2(){
        let time = '021-05-12';
    },
//多维数组拿到字符串adf
test3(){
    let arr = [[['a','b'],['c','d']],['e','f']]
},
//数组变字符串  要求a-b-c-d-e
test4(){
    let arr = ['e','d','c','b','a']
},
//字符串处理为  [1,2,3]
test5(){
    let str='321'
},
// 数组遍历处理 把偶数项换成666
test6(){
    let arr = ['1','2','3','4','5','6','7','8']
},
//对象遍历处理  输出['a','b','c','d']
test7(){
    let obj={
        one:'a',
        two:'b',
        three:'c',
        four:'d'
    }
}
};
</script>

<style>
</style>