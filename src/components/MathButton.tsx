import { Pressable, StyleSheet, Text, View } from "react-native";
import { mathbutons } from "../types/ceva.interface";
import { useState } from "react";
interface Proprietati{
    nume:number;
    onPress:(val: number)=> void;
    // indexare:mathbutons;
}

export const MyMathButton = (props:Proprietati) =>{

    const onPress=() => props.onPress(props.nume)


    return(<Pressable style={ceva[1]} onPress={onPress}>
        <Text style={{fontSize:40}}>{props.nume}</Text>
    </Pressable>);
}

const ceva = StyleSheet.create({
    1:{
        backgroundColor:'green',
        width:60,
        height:60,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'

    }


})