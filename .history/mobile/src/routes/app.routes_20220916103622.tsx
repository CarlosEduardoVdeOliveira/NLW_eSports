import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screen/Home";
import { Game } from "../screen/Game";

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{headerShown: false }}
            />
            <Screen
                name="Game"
                component={Game}
            />
        </Navigator>
    );
}

