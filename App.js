import React from 'react'
import {View} from 'react-native'
import Singin from './src/signin/index '
import Singup from './src/singnup'
import ProductListing from './src/productList'
import Payroll from './src/razorPay'
import VoucherCodeLayout from './src/vocherCodeLayout'
import ProductItemDetails from './src/productlistDetails'
import OrderPlaced from './src/myorder'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


function app (){
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Singup" component={Singup} />
      <Stack.Screen name="Singin" component={Singin} />
      <Stack.Screen name="productlist" component={ProductListing} />
      <Stack.Screen name="productListingDetails" component={ProductItemDetails} />
      <Stack.Screen name="checkout" component={Payroll} />
      <Stack.Screen name="myorders" component={OrderPlaced} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default app