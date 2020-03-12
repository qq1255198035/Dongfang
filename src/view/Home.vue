<template>
    <div id="Home">
        <div>
            <router-link to="/one">
                <img src="./../assets/imgs/Home-btn.png" alt="">
            </router-link>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{

        }
    },
    components:{
        
    },
    methods:{
        
    },
    mounted(){
        
        
        
    }
}
</script>
<style lang="less">
#Home{
    width: 100%;
    height: 100%;
    background-image: url('./../assets//imgs/Home-bg.png');
    background-size: 100% 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    > div{
        width: 30%;
        padding: 5% 0;
        text-align: center;
        img{
            width: 60%;
        }
    }
}
</style>