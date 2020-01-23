import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import test from './test'
import Home from './Home'
let routes = createStackNavigator({
    test:test,
    home:Home,
})
export default createAppContainer(routes);