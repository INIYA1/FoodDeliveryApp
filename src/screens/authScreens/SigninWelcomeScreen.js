import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { colors, parameters, title } from '../../utils/styles'
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';

export default function SigninWelcomeScreen({navigation}) {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }}>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>DISCOVER RESTAURANTS</Text>
                <Text style={{ fontSize: 26, color: colors.buttons, fontWeight: 'bold' }}>IN YOUR AREA</Text>
            </View>

            <View style={{ flex: 4, justifyContent: 'center' }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                        source={{ uri: 'https://wallpaperaccess.com/full/767292.jpg' }}
                        style={{height:"100%",width:"100%"}}
                        />

                    </View>

                    <View style={styles.slide2}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZm9vZHxlbnwwfHwwfHw%3D&w=1000&q=80' }}
                            style={{height:"100%",width:"100%"}}
                        />

                    </View>

                    <View style={styles.slide3}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5Ap4JChJtbWEMW1j3G-THujcPjylbha2mqzNeC-XNw6rmAFLXbDkBQTwTPnjSCt3Fz0&usqp=CAU' }}
                            style={{height:"100%",width:"100%"}}
                        />

                    </View>
                </Swiper>
            </View>

            <View style={{flex:3,justifyContent:'flex-end',marginHorizontal:20}}>
            <View style={{ marginBottom:40, marginHorizontal: 20 }}>
            <TouchableOpacity style={parameters.styledButton}
            onPress={()=>{ navigation.navigate('SigninScreen')

            }}>
                <Text style={parameters.buttonTitle}>SIGN IN</Text>
            </TouchableOpacity>

            </View>

            </View>
            
            <View style={{marginHorizontal:40,marginBottom:30}}>
              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonStyle}>Create an account</Text>
              </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    createButton:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:12,
        borderWidth:1,
        height:40,
        paddingHorizontal:20,
        borderColor:'#ff8c52'
    },
    createButtonStyle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:3
    }
})