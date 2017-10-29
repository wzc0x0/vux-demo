<template>
  <div id="app">
    <x-header>头部</x-header>
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import { Loading , XHeader} from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components:{
    Loading,
    XHeader
  },
  computed:{
    ...mapState({
      isLoading:state => state.vux.isLoading
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
