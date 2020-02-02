import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default class Dongtai extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:{
                avatar:require('../assets/touxiang.jpg'),
                nick:"心满意足的神秘人",
                bookImg:require('../assets/zgn.jpg'),
                bookName:"杀死一只知更鸟",
                author:"哈珀·李",
                score:9.2,
                comment:"勇敢是：当你还未开始就知道自己会输，可你依然要去做，而且无论如何都要把它坚持到底",
                date:"1月24日",
                
             }
        }
    }
    
    render() {
        return (
            <View style={{flex:1,backgroundColor:"white",paddingHorizontal:13}}>
            <View style={ss.cs}></View>
                <View style={ss.DTinfo}>
                    
                    <Image style={ss.DTavatar} source={this.state.data.avatar}></Image>
                    <View style={ss.DTtext}>
                        <Text>{this.state.data.nick}</Text>
                        <Text style={ss.DTcolor}>推荐这本书</Text>
                    </View>
                </View>
                <View style={ss.DTbookinfo}>
                    <Image style={ss.DTbookImg} source={this.state.data.bookImg}></Image>
                    <View style={ss.DTtext}>
                        <Text>{this.state.data.bookName}</Text>
                        <Text style={[ss.DTcolor,{paddingVertical:2}]}>{this.state.data.author}</Text>
                        <Text style={ss.DTscore}>豆瓣评分{this.state.data.score}</Text>
                    </View>
                </View>
                <View style={{borderBottomWidth:0.3,borderBottomColor:'#E5E5E5',}}>
                    <Text style={ss.DTcomment}>{this.state.data.comment}</Text>
                </View>
                <View style={[ss.DTinfo,{justifyContent:'space-between'}]}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:17,height:17,marginLeft:5,}} source={require('../assets/xx.png')}></Image>
                        <Image style={{width:17,height:17,marginLeft:25,}} source={require('../assets/dz.png')}></Image>
                    </View>
                    <Text style={ss.DTcolor}>{this.state.data.date}</Text>
                </View>
                <View style={ss.DTnodewrap}>
                    <View style={ss.DTnode}>
                        <Text>+ 写读书笔记</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const ss = StyleSheet.create({
    cs:{
        width:0,height:0,
        borderLeftWidth:8,
        borderRightWidth:8,
        borderLeftColor:'transparent',
        borderRightColor:'transparent',
        borderBottomWidth:8,
        borderBottomColor:'white',
        marginTop:-8,
        marginLeft:90
        // bottom:8,
        // left:90
    },
    DTinfo:{
        flexDirection:'row',
        paddingTop:17,
        backgroundColor:'white',
    },
    DTavatar:{
        width:35,height:35,
        borderRadius:17,
    },
    DTbookImg:{
        width:60,
        height:90
    },
    DTtext:{
        marginLeft:5,
    },
    DTbookinfo:{
        flexDirection:'row',
        marginTop:14,
    },
    DTcolor:{
        color:'#666',
        fontSize:12,
    },
    DTscore:{
        fontSize:13,
        color:"#D6BA8C"
    },
    DTcomment:{
        marginVertical:15,
    },
    DTnodewrap:{
        alignItems:'center',
        marginTop:125,
    },
    DTnode:{
        width:120,height:40,
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:60,
        borderColor:'#e6e6e6',


    }
})
