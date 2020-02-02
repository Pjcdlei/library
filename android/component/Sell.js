import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Book from './Book'

export default class Sell extends Component {
    render() {
        return (
            <View style={{backgroundColor:"white"}}>
                <Book></Book>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
