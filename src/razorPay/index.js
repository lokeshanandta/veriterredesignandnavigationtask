import React from 'react'
import {View,Image,Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Payroll({navigation}){
    return(<View style={{flex:1,}}>
<View style={{flexDirection:"row",marginTop:50,height:200,alignItems:"center",marginLeft:10}}>
    <Image source={{uri:"https://as2.ftcdn.net/v2/jpg/02/93/94/41/1000_F_293944111_uTDy3HJcStHMbPTgC6GDSFGWudBiQZ5A.jpg"}}
    style={{height:40,width:30}}/>
    <Text style={{color:"black",fontSize:22,alignSelf:"center",fontWeight:"bold",marginLeft:50}}>Razorplay Checkout</Text>
</View>
<View style={{flexDirection:"row",justifyContent:"space-between",margin:10,}}>
<View style={{height:50,width:100,borderWidth:1,borderColor:"lightgrey",justifyContent:"center",alignItems:"center"}}>
    <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/732/732096.png"}} style={{height:30,width:30}}/>
</View>
<View style={{height:50,width:100,borderWidth:1,borderColor:"lightgrey",justifyContent:"center",alignItems:"center"}}>
<Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1807/1807753.png"}} style={{height:30,width:30}}/>
</View>
<View style={{height:50,width:100,borderWidth:1,borderColor:"lightgrey",justifyContent:"center",alignItems:"center"}}>
<Image source={{uri:"https://cdn-icons-png.flaticon.com/512/482/482541.png"}} style={{height:30,width:30}}/>
</View>
</View>
<Text style={{fontSize:19,fontWeight:"bold",marginLeft:10,marginTop:10}}>Name on card</Text>
<View style={{borderBottomWidth:1,borderBottomColor:"lightgrey",marginHorizontal:30,marginTop:10}}>
<Text style={{fontSize:19,fontWeight:"bold",marginLeft:10,color:"black"}}>David Spade</Text>
</View>

<Text style={{fontSize:19,fontWeight:"bold",marginLeft:10,marginTop:10}}>Card Number</Text>
<View style={{borderBottomWidth:1,borderBottomColor:"lightgrey",marginHorizontal:30,flexDirection:"row"}}>
<Text style={{fontSize:19,fontWeight:"bold",color:"black",marginTop:10}}>4678    9877     8949</Text>
<Image source={{uri:"https://cdn-icons-png.flaticon.com/512/179/179457.png"}} style={{height:20,width:20,marginLeft:100}}/>
</View>
<View style={{flexDirection:"row",flex:1}}>
    <View style={{flex:1}}>
<Text style={{fontSize:19,fontWeight:"bold",marginLeft:10,marginTop:10}}>Expriry Date</Text>
<View style={{borderBottomWidth:1,borderBottomColor:"lightgrey",marginHorizontal:30}}>
<Text style={{fontSize:19,fontWeight:"bold",marginLeft:10,color:"black"}}>09/18</Text>
</View>
    </View>
    <View style={{flex:1}}>
    <Text style={{fontSize:19,fontWeight:"bold",marginLeft:10,marginTop:10}}>Cvv</Text>
<View style={{borderBottomWidth:1,borderBottomColor:"lightgrey",marginHorizontal:30}}>
<Text style={{fontSize:19,fontWeight:"bold",marginLeft:10,color:"black"}}>667</Text>
</View>
    </View>
</View>
<View style={{position:"absolute",bottom:0,flexDirection:"row",}}>
    <View style={{borderWidth:1,borderColor:"lightgrey",justifyContent:"center",alignItems:"center",height:50,width:100,marginLeft:10}}>
        <Text>Cancel</Text>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("myorders")} style={{borderWidth:1,borderColor:"lightgrey",justifyContent:"center",alignItems:"center",height:50,width:100,backgroundColor:"lightgreen",marginLeft:130}}>
        <Text>Conform</Text>
    </TouchableOpacity>
</View>
    </View>)
}
export default Payroll