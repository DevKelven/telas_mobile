import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{headerTitle: "",headerTransparent: true,headerShown:false,}}/>
    <Stack.Screen name="Cadastro/cadastro" options={{headerTitle:"Cadastro", headerTitleAlign:"center"}}/>
    <Stack.Screen name="home" options={{headerTitle: "",headerTransparent: true,headerShown:false,}}/>
  </Stack>;
}
