import React from 'react'
import {View,Image,Text, TouchableOpacity} from 'react-native'

function ProductItemDetails ({navigation,route}){
    console.log(route.params)
    const detail=route.params.el.name
    const detail1=route.params.el.price
    console.log(detail,"lkjdjlk")
return (<View style={{flex:1}}>

    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/7910/7910711.png"}} style={{flex:0.70}}>
    </Image>
    <Text style={{color:"black",fontSize:28,fontWeight:"bold"}}>{detail}</Text>
<View style={{height:40,width:200,borderColor:"grey",borderWidth:1,borderRadius:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:20}}>
    <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>Provider</Text>
<Text style={{color:"black",fontWeight:"bold",fontSize:16,}}>Notespaedia</Text>
</View>

<Text style={{color:"black",fontSize:23,marginTop:20,fontWeight:"bold"}}>Description</Text>
<Text style={{color:"black",fontSize:15,fontWeight:"bold",marginTop:20}}>A comprehensive visual note discussing Radiology in 
depth with all the illutration and lables along with
</Text>
<View style={{flexDirection:"row",position:"absolute",bottom:10,}}>
    <View style={{marginRight:100,marginLeft:10}}>
        <Text>Price</Text>
        <Text style={{color:"lightgreen",fontSize:18}}>${detail1}</Text>
    </View>

    <TouchableOpacity onPress={()=>navigation.navigate("checkout" )} style={{height:40,width:100,backgroundColor:"lightgreen",justifyContent:"center",alignItems:"center",marginLeft:100}}>
        <Text style={{fontSize:19,fontWeight:"bold"}}>Buy now</Text>
    </TouchableOpacity>
</View>
</View>)

}

export default ProductItemDetails