<template>
  <div>
      <masker>
          <div class="m-img" 
               v-if="item.imageurls.length > 0"
               :style="{ backgroundImage: 'url(' + item.imageurls[0]['url'] + ')'}"></div>
            <div slot="content" class="m-title">
                {{item.desc}}
            <br/>
            <span class="m-time">2016-03-18</span>
            </div>
      </masker>
  </div>
</template>
<script>
import { Masker } from 'vux'
export default {
    props:['item'],
    components:{
        Masker
    },
    data(){
        return{

        }
    }
}
</script>

<style lang="less">
.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>

