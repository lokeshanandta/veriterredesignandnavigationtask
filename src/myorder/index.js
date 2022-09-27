import React,{useState} from 'react'
import {View,Image,Text,TouchableOpacity} from 'react-native'

function OrderPlaced(){
    const [data,setData]=useState([{id:"item1",price:160},{id:"item2",price:230},{id:"item3",price:390}])
    return(<View style={{flex:1}}>
        <View style={{flexDirection:"row",}}>
           <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/130/130882.png"}} style={{height:30,width:20}}/>
            <Text style={{color:"black",fontSize:23,fontWeight:"bold",marginLeft:100}}>My Order</Text>
        </View>
        {data.map((el)=>{
  return(
<View>
    <Text style={{marginLeft:50}}>Aug 08 2020</Text>
    <View style={{height:120,borderColor:"grey",borderWidth:1,borderColor:"grey",marginHorizontal:40,margin:10,flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
       <View style={{}}>
        <Text style={{color:"black",fontSize:18,fontWeight:"bold",paddingLeft:10}}>{el.id}</Text>
       <Text style={{fontSize:18,color:"lightgreen",paddingLeft:10,marginTop:2}}>${el.price}</Text>
       <TouchableOpacity style={{marginTop:4,height:30,width:80,backgroundColor:"lightgreen",alignItems:"center",justifyContent:"center",marginLeft:10}}>
            <Text style={{fontWeight:"bold"}}>Delivered</Text>
        </TouchableOpacity>
       </View>
       <View><Image source={{uri:"https://cdn-icons-png.flaticon.com/512/1257/1257113.png"}} style={{height:100,width:100}}/></View>
    {/* <Image style={{height:60,width:60}}source={{uri:"https://cdn-icons-png.flaticon.com/512/5432/5432733.png"}}>
      </Image> */}


    </View>
    </View>
  )
})}
<View style={{flexDirection:"row",justifyContent:"space-around",position:"absolute",bottom:0,height:50,width:350}}>
   
   <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2811/2811806.png"}} style={{height:30,width:30}}/>
   <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/2435/2435281.png"}} style={{height:30,width:30}}/>
<Text style={{color:"black",fontSize:19,fontWeight:"bold"}}>My order</Text>
</View>
    </View>)
}

export default OrderPlaced