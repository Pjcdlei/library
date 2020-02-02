import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,Image,TouchableOpacity,FlatList,ImageBackground,SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import IndexTop from './Index_top'


export default class Index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
        }
        section=[
            {   title: ["防疫期间，可以读读这些书",'88'],
                data: [
                    {name:'十日谈',author:'卜伽丘',score:'7.5',price:12,discount:'6',referrer:'四维虫子',favourNum:343,referrerAva:require('../assets/referrerAva1.jpg'),bookImg:require('../assets/bookImg1.jpg'),referrerText:'现在看起来有点狗血的故事，放在当时可谓文学进步。一群年轻人为了躲避瘟疫，聚在一起讲故事，似乎挺应景的',fx:require('../assets/fx.png'),xx:require('../assets/xx.png'),dz:require('../assets/dz.png',),comment:5},
                    {name:'血疫',author:'理查德•普雷斯顿',score:'8.7',price:28.1,discount:'6.2',referrer:'ppap',favourNum:18,referrerAva:require('../assets/referrerAva1.jpg'),bookImg:require('../assets/bookImg2.jpg'),referrerText:'在患者体内疯狂繁殖的病毒，极其血腥残忍的传播方式，以及面对病原体时专业冷静的医护人员……看了一下这本书，再回望我们所处的这个世界，才发现，我们根本不知道什么叫危险',fx:require('../assets/fx.png'),xx:require('../assets/xx.png'),dz:require('../assets/dz.png',),comment:30},
                    {name:'霍乱时期的爱情',author:'加西亚•马尔克斯',score:'9.0',price:33.2,discount:'8.4',referrer:'pjcd',favourNum:3,referrerAva:require('../assets/referrerAva1.jpg'),bookImg:require('../assets/bookImg3.jpg'),referrerText:'关于疫病，一定少不了这本。',fx:require('../assets/fx.png'),xx:require('../assets/xx.png'),dz:require('../assets/dz.png',),comment:3}
            ]
            },
            {   title: ["防疫期间，可以读读这些书",'88'], 
                data: [
                {name:'十日谈',author:'卜伽丘',score:'7.5',price:12,discount:'6',referrer:'四维虫子',favourNum:343,referrerAva:require('../assets/referrerAva1.jpg'),bookImg:require('../assets/bookImg1.jpg'),referrerText:'现在看起来有点狗血的故事，放在当时可谓文学进步。一群年轻人为了躲避瘟疫，聚在一起讲故事，似乎挺应景的',fx:require('../assets/fx.png'),xx:require('../assets/xx.png'),dz:require('../assets/dz.png',),comment:5},
                {name:'血疫',author:'理查德•普雷斯顿',score:'8.7',price:28.1,discount:'6.2',referrer:'ppap',favourNum:18,referrerAva:require('../assets/referrerAva1.jpg'),bookImg:require('../assets/bookImg2.jpg'),referrerText:'在患者体内疯狂繁殖的病毒，极其血腥残忍的传播方式，以及面对病原体时专业冷静的医护人员……看了一下这本书，再回望我们所处的这个世界，才发现，我们根本不知道什么叫危险',fx:require('../assets/fx.png'),xx:require('../assets/xx.png'),dz:require('../assets/dz.png',),comment:30},
                {name:'霍乱时期的爱情',author:'加西亚•马尔克斯',score:'9.0',price:33.2,discount:'8.4',referrer:'pjcd',favourNum:3,referrerAva:require('../assets/referrerAva1.jpg'),bookImg:require('../assets/bookImg3.jpg'),referrerText:'关于疫病，一定少不了这本。',fx:require('../assets/fx.png'),xx:require('../assets/xx.png'),dz:require('../assets/dz.png',),comment:3}
        ]
            },
            {   title: ["防疫期间，可以读读这些书",'88'], 
                data: [
                {name:'十日谈',author:'卜伽丘',score:'7.5',price:12,discount:'6',referrer:'四维虫子',favourNum:343,referrerAva:require('../assets/referrerAva1.jpg'),bookImg:require('../assets/bookImg1.jpg'),referrerText:'现在看起来有点狗血的故事，放在当时可谓文学进步。一群年轻人为了躲避瘟疫，聚在一起讲故事，似乎挺应景的',fx:require('../assets/fx.png'),xx:require('../assets/xx.png'),dz:require('../assets/dz.png',),comment:5},
                {name:'血疫',author:'理查德•普雷斯顿',score:'8.7',price:28.1,discount:'6.2',referrer:'ppap',favourNum:18,referrerAva:require('../assets/referrerAva1.jpg'),bookImg:require('../assets/bookImg2.jpg'),referrerText:'在患者体内疯狂繁殖的病毒，极其血腥残忍的传播方式，以及面对病原体时专业冷静的医护人员……看了一下这本书，再回望我们所处的这个世界，才发现，我们根本不知道什么叫危险',fx:require('../assets/fx.png'),xx:require('../assets/xx.png'),dz:require('../assets/dz.png',),comment:30},
                {name:'霍乱时期的爱情',author:'加西亚•马尔克斯',score:'9.0',price:33.2,discount:'8.4',referrer:'pjcd',favourNum:3,referrerAva:require('../assets/referrerAva1.jpg'),bookImg:require('../assets/bookImg3.jpg'),referrerText:'关于疫病，一定少不了这本。',fx:require('../assets/fx.png'),xx:require('../assets/xx.png'),dz:require('../assets/dz.png',),comment:3}
        ]
            }

            ]
    
    
    _renderBListItem=({item,index,section})=>{
        return (
            <View key={index} style={ss.BLWrap}>
                <View style={ss.BLIntro}>
                    <Image source={item.bookImg} style={{width:75,height:110}}></Image>
                    <View style={ss.IntroRigthText}>
                        <View>
                        <Text>{item.name}</Text>
                        <Text style={{fontSize:11,color:'#666',marginTop:7,marginBottom:3}}>{item.author}</Text>
                        <Text style={{fontSize:12,color:'#D6BA8C'}}>豆瓣评分 {item.score}</Text>
                        </View>
                        <View style={ss.BLnum}>
                        <Text style={{fontSize:16}}>￥{(item.price).toFixed(2)}</Text>
                        <View style={ss.BLdiscount}>
                        <Text style={{fontSize:11,color:'#F28181'}}>{item.discount} 折</Text>
                        </View>
                        </View>
                    </View>
                </View>
                <View style={ss.BLreferrer}>
                    <Text style={ss.BLreferrerText}>{item.referrerText}</Text>
                </View>
                <View style={ss.BLbottom}> 
                    <View style={ss.row}>
                    <Image style={{width:15,height:15,borderRadius:7,marginRight:5}} source={item.referrerAva}></Image>
                    <Text style={{color:'#666',fontSize:12}}>{item.referrer}的推荐</Text>
                    </View>
                    <View style={ss.BLiconWrap}>
                        <Image style={ss.BLicon} source={item.fx}/>
                        <View style={[ss.row,{marginHorizontal:20,alignItems:'flex-end'}]}>
                            <Image style={[ss.BLicon,ss.mg4]} source={item.xx}/>
                            <Text style={ss.color666} >{item.comment}</Text>
                        </View>
                        <View style={[ss.row,{alignItems:'center'}]}>
                            <Image style={[ss.BLicon,ss.mg4]} source={item.dz}/>
                            <Text style={ss.color666}>{item.favourNum}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    _renderBListHeader=({section:{title,data}})=>{
        return (
           

            <View style={ss.BLtitle}>
            
                <Text style={{fontSize:18}}>{title[0]}</Text>     
                <View style={ss.BLtitleR}>          
                <Text style={{color:'#666',fontSize:12}}>{title[1]}本</Text>
                <View style={ss.BLarrow}></View>  
                </View>             
            </View>
        )
    }
    _renderBListSectionFooter=()=>{
        return (
            <View style={ss.BLfooterWrap}>
                <Text style={{fontSize:11}}>再多来点儿</Text>
                <View style={ss.BLfooterArrow}></View>
            </View>
        )
    }
    _BListSeparator=()=>{
        return <View style={{borderBottomWidth: 0.4,borderColor:'#E5E5E5',backgroundColor:'white'}}></View>;
    }
    render() {       
        return (
            <View style={ss.container}>
            {/* booklist */}
                <View>
                    <SectionList
                    sections={this.section}
                    renderItem={this._renderBListItem}
                    renderSectionHeader={this._renderBListHeader}
                    keyExtractor={(item,index)=>item+index}
                    ItemSeparatorComponent={this._BListSeparator}
                    ListHeaderComponent= {<IndexTop></IndexTop>}
                    renderSectionFooter={this._renderBListSectionFooter}
                    />
                    
                </View>
            </View>           
        )
    }
}

const ss = StyleSheet.create({
    row:{
        flexDirection:'row',
    },
    mg4:{
        marginRight:4
    },
    color666:{
        color:'#666'
    },
    container:{
        flex:1,
        // padding:10,
        // backgroundColor:'pink'
    },

    BLWrap:{
        // borderTopWidth:1
        // flex:1
        paddingVertical:10,
        paddingBottom:23,
        paddingHorizontal:10,
        backgroundColor:'white',

    },
    BLIntro:{
        flexDirection:'row'
    },
    IntroRigthText:{
        marginHorizontal:10,
        justifyContent:'space-between'
    },
    BLreferrer:{
        marginVertical:15
    },
    BLreferrerText:{
        lineHeight:21,
        fontWeight:"800",
        fontFamily:'Georgia'

    },

    BLbottom:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    BLnum:{
        flexDirection:'row',
        alignItems:'center'
    },
    BLtitle:{
        flexDirection:'row',
        justifyContent:'space-between',
        // paddingVertical:8,
        paddingVertical:15,
        paddingHorizontal:10,
        borderBottomWidth:0.4,
        borderColor:'#E5E5E5',
        backgroundColor:'white',
    },
    BLarrow:{
        width:6,
        height:6,
        borderRightWidth:1,
        borderTopWidth:1,
        transform:[{rotate:'45deg'}],
        borderColor:'#666',
        marginLeft:3    
    },
    BLtitleR:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:5,
    },
    BLdiscount:{
        width:40,
        height:17,
        borderWidth:1, borderColor:'#F28181',flexDirection:'row',
        borderRadius:4,
        marginLeft:5,justifyContent:'center'
    },
    BLicon:{
        width:16,height:16,
    },
    BLiconWrap:{
        flexDirection:'row',
        alignItems:'center',
    },
    BLfooterWrap:{
        flexDirection:'row',
        justifyContent:'center',
        height:45,
        // borderWidth:3,
        alignItems:'center',
        backgroundColor:'white',
        marginBottom:15,
        marginTop:2
    },
    BLfooterArrow:{
        width:7,
        height:7,
        borderRightWidth:1,
        borderTopWidth:1,
        transform:[{rotate:'135deg'}],
        borderColor:'#666',
        marginLeft:10,
        marginTop:3,


    }

})