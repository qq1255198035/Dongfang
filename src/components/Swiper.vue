<template>
    <div id="Swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgArr" :key="index" :style="{opacity: active === index ? 1 : 0.5,transform: active === index ? 'scale(1)' : 'scale(0.8)'}">
                    <img :src="item">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"

export default{
    props:{
        imgArr:{
            type: Array,
            required: true
        }
    },
    data(){
        return{
            active: 0,
            swiper: null
        }
    },
    methods:{
        initSwiper(){
            let that = this;
            that.swiper = new Swiper ('.swiper-container', {
                passiveListeners : false,
                touchReleaseOnEdges:true,
                touchAngle : 3600,
                //touchEventsTarget: 'wrapper',
                mousewheelControl:true,
                //effect : 'coverflow',
                direction : 'vertical',
                //loop: true,
                slidesPerView: 'auto',
                centeredSlides : true,
                slideToClickedSlide: true,
                grabCursor : true,
                //followFinger: true,
                simulateTouch: true,
                allowTouchMove: true,
                // coverflowEffect: {
                //     rotate: 0,
                //     stretch: 10,
                //     depth: 500,
                //     modifier: 1,
                //     slideShadows : false
                // },
                observer:true,//修改swiper自己或子元素时，自动初始化swiper 
                observeParents:false,//修改swiper的父元素时，自动初始化swiper 
                spaceBetween : 10,
                on: {
                    slideChange: function(){
                        that.active = this.activeIndex;
                        that.$emit('slideChange',this.activeIndex)
                    },
                    onSlideChangeEnd: function(){ 
                        that.swiper.update();  
                    }
                }
            })        
        },
    },
    mounted(){
        this.initSwiper();
    }
}
</script>
<style lang="less" scoped>
@import './../../node_modules/swiper/css/swiper.css';
#Swiper{
    display: flex;
    justify-content: center;
    align-items: center;
    .swiper-container{
        touch-action: none;
        .swiper-wrapper{
            touch-action: none;
            .swiper-slide{
                img{
                    width: 90%;
                    height: 90%;
                }
            }
        }
    }
}



</style>