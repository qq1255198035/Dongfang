<template>
    <div id="Swiper">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgUrl" :key="index">
                    <img :src="item">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper"
import imgurl1 from './../assets/imgs/home-img-1.png'
import imgurl2 from './../assets/imgs/home-img-2.png'
import imgurl3 from './../assets/imgs/home-img-3.png'
export default{
    data(){
        return{
            imgUrl: [
                imgurl1,
                imgurl2,
                imgurl3,
            ],
        }
    },
    methods:{
        initSwiper(){
            let that = this;
            new Swiper ('.swiper-container', {
                
                effect : 'coverflow',
                direction : 'vertical',
                //loop: true,
                slidesPerView: 'auto',
                centeredSlides : true,
                slideToClickedSlide: true,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 10,
                    depth: 500,
                    modifier: 1,
                    slideShadows : false,
                    simulateTouch: true,
                    allowTouchMove: true,
                    followFinger: false,
                    grabCursor : true
                },
                spaceBetween : 50,
                on: {
                    slideChange: function(){
                        console.log(this.activeIndex);
                        that.$emit('slideChange',this.activeIndex)
                    },
                },
                // autoplay: {
                //     delay: 1000,//自动播放速度
                //     disableOnInteraction: true//鼠标移上去时是否还继续播放
                // },
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
.swiper-container{
    touch-action: none;
    .swiper-wrapper{
        touch-action: none;
        .swiper-slide{
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}


</style>