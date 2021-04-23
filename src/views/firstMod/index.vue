<template>
  <div>
      共计{{count}}条
      <div @click="getData">
          请求数据
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
           count:'' 
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            let data={

            }
            console.log(data,'data')
            this.$post('getData',data).then((res)=>{
                if(res.code==='200'){
                    this.count=res.result.count.count
                }else{
                    alert('error')
                }
            }).catch((err)=>{
console.log(err,'222')
            })
        }
    }

}
</script>

<style>

</style>