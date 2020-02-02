import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,Button,TouchableOpacity} from 'react-native'


export default class CartTem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked:true
        }
    }
    press=()=>{
        this.setState({
            isChecked:!this.state.isChecked
        })
         }
    Check=()=>{
        if(this.state.isChecked){
            return <View>
                <TouchableOpacity  onPress={this.press}>
                <Image style={{width:30,height:30}}  source={require('../assets/gx.png')}></Image>
                </TouchableOpacity>
            </View>
        }else{
            return <View>
                <TouchableOpacity  onPress={this.press}>
                <Image onPress={this.press} style={{width:30,height:30}} source={require('../assets/wgx.png')}/>
                </TouchableOpacity>
            </View>
        }
    }
    
    render() {
        return (
            <View>
                <View>
                    <View style={ss.CTwrap}>
                        <View tyle={ss.CTCheck}>{this.Check()}</View>

                        <Image style={ss.CTimg} source={this.props.CTimg}></Image>
                        <View style={ss.CTtext}>
                            <View style={ss.CTtextTOP}>
                                <View style={ss.CTchaWrap}>
                                    <Text style={{fontSize:15}}>{this.props.CTbookName}</Text>
                                    <Image style={ss.CTcha} source={require('../assets/cha.png')}></Image>
                                </View>
                                <Text style={{color:'#666'}}>{this.props.CTappearance}</Text>
                            </View>
                            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
                                <Text style={{fontSize:18}}>￥{(this.props.CTprice).toFixed(2)}</Text>
                                <View style={ss.CTbg}>
                                    <Text style={ss.CTsd}>锁定</Text>
                                    <View style={ss.CTarrows}></View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
      
            </View>
        )
    }
}

const ss = StyleSheet.create({
    CTwrap:{
        flexDirection:'row',
        paddingVertical:20,
        paddingHorizontal:10,
        borderBottomWidth:1,
        borderBottomColor:'#E5E5E5',
        backgroundColor:'white'
    },
    CTimg:{
        width:60,height:80,
        marginLeft:10,
    },
    CTtext:{
        flex:1,
        marginLeft:10,
        justifyContent:'space-between',
   
    },
    CTCheck:{
        justifyContent:'center',
        alignItems:'center'
    },
    CTchaWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    CTcha:{
        width:15,height:15,
    },
    CTbg:{
        flexDirection:'row',
        width:50,height:25,
        backgroundColor:'#E5E5E5',
        borderRadius:15,
        alignItems:"center",
        justifyContent:'center',
    },
    CTsd:{
        color:"#18C3AA",
        fontSize:12,
        // textAlign:'center',
        
    },
    CTarrows:{
        width:8,height:8,
        borderTopWidth:2,
        borderRightWidth:2,
        borderTopColor:"#18C3AA",
        borderRightColor:"#18C3AA",
        transform:[{rotate:"45deg"}]
    
    }
})
