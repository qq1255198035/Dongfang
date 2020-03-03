<template>
    <div id="Two">
        <header>
            <img src="./../assets/imgs/home-top-btn.png" alt="按钮" @click="$router.go(-1)"/>     
            <div>
                Fleet Commond
                <img src="./../assets/imgs/home-img-4.png" alt="">
            </div>
        </header>
        <div class="main">
            <section class="left">
                <h2>赛季数据</h2>
                <div class="canvas" @click="dialogVisible = true">
                    <ul class="top charts">
                        <li>
                            <span>55</span>
                            <p></p>
                        </li>
                        <li>
                            <span>55</span>
                            <p></p>
                        </li>
                        <li>
                            <span>55</span>
                            <p></p>
                        </li>
                        <li>
                            <span>55</span>
                            <p></p>
                        </li>
                        <li>
                            <span>55</span>
                            <p></p>
                        </li>
                    </ul>
                    <ul class="center">
                        <li>
                            <span>场</span> 
                            <span>均</span>
                            <span>得</span>
                            <span>分</span>
                        </li>
                        <li>
                            <span>场</span> 
                            <span>均</span>
                            <span>助</span>
                            <span>攻</span>
                        </li>
                        <li>
                            <span>场</span> 
                            <span>均</span>
                            <span>篮</span>
                            <span>板</span>
                        </li>
                        <li>
                            <span>罚</span> 
                            <span>球</span>
                            <span>%</span>
                        </li>
                        <li>
                            <span>三</span> 
                            <span>分</span>
                            <span>%</span>
                        </li>
                    </ul>
                    <ul class="bottom charts">
                        <li>
                            <p></p>
                            <span>55</span>
                        </li>
                        <li>
                            <p></p>
                            <span>55</span>
                        </li>
                        <li>
                            <p></p>
                            <span>55</span>
                        </li>
                        <li>
                            <p></p>
                            <span>55</span>
                        </li>
                        <li>
                            <p></p>
                            <span>55</span>
                        </li>
                    </ul>
                </div>
                <div class="legend">
                    <ul>
                        <li>
                            <span></span>
                            球员
                        </li>
                        <li>
                            <span></span>
                            联盟平均数
                        </li>
                    </ul>
                </div>
            </section>
            <section class="right">
                <h2>投篮表现</h2>
                <div class="img-box">
                    <img src="./../assets/imgs/background.png">
                </div>
                <ul class="data">
                    <li>
                        <h2>联盟平均数据</h2>
                        <h2>球员</h2>
                    </li>
                    <li @click="drawerVisible = true">
                        <h3>55%</h3>
                        <span>两分</span>
                        <h3>87%</h3>
                    </li>
                    <li @click="drawerVisible = true">
                        <h3>56%</h3>
                        <span>三分</span>
                        <h3>88%</h3>
                    </li>
                    <li @click="drawerVisible = true">
                        <h3>99%</h3>
                        <span>总计</span>
                        <h3>100%</h3>
                    </li>
                </ul>
            </section>
        </div>
        <Drawer
            :visible.sync='drawerVisible'
            :headerShow="false"
            width="400px"
            align="left"
            main-background="rgba(0,44,63,0.9)"
        >
            <div class="drawer-container">
                <p class="title">
                    <img src="./../assets/imgs/close-icon.png" @click="drawerVisible = false"/>
                </p>
                <div>
                    <ul class="tab">
                        <li>
                            <span :class="{active: tabShow === 1}" @click="tabShow = 1">2019 - 2020 季前赛</span>
                        </li>
                        <li>
                            <span :class="{active: tabShow === 2}" @click="tabShow = 2">2019 - 2020 常规赛</span>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <transition enter-active-class="animated fadeInLeftBig" leave-active-class="animated fadeOutLeftBig faster" mode="out-in">
                            <div class="content1" v-show="tabShow === 1">
                                <div class="show-time">
                                    <ul>
                                        <li>
                                            <div v-for="(item,index) in points.slice(0,5)" :key="index" @click="showPoints(item.pointA,item.pointB)">
                                                <sub>{{item.pointA}}</sub><br />
                                                <sub>{{item.pointB}}</sub>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div v-for="(item,index) in points.slice(5,9)" :key="index" @click="showPoints(item.pointA,item.pointB)">
                                                <sub>{{item.pointA}}</sub><br />
                                                <sub>{{item.pointB}}</sub>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div v-for="(item,index) in points.slice(9)" :key="index" @click="showPoints(item.pointA,item.pointB)">
                                                <sub>{{item.pointA}}</sub><br />
                                                <sub>{{item.pointB}}</sub>
                                            </div>
                                            
                                        </li>
                                    </ul>
                                </div>
                                <ul>
                                    <li>
                                        <span>投篮区域</span>
                                        <h2>常规赛 总计</h2>
                                        
                                    </li>
                                    <li>
                                        <span>赛季表现</span>
                                        <h2>{{pointA}}</h2>
                                        <p>{{pointB}}</p>
                                    </li>
                                    <li>
                                        <span>最近五场表现</span>
                                        <h2>{{pointA}}</h2>
                                        <p>{{pointB}}</p>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                        <transition enter-active-class="animated fadeInRightBig" leave-active-class="animated fadeOutRightBig faster" mode="out-in">
                            <div class="content1" v-show="tabShow === 2">
                                <div class="show-time">
                                    <ul>
                                        <li>
                                            <div v-for="(item,index) in points.slice(0,5)" :key="index" @click="showPoints(item.pointA,item.pointB)">
                                                <sub>{{item.pointA}}</sub><br />
                                                <sub>{{item.pointB}}</sub>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div v-for="(item,index) in points.slice(5,9)" :key="index" @click="showPoints(item.pointA,item.pointB)">
                                                <sub>{{item.pointA}}</sub><br />
                                                <sub>{{item.pointB}}</sub>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div v-for="(item,index) in points.slice(9)" :key="index" @click="showPoints(item.pointA,item.pointB)">
                                                <sub>{{item.pointA}}</sub><br />
                                                <sub>{{item.pointB}}</sub>
                                            </div>
                                            
                                        </li>
                                    </ul>
                                </div>
                                <ul>
                                    <li>
                                        <span>投篮区域</span>
                                        <h2>常规赛 总计</h2>
                                        
                                    </li>
                                    <li>
                                        <span>赛季表现</span>
                                        <h2>{{pointA}}</h2>
                                        <p>{{pointB}}</p>
                                    </li>
                                    <li>
                                        <span>最近五场表现</span>
                                        <h2>{{pointA}}</h2>
                                        <p>{{pointB}}</p>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </Drawer>
        <Drawer
            :visible.sync='dialogVisible'
            :headerShow="false"
            height="170px"
            align="bottom"
            main-background="rgba(0,44,63,0.7)"
        >
            <div class="drawer-container">
                <p class="title">
                    <img src="./../assets/imgs/close-icon.png" @click="dialogVisible = false"/>
                </p>
                <div class="table-box">
                    <h2>2019-2020 常规赛 数据</h2>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>场数</th>
                                <th>先发</th>
                                <th>分钟</th>
                                <th>%</th>
                                <th>三分%</th>
                                <th>罚球%</th>
                                <th>进攻</th>
                                <th>防守</th>
                                <th>场均篮板</th>
                                <th>场均抢断</th>
                                <th>场均盖帽</th>
                                <th>失误</th>
                                <th>犯规</th>
                                <th>场均得分</th>
                                <th>场均助攻</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>赛季平均</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                            </tr>
                            <tr>
                                <td>赛季总计</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                                <td>55</td>
                            </tr>
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </Drawer>
    </div>
</template>
<script>
import Drawer from './../components/Drawer'
import animate from 'animate.css';
export default {
    data(){
        return{
            drawerVisible: false,
            dialogVisible: false,
            tabShow: 1,
            pointA: '56%',
            pointB: '5/8',
            points:[
                {
                    pointA: '56%',
                    pointB: '5/8'
                },
                {
                    pointA: '55.6%',
                    pointB: '5/8'
                },
                {
                    pointA: '52.6%',
                    pointB: '52/8'
                },
                {
                    pointA: '75.6%',
                    pointB: '25/8'
                },
                {
                    pointA: '55.6%',
                    pointB: '52/8'
                },
                {
                    pointA: '55.6%',
                    pointB: '52/28'
                },
                {
                    pointA: '25.6%',
                    pointB: '52/87'
                },
                {
                    pointA: '72.6%',
                    pointB: '24/28'
                },
                {
                    pointA: '28.6%',
                    pointB: '22/82'
                },
                {
                    pointA: '12.6%',
                    pointB: '22/8'
                }
            ]
        }
    },
    components:{
        Drawer
    },
    methods:{
        openDrawer(){
            this.dialogVisible = true;
        },
        showPoints(a,b){
            this.pointA = a;
            this.pointB = b;
        }
    },
    mounted(){
    
    }
}
</script>
<style lang="less">
#Two{
    width: 100%;
    height: 100%;
    background-image: url('./../assets//imgs/bg.png');
    background-size: 100% 100%;
    header{
        width: 100%;
        height: 10%;
        display: flex;
        padding-left: 10px;
        justify-content: space-between;
        align-items: center;
        > img{
            width: 4%;
            cursor: pointer;
        }
        > div{
            display: flex;
            align-items: center;
            height: 100%;
            font-size: 14px;
            text-shadow: 0px 0px 5px #fff;
            img{
                height: 100%;
                margin: 10px;
            }
        }
    }
    .main{
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        .left{
            width: 40%;
            height: 95%;
            background-image: url("./../assets/imgs/border-2.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            h2{
                background-image: url("./../assets/imgs/title-bg.png");
                background-position: bottom center;
                background-repeat: no-repeat;
                background-size: 50% 50%;
                text-align: center;
                height: 10%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                font-weight: normal;
                color: #00faff;
            }
            .canvas{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                width: 80%;
                height: 80%;
                padding: 10px 0;
                margin: 0 auto;
                .center{
                    height: 20%;
                    display: flex;
                    justify-content: space-around;
                    li{
                        width: 20px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-items: center;
                        text-align: center;
                        height: 100%;
                        font-size: 10px;
                        text-shadow: 0px 0px 5px rgba(0, 250, 255, 1)
                    }
                }
                .charts{
                    height: 35%;
                    display: flex;
                    justify-content: space-around;
                    background-size: 100% 100%;
                    li{
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        p{
                            width: 20px;
                            height: 80%;
                        }
                        span{
                            font-size: 10px;
                            padding: 5px;
                        }
                    }
                }
                .top{
                    background-image: url("./../assets/imgs/img-1-canvas-bg.png");
                    align-items: flex-end;
                    li{
                        align-items: center;
                        justify-content: flex-end;
                        p{
                            background-color: #00faff;
                        }
                    }
                }
                .bottom{
                    background-image: url("./../assets/imgs/img-2-canvas-bg.png");
                    align-items: flex-start;
                    li{
                        align-items: center;
                        justify-content: flex-start;
                        p{
                            background-color: #ff3d9e;
                        }
                        
                    }
                    
                }
            }
            .legend{
                height: 10%;
                ul{
                    display: flex;
                    justify-content: center;
                    li{
                        display: flex;
                        font-size: 12px;
                        align-items: center;
                        margin: 0 10px;
                        span{
                            width: 20px;
                            height: 10px;
                            margin-right: 10px;
                            background-color: #00faff;
                        }
                        &:nth-child(2){
                            span{
                                background-color: #ff3d9e;
                            }
                        }
                    }
                }
                
            }
        }
        .right{
            width: 50%;
            height: 95%;
            h2{
                text-align: center;
                font-size: 14px;
                font-weight: normal;
                color: #00faff;
            }
            .img-box{
                width: 100%;
                height: calc(60% - 14px);
                text-align: center;
                display: flex;
                justify-content: center;
                margin-top: 10px;
                img{
                    height: 100%;
                }
            }
            .data{
                width: 60%;
                height: 40%;
                margin: 0 auto;
                padding: 10px 0;
                li{
                    margin: 10px 0;
                    &:nth-child(1){
                        margin-bottom: 20px;
                    }
                    display: flex;
                    justify-content: space-between;
                    h2{
                        width: 45%;
                        position: relative;
                        font-size: 12px;
                        &:after{
                            content: '';
                            width: 30px;
                            height: 2px;
                            background-color: #ff3d9e;
                            position: absolute;
                            left: calc(50% - 15px);
                            bottom: -10px;
                        }
                        &:nth-child(2){
                            width: 40%;
                            &:after{
                                content: '';
                                width: 30px;
                                height: 2px;
                                background-color: #00faff;
                                position: absolute;
                                left: calc(50% - 15px);
                                bottom: -10px;
                            }
                        }
                    }
                    h3{
                        width: 40%;
                        font-size: 14px;
                        text-align: center;
                        &:nth-child(1){
                            width: 45%;
                        }
                    }
                    span{
                        font-size: 10px;
                        width: 20%;
                        text-align: center;
                        text-shadow: 0px 0px 10px #fff;
                    }
                }
            }
        }
    }
}
.drawer-container{
    width: 100%;
    height: 100%;
    .table-box{
        h2{
            font-size: 12px;
            background-image: url("./../assets/imgs/title-bg.png");
            background-repeat: no-repeat;
            background-position: bottom center;
            text-align: center;
            font-weight: normal;
            height: 20%;
            color: #00faff;
        }
        table{
            font-size: 12px;
            width: 100%;
            tr{
                border-bottom: 1px solid #fff;
                line-height: 30px;
            }
            td{
                text-align: center;
            }
        }
    }
    > p{
        text-align: right;
    }
    > div{
        width: 100%;
        height: calc(100% - 24px);
    }
    .tab{
        display: flex;
        li{
            width: 50%;
            text-align: center;
            span{
                color: #fff;
                font-size: 14px;
                display: inline-block;
                padding: 10px 20px;
            }
            .active{
                background-image: url("./../assets/imgs/title-bg.png");
                background-repeat: no-repeat;
                background-size: 100% 50%;
                background-position: bottom center;
                color: #00faff;
            }
        }
    }
    .tab-content{
        width: 100%;
        height: calc(100% - 35px);
        overflow: hidden;
        .content1{
            height: 100%;
            padding-top: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .show-time{
                text-align: center;
                background-image: url('./../assets/imgs/show-time.png');
                background-position: center center;
                background-size: 70% 100%;
                height: calc(100% - 72px);
                background-repeat: no-repeat;
                ul{
                    width: 70%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: space-around;
                    margin: 0 auto;
                    li{
                        display: flex;
                        justify-content: space-between;
                        sub{
                            text-align: center;
                            font-size: 12px;
                            color: #fffd34;
                        }
                        &:nth-child(3){
                            justify-content: center;
                        }
                    }
                    
                }
                img{
                    width: 70%;
                }
            }
            > ul{
                display: flex;
                justify-content: center;
                padding-top: 20px;
                li{
                    margin: 0 5%;
                    display: flex;
                    color: #fff;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    span{
                        font-size: 12px;
                        
                    }
                    h2{
                        font-size: 16px;
                        margin: 5px 0;
                    }
                    p{
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>