import React from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { colors, parameters } from '../utils/styles'
import Icon from 'react-native-vector-icons/Ionicons'


export default function Header({ title ,navigation }) {
    return (
        <View style={styles.header}>
            <View style={{ marginLeft: 20, }}>
                <Icon name="arrow-back-outline"
                    color={colors.headerText}
                    size={28}
                    onPress={() => {navigation.goBack()}} />
            </View>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 10
    }
})