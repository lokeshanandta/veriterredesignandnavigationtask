import React from 'react'
import {View,Text, Image, TouchableOpacity} from 'react-native'


function ProductListing ({navigation}){
    const array =[{name:"Elite Radiology",price:"160"},{name:"product 2",price:"260"},
    {name:"product 3",price:"140"},{name:"product 4",price:"280"}]
  return (<View style={{backgroundColor:"white",flex:1}}>
    <View  style={{justifyContent:"center",alignItems:"center"}}>
<Text style ={{color:"black",fontSize:26,fontWeight:"bold"}}>products</Text></View>

{array.map((el)=>{
  return(
    <View style={{height:100,borderColor:"grey",borderWidth:1,borderColor:"grey",marginHorizontal:40,margin:10,flexDirection:"row",justifyContent:"space-between"}}>
    <Image style={{height:60,width:60}}source={{uri:"https://cdn-icons-png.flaticon.com/512/5432/5432733.png"}}>
      </Image>
<View style={{flex:0.70}}>
    <Text style={{color:"black",fontSize:16,fontWeight:"bold"}}>{el.name}</Text>
    <Text style={{fontSize:16,color:"lightgreen"}}>${el.price}</Text>
    <View style={{height:20,width:75,borderColor:"lightgrey",borderWidth:2,borderRadius:5}}>
        <Text style ={{fontSize:12,color:"black",alignItems:"center",justifyContent:"center",alignItems:"center"}} >notespaedia</Text>
    </View>
</View>
<View style={{alignSelf:"flex-end",flexDirection:"row"}}>
    <Image source={{uri:"https://as1.ftcdn.net/v2/jpg/01/13/95/02/1000_F_113950213_2znQQrapC21FcNXfvqwjnXm5gs6jDi06.jpg"}} style={{height:30,width:20}}/>
        <TouchableOpacity onPress={()=>navigation.navigate("productListingDetails",{el})} style={{height:30,width:50,backgroundColor:"lightgreen",alignItems:"center",justifyContent:"center",marginLeft:10}}>
            <Text style={{fontWeight:"bold"}}>Book</Text>
        </TouchableOpacity>
    
</View>
    </View>
  )
})}
<View style={{flexDirection:"row",justifyContent:"space-around",marginTop:150}}>
   
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2811/2811806.png"}} style={{height:30,width:30}}/>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2435/2435281.png"}} style={{height:30,width:30}}/>
<Text style={{color:"black",fontSize:19,fontWeight:"bold"}}>My order</Text>
</View>
  </View>)
}

export default ProductListing