import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import { Loading } from "@/components/loading";
import { api } from "@/services/api";


export default function Market(){
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const params = useLocalSearchParams<{ id: string}>()

async function fetchMarket(){
  try {
    const { data } = await api.get("/markets/" + params.id)
    setData(data)
    setIsLoading(false)
  } catch (error) {
    console.log(error)
    Alert.alert("Error", "Não foi possível carregar os dados", [{
      text: "OK", onPress: () => router.back() },
    ])
  }
}

useEffect(() => {
  fetchMarket()
}, [params.id])

if (isLoading) {
  return <Loading/>
}

  return (<View style={{ flex: 1 }}>
    <Text style={{flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
        }}>
       {params.id} 
    </Text>
  </View>
  )
}