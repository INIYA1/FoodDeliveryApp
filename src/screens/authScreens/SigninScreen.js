import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { colors, parameters, title } from '../../utils/styles'
import { Icon, Button,SocialIcon } from 'react-native-elements';
import Header from '../../components/header'
import * as Animatable from 'react-native-animatable'



export function SignInScreen({navigation}) {

    const [textInputFocused, setTextInputFocused] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    return (
        <View style={styles.container}>
            <Header title="MY ACCOUNT" navigation={navigation}/>
            <View>
                <Text style={title}>Sign-In</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text>Please enter the email and password</Text>
                <Text>registered with your account</Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <View>
                    <TextInput style={styles.TextInput1}
                        placeholder='Email'
                        ref={textInput1}
                    />
                </View>

                <View style={styles.TextInput2}>
                    <Animatable.View animation={textInputFocused ? "" : "fadeInLeft"} duration={400}>
                        <Icon name='lock'
                            iconStyle={{ color: colors.grey3 }}
                            type='material'
                            style={{ marginTop: 10 }}
                        />
                    </Animatable.View>
                    <TextInput
                        style={{ width: '80%' }}
                        placeholder='Password'
                        ref={textInput2}
                        onFocus={() => {
                            setTextInputFocused(false)
                        }}
                        onBlur={() => {
                            setTextInputFocused(true)
                        }}
                    />
                    <Animatable.View animation={textInputFocused ? "" : "fadeInLeft"} duration={400} >
                        <Icon name='visibility-off'
                            iconStyle={{ color: colors.grey3 }}
                            type='material'
                            style={{ marginTop: 12 }}
                        />
                    </Animatable.View>
                </View>
            </View>

            <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                <Button
                    title="SIGN IN"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                    onPress={()=>navigation.navigate('HomeScreen')}
                />
            </View>

            <View style={{ alignItems: 'center', marginTop: 15 }}>
                <Text style={{ ...styles.text1, textDecorationLine: 'underline' }} > Forget Password ?  </Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}> OR </Text>
            </View>

            <View style={{marginHorizontal:10,marginTop:20}}>
                <SocialIcon 
                    title='Sign In with Facbook'
                    button
                    type='facebook'
                    style ={styles.SocialIcon}
                    onPress={()=>{}}
                />
            </View>

            <View style={{marginHorizontal:10,marginTop:20}}>
                <SocialIcon 
                    title='Sign In with Google'
                    button
                    type='google'
                    style ={styles.SocialIcon}
                    onPress={()=>{}}
                />
            </View>

            <View style={{marginTop: 25 ,marginLeft:20,}}>
                <Text style={{ ...styles.text1 }} > New on Xpressed </Text>
            </View>

            <View style={{alignItems:'flex-end',marginRight:20,marginTop:30}}>
              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonStyle}>Create an account</Text>
              </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    text1: {
        color: colors.grey3

    },
    TextInput1: {
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    TextInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: 'grey',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignContent: 'center',
        paddingLeft: 15
    },
    SocialIcon:{
        borderRadius:12,
        height:50

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
        color:'#ff8c52',
        fontSize:16,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:3
    }

})