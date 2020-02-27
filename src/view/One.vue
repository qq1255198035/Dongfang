<template>
    <div id="One">
        <header>
            <img src="./../assets/imgs/home-top-btn.png" alt="按钮" @click="$router.go(-1)"/>        
        </header>
        <section>
            <div class="left">
                <img src="./../assets//imgs/swiper-logo.png" alt="">
                <MySwiper @slideChange="onSlideChange"></MySwiper>
            </div>
            <div class="center">
                <div class="img-box">
                    <template v-for="(item,index) in imgUrl">
                        
                        <img :src="item" :key="index" alt="人物" v-show="imgIndex === index"/>
                        
                    </template>
                </div>
                <div class="btn-box">
                    <router-link to="/two">
                        <img src="./../assets/imgs/home-main-btn.png" alt="按钮" />
                    </router-link>
                </div>
            </div>
            <div class="right">
                <div class="leida">
                    <template v-for="(item,index) in imgArr">
                        <transition-group :key="index" enter-active-class="animated bounceIn" tag="div">
                                <img :src="item" :key="index" v-show="imgIndex === index" alt="雷达图" />
                        </transition-group>
                    </template>
                </div>
                <article class="article">
                    <h2>
                        <img src="./../assets/imgs/rentou.png">
                        基本信息
                    </h2>
                    <p>2.11 / 120.2 公斤</p>
                    <p>生日: 1993-07-20</p>
                    <p>选秀: 2013</p>
                    <p>经历: 6 年</p>
                    <p>加入东方之前: Pittsburgh/New Zealand</p>
                </article>
            </div>
        </section>
    </div>
</template>
<script>
import animate from 'animate.css';
import MySwiper from './../components/Swiper'
import img1 from './../assets/imgs/home-main.png'
import img2 from './../assets/imgs/home-main-2.png'
import img3 from './../assets/imgs/home-main-3.png'
import img4 from './../assets/imgs/leida.png'
import img5 from './../assets/imgs/leida2.png'
import img6 from './../assets/imgs/leida3.png'
export default {
    data(){
        return{
            imgIndex: 0,
            imgUrl:[
                img1,
                img2,
                img3
            ],
            imgArr:[
                img4,
                img5,
                img6
            ]
        }
    },
    components:{
        MySwiper
    },
    methods:{
        onSlideChange(index){
            console.log(index)
            this.imgIndex = index
        }
    },
    mounted(){
        
        
        
    }
}
</script>
<style lang="less">
#One{
    width: 100%;
    height: 100%;
    background-image: url('./../assets//imgs/bg.png');
    background-size: 100% 100%;
    header{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        img{
            width: 25%;
            cursor: pointer;
        }
    }
    section{
        display: flex;
        width: 100%;
        height: 90%;
        .left{
            width: 25%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            > img{
                width: 50%;
            }
        }
        .center{
            width: 45%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .img-box{
                display: flex;
                height: 90%;
                justify-content: center;
                align-items: flex-end;
                img{
                    width: 70%;
                    
                }
            }
            .btn-box{
                height: 10%;
                text-align: center;
                img{
                    width: 60%;
                }
            }
        }
        .right{
            width: 30%;
            background-image: url('./../assets/imgs/border.png');
            background-size: 90% 95%;
            background-repeat: no-repeat;
            .leida{
                width: 90%;
                height: 50%;
                overflow: hidden;
                transform: scale(1.2);
                img{
                    width: 100%;
                }
            }
            .article{
                width: 90%;
                padding-top: 20px;
                h2{
                    margin-bottom: 10px;
                    color: #fff;
                    font-weight: normal;
                    font-size: 14px;
                    text-align: center;
                    background-image: url('./../assets/imgs/diwen.png');
                    background-repeat: no-repeat;
                    background-position-x: center;
                    background-position-y: bottom;
                    background-size: 50% 50%;
                    img{
                        width: 14px;
                        height: 15px;
                        margin-right: 4px;
                    }
                }
                p{
                    text-align: center;
                    color: #fff;
                    font-size: 12px;
                    margin: 5px 0;
                }
            }
        }
    }
}
</style>