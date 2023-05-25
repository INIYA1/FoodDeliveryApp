import { View, Text,StyleSheet } from 'react-native'
import { Icon,withBadge } from 'react-native-elements'
import {colors,parameters} from '../utils/styles'
import React from 'react'


export default function HomeHeader(){

 const BadgeIcon = withBadge(0)(Icon)


    return(
        <View style={styles.header}>
  <View style={styles.icon}>
  <Icon type='material-community'
        name='menu'
        color={colors.cardBackground}
        size={32} />
  </View>

  <View style={styles.top}>
    <Text style={styles.text1}> Xpress Food </Text>
  </View>

  <View style={styles.top1}>
<BadgeIcon 
    type='material-community'
    name='cart'
    size={35}
    color ={colors.cardBackground}
/>
  </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.buttons,
        height:parameters.headerHeight,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    icon:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:15
    },
    text1:{
        color:colors.cardBackground,
        fontSize:25,
        fontWeight:'bold'
    },
    top:{
        alignItems:'center',
        justifyContent:'center'
    },
    top1:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:15
    }
})