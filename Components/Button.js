import {Text, TouchableOpacity, StyleSheet  } from 'react-native'
import React from 'react'

export default function Button({title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.txtBtn}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: '#E67E22',
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },

    txtBtn: {
        fontSize: 32,
        color: '#17202A',
        fontWeight:'bold',
    },
})