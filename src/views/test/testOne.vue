<template>
  <div>
    <div @click="formatDate">test1:{{ test1 }}</div>
    <div @click="two">test2:{{ test2 }}</div>
    <div @click="handleArr">test3:{{ test3 }}</div>
    <div @click="handleStr">test4:{{ test4 }}</div>
    <div @click="five">test5:{{ test5 }}</div>
    <div @click="six">test6:{{ test6 }}</div>
    <div @click="seven">test7:{{ test7 }}</div>
    <div>test8:{{ test8 }}</div>
  </div>
</template>

<script>
import { number } from 'echarts';
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
    created(){
    
    },
    methods: {
      //   test1输出当前时间,如2021年01月12日
      formatDate() {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        // let week = date.getDay()
        // let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ]
        // let hour = date.getHours()
        // hour = hour < 10 ? "0" + hour : hour
        // let minute = date.getMinutes()
        // minute = minute < 10 ? "0" + minute : minute
        // let second = date.getSeconds()
        // second = second < 10 ? "0" + second : second
        month = month > 10 ? month : '0' + month
        day = day > 10 ? day : '0' + day
        this.test1 = `${year}年${month}月${day}日`
      },
      //  将2021-05-12转换为2021年05月12日
      two() {
        let time = '2021-05-12';
        let newTime = time.replace('-', '年')
        let s = newTime.replace('-','月') + '日'
        this.test2 = s
      },
      //多维数组拿到字符串adf
      handleArr() {
        let arr = [
          [
            ['a', 'b'],
            ['c', 'd']
          ],
          ['e', 'f']
        ]
        let newArr= []
        this.test3=arr[0][0][0]+arr[0][1][1]+arr[1][1]

        
      },
        //数组变字符串  要求a-b-c-d-e
        handleStr() {
        let arr = ['e', 'd', 'c', 'b', 'a']
            let s =arr.reverse() //数组翻转
            let str = s.join('-') //将数组转为字符串并以指定符号拼接
            console.log(str)
            this.test4 = str
            
        },
        //字符串处理为  [1,2,3]
        five() {
        let str = '321'
            let arr = str.split('').reverse()
            let arr2 = arr.map((item)=>{
              item=Number(item)
              return item
            })
            this.test5 = arr2
        },

        // 数组遍历处理 把偶数项换成666
        six() {
        let arr = ['1', 'a', '3', 'b', '5', 'c', '7', '8']
        // for(let i = 0; i < arr.length; i++) {
        //     if(i%2 !== 0){
        //         arr[i] = '666'
        //     }
        // }
        // console.log(arr)
        // this.test6 = arr
            // arr.forEach((item,index)=> {
            //     if(index%2 !== 0){
            //        arr[index]='666' 
            //     }
            // })
            let arr2 = arr.map((item,index)=>{
              if(index%2 !== 0){
                item='666'
              }
              return item
            })
            this.test6 = arr2
        },
            //对象遍历处理  输出['a','b','c','d']
            seven() {
        let obj = {
            one: 'a',
            two: 'b',
            three: 'c',
            four: 'd'
      }
        let arr = []
        for(var i in obj){
            console.log(i,obj[i])
            arr.push(obj[i])
        }
        console.log(arr)
        this.test7 = arr
        }
    },
};
</script>

<style>

</style>