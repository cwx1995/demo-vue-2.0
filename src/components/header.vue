<template>
  <div class="header">
      <div class="language-box">
          <div @click="changeLanguage('zh')" class="language-box-zh" :class="language==='zh'?'active':''">
              {{$t('viewPage.zh')}}
          </div>
          
          <div @click="changeLanguage('en')" class="language-box-en" :class="language==='en'?'active':''">
              {{$t('viewPage.en')}}
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            language:this.$store.state.common.language
        }
    },
    methods:{
        changeLanguage(type){
            this.$i18n.locale=type
            this.language=type
            this.$store.dispatch("setLanguage",type)
        }
    }
}
</script>

<style lang="scss" scoped>
  .header {
        width: 100%;
        height: 50px;
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #666;
        .language-box{
            position: absolute;
            right: 20px;
            top: 13px;
            height: 24px;
            display: flex;
            &-zh,&-en{
                width: 60px;
                text-align: center;
                cursor: pointer;
                border-radius: 4px;
                background-color: #fff;
                color: #000;
            }
             &-zh.active,&-en.active{
                background-color: orange;
                color: #fff;
            }
        }
    }
</style>