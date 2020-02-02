import React, { Component } from 'react'
import { Text, StyleSheet, View,TextInput,Image,TouchableOpacity,FlatList,ImageBackground,SectionList } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'



export default class IndexTop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            topRec:[               
                {
                    TRbgPic:require('../assets/TRbgPic1.jpg'),
                    TRtitle:'我想成为这本书里的主角',
                    TRpeople:'23',
                    TRavatar:require('../assets/TRbgPic2.jpg')
                },
                {
                    TRbgPic:require('../assets/TRbgPic2.jpg'),
                    TRtitle:'如何侦破杀人案',
                    TRpeople:'32',
                    TRavatar:require('../assets/TRbgPic3.jpg')
                },
                {
                    TRbgPic:require('../assets/TRbgPic3.jpg'),
                    TRtitle:'这本书改变了我',
                    TRpeople:'15',
                    TRavatar:require('../assets/TRbgPic4.jpg')
                },
                {
                    TRbgPic:require('../assets/TRbgPic4.jpg'),
                    TRtitle:'军事爱好者的案头读本',
                    TRpeople:'33',
                    TRavatar:require('../assets/TRbgPic5.jpg')
                },
                {
                    TRbgPic:require('../assets/TRbgPic5.jpg'),
                    TRtitle:'互联网改变世界',
                    TRpeople:32,
                    TRavatar:require('../assets/touxiang.jpg')
                },
                ],     
        }
        }
        
        
    _renderTRbgPicItem=({item})=>{
        return(
            <TouchableOpacity>
            <View style={ss.TRwrap}>
                <ImageBackground style={ss.TRbgPic} imageStyle={{borderRadius:6}} source={item.TRbgPic}>
                <View style={ss.TRtext}>
                <Text style={ss.TRtitle}>{item.TRtitle}</Text>
                <Text style={ss.TRpeople}>{item.TRpeople}人推荐了30本书</Text>
                </View>
                <View style={ss.TRavatar}>
                <Image style={ss.TRavatar1} source={item.TRavatar}></Image>
                <Image style={ss.TRavatar2} source={item.TRavatar}></Image>
                <Image  style={ss.TRavatar3} source={item.TRavatar}></Image>
                </View>

                </ImageBackground>
            </View>
            </TouchableOpacity>
            
        )
    }
    

    render() {
        return (
            <View style={ss.container}>
                {/* 首页顶部搜索框及分类 */}
                <View style={ss.search}>
                {/* 搜索框 */}
                    <View style={ss.input}>
                        <Image source={require('../assets/search_icon.png')} style={ss.input_img}></Image>
                        <TextInput 
                        style={{padding:0,flex:1}}
                        placeholder="搜索你的所爱"
                        blurOnSubmit={true}
                        clearTextOnFocus={true}
                        selectionColor="#afc4b1"
                        selectTextOnFocus={true}
                        ></TextInput>              
                    </View>
                {/* 分类 */}
                    <View style={ss.sort}>
                        <TouchableOpacity style={{alignItems:"center"}}>
                            <Image style={{width:25,height:25}} source={require('../assets/sort.png')}/>
                            <Text style={{fontSize:11}}>分类</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            {/* 全部书单导航 */}
                <View style={ss.books}>
                        <Text>书单</Text>
                        <View style={{flexDirection:'row',alignItems:'center',marginRight:6}}>
                        <Text style={{color:'#666'}}>全部书单</Text>
                        <View style={ss.arrows}></View>
                        </View>
                </View>

            {/* 横向推荐 */}

                <View>
                    <FlatList 
                        data={this.state.topRec}
                        renderItem={this._renderTRbgPicItem}
                        keyExtractor={(item,index)=>String(index)}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}                   
                    />
                </View>
            </View>
            
        )
    }
}

const ss = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:'white'
    },
    search:{
        // flex:1,
        flexDirection:"row",
        marginTop:4,
       
    },
    input:{
        flex:11,
        width:100,
        height:40,
        borderWidth:1,
        borderRadius:8,
        borderColor:"#9a9a9a",
        flexDirection:"row",
        alignItems:"center"
    },
    input_img:{
        width:25,
        height:25,
        marginHorizontal:6,
    },
    sort:{
        flex:2
    },
    books:{
        flexDirection:'row',justifyContent:'space-between',
        marginVertical:15,
        paddingHorizontal:8,

    },
    arrows:{
        width:10,
        height:10,
        borderColor:'#666',
        borderTopWidth:2,
        borderRightWidth:2,
        transform:[{rotate:'45deg'}],
    },
    TRwrap:{
        // width:200,
        // height:200,
        // backgroundColor:'pink',
        // borderRadius:20
       
    },
    TRbgPic:{
        width:110,
        height:150,
        // resizeMode:'cover'
        marginRight:8,
        // backgroundImage:'linear-gradient(red, yellow, blue)',
        // shadowColor:'pink'
    },
    TRtext:{
        padding:7,
        // paddingVertical:
    },
    TRtitle:{
        color:'white',
        fontSize:16,
        marginBottom:5,
        // shadowColor:'white'
    },
    TRpeople:{
        color:'white',
        fontSize:11
    },
    TRavatar:{
        flexDirection:'row',
    },
    TRavatar1:{
        borderRadius:25,
        width:25,
        height:25,
        top:40,
        left:30,
        zIndex:3
    },
    TRavatar2:{
        width:25,
        height:25,
        borderRadius:25,
        top:40,
        left:28,
        zIndex:2
    },
    TRavatar3:{
        width:25,
        height:25,
        borderRadius:25,
        top:40,
        left:26,
        zIndex:1
    },

})