







// let a = "5"

// const b = 5

// b=6

// const array = [1,2,3]

// const obj = {
//   name: 'Ali Zain',
//   rollno: 100,
//   age: 24
// }



// const studentRecord = [
//   {
//     name: 'Ali Zain',
//     rollno: 100,
//     age: 24
//   },
//   {
//     name: 'Ali Zain',
//     rollno: 100,
//     age: 24
//   },
//   {
//     name: 'Ali Zain',
//     rollno: 100,
//     age: 24
//   },
//   {
//     name: 'Ali Zain',
//     rollno: 100,
//     age: 24
//   }
// ]

// for(let i=0; i<=10; i++) {
//   // Statements
// }


// studentRecord.map(() => {})

// function ali() {
//   c = 1+2
//   return c
// }

// const ali = () => {

// }


// () => {}















import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './layout/screens/Login';
import SignUp from './layout/screens/SignUp';
import SplashScreen from './layout/screens/SplashScreen';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;