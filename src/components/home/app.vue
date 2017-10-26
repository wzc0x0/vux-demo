<template>
    <div>
        <div class="vux-demo">
            <img class="logo" src="../../assets/vux_logo.png">
        </div>
        <group title="cell demo" >
            <cell v-for="(item,index) in items" 
                :key="index" :title="item.title" is-link>
            </cell>
        </group>
    </div>
</template>
<script>
import { Group, Cell } from 'vux'
import _ajax from 'flyio'

export default {
  components: {
    Group,
    Cell
  },
  data(){
      return{
          items:''
      }
  },
  mounted(){
      _ajax.get('http://route.showapi.com/109-35',{
          showapi_appid:'48659',
          showapi_sign:'121481207dd94c37b9a9c4554cd2ac2e'
      }).then( ({data}) => {
          this.items = data.showapi_res_body.pagebean.contentlist
      })
  }
}
</script>
<style scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>

