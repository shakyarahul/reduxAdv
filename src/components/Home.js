import React from 'react'
import { View, Text , TextInput, Button} from 'react-native'
import { connect } from 'react-redux';
import * as userActions from '../redux/actions/userActions'

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            email:"",
            password:""
        }
    }
    changedEmail(text){
        this.setState({
            email: text
        })
    }
    changedPassword(text){
        this.setState({
            password: text
        })
    }    
    submitForm(evt){
        
        evt.preventDefault();
        var credentials = {
            email: 'rahulshakya@hotmail.com',
            password: 'Bl@ckFyr3'
        }
        this.props.loginDatas(credentials);
    }
    render(){
        return (
            <View>
                <Text>{this.props.accessKey && this.props.accessKey }</Text>
                <TextInput placeholder="email" value={this.state.email} onChangeText={(text) => this.changedEmail(text)}></TextInput>
                <TextInput placeholder="password" value={this.state.password} onChangeText={(text) => this.changedPassword(text)}></TextInput>
                <Button onPress={(evt) => this.submitForm(evt)} title="Log In"></Button>
            </View>
        )
    }
    
}
const mapStateToProps = (state) => {
        return{
            accessKey: state.users.accessKey,
        }
    };
const mapDispatchToProps = dispatch => {
        return {
            loginDatas: (credentials) => dispatch(userActions.loginDatas(credentials)),
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Home);
