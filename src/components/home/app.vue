<template>
    <div>
        <div class="vux-demo">
            <img class="logo" src="../../assets/vux_logo.png">
        </div>
        <group v-for="(item,index) in items" :key="index" >
            <cell
                :title="item.name"
                :border-intent="false">
            </cell>
            <template>
                <cell-box v-for="(l,i) in item.list" :key="i"
                    class="sub-item"
                    :link="{path:`/detail/${l.id}`}"
                    is-link>
                    {{ l.name }}
                </cell-box>
            </template>
        </group>
    </div>
</template>
<script>
import { Group, Cell ,CellBox} from 'vux'
import _ajax from 'flyio'

export default {
  components: {
    Group,
    Cell,
    CellBox
  },
  data(){
    return{
        items:'',
        lists:'',
        // showContent:false
    }
  },
  computed:{
      goDetail(_id){
          return `/detail/${_id}`
      }
  },
  methods:{
      
  },
  mounted(){
      _ajax.get('http://route.showapi.com/852-1',{
          showapi_appid:'48659',
          showapi_sign:'121481207dd94c37b9a9c4554cd2ac2e'
      }).then( ({data}) => {
          this.items = data.showapi_res_body.list
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

