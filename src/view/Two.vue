<template>
    <div id="Two">
        <header>
            <img src="./../assets/imgs/home-top-btn.png" alt="按钮" @click="$router.go(-1)"/>        
        </header>
        <div class="main">
            <div class="title">
                <h3>球员</h3>
                <h2>VS</h2>
                <h3>联盟平均数据</h3>
            </div>
            <section class="top">
                <div class="left">
                    <div class="title">
                        <img src="./../assets/imgs/ex-touxiang.png" />
                        
                    </div>
                    <ul @click="openDrawer">
                        <li>60<p :style="{width: '60px'}"></p></li>
                        <li>45<p :style="{width: '45px'}"></p></li>
                        <li>76<p :style="{width: '76px'}"></p></li>
                        <li>56<p :style="{width: '56px'}"></p></li>
                        <li>23<p :style="{width: '23px'}"></p></li>
                    </ul>
                </div>
                <div class="center">
                    
                    <article class="article">
                        <h2>赛季数据</h2>
                        <ul class="ul">
                            <li>
                                <img src="./../assets/imgs/icon1.png" />
                                场均得分
                            </li>
                            <li>
                                <img src="./../assets/imgs/icon2.png" />
                                场均助攻
                            </li>
                            <li>
                                <img src="./../assets/imgs/icon3.png" />
                                场均篮板
                            </li>
                            <li>
                                <img src="./../assets/imgs/icon4.png" />
                                罚球%
                            </li>
                            <li>
                                <img src="./../assets/imgs/icon5.png" />
                                三分%
                            </li>
                        </ul>
                    </article>
                </div>
                <div class="right">
                    <ul @click="openDrawer">
                        <li><p :style="{width: '40px'}"></p>40</li>
                        <li><p :style="{width: '56px'}"></p>56</li>
                        <li><p :style="{width: '74px'}"></p>74</li>
                        <li><p :style="{width: '65px'}"></p>65</li>
                        <li><p :style="{width: '32px'}"></p>32</li>
                    </ul>
                </div>
            </section>
            <section class="top bottom">
                <div class="left">
                    <div>
                        <img src="./../assets/imgs/background.png" @click="drawerVisible = true"/>
                    </div>
                    <ul>
                        <li>50%</li>
                        <li>50%</li>
                        <li>50%</li>
                    </ul>
                </div>
                <div class="center">
                    <article class="article">
                        <h2>赛季数据</h2>
                        <ul class="ol">
                            <li>
                                两分
                            </li>
                            <li>
                                三分
                            </li>
                            <li>
                                总计
                            </li>
                        </ul>
                    </article>
                </div>
                <div class="right">  
                    <ul>
                        <li>50%</li>
                        <li>50%</li>
                        <li>50%</li>
                    </ul>
                    <div>
                        <img src="./../assets/imgs/background.png" @click="drawerVisible = true"/>
                    </div>
                </div>
            </section>
        </div>
        <Drawer
            :visible.sync='drawerVisible'
            :headerShow="false"
            width="400px"
            align="right"
            main-background="rgba(0,0,0,0.7)"
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
                                <div>
                                    <img src="./../assets/imgs/show-time.png">
                                </div>
                                <ul>
                                    <li>
                                        <span>投篮区域</span>
                                        <h2>常规赛 总计</h2>
                                        
                                    </li>
                                    <li>
                                        <span>赛季表现</span>
                                        <h2>65.5%</h2>
                                        <p>5/696</p>
                                    </li>
                                    <li>
                                        <span>最近五场表现</span>
                                        <h2>98.5%</h2>
                                        <p>88/33</p>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                        <transition enter-active-class="animated fadeInRightBig" leave-active-class="animated fadeOutRightBig faster" mode="out-in">
                            <div class="content1" v-show="tabShow === 2">
                                <div>
                                    <img src="./../assets/imgs/show-time.png">
                                </div>
                                <ul>
                                    <li>
                                        <span>投篮区域</span>
                                        <h2>常规赛 总计</h2>
                                        
                                    </li>
                                    <li>
                                        <span>赛季表现</span>
                                        <h2>11%</h2>
                                        <p>88/358</p>
                                    </li>
                                    <li>
                                        <span>最近五场表现</span>
                                        <h2>58.54%</h2>
                                        <p>44/22</p>
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
            main-background="rgba(0,0,0,0.7)"
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
            tabShow: 1
        }
    },
    components:{
        Drawer
    },
    methods:{
        openDrawer(){
            this.dialogVisible = true;
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
        justify-content: flex-start;
        align-items: flex-start;
        img{
            width: 25%;
            cursor: pointer;
        }
    }
    .main{
        height: 90%;
        padding-top: 10px;
        .title{
            display: flex;
            h2,h3{
                color: #fff;
                font-weight: normal;
                text-align: center;
                width: calc(100% / 3);
            }
            h2{
                font-size: 16px;
            }
            h3{
                font-size: 14px;
            }
        }
        .top{
            display: flex;
            height: calc(50% - 8px);
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            ul,li{
                list-style: none;
                color: #fff;
            }
            
            .left{
                width: 38%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                .title{
                    display: flex;
                    width: 25%;
                    align-items: flex-start;
                    padding-left: 5px;
                    img{
                        width: 100%;
                    }
                    h3{
                        width: 70%;
                    }
                }
                ul{
                    display: flex;
                    width: 75%;
                    justify-content: flex-end;
                    flex-direction: column;
                    align-items: flex-end;
                    li{
                        font-size: 12px;
                        color: #fff;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        p{
                            width: 30px;
                            height: 14px;
                            background: linear-gradient(to right,#ec47da,#3a75f4);
                            border: 1px solid #ec47da;
                            box-shadow: 3px 1px 3px rgba(0, 0, 0, 0.75);
                            margin: 2% 0;
                            margin-left: 5px;
                        }
                    }
                }
            }
            .center{
                width: 24%;
                height: 100%;
                .article{
                    width: 100%;
                    height: 100%;
                    background-image: url('./../assets/imgs/vs-bg.png');
                    background-size: 100% 100%;
                    background-position: top center;
                    h2{
                        color: #fff;
                        font-size: 14px;
                        padding: 7px 0 5px;
                        text-align: center;
                        text-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
                    }
                    .ul{
                        width: 50%;
                        height: calc(100% - 26px);
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-end;
                        li{
                            font-size: 12px;
                            text-align: left;
                            margin: 4% 0;
                            background-image: url('./../assets/imgs/diwen.png');
                            background-repeat: no-repeat;
                            background-position-x: 20%;
                            background-position-y: bottom;
                            background-size: 70% 50%;
                            text-shadow: 0 0 5px rgba(255, 255, 255, 0.9);
                            img{
                                width: 20%;
                            }
                        }
                    }
                }
            }
            .right{
                width: 38%;
                height: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: flex-start;
                ul{
                    display: flex;
                    width: 75%;
                    justify-content: flex-start;
                    flex-direction: column;
                    align-items: flex-end;
                    li{
                        font-size: 12px;
                        color: #fff;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        p{
                            width: 30px;
                            height: 14px;
                            background: linear-gradient(to right,#4cc6f7,#81e8d3);
                            border: 1px solid #fff;
                            box-shadow: 3px 1px 3px rgba(0, 0, 0, 0.75);
                            margin: 2% 0;
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
        .bottom{
            align-items: center;
            .left{
                height: 80%;
                justify-content: center;
                align-items: center;
                text-align: right;
                ul{
                    justify-content: center;
                    li{
                        margin: 5% 0;
                        text-align: center;
                        justify-content: center;
                    }
                }
                img{
                    width: 60%;
                }
            }
            .center{
                height: 80%;
                overflow: hidden;
                .article{
                    width: 100%;
                    height: 150%;
                    margin: 0 auto;
                    .ol{
                        width: 50%;
                        margin: 0 auto;
                        li{
                            margin: 12% 0;
                            text-align: center;
                            background-position-x: center;
                            font-size: 12px;
                            background-image: url('./../assets/imgs/diwen.png');
                            background-repeat: no-repeat;
                            background-position-y: bottom;
                            background-size: 70% 50%;
                            text-shadow: 0 0 5px rgba(255, 255, 255, 0.9);
                            img{
                                width: 20%;
                            }
                        }
                    }
                }
            }
            .right{
                height: 80%;
                justify-content: center;
                align-items: center;
                ul{
                    justify-content: center;
                    align-items: center;
                    li{
                        margin: 5% 0;
                        justify-content: center;
                        text-align: center;
                    }
                }
                img{
                    width: 60%;
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
            font-size: 14px;
        }
        table{
            font-size: 12px;
            width: 100%;
            margin-top: 10px;
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
                border-bottom: 1px solid #20f5c9;
            }
        }
    }
    .tab-content{
        width: 100%;
        height: calc(100% - 35px);
        overflow: hidden;
        .content1{
            height: 100%;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            > div{
                text-align: center;
                img{
                    width: 70%;
                }
            }
            ul{
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