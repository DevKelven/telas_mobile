import { Text, View,StyleSheet,TextInput,Image,TouchableOpacity } from "react-native";
import { Cadastro2, Login2 } from "../componentes/button";
import { useState } from 'react';
import { router } from 'expo-router';
import {Link} from 'expo-router';

export default function Cadastro() {

   const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const login = async () => {
    try {
      console.log(email, senha, nome)
    } catch (err: any) {
    alert('Erro: ' + err.message);
    }
    };
  


  return (
    <View style={[estilo.container]}>
      <View style={[estilo.form]}>
        <Image style={[estilo.logo]} source={require("@/assets/images/logo.png")} />
          <Text style={{fontSize:25, fontWeight:"bold", textAlign:"center"}}>
             Register
          </Text>

        <View style={[estilo.inputs]} >
          <TextInput style={{backgroundColor:"white", borderRadius:5, width:250, fontWeight:"bold",borderWidth:1,borderColor:"#bdbebd", paddingLeft:10}} onChangeText={setNome} placeholder="Name" />
          <TextInput style={{backgroundColor:"white", borderRadius:5, width:250, fontWeight:"bold",borderWidth:1,borderColor:"#bdbebd", paddingLeft:10}} onChangeText={setEmail} placeholder="Login or Email" />
          <TextInput style={{backgroundColor:"white", borderRadius:5, width:250, fontWeight:"bold",borderWidth:1,borderColor:"#bdbebd", paddingLeft:10}} onChangeText={setSenha} secureTextEntry placeholder="Password" />
          {/* <TextInput style={{backgroundColor:"white", borderRadius:5, width:250, fontWeight:"bold",borderWidth:1,borderColor:"#bdbebd", paddingLeft:10}} onChangeText={setSenha} secureTextEntry placeholder="Password Again" /> */}
        </View>
            
            <TouchableOpacity style={[estilo.containerCadastro2]} onPress={login}>
                    <Text style={[estilo.textCadastro2]}>Create new Account</Text>
            </TouchableOpacity>

        <View style={{flex:0, rowGap:20, borderTopWidth:1,borderColor:"#bebebe"}}>
          <Login2 />
        </View>
      </View>      
    </View>
  );

}

  const estilo = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",        
      },
      
      form:{
        width:300,
        height:620,
        backgroundColor:"#d3d3d3",
        flex:0,
        rowGap:30,
        borderRadius:10
      },
      logo:{
        width:140,
        height:25,
        flex:0,
        transform: [{translateX: 80}],
        marginTop: 20,
      },
      inputs:{
        flex:0,
        rowGap:30,
        alignItems:"center",
        borderColor:"grey",
        
        
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
