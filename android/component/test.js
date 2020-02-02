import React, { Component } from 'react'
import { Text, StyleSheet, View,SectionList} from 'react-native'

export default class test extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  sections=[
    { title: "Title1sad", data: [{a:3,c:5}, {a:4}] },
    // { title: "Title1", data: ["item3", "item4"] }
  ]
 
  
  render() {
    return (
      <View>
        <Text> aaaaa 你背后是你所挚爱的人，你确定到了歇斯底里不能坚持的地步了吗</Text>
        <SectionList
          renderItem={({ item, index, section }) => <Text key={index}>{item.a}</Text>}
          renderSectionHeader={({ section: { title } }) => (<Text style={{ fontWeight: "bold" }}>{title}</Text>)}
          // sections={[
          // { title: "Title1sad", data: ["item1", "item2"] },
          // { title: "Title2", data: ["item3", "item4"] },
          // { title: "Title3", data: ["item5", "item6"] }
          // ]}
          sections={this.sections}
          keyExtractor={(item, index) => item + index}

        
        ></SectionList>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
