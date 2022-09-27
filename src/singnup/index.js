import React ,{useState}from 'react'
import {View,Text,TextInput, TouchableOpacity,ScrollView} from 'react-native'

function Singup({navigation}){
  const [userName,setUserName]=useState()
  const [userNumber,setUserNumber]=useState()
  const [userMail,setUserMail]=useState()
  return (
  <View style={{backgroundColor:"white",flex:1}}>

<View style={{marginHorizontal:30,borderWidth:2,borderColor:"lightgrey",marginTop:80,alignItems:"center",flex:0.70,borderRadius:5,justifyContent:"space-around"}}>
  <Text style={{color:"black",fontSize:26,fontWeight:"bold",width:100}}>Sing up</Text>
  <View style={{height:50,borderWidth:1,borderColor:"black",width:250}}>
    <TextInput placeholder='name'  placeholderTextColor={"black"} onChangeText={(el)=>setUserName(el)} style={{ color: 'black' }}/>
  </View>
  <View style={{height:50,borderWidth:1,borderColor:"black",width:250}}>
    <TextInput placeholder='Email' placeholderTextColor={"black"} onChangeText={(el)=>setUserMail(el)} style={{ color: 'black' }}/>
  </View>

  <View style={{height:50,borderWidth:1,borderColor:"black",width:250}}>
    <TextInput placeholder='Phone number' keyboardType="numeric" placeholderTextColor={"black"} onChangeText={(el)=>setUserNumber(el)} style={{ color: 'black' }}/>
  </View>

  <TouchableOpacity onPress={()=>navigation.navigate("Singin",{userNumber,userMail})} style={{height:30,width:70,backgroundColor:"#00C5B6",alignItems:"center",justifyContent:"center"}}>
<Text style={{color:"white"}}>sing up</Text>
  </TouchableOpacity>
</View>


  </View>)
}

export default Singup