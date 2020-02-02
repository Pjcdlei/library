import React, { Component } from 'react'
import { Text, StyleSheet, View,ImageBackground,Image } from 'react-native'
import Dongtai from './dongtai'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
   
    render() {
        return (
            <View style={{flex:1}}>
            
                <View style={{flex:0.4,backgroundColor:"#afc4b1"}}>
                {/* home顶部头像 */}
                    <View style={ss.avatar}>
                        <Image source={require('../assets/touxiang.jpg')} style={ss.img}>
                        </Image>
                        <Text style={ss.text}>心满意足的神秘人</Text>
                    </View>
                    {/* 中间item */}
                    <View style={ss.tab}>
                        <View>
                            <Image style={ss.image} source={require('../assets/qianbao.png')}/>
                            <Text style={ss.white}>钱包</Text>
                        </View>
                        <View>
                            <Image style={ss.image} source={require('../assets/dingdan.png')}/>
                            <Text style={ss.white}>订单</Text>
                        </View>
                        <View>
                            <Image style={[ss.image,{left:15}]}source={require('../assets/shu.png')}/>
                            <Text style={ss.white}>买卖的书</Text>
                        </View>
                        <View>
                            <Image style={ss.image} source={require('../assets/tongzhi.png')}/>
                            <Text style={ss.white} >通知</Text>
                        </View>
                    </View>
                    <View style={ss.dt}>
                        <View><Text  onPress={this._onPressDT} style={ss.white}>动态1</Text></View>
                        <View><Text style={ss.white}>书架</Text></View>
                    </View>
                    
                </View>
                <View style={{flex:0.6}}><Dongtai></Dongtai></View>
                
                
                


            </View>
        )
    }
}

const ss = StyleSheet.create({
    avatar:{
        flex:3,
        // borderBottomWidth:0.3,
        borderBottomColor:"#fff",
        alignItems:'center',
        justifyContent:'center',
        
    },
    tab:{
        flex:1,
        borderTopWidth:0.3,
        borderTopColor:"#fff",
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'pink',
        justifyContent:'space-around'
    },
    white:{
        color:'white',
        textAlign:'center'
    },
    image:{
        width:20,
        height:20,
        left:3
    },
    dt:{flex:0.8,
        borderTopWidth:0.3,
        borderTopColor:'white',
        flexDirection:'row',    
        justifyContent:'space-around',
        alignItems:"center"

    },
    img:{
        flexDirection:'row',
        width:70,
        height:70,
        borderRadius:50,
        marginTop:-5,
    },
    text:{
        color:'#fff',
        marginTop:10,
    }
    
})
