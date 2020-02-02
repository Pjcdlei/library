import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import BookItem from './BookItem'

export default class Book extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <View>
            <View>
                <BookItem bookImg={require('../assets/one.png')} bookText1='手机扫码' bookText2='看收购价' bookA='什么书不收' arrows={require('../assets/downArrows.png')}/>
                <BookItem bookImg={require('../assets/two.png')} bookText1='快递免费' bookText2='上门取件'/>
                <BookItem bookImg={require('../assets/three.png')} bookText1='审核通过' bookText2='书款到账' bookA='什么是审核' arrows={require('../assets/downArrows.png')}/>
            </View>
            <View  style={ss.BIrule}>
                <Text>了解卖书规则</Text>
                <View style={ss.BIruleArr}></View>
            </View>
            <View style={ss.BI}>
                <View style={ss.BIwrap}>
                <Image style={ss.BIimg} source={require('../assets/saoma.png')}></Image>
                <Text style={{color:'white',fontSize:18}}>扫码卖书</Text>
                </View>
                <View><Text style={{fontSize:12,color:'#666',marginTop:6,marginBottom:25}}>手动输入ISBN</Text></View>
                
            </View>
            </View>
        )
        
    }
}
const ss = StyleSheet.create({
    BIrule:{
        // backgroundColor:"pink",
        paddingVertical:20,
        borderBottomWidth:1,
        borderBottomColor:"#E5E5E5",
        flexDirection:'row',
        marginHorizontal:15,
        alignItems:'center',
        justifyContent:'space-between'
    },
    BIruleArr:{
        width:10,height:10,
        borderTopWidth:2,
        borderRightWidth:2,
        borderColor:'#666',
        transform:[{rotate:'45deg'}]
    },
    BIwrap:{
        flexDirection:'row',
        backgroundColor:"#18C3AA",
        width:170,height:50,
        alignItems:"center",
        justifyContent:'center',
        borderRadius:50,
    },
    BIimg:{
        width:30,height:30,
        marginRight:5,
    },
    BI:{
        alignItems:'center',
        marginTop:110,
        

    }
    
})

