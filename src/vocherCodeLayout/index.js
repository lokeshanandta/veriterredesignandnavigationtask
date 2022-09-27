import React from "react";
import {View,Image,Text, TextInput} from 'react-native'

function VoucherCodeLayout (){
    return(<View style={{flex:1}}>
<View style={{height:200,justifyContent:"space-between",flexDirection:"row",marginTop:10}}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/130/130882.png"}} style={{height:30,width:20}}/>
    <View style={{borderWidth:1,borderColor:"lightgrey",alignSelf:"center"}}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/281/281764.png"}} style={{height:150,width:150}}/></View>
<Image source={{uri:"https://as1.ftcdn.net/v2/jpg/01/66/94/54/1000_F_166945469_SHjX6Exa1G17aZSZUEAzcog5hKLvRKPj.jpg"}} style={{height:30,width:30}}/>
</View>
<Text style={{color:"black",fontSize:23,fontWeight:"bold"}}>Elite Radiology</Text>

<View style={{height:40,width:200,borderColor:"grey",borderWidth:1,borderRadius:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:20}}>
    <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>Provider</Text>
<Text style={{color:"black",fontWeight:"bold",fontSize:16,}}>Notespaedia</Text>
</View>

<Text style={{color:"black",fontSize:23,marginTop:20,fontWeight:"bold"}}>Description</Text>
<Text style={{color:"black",fontSize:15,fontWeight:"bold",marginTop:20}}>A comprehensive visual note discussing Radiology in 
depth with all the illutration and lables along with
</Text>

<Text style={{color:"black",fontSize:16,marginTop:20}}>View Couppen offer</Text>
<View style={{borderColor:"black",borderWidth:1,marginHorizontal:20,flexDirection:"row",marginTop:20,borderRadius:10}}>
<TextInput placeholder="enter voucher code"/>
<Text style={{justifyContent:"center",alignSelf:"center",color:"black",fontSize:19,marginLeft:60}}>Apply</Text>
</View>
    </View>)
}

export default VoucherCodeLayout