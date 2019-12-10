import {createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home"
import List from "./components/List"
import Cam from "./components/Cam"
import BigPhoto from "./components/BigPhoto";

const Root = createStackNavigator({
  Home: { screen: Home },
  List: { screen: List },
  Cam: { screen: Cam },
  BigPhoto:{screen: BigPhoto},
});

const App = createAppContainer(Root);


export default App;