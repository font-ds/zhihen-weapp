
import { View, Text } from '@tarojs/components'

import React,{useState,useEffect} from 'react';
import Taro from'@tarojs/taro'
import request from '../../request/request';

import './index.scss'

export default function index() {
  let [isHaveInfo,setIsHaveInfo]=useState(0)
  let [click,setClick]=useState(false)

  // 用户授权
  const getUserInfo=()=>{
      if(click==true){
        setClick(false)
        Taro.getSetting({
          success:res=>{
            console.log(res)
            Taro.getUserProfile({
              lang: 'zh_CN',
              desc: "获取你的昵称、头像、地区及性别",
              success: response => {
                console.log(response)
                const wxUserInfo = response.userInfo;
                Taro.setStorageSync('userInfo',wxUserInfo)
  
                if(isHaveInfo===1)Taro.switchTab({url:'/pages/index/index'})
                else Taro.navigateTo({url:'/pages/login/getInfo/index'})
  
              },
              fail: () => {
              //拒绝授权
                setClick(true)
                console.error("您拒绝了请求");
                return;
              }
            })
          }
        })
      }
     
  }




  useEffect(()=>{
    Taro.login({
      success: function (res) {
        if (res.code) {
          request({
            url:`https://wx.dotfyj.com:9999/user/login/${res.code}`,
            method:'get',
            success:function(res){
              setClick(true)
              console.log(res)
              Taro.setStorageSync('token',res.data.token)
              setIsHaveInfo(res.data.isHaveAllInfo)
              if(!Taro.getStorageSync('userInfo')){}
              else{
                if(res.data.isHaveAllInfo===1)Taro.switchTab({url:'/pages/index/index'})
                else Taro.navigateTo({url:'/pages/login/getInfo/index'})
              }
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },[])

 

  return <View className='login-view'>
      <View className='top-view'>
        <View>欢迎使用智诊</View>
        <View>健康医疗服务</View>
      </View>

      <View  className='login' onClick={getUserInfo}>微信一键登录</View>
    </View>
}