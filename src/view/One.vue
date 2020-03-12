<template>
    <div id="One">
        <header>
            <img src="./../assets/imgs/home-top-btn.png" alt="按钮" @click="$router.go(-1)"/>        
        </header>
        <section>
            <div class="left">
                <MySwiper @slideChange="onSlideChange" :imgArr="imgArr"></MySwiper>
            </div>
            <div class="center">
                <div class="btn-box">
                    
                    <img src="./../assets/imgs/home-main-btn.png" alt="按钮" @click="goTwo(message[imgIndex].id,message[imgIndex].pic)"/>
                    
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
                    <p>{{message[imgIndex].stature}} / {{message[imgIndex].weight}} 公斤</p>
                    <p>生日: {{message[imgIndex].birth}}</p>
                    <p>选秀: {{message[imgIndex].draft}}</p>
                    <p>经历: {{message[imgIndex].experience}}</p>
                    <p>加入东方之前: {{message[imgIndex].once}}</p>
                </article>
            </div>
        </section>
    </div>
</template>
<script>
import { queryPageList } from '@/api'
import animate from 'animate.css';
import { ModelObj } from 'vue-3d-model'
import MySwiper from './../components/Swiper'

export default {
    data(){
        return{
            imgIndex: 0,
            imgArr:[],
            keysArr: [
                'attack',
                'agility',
                'skill',
                'power',
                'bounce'
            ],
            chart: null,
            message:[
                {
                    stature: 0,
                    weight: 0,
                    birth: 0,
                    draft: 0,
                    experience: 0,
                    once: 0
                }
            ],
            publicPath: process.env.BASE_URL,
            data:[
                    {
                    item: '进攻',
                    score: 0
                    }, {
                    item: '敏捷',
                    score: 0
                    }, {
                    item: '技能',
                    score: 0
                    }, {
                    item: '体力',
                    score: 0
                    }, {
                    item: '弹跳',
                    score: 0
                    }
                ]
        }
    },
    components:{
        MySwiper,
        ModelObj
    },
    methods:{
        goTwo(id,url){
            this.$router.push({path: '/two', query:{id: id,url:url}})
        },
        onSlideChange(index){
            this.imgIndex = index;
            this.keysArr.forEach((item,i) => {
                this.data[i].score = this.message[index][item]
            })
            this.chart.changeData(this.data)
            console.log(this.data)
        },
        getData(){
            queryPageList().then(res => {
                console.log(res)
                this.message = res;
                res.forEach((item,index) => {
                    this.imgArr.push(item.pic);  
                })
                console.log(this.keysArr)
                this.keysArr.forEach((aitem,i) => {
                    console.log(aitem)
                    this.data[i].score = this.message[this.imgIndex][aitem]
                })
            })
        }
    },
    created(){
        
    },
    mounted(){
        this.$nextTick(() => {
            this.getData()
            this.chart = new this.F2.Chart({
                id: 'container',
                pixelRatio: window.devicePixelRatio
            });
            console.log(this.chart)
            this.chart.coord('polar');
            //changeData
            console.log(this.data)
            
            // X轴样式
            this.chart.axis('score', {
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
            this.chart.axis('item', {
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
            this.chart.legend(false);
            //雷达竖直面积区域样式
            //线颜色
            this.chart.line().position('item*score').color('#2ECCD1');
            //区域颜色
            this.chart.area().position('item*score').style({fillStyle: "l(90) 0:rgba(5,236,254,1) 1:rgba(73,108,236,1)",fillOpacity: 1});
            //点颜色
            this.chart.point().position('item*score').color('red')
                .style({
                    stroke: '#fff',
                    lineWidth: 1,
                    size: 0
                });
            
            
            this.chart.source(this.data);
            this.chart.render();
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