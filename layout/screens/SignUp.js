import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const SignUp = ({ navigation }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignUp = () => {
        // console.log('Email >>>> ', email)
        // console.log('Password >>>> ', password)
    }

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View style={styles.sectionContainer}>
                <Text style={styles.heading}>Sign Up</Text>

                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    placeholder="Enter Email"
                />

                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    secureTextEntry={true}
                    placeholder="Enter Password"
                />

                <TouchableOpacity style={styles.button} onPress={onSignUp}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.shiftLogin}>
                    <View>
                        <Text>Already have an account? </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={styles.LoginText}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#EAEAEA',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionContainer: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.96,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
    },
    heading: {
        fontSize: 25,
        color: '#4D4D4D',
        fontWeight: 700,
    },
    input: {
        paddingLeft: 8,
        borderBottomColor: '#A5A5A5',
        borderBottomWidth: 2,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    shiftLogin: {
        flexDirection: 'row',
        marginTop: 8
    },
    LoginText: {
        color: 'blue',
    }
})

export default SignUp