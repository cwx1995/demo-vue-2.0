<template>
  <div>
      124
      <div @click="getData">
          请求数据
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    created(){

    },
    methods:{
        getData(){
                console.log('333')
            this.$post('getData').then((res)=>{
                console.log(res,'111')
            }).catch((err)=>{
console.log(err,'222')
            })
        }
    }

}
</script>

<style>

</style>