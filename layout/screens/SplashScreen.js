
import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => navigation.navigate('login'), 1700)
    }, [])

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{ uri: 'https://eu6vpnsdhno.exactdn.com/wp-content/uploads/2022/09/Emrsive_logo-6-300x110.png?strip=all&lossy=1&ssl=1' }}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffc627'
    },
    tinyLogo: {
        width: 250,
        height: 80,
    },
});