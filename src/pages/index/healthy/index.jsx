import React,{useEffect,useState} from 'react';
import { View, Text,Button } from '@tarojs/components'
import EssayItem from '../../components/essayItem/index';
import request from '../../request/request';

export default function index() {
  let [allData,setAllData]=useState([])

  useEffect(()=>{
    request({
      url:'https://wx.dotfyj.com:9999/encyc/current/1/size/100',
      success:function(res){
        console.log(res)
        setAllData(res.data.list)
      }
    })
  },[])

 

  return <View>
    {
      allData.map((item,index)=>{
        return <EssayItem key={index} data={{...item,type:1}}></EssayItem>
      })
    }
    
  </View>;
}

