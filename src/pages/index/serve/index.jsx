import React, { useEffect } from 'react';
import { View, Text,Button,Image } from '@tarojs/components'
import Taro from'@tarojs/taro'
import lunbo1 from '../../assets/lunbo1.png';
import team from '../../assets/team.png';
import './index.scss'

export default function index() {


  let data={
    title:'智诊智能健康医疗科技创新产品服务指南',
    author:'方宏涛',
    time:'2021-01-25',
    img:lunbo1,
    content:[
      '重庆智珍智慧医疗科技有限公司的创始团队由5名本科生以及1名博士研究生组成，其中本团队技术与管理顾问由计算机学院\人工智能学院邓欣老师担任。',
      '团队有2名计算机科学与技术专业本科生，3名信息管理与信息系统专业本科生。团队成员知识结构比较全面，专业知识较扎实，沟通交流能力较好，创新思维较强，综合能力突出。',
      '方宏涛，2020级信息管理与信息系统专业，信管工作室产品设计组成员，红岩网校工作站产品策划及策划部副部长，熟悉互联网产品设计研发流程，拥有多端（C端、B端、SaaS端等）项目经验，掌握互联网项目产品设计、策划及运营技能，了解用户分析、用户调研、需求分析、需求设计、用户留存、用户转化、需求设计等产品手段。参与设计智慧工地、智慧城市产品策划方案，拥有共享经济下共享销售产品设计经验。',
      '梁书睿，2019级计科卓工班，主要负责项目算法设计部分，熟悉pytorch、tensorflow等深度学习框架，并对以rasa机器人对话框架为基础的项目开发有相当丰富的实战经验。曾以队长身份多次参加算法设计竞赛与数学建模竞赛，曾获2021高教社杯数学建模竞赛重庆赛区一等奖，华数杯大学生数学建模竞赛一等奖、Mathorcup数学建模挑战赛一等奖、APMCM亚太杯数学建模竞赛二等奖等奖项。',
      '梁子龙，2019级计科班，主要负责项目后端开发部分，完成与后台的算法的对接和前端的交互，作为极客勤奋峰工作室java后端开发人员，熟悉Springboot，Spring security等后端开发框架，有较为扎实的算法功功底和开发经验，曾担任CSA云行工作室Java后端开发组组长。多次参加蓝桥杯算法大赛，数据库大赛，“三创赛”，数学建模大赛，“互联网+”大赛等一系列赛事，获得多项省级校级奖项，有着丰富的比赛经验。',
      '符永骥，2020级信息管理与信息系统专业，信管工作室机器学习组组长，熟悉pytorch、tensorflow、 paddle等深度学习框架，熟悉TensorRT、ONNX等模型部署框架，曾以项目负责人的身份开发过基于openpose的网球评分系统，基于语义分割的虚拟直播平台，基于Meta-Learning、边缘节点的视频超分辨率直播系统，基于 Transformer的端到端的对话系统，有着丰富的深度学习项目部署经验、业务能力、端侧模型轻量化部署经验。',
      '关一方，2020级信息管理与信息系统专业，信管工作室前端开发组成员，校信息化办前端开发组成员，熟悉html、css、 javascript等前端基础技术，熟悉react、taro等前端开发框架，曾参与团队开发过基于react的学院教学系统“erp虚拟运营系统”、以react-native开发的宅鼠骑手端app，拥有web端、小程序和app的前端开发经验。',
    ]
  }

  return <View className='essayDetial-view'>
    <View className='title-view'>
      <View className='title-view-left'>
        <View className='title'>{data.title}</View>
        <View className='author'>{data.author} {data.time}</View>
      </View>
      {/* <View className='title-view-right'>
        <Image src={collection}></Image>
      </View> */}
    </View>

    <Image className='essay-img' src={team}></Image>

    <View className='essay-content'>
      {
        data.content.map((item,index)=>{
          return <View style={{whiteSpace:'pre-wrap'}} key={index} className='content'>{item}</View>
        })
      }
      
    </View>

  </View>;
}

