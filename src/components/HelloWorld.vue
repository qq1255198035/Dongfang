<template>
      <div id="swiper">
            <div class="swiper-container">
                  <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in imgUrl" :key="index">
                              
                              <model-obj 
                                id="place"
                                :src="`${publicPath}model/clooth.obj`"
                                :mtl="`${publicPath}model/clooth.mtl`"
																backgroundColor="rgb(0,0,0)"
																:width="320"
																:height="400"
																:background-alpha="0"
                                >
                              </model-obj>
															
                        </div>

                  </div>
                  <!-- <div class="swiper-pagination"></div> -->
                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>
            </div>
						
						<model-obj 
							id="place"
							:src="`${publicPath}model/clooth.obj`"
							:mtl="`${publicPath}model/clooth.mtl`"
							backgroundColor="rgb(0,0,0)"
							@on-click="onMouseMove"
							:background-alpha="0"
						>
						</model-obj>

      </div>
</template>
<script>
import Swiper from "swiper"
import { ModelObj } from 'vue-3d-model'
import imgurl from './../assets/img.png'
import imgurl1 from './../assets/img.png'
import imgurl2 from './../assets/img.png'
import imgurl3 from './../assets/img.png'
import imgurl4 from './../assets/img.png'
import imgurl5 from './../assets/img.png'
export default {
      data(){
            return{
                  imgUrl: {
                        imgurl,
                        imgurl1,
                        imgurl2,
                        imgurl3,
                        imgurl4,
                        imgurl5
                  },
									camera: null,
									scene: null,
									renderer: null,
									mesh: null,
									publicPath: process.env.BASE_URL
            }
      },
			components: {

    ModelObj

},
      methods:{
						onMouseMove ( event ) {

                    console.log( event );   // event: { distance, face, faceIndex, point, index, uv, object }

                    if ( !event ) {

                        if ( this.intersected ) {
                            this.intersected.material.color.setStyle( '#fff' );
                        }

                        this.intersected = null;
                        return;
                    }

                    this.intersected = event.object;
                    this.intersected.material.color.setStyle( '#13ce66' );
                },
            initSwiper(){
                  new Swiper ('.swiper-container', {
                        effect : 'coverflow',
                        
                        slidesPerView: 3,
                        centeredSlides: true,
                        coverflowEffect: {
                              rotate: 1000,
                              stretch: 10,
                              depth: 100,
                              modifier: 1,
                              
                        },
                        autoplay: {
                              delay: 3000,//自动播放速度
                              disableOnInteraction: true//鼠标移上去时是否还继续播放
                        },
                        navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                        },
                        on: {
                              slideChangeTransitionEnd: function(){
                                    console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                              },
                        },
                  })        
            },		
      },
      created(){
            
      },
      mounted(){
            this.initSwiper();
						//this.init()
					
      }
}
</script>

<style lang="less">
@import './../../node_modules/swiper/css/swiper.css';
#container {
    height: 400px;
  }
#swiper{
      background: url('./../assets/swiper-bg.png') center;
      padding: 50px;
}
.swiper-wrapper{
      position: relative;
      width: 100%;
      
      
}
.swiper-pagination{
      span.swiper-pagination-bullet{
            background-color: #fff;
      }
      span.swiper-pagination-bullet-active{
            background-color: #3254a4;
      }
}
.swiper-slide{
      a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                  display: block;
                  width: 100%;
            }
      }
     
}
@media screen and (max-width: 700px){
      .swiper-button-prev,.swiper-button-next{
            display: none;
      }
      .swiper-wrapper{
            position: relative;
            button{
                  width: 170px;
                  font-size: 8px;
                  padding: 5px;
                  padding-left: 20px;
                  margin-left: -85px;
            }
      }
}
</style>
