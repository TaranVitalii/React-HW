import ContentCelsiumFahrenheit from './ContentCelsiumFahrenheit';
import ContentFahrenheitCelsium from './ContentFahrenheitCelsium';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator({
  Celsium: ContentFahrenheitCelsium,
  Fahrenheit: ContentCelsiumFahrenheit,
});

export default createAppContainer(TabNavigator);
