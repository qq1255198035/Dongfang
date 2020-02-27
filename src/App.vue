<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  methods:{
        detectOrient() {
            let width = document.documentElement.clientWidth,
                height = document.documentElement.clientHeight,
                wrapper = document.getElementById("app"),
                style = "";
            if(width >= height) { // 竖屏
                style += "width:100%"; 
                style += "height:100%;";
                style += "-webkit-transform: rotate(0); transform: rotate(0);";
                style += "-webkit-transform-origin: 0 0;";
                style += "transform-origin: 0 0;";
            } else { // 横屏
                style += "width:" + height + "px;";// 注意旋转后的宽高切换
                style += "height:" + width + "px;";
                style += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
                // 注意旋转中点的处理
                style += "-webkit-transform-origin: " + width / 2 + "px " + width / 2 + "px;";
                style += "transform-origin: " + width / 2 + "px " + width / 2 + "px;";
            }
            wrapper.style.cssText = style;
        }
    },
    mounted(){
        
        window.onresize = this.detectOrient();
        
    }
}
</script>

<style lang="less">
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
