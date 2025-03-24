import { Text, View,StyleSheet,TextInput,Image,Button,TouchableOpacity } from "react-native";
import { Cadastro, LoginButton } from "./componentes/button";
import { useState } from 'react';
import { router } from 'expo-router';

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const login = async () => {
  try {
    console.log(email, senha)
    if ( senha === "123" && email === "teste@teste.com"){
      router.push("/home")
    } else {
      alert(" Senha ou Email Inválido, tente novamente")
    }


  } catch (err: any) {
  alert('Erro: ' + err.message);
  }
  };

  return (

    

    <View style={[estilo.container]}>

      <View style={[estilo.form]}>
        <Image style={[estilo.logo]} source={require("@/assets/images/logo.png")} />
          <Text style={{fontSize:25, fontWeight:"bold", textAlign:"center"}}>
             We help 2,500,000+ travelers save and share their travel memories.
          </Text>

        <View style={[estilo.inputs]} >
          <TextInput style={{backgroundColor:"white", borderRadius:5, width:250, fontWeight:"bold",borderWidth:1,borderColor:"#bdbebd", paddingLeft:10}} onChangeText={setEmail}   placeholder="Login or Email" />
          <TextInput style={{backgroundColor:"white", borderRadius:5, width:250, fontWeight:"bold",borderWidth:1,borderColor:"#bdbebd", paddingLeft:10}} onChangeText={setSenha} secureTextEntry placeholder="Password" />
        </View>

            <TouchableOpacity style={[estilo.containerButton]} onPress={login}>
                    <Text style={[estilo.text]} >Log In</Text>
                </TouchableOpacity>

        {/* <LoginButton /> */}
        {/* <Button title="enter" onPress={login}/> */}


        <View style={{flex:0, rowGap:20, borderTopWidth:1,borderColor:"#bebebe"}}>
            <Cadastro />

            <Text style={{color:"#0074B7", textAlign:"center"}}>Forgotten Password?</Text>

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
    text:{
      fontSize: 20,
      textAlign: "center",
      height:48,
      transform: [{translateY:-10}],
      color:"white",
      fontWeight:"bold"
  },
      form:{
        width:300,
        height:600,
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
        
        
      }

  })
