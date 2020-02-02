import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CartTem from './CartTem'

export default class Cart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[
                {
                CTimg:require('../assets/zgn.jpg'),
                CTbookName:"杀死一只知更鸟",
                CTappearan:"品相良好",
                CTprice:23
                },
                {
                CTimg:require('../assets/sl.jpg'),
                CTbookName:"人性中的善良天使",
                CTappearan:"品相良好",
                CTprice:64
                },
                
                {
                CTimg:require('../assets/dx.jpg'),
                CTbookName:"房间里的大象",
                CTappearan:"轻微污渍",
                CTprice:51
                }
  
        
        ]
             
        }
    }
    Cart=()=>{
        let arr=this.state.data.map(
            (item,index)=>{
                return <View key={index}>
                <CartTem CTimg={item.CTimg} CTbookName={item.CTbookName} CTappearance={item.CTappearan} CTprice={item.CTprice}/>
                </View>
            }
        )
        return arr
    }
    
    all=()=>{
        return <View>
            <View style={ss.CTallWrap}>
                <Text style={ss.CTtext}>全部</Text>
                <Text>到货提醒</Text>
            </View>
        </View>

    }
    bottom=()=>{
        return <View>
            <View style={ss.CTjs} >
                <Text style={ss.CTjsText}>结算</Text>
            </View>
        </View>
    }


    render() {
        return (
            <View style={{backgroundColor:"white",flex:1}}>
            <View>{this.all()}</View>
            <View>
            {this.Cart()}
            </View>
            <View style={{alignItems:"flex-end"}}>{this.bottom()}</View>
            </View>
        )
    }
}
const ss = StyleSheet.create({
    CTallWrap:{
        backgroundColor:'white',
        flexDirection:'row',
        paddingTop:16,
        justifyContent:'space-around',
        borderBottomWidth:2,
        borderBottomColor:'#E5E5E5',
    },
    CTtext:{
        borderBottomWidth:3,
        paddingBottom:15,
        borderBottomColor:"#18C3AA",
        color:'#18C3AA'
    },
    CTjs:{
        width:120,height:40,
        backgroundColor:'#18C3AA',
        borderRadius:5,
        alignItems:'center',
        justifyContent:"center",
        top:250,
        marginRight:5
    },
    CTjsText:{
        color:'white',
        fontSize:17,
    }
})
