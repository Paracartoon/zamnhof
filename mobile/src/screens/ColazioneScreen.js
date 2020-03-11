import React, {Component} from 'react';
import {TouchableOpacity, 
        StatusBar, 
        View, 
        Text, 
        TextInput, 
        Keyboard, 
        Button, 
        Modal, 
        ScrollView,
        Image,
} from 'react-native';
/*import {connect} from 'react-redux';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import {assignError, viewPet, deletePet} from '../redux/actions/actions';
import { bindActionCreators } from 'redux';
import { TabView, SceneMap } from 'react-native-tab-view';*/



class ColazioneScreen extends Component {

 static navigationOptions = {
    tabBarLabel: null,
  };


  constructor(props) {
    super(props);

    this.state = {

    }

  }

  componentDidMount() {


   
  }

  componentDidUpdate(oldProps) {
   
  }

  render() {

    const {
      navigation

    } = this.props;

    const {

    } = this.state;




    return (
      <View>
              <ScrollView>
                
                            <Text style={{fontWeight:'bold'}}>
                             Colazione 
                             </Text>

                             <Image
                            source={{ uri: 'http://10.0.2.2:8000/static/img/z2.jpg' }}
                            style={{ width: 200, height:200}}
                          />
                      

        </ScrollView>

      </View>
    );
  }
}

/*
//this comes from redux store, will be merged into components props. The first argument is the entire Redux store state.  Returns plain object
const mapStateToProps = (state) => {
   //console.log('in mapStateToProps swipe is', state.swipe)
  //console.log('mapStateToProps, state:', state) NO CONSOLE LOG: Whenever the store changes, all of the mapStateToProps functions of all of the connected components will run.
  return {
    //token: state.login.token, //Each field in the object will become a prop for your actual component
    error: state.login.error,
    //content: state.login.content,
    user: state.login.user,

  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {

  },
  dispatch,
) */





export default ColazioneScreen;