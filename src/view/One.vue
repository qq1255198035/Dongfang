<template>
    <div id="One">
        <header>
            <img src="./../assets/imgs/home-top-btn.png" alt="按钮" @click="$router.go(-1)"/>        
        </header>
        <section>
            <div class="left">
                <MySwiper @slideChange="onSlideChange"></MySwiper>
            </div>
            <div class="center">
                <div class="btn-box">
                    <router-link to="/two">
                        <img src="./../assets/imgs/home-main-btn.png" alt="按钮" />
                    </router-link>
                </div>
                <div class="img-box">
                    <model-obj 
                        id="place"
                        :src="`${publicPath}model/clooth.obj`"
                        :mtl="`${publicPath}model/clooth.mtl`"
                        backgroundColor="rgb(0,0,0)"
                        :width="300"
                        :height="300"	
                        :scale="{x:0.8,y:0.8,z:1}"
                        :position="{x:0.2,y:0.3,z:0.1}"									
                        :background-alpha="0"
                        :controlsOptions="{maxPolarAngle: Math.PI/2,minPolarAngle: Math.PI/2,enableKeys: false,enableZoom: false}"
                    >
                    </model-obj>
                </div>
            </div>
            <div class="right">
                <div class="leida">
                    <canvas id="container" style="width: 100%;height: 100%;"></canvas>
                </div>
                <article class="article">
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
import { ModelObj } from 'vue-3d-model'
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
            ],
            publicPath: process.env.BASE_URL,
            data:[
                    {
                    item: '进攻',
                    score: 70
                    }, {
                    item: '敏捷',
                    score: 30
                    }, {
                    item: '技能',
                    score: 60
                    }, {
                    item: '体力',
                    score: 70
                    }, {
                    item: '弹跳',
                    score: 50
                    }
                ]
        }
    },
    components:{
        MySwiper,
        ModelObj
    },
    methods:{
        onSlideChange(index){
            console.log(index)
            this.imgIndex = index
        }
    },
    mounted(){
        this.$nextTick(() => {
            const chart = new this.F2.Chart({
                id: 'container',
                pixelRatio: window.devicePixelRatio
            });
            chart.coord('polar');
            //changeData
            chart.source(this.data, {
                score: {
                    min: 0,
                    max: 120,
                    nice: false,
                    tickCount: 4
                }
            });
            // X轴样式
            chart.axis('score', {
                // 为null时，雷达图上不显示数值
                label:null,
                grid: function label(text, index, total){
                    // if (index === total - 1) {
                    //     return {
                    //         stroke: '#2ECCD1',
                    //         strokeOpacity: 1,
                    //         lineDash: null,
                    //         fillStyle: "l(45) 0:rgba(33,102,106,1) 1:rgba(255,61,84,0.3)",
                    //         fillOpacity: 1 // 弧线网格
                    //     };
                    // }
                    return {
                        stroke: '#2ECCD1',
                        strokeOpacity: 1,
                        lineDash: null,
                        fillStyle: "r(0.5,0.5,0.1) 0:rgba(73,108,236,0.5) 1:rgba(5,236,254,0.5)",
                        fillOpacity: 1 // 弧线网格
                        
                    };
                }
                
            });
            //Y轴样式 
            chart.axis('item', {
                label:{
                        top: true,
                        //字颜色
                        fillStyle: '#fff'
                },
                grid:{
                        lineDash: null,
                        stroke: '#2ECCD1'
                    }
            });
            chart.legend(false);
            //雷达竖直面积区域样式
            //线颜色
            chart.line().position('item*score').color('#2ECCD1');
            //区域颜色
            chart.area().position('item*score').style({fillStyle: "l(90) 0:rgba(5,236,254,1) 1:rgba(73,108,236,1)",fillOpacity: 1});
            //点颜色
            chart.point().position('item*score').color('red')
                .style({
                    stroke: '#fff',
                    lineWidth: 1,
                    size: 0
                });
            
            chart.render();
        })
            
        
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
        padding-left: 10px;
        justify-content: flex-start;
        align-items: center;
        z-index: 9999;
        position: relative;
        img{
            width: 4%;
            cursor: pointer;
        }
    }
    section{
        display: flex;
        width: 100%;
        height: 90%;
        padding: 0 10px;
        .left{
            width: 15%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .center{
            width: 45%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .img-box{
                
                height: 90%;
                
                background-image: url('./../assets/imgs/renwu-bg.png');
                background-size: 90%;
                background-repeat: no-repeat;
                background-position: 0 100%;
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
            width: 40%;
            background-image: url('./../assets/imgs/border.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .leida{
                width: 100%;
                height: 70%;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .article{
                width: 100%;
                height: 30%;
                display: flex;
                padding: 0 10px 20px;
                flex-wrap: wrap; 
                justify-content: center;
                align-items: center;
                p{
                    text-align: center;
                    color: #fff;
                    font-size: 12px;
                    width: 50%;
                    &:last-child{
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>