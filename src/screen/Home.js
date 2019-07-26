import React from 'react'
import { View, Text , TextInput, Image} from 'react-native'
import { connect } from 'react-redux';
import {loginDatas,loadingData} from '../redux/actions/userActions';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from '../components/Loading';

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
            // email: this.state.email,
            // password: this.state.password
            email: this.state.email,
            password:this.state.password
        }
        this.props.loadingData();
        this.props.loginDatas(credentials);
        
    }
    render(){
        return (
            <Container>
                <Content contentContainerStyle={{flex:1,justifyContent:"center"}}>
                    <Image source={{uri: "https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png"}} style={{flex:2}}>
                    </Image>
                    <Form formContainerStyle={{flex:3,justifyContent:"space-around"}}>
                        <Item fixedLabel>
                            <Label>Email</Label>
                            <Input placeholder="email" value={this.state.email} onChangeText={(text) => this.changedEmail(text)} />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Password</Label>
                            <Input placeholder="password" value={this.state.password} onChangeText={(text) => this.changedPassword(text)} />
                        </Item>
                        <Button block bordered success onPress={(evt) => this.submitForm(evt)}><Text>Log In</Text></Button>
                    </Form>
                </Content>
                {
                    (this.props.loading) && <Loading></Loading>
                }
            </Container>
        )
    }
    
}
const mapStateToProps = (state) => {
        return{
            accessKey: state.users.accessKey,
            loading: state.users.loading,
        }
    }
const mapDispatchToProps = (dispatch) => {
        return{
            loginDatas: (credentials) => dispatch(loginDatas(credentials)),
            loadingData: () => dispatch(loadingData())
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Home);
