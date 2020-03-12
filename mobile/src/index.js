
import React, {Component} from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import FoodScreen from './screens/FoodScreen';
import OrderScreen from './screens/OrderScreen';
import ColazioneScreen from './screens/ColazioneScreen';
import CenaScreen from './screens/CenaScreen';
import PranzoScreen from './screens/PranzoScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {foodReducers} from './redux/reducers/foodReducers'
//import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk';
import mySuperagentMiddleware from './redux/middlware/superagent';



const rootReducer = combineReducers({
    food:foodReducers,

});

const store = createStore(rootReducer, applyMiddleware(mySuperagentMiddleware, thunk));

const TabStack = createMaterialTopTabNavigator({
    Colazione: ColazioneScreen,
    Pranzo: PranzoScreen,
    Cena: CenaScreen,

  },
  {
    initialRouteName: 'Colazione',
    tabBarPosition: 'top',
    swipeEnabled: true,
    lazy: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#4f5e95',
      },
      labelStyle: {
        textAlign: 'center',
        color: 'white'
      },
      indicatorStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
    },
  }
);

const MainNavigator = createStackNavigator(
  {

    Zamenhof: TabStack,
    Order: OrderScreen,
  },
  {
    initialRouteName: 'Zamenhof',
  }
);


const AppContainer = createAppContainer(MainNavigator); 


export default class App extends React.Component {


    render() {

    return (
      <Provider store={store}>
       <AppContainer/>
      </Provider>
    );
  }

}
