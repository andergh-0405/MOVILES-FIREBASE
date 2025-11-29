import { createStackNavigator, Header } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from '../configs/firebaseConfig';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { View } from 'react-native';

const Stack = createStackNavigator();

export const StackNavigator = () => {

    //hook state para controlar el estado de carga
    const [isLoading, setisLoading] = useState<boolean>(false)

    //hook state verificar si esta autenticado}
    const [isAuth, setisAuth] = useState<boolean>(false)

    ///hook useEffect para verificar el estado de autenticacion
    useEffect(() => {
        setisLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //console.log(user);
                setisAuth(true);
            } else {
                setisLoading(false);
            }
        })
    }, [])//si esta vacio se ejecuta una vez

    return (
        <>
            {
                isLoading ? (
                    <View>
                        <ActivityIndicator />
                    </View>
                )
                    :
                    <Stack.Navigator>

                        {
                            !isAuth ?
                                <>
                                    <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
                                    <Stack.Screen name='Register' options={{ headerShown: false }} component={RegisterScreen} />
                                </>
                                :
                                <Stack.Screen name='Home' options={{ headerShown: false }} component={HomeScreen} />
                        }



                    </Stack.Navigator>
            }
        </>
    );
}