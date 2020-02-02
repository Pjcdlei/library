import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default class BookItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <View>
                <View style={ss.BIwrap}>
                    <Image style={ss.BIimg} source={this.props.bookImg}></Image>
                    <View style={ss.BLtext}>
                        <Text style={ss.font20}>{this.props.bookText1}</Text>
                        <Text style={ss.font20}>{this.props.bookText2}</Text>
                        
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:4}}>
                        <Text style={ss.fontGreen}>{this.props.bookA}</Text>
                        <Image style={ss.BLarrows} source={this.props.arrows}></Image>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const ss = StyleSheet.create({
    BIwrap:{
        flexDirection:'row',
        paddingBottom:8,
        borderBottomWidth:1,
        borderBottomColor:"#E5E5E5",
        marginTop:5
    },
    BIimg:{
        width:120,height:140,
        flex:2
    },
    BLtext:{
        flex:4,
        // backgroundColor:'pink',
        justifyContent:'center',
        alignItems:"center"
    },
    font20:{
        fontSize:20,
        lineHeight:25,
        letterSpacing:2,
    },
    fontGreen:{
        fontSize:13,
        color:'#18C3AA'
    },
    BLarrows:{
        width:12,height:12,
        marginLeft:3
    }
    
})
