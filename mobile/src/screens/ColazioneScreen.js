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
import {connect} from 'react-redux';
import {viewColazione} from '../redux/actions/actions';
import { bindActionCreators } from 'redux';



class ColazioneScreen extends Component {

 static navigationOptions = {
    tabBarLabel: null,
  };


  constructor(props) {
    super(props);

    this.state = {
      colazione: ''

    }

  }

  componentDidMount() {

    this.props.viewColazione();
   
  }

  componentDidUpdate(oldProps) {
   
  }

  render() {

    console.log('This props colazione', this.props.colazione)

    const {
      navigation

    } = this.props;

    const {

    } = this.state;

    const foods = this.props.colazione ? this.props.colazione
                                       .map((c, id) => 
             
                                      <View style={{flex:1, flexDirection:'row',marginBottom:20,alignItems:'center'}}>
                                        
                                        
                                    <View style={{flex:0.3}}>
                                          <Image
                                            style={{width: 100, height: 100, borderRadius:100}}
                                            source={{uri:'http://10.0.2.2:8000'+c.foto}}
                                          />
                                      </View>
                                       <View style={{flex:0.5,flexDirection:'column',alignItems:'center',}}>
                                          <Text style={{textAlign: 'center', fontWeight:'bold'}}>{c.titolo}</Text>
                                          <Text style={{textAlign: 'center'}}>Ingredienti</Text>
                                        </View>
                                 
                                       <View style={{flex:0.3,flexDirection:'row',alignItems:'flex-end',marginLeft:10}}>
                                       <Text style={{fontWeight:'bold', color:'#4f5e95'}}>+ Aggiungi </Text>
                                  
                                       </View>
        </View>
) : null;




    return (
      <View>
              <ScrollView style={{padding:20}}>
                
                        

                        

                          {foods}
                      

        </ScrollView>

      </View>
    );
  }
}


//this comes from redux store, will be merged into components props. The first argument is the entire Redux store state.  Returns plain object
const mapStateToProps = (state) => {
   //console.log('in mapStateToProps swipe is', state.swipe)
  //console.log('mapStateToProps, state:', state) NO CONSOLE LOG: Whenever the store changes, all of the mapStateToProps functions of all of the connected components will run.
  return {
    //token: state.login.token, //Each field in the object will become a prop for your actual component
    error: state.food.error,
    colazione: state.food.colazione
    //content: state.login.content,

  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    viewColazione
  },
  dispatch,
) 





export default connect(mapStateToProps, mapDispatchToProps)(ColazioneScreen);