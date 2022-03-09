import Taro from'@tarojs/taro'


export default function({url,method='get',data=null,success}){
    Taro.request({
        url,
        method,
        data,
        header:{
            'token':Taro.getStorageSync('token'),
            'content-type': 'application/x-www-form-urlencoded'
        },
        success
    })
}