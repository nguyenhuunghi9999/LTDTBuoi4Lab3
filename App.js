
import * as React from 'react';

import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container]}>
      <View style = {styles.view1}>
      <Image
        style={styles.img}
        // source={require('./assets/img.png')}
        source={{
          uri: 'https://salt.tikicdn.com/cache/750x750/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg.webp',
        }}
      />
      <View >
      <Text style = {{padding:5,fontWeight:'bold'}}>Nguyên hàm tích phân và ứng dụng</Text>
      <Text style = {{padding:5,fontWeight:'bold'}}>Cung cấp bởi Tiki Trading</Text>
      <Text style = {{padding:5,color: 'red',fontWeight:'bold'}}>141.800 đ</Text>
      <Text style = {{padding:5,color: 'gray',fontWeight:'bold', textDecorationLine:'line-through'}}>141.800 đ</Text>
      <View style = {{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style = {styles.icon}>-</Text>
          </TouchableOpacity>
          <Text style ={{marginLeft:6,fontWeight:'bold'}}>1</Text>
          <TouchableOpacity>
            <Text style = {styles.icon}>+</Text>
          </TouchableOpacity>
          <Text style ={{marginLeft:110, color:'blue',fontWeight:'bold'}}>Mua sau</Text>
      </View>
      </View>
      </View>
      <View style = {styles.view1}>
          <Text style ={{padding:15,marginLeft:9,fontWeight:'bold',fontSize:12}}>Mã giảm giá đã lưu</Text>
          <Text style ={{padding:15,fontWeight:'bold',fontSize:12, color:'blue'}}>Xem tại đây</Text>
      </View>

      <View style={styles.view1}>
              <TextInput
                style={[
                  {
                    borderWidth: 1,
                    borderRadius: 5,
                    padding: 10,
                    width: 200,
                    marginLeft:10,
                  },
                ]}
              >Mã giảm giá
              </TextInput>
              <TouchableOpacity style ={{
                  height:50,
                  width:120,
                  marginLeft:40,
                  borderRadius: 3,
                  backgroundColor:'#0a5eb7', 
                  alignItems: "center",
                  justifyContent: "center",}}>
                <Text style ={{
                  color:'white',
                  fontSize:20,
                  fontWeight:'bold',
                }} >Áp dụng</Text>
              </TouchableOpacity>
      </View>
      <View style={{
        height:15, width:'100%',backgroundColor:'lightgray',marginTop:30,
      }}></View>
      <View style = {styles.view1}>
          <Text style ={{padding:10,marginLeft:9,fontWeight:'bold',fontSize:13}}>Bạn có bỏ phiếu quà tặng Tiki/Got/Urbox?</Text>
          <Text style ={{padding:10,fontWeight:'bold',fontSize:13, color:'blue'}}>Nhập tại đây?</Text>
      </View>
      <View style={{
        height:15, width:'100%',backgroundColor:'lightgray',marginTop:15,
      }}></View>
      <View style = {styles.view1}>
          <Text style ={{padding:10,fontWeight:'bold',fontSize:20}}>Tạm tính</Text>
          <Text style ={{padding:10,marginLeft:170,fontWeight:'bold',fontSize:20, color:'red'}}>141.800 đ</Text>
      </View>
      <View style={{
        height:100, width:'100%',backgroundColor:'lightgray',marginTop:15,
      }}></View>
      <View style = {styles.view1}>
          <Text style ={{padding:10,fontWeight:'bold',fontSize:20,color:'gray'}}>Thành tiền</Text>
          <Text style ={{padding:10,marginLeft:150,fontWeight:'bold',fontSize:20, color:'red'}}>141.800 đ</Text>
      </View>
      <TouchableOpacity style ={{
          height:50,
          width:300,
          marginLeft:60,
          borderRadius: 3,
          backgroundColor:'#e53935', 
          alignItems: "center",
          justifyContent: "center",
      }}>
        <Text style ={{
          color:'white',
          fontSize:20,
          fontWeight:'bold',

        }}>TIẾN HÀNH ĐẶT HÀNH</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    // a
  },
  view1: {
    flexDirection: 'row',
    marginLeft:10,
  },
  img: {
    width: 150,
    height: 150,
  },
  icon:{
    width:20,
    height:20,
    fontSize:15,
    fontWeightL:"bold",
    backgroundColor:'gray',
    marginLeft:5,
    textAlign:"center",
  },
  view2:{
    width:200, height:50, border:'1px solid black',
  },
  input: {
    flex: 2,
    marginLeft: 20,
  },
});
