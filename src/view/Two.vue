<template>
    <div id="Two">
        <header>
            <img src="./../assets/imgs/home-top-btn.png" alt="按钮" @click="$router.go(-1)"/>     
            <div>
                Fleet Commond
                <img :src="url" alt="">
            </div>
        </header>
        <div class="main">
            <section class="left">
                <h2>赛季数据</h2>
                <div class="canvas">
                    <ul class="top charts" @click="openPersonalDrawer">
                        <li v-for="(item,index) in points2Arr" :key="index">
                            <span>{{parseFloat(item)}}</span>
                            <p :style="{height: item + '%'}"></p>
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
                    <ul class="bottom charts" @click="openUnionDrawer">
                        <li v-for="(item,index) in points1Arr" :key="index">
                            <p :style="{height: item + '%'}"></p>
                            <span>{{parseFloat(item)}}</span>
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
                    <li>
                        <h3 @click="showUnionData">{{this.twoPointerA}}%</h3>
                        <span>两分</span>
                        <h3 @click="showPersinalData">{{this.twoPointerB}}%</h3>
                    </li>
                    <li>
                        <h3 @click="showUnionData">{{this.threePointerA}}%</h3>
                        <span>三分</span>
                        <h3 @click="showPersinalData">{{this.threePointerB}}%</h3>
                    </li>
                    <li>
                        <h3 @click="showUnionData">{{this.allPointerA}}%</h3>
                        <span>总计</span>
                        <h3 @click="showPersinalData">{{this.allPointerB}}%</h3>
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
                                            <div v-for="(item,index) in dataShow.slice(0,5)" :key="index" @click="showPoints(item)">
                                                <sub>{{item.amount}}%</sub><br />
                                                <sub>{{item.area}} / {{item.avgAmount}}</sub>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div v-for="(item,index) in dataShow.slice(5,9)" :key="index" @click="showPoints(item)">
                                                <sub>{{item.amount}}%</sub><br />
                                                <sub>{{item.area}} / {{item.avgAmount}}</sub>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div v-for="(item,index) in dataShow.slice(9,10)" :key="index" @click="showPoints(item)">
                                                <sub>{{item.amount}}%</sub><br />
                                                <sub>{{item.area}} / {{item.avgAmount}}</sub>
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
                                        <h2>{{pointA ||　0}}%</h2>
                                        <p>{{pointB || 0}} / {{pointC || 0}}</p>
                                    </li>
                                    <li>
                                        <span>最近五场表现</span>
                                        <h2>{{pointD}}%</h2>
                                        <p>{{pointE || 0}} / {{pointF || 0}}</p>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                        <transition enter-active-class="animated fadeInRightBig" leave-active-class="animated fadeOutRightBig faster" mode="out-in">
                            <div class="content1" v-show="tabShow === 2">
                                <div class="show-time">
                                    <ul>
                                        <li>
                                            <div v-for="(item,index) in dataShow.slice(10,15)" :key="index" @click="showPoints(item)">
                                                <sub>{{item.amount}}%</sub><br />
                                                <sub>{{item.area}} / {{item.avgAmount}}</sub>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div v-for="(item,index) in dataShow.slice(15,19)" :key="index" @click="showPoints(item)">
                                                <sub>{{item.amount}}%</sub><br />
                                                <sub>{{item.area}} / {{item.avgAmount}}</sub>
                                            </div>
                                            
                                        </li>
                                        <li>
                                            <div v-for="(item,index) in dataShow.slice(20)" :key="index" @click="showPoints(item)">
                                                <sub>{{item.amount}}%</sub><br />
                                                <sub>{{item.area}} / {{item.avgAmount}}</sub>
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
                                        <h2>{{pointA || 0}}%</h2>
                                        <p>{{pointB || 0}} / {{pointC || 0}}</p>
                                    </li>
                                    <li>
                                        <span>最近五场表现</span>
                                        <h2>{{pointD}}%</h2>
                                        <p>{{pointE || 0}} / {{pointF || 0}}</p>
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
                            <tr v-for="(item,index) in showData" :key="index">
                                <td>{{index === 0 ? '赛季平均' : '赛季总计'}}</td>
                                <td>{{item.games}}</td>
                                <td>{{item.start}}</td>
                                <td>{{item.minute}}</td>
                                <td>{{item.hitRate}}</td>
                                <td>{{item.threePointer}}</td>
                                <td>{{item.freeThrow}}</td>
                                <td>{{item.attack}}</td>
                                <td>{{item.guard}}</td>
                                <td>{{item.avgBackboard}}</td>
                                <td>{{item.avgSteal}}</td>
                                <td>{{item.avgBlockShot}}</td>
                                <td>{{item.fault}}</td>
                                <td>{{item.foul}}</td>
                                <td>{{item.avgScore}}</td>
                                <td>{{item.avgAssist}}</td>
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
import {
    queryMessage,
    queryUnionMessage,
    queryUnionsAMessage, 
    queryUnionsBMessage, 
    queryPointsAMessage, 
    queryPointsBMessage,
    queryTotalMessage,
    queryUnionTMessage
} from '@/api'
const obj = [
    {
        key:1,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
    {
        key:2,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
    {
        key:3,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
    {
        key:4,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
    {
        key:5,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
    {
        key:6,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
    {
        key:7,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
    {
        key:8,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
    {
        key:9,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
    {
        key:10,
        amount: 0,
        area: 0,
        avgAmount: 0,
        avgArea: 0,
        avgSucceed: 0,
        succeed: 0
    },
]
let data = {
        key: 0,
        id: 1,
        games: 0,
        start: 0,
        minute: 0,
        hitRate: 0,
        threePointer: 0,
        twoPointer:0,
        freeThrow:0,
        allPointer:0,
        attack: 0,
        guard: 0,
        avgBackboard: 0,
        avgSteal: 0,
        avgBlockShot: 0,
        fault: 0,
        foul: 0,
        avgScore: 0,
        avgAssist: 0
    }
export default {
    data(){
        return{
            data1: [],
            data2: [],
            data3: [],
            data4: [],
            data5: [],
            data6: [],
            dataShow: [],
            drawerVisible: false,
            dialogVisible: false,
            tabShow: 1,
            twoPointerA: '',
            twoPointerB: '',
            allPointerA: '',
            allPointerB: '',
            threePointerA: '',
            threePointerB: '',
            url: '',
            points1Arr:[],
            points2Arr:[],
            pointA: '',
            pointB: '',
            pointC: '',
            pointD: '',
            pointE: '',
            pointF: '',
            unionData:[],
            personalData:[],
            showData:[]
        }
    },
    components:{
        Drawer
    },
    mounted(){
        console.log(1)
        this.url = this.$route.query.url
        this.getUnionQueryMessage(1);
        this.getQueryMessage(this.$route.query.id);
        this.getMessageA(this.$route.query.id);
        this.getMessageB(this.$route.query.id);
        this.getUnionMessageA();
        this.getUnionMessageB();
        this.getQueryTMessage();
        this.getQueryTotalMessage(this.$route.query.id)
    },
    methods:{
        showUnionData(){
            this.drawerVisible = true;
            this.dataShow = [...this.data3,...this.data4]
            this.pointA =  this.dataShow[0].amount
            this.pointB =  this.dataShow[0].area
            this.pointC =  this.dataShow[0].avgAmount
            this.pointD =  this.dataShow[0].avgArea
            this.pointE =  this.dataShow[0].avgSucceed
            this.pointF =  this.dataShow[0].succeed
            console.log( this.dataShow)
        },
        showPersinalData(){
            this.drawerVisible = true;
            this.dataShow = [...this.data1,...this.data2]
            this.pointA =  this.dataShow[0].amount
            this.pointB =  this.dataShow[0].area
            this.pointC =  this.dataShow[0].avgAmount
            this.pointD =  this.dataShow[0].avgArea
            this.pointE =  this.dataShow[0].avgSucceed
            this.pointF =  this.dataShow[0].succeed
            console.log( this.dataShow)
        },
        //球员季前赛
        getMessageA(id){
            queryPointsAMessage(id).then(res => {
                console.log(res)
                if(res.code === 200){
                    if(res.result){
                        this.data1 = res.result.list
                    }else{
                        this.data1 = obj
                    }
                }
            })
        },
        //球员常规赛
        getMessageB(id){
            queryPointsBMessage(id).then(res => {
                console.log(res)
                if(res.code === 200){
                    if(res.result){
                        this.data2 = res.result.list
                    }else{
                        this.data2 = obj
                    }
                }
            })
        },
        //联盟季前赛
        getUnionMessageA(){
            queryUnionsAMessage().then(res => {
                console.log(res)
                if(res.code === 200){
                    if(res.result){
                        this.data3 = res.result
                    }else{
                        this.data3 = obj
                    }
                }
            })
        },
        //联盟常规赛
        getUnionMessageB(){
            queryUnionsBMessage().then(res => {
                console.log(res)
                if(res.code === 200){
                    if(res.result){
                        this.data4 = res.result
                    }else{
                        this.data4 = obj
                    }
                }
            })
        },

        getUnionQueryMessage(id){
            queryUnionMessage(id).then(res =>　{
                console.log(res)
                if(res.code === 200){
                    let Arr = [res.result.avgScore,res.result.avgAssist,res.result.avgBackboard,res.result.threePointer,res.result.freeThrow]
                    this.points1Arr = [...Arr];
                    this.unionData.push(res.result);
                    this.threePointerA = res.result.threePointer;
                    this.twoPointerA = res.result.twoPointer;
                    this.allPointerA = res.result.allPointer
                }
            })
        },

        getQueryMessage(id){
            queryMessage(id).then(res =>　{
                console.log(res)
                if(res.code === 200){
                    let Arr = [res.result.avgScore,res.result.avgAssist,res.result.avgBackboard,res.result.threePointer,res.result.freeThrow]
                    this.points2Arr = [...Arr]
                    this.personalData.push(res.result)
                    this.threePointerB = res.result.threePointer;
                    this.twoPointerB = res.result.twoPointer;
                    this.allPointerB = res.result.allPointer
                }
            })
        },

        openUnionDrawer(){
            this.dialogVisible = true;
            this.showData = this.unionData
        },
        openPersonalDrawer(){
            this.dialogVisible = true;
            this.showData = this.personalData
        },
        showPoints(item){
            this.pointA = item.amount;
            this.pointB = item.area;
            this.pointC = item.avgAmount;
            this.pointD = item.avgArea;
            this.pointE = item.avgSucceed;
            this.pointF = item.succeed
        },

        getQueryTMessage(){
            queryUnionTMessage().then(res =>　{
                console.log(res)
                if(res.code === 200){
                    if(res.result){
                        this.data5 = res.result
                    }else{
                        this.data5 = data
                    }
                    this.unionData.push(this.data5);
                    console.log(this.unionData)
                }
            })
        },

        getQueryTotalMessage(id){
            queryTotalMessage(id).then(res =>　{
                console.log(res)
                if(res.code === 200){
                    if(res.result){
                        this.data6 = res.result
                    }else{
                        this.data6 = data
                    }
                    this.personalData.push(this.data6);
                    console.log(this.personalData)
                }
            })
        }
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