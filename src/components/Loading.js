import React from 'react'
import { View, Text } from 'react-native'
import { Spinner } from 'native-base';

const Loading = () => {
    return (
        <View style={{position:'absolute',left:0,top:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.4)",flex:1,justifyContent:"center",alignContent:"center"}}>
            <Spinner></Spinner>
        </View>
    )
}

export default Loading
