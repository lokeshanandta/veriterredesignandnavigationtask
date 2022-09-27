import React,{useState} from 'react'
import {View,Text,TextInput, TouchableOpacity} from 'react-native'

function Singin ({navigation,route}){
  console.log(route.params)
  
  const detail=route.params.userMail
  const detail1=route.params.userNumber
  const [loginMail,setLoginMail]=useState()
  const [loginUserNumber,setLoginUserNumber]=useState()
  const validatefunction=()=>{
    console.log(loginMail,loginUserNumber)
    if (detail === loginMail){
      console.log("lokesh")
      if(detail1 ===loginUserNumber){
        return (navigation.navigate("productlist"))
      }
    }
    else{
      alert("mail and number is wrong")
    }
  }
  
  return (<View style={{backgroundColor:"white",flex:1}}>

<View style={{marginHorizontal:30,borderWidth:2,borderColor:"lightgrey",marginTop:80,alignItems:"center",flex:0.50,borderRadius:5,justifyContent:"space-around"}}>
  <Text style={{color:"black",fontSize:26,fontWeight:"bold",width:100}}>Sing in</Text>
  <View style={{height:50,borderWidth:1,borderColor:"black",width:250}}>
    <TextInput placeholder='Email ID' placeholderTextColor={"black"} onChangeText={(el)=>setLoginMail(el)} style={{ color: 'black' }}/>
  </View>
  <View style={{height:50,borderWidth:1,borderColor:"black",width:250}}>
    <TextInput placeholder='number' keyboardType="numeric" placeholderTextColor={"black"} onChangeText={(el)=>setLoginUserNumber(el)} style={{ color: 'black' }}/>
  </View>

  <TouchableOpacity onPress={()=>validatefunction()} style={{height:30,width:70,backgroundColor:"#00C5B6",alignItems:"center",justifyContent:"center"}}>
<Text style={{color:"white"}}>Login</Text>
  </TouchableOpacity>
</View>


  </View>)
}

export default Singin