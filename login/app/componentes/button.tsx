import React from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";
import {Link} from 'expo-router';
import { useState } from 'react';
import { router } from 'expo-router';


export function LoginButton(){

    const [email, setEmail] = useState('');
      const [senha, setSenha] = useState('');
      const login = async () => {
      try {
        console.log(email, senha)
      } catch (err: any) {
      alert('Erro: ' + err.message);
      }
      };

    return (
        <TouchableOpacity style={[estilo.containerButton]} onPress={login}>
            <Text style={[estilo.text]} >Log In</Text>
        </TouchableOpacity>
    );
}

export function Login2(){
    return (
        <TouchableOpacity style={[estilo.container2]}>
            <Link style={[estilo.text]} href={"/"}>Log In</Link>
        </TouchableOpacity> 
    );
}

export function Cadastro(){
    return (
        <TouchableOpacity style={[estilo.containerCadastro]}>
            <Link style={[estilo.textCadastro]} href={"/Cadastro/cadastro"}>Create new Account</Link>
        </TouchableOpacity>
    );
}

export function Cadastro2(){
    return (
        <TouchableOpacity style={[estilo.containerCadastro2]}>
            <Text style={[estilo.text]}>Create new Account</Text>
        </TouchableOpacity>
    );
}


const estilo = StyleSheet.create({
    containerButton:{
        padding:16,
        backgroundColor:"#0074B7",
        borderRadius:10,
        width:250,
        height:40,
        textAlign:'center',
        alignItems:'center',
        transform: [{translateX:25}],
        borderWidth:1,
        borderColor:"#006080",
    },
    container2:{
        padding:16,
        backgroundColor:"#0074B7",
        borderRadius:10,
        width:250,
        height:40,
        textAlign:'center',
        alignItems:'center',
        transform: [{translateX:25}],
        borderWidth:1,
        borderColor:"#006080",
        marginTop:30,
    },
    text:{
        fontSize: 20,
        textAlign: "center",
        height:48,
        transform: [{translateY:-10}],
        color:"white",
        fontWeight:"bold"
    },
    containerCadastro:{
        padding:16,
        backgroundColor:"#00d500",
        borderRadius:10,
        width:250,
        height:40,
        borderWidth:1,
        borderColor:"#00aa00",
        textAlign:'center',
        alignItems:'center',
        transform: [{translateX:25}],
        marginTop:40,
    },
    textCadastro:{
        fontSize: 20,
        textAlign: "center",
        height:48,
        transform: [{translateY:-10}],        
        color:"white",
        fontWeight:"bold",
        
    },
    containerCadastro2:{
        padding:16,
        backgroundColor:"#00d500",
        borderRadius:10,
        width:250,
        height:40,
        borderWidth:1,
        borderColor:"#00aa00",
        textAlign:'center',
        alignItems:'center',
        transform: [{translateX:25}],
        marginTop:20,
    },
    textCadastro2:{
        fontSize: 20,
        textAlign: "center",
        height:48,
        transform: [{translateY:-10}],
        color:"white",
        fontWeight:"bold"
    },

})