
import React, { Component } from 'react'
import { Text, View,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './Home'
import Cart from './Cart'
import Index from './Index'
import Sell from './Sell'

// 生成导航栏 两个参数 1、必填配置路由页面，2、选填 样式功能配置
const bottom=createBottomTabNavigator({
    首页: {
        screen:Index,
        navigationOptions:{
            tabBarIcon:({tintColor,focused})=>(
                <Image 
                    // source={focused ? require('../res/images/hot_hover.png') : require('../res/images/hot.png')}
                    source={require('../assets/index.png')}
                style={{ width: 24, height: 24, tintColor: tintColor }}
                />

            )
        }
    },  
    卖书: {
        screen:Sell,
        navigationOptions:{
            tabBarIcon:({tintColor,focused})=>(
                <Image 
                    // source={focused ? require('../res/images/hot_hover.png') : require('../res/images/hot.png')}
                    source={require('../assets/book.png')}
                style={{ width: 24, height: 24, tintColor: tintColor }}
                />
            )
        }
      },
    购物车: {
        screen:Cart,
        navigationOptions:{
            tabBarIcon:({tintColor,focused})=>(
                <Image 
                    // source={focused ? require('../res/images/hot_hover.png') : require('../res/images/hot.png')}
                    source={require('../assets/cart.png')}
                style={{ width: 24, height: 24, tintColor: tintColor }}
                />
            )
        }
      },   
    我的: {
        screen:Home,
        navigationOptions:{
            tabBarIcon:({tintColor,focused})=>(
                <Image 
                    // source={focused ? require('../res/images/hot_hover.png') : require('../res/images/hot.png')}
                    source={require('../assets/home.png')}
                style={{ width: 24, height: 24, tintColor: tintColor }}
                />
            )
        }
      },
},
{
    // backBehavior: 'none',andorid按下返回键将返回initalRouteName，如果设置非initalRouteName则直接结束标签导航
    // initialRouteName:'卖书' 设置首次加载时显示哪个页面   
    // order: ['首页', '卖书', '购物车'],// 定义tab顺序的routeNames数组
    // tabBarOptions: {
    //     //设置是否显示tab上图标
    //     showIcon: true,
    //     //设置tab激活时文字和图标(前提是tabBarIcon的style设置tintColor)颜色
    //     activeTintColor: '#fd742f',
    //     //设置tab未激活文字和图标(前提是tabBarIcon的style设置tintColor)颜色
    //     inactiveTintColor: '#a6a1aa',
    //     //设置tab激活时候背景颜色
    //     activeBackgroundColor:'#e0dce0',
    //     //设置整个tabbar的样式(背景颜色、高等（ height: 55）)
    //     style: {backgroundColor: '#f5f4f9', height: 55},
    //     //设置tab上文字样式(可设置字体大小等、内边距等)
    //     labelStyle: {fontSize: 16},
    //     // 设置单个tab样式
    //     //tabStyle:{backgroundColor:'#9524d3',},
    //     // 设置是否显示tab文字
    //     //showLabel: true,
    //     // 设置tab未激活时候背景颜色
    //     //inactiveBackgroundColor:'#a4d9ff',
    // },
    // tabBarOptions: {
    //     activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
        //     animationEnabled:true,//切换页面时是否有动画效果
  //     tabBarPosition:"bottom", //tabbar的位置
  //     swipeEnabled:false,//是否可以左右滑动切换tab
  //     backBehavior:'none',//按back键是否跳转到第一个tabbar（首页），none 为不跳转
  //     tabBarOptions:{
  //       activeTintColor: '#ff8500',//文字和图片的选中颜色
  //       inactiveTintColor:'#999',//文字和图片的未选中颜色
  //       showIcon:true,//默认为false 需要设置true才能显示
  //       indicatorStyle:{
  //         height: 0, //如tabbar下面有一条线，可以设置高度为0 隐藏
  //       },
  //       style:{
  //         backgroundColor: '#fff',//tabbar 背景颜色
  //         height: 49,
  //       },
  //       labelStyle:{
  //         fontSize: 12,// 文字大小
  //       }
  //     }
    // }
      tabBarOptions: {
        activeTintColor: '#18c3aa',  // 选中项的颜色
        inactiveTintColor: '#666666', // 未选中项的颜色
        showIcon: true
      },
}
);

const tb=createAppContainer(bottom)
export default tb;