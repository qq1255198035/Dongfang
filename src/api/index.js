import axios from 'axios';
import qs from 'qs';
let baseUrl = '/jeecg-boot'

export function queryPageList(){
    return axios({
        method: 'post',
        url: baseUrl + '/dongfangAthlete/queryList'
    })
}
// 联盟平局数据
export function queryUnionMessage(id){
    return axios({
        method: 'post',
        url: baseUrl + '/dongfangAvgData/queryById',
        data: qs.stringify({id})
    })
}
// 球员平局数据
export function queryMessage(id){
    return axios({
        method: 'post',
        url: baseUrl + '/dongfangPlayerData/queryById',
        data: qs.stringify({id})
    })
}
// 联盟 季前赛投篮
export function queryUnionsAMessage(){
    return axios({
        method: 'post',
        url: baseUrl + '/dongfangLeagueBeforeData/queryById',
        data: qs.stringify({id:1})
    })
}
// 联盟 常规赛投篮
export function queryUnionsBMessage(){
    return axios({
        method: 'post',
        url: baseUrl + '/dongfangLeagueData/queryById',
        data: qs.stringify({id:1})
    })
}
// 球员常规赛投篮
export function queryPointsAMessage(id){
    return axios({
        method: 'post',
        url: baseUrl + '/dongfangAthleteData/queryByPlayerId',
        data: qs.stringify({id})
    })
}

export function queryPointsBMessage(id){
    return axios({
        method: 'post',
        url: baseUrl + '/dongfangAthleteBeforeData/queryByPlayerId',
        data: qs.stringify({id})
    })
}
//球员总计
export function queryTotalMessage(id){
    return axios({
        method: 'post',
        url: baseUrl + '/dongfangPlayerAmountData/queryById',
        data: qs.stringify({id})
    })
}
//联盟总计
export function queryUnionTMessage(){
    return axios({
        method: 'post',
        url: baseUrl + '/dongfangAmountData/queryById',
        data: qs.stringify({id: 1})
    })
}