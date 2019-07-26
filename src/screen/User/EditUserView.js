import React from 'react'
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { fetchDatas } from '../../redux/actions/userActions';
import { Container, Header, Content, Form, Item, Input, Label, Textarea, Icon, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { HOST } from '../../redux/actions/types';

class EditUserView extends React.Component{
    constructor(){
        super();
        this.state = {
            selected2: undefined
          };
    }
    onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
    componentDidMount(){
        !this.props.accessKey && Actions.home();
        //console.warn(this.props.accessKey);
    }
    render(){
        return (
            <Container>
                <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Name</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Email</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Prefix</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Location</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label>Phone</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Mobile</Label>
                        <Input />
                    </Item>
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            style={{ width: undefined }}
                            placeholder="Status"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected2}
                            onValueChange={this.onValueChange2.bind(this)}
                        >
                            <Picker.Item label="Admin" value="key0" />
                            <Picker.Item label="Offline" value="key1" />
                            <Picker.Item label="Online" value="key2" />
                            <Picker.Item label="Disabled" value="key3" />
                        </Picker>
                    </Item>
                    <Item>
                        <Icon active name='home' />
                        <Input placeholder='Icon Textbox'/>
                    </Item>
                    <Item>
                        <Input placeholder='Icon Alignment in Textbox'/>
                        <Icon active name='swap' />
                    </Item>
                    <Item success>
                        <Input placeholder='Textbox with Success Input'/>
                        <Icon name='checkmark-circle' />
                    </Item>
                    <Textarea rowSpan={5} bordered placeholder="Blockquote" />
                </Form>
                </Content>
            </Container>
        )
    }
    
}
const mapStateToProps = (state) => {
        return{
            accessKey: state.users.accessKey,
            user: state.users.user,
            loggedInUser: state.users.loggedInUser
        }
    }
const mapDispatchToProps = (dispatch) => {
        return{
            fetchDatas: (accessKey) => dispatch(fetchDatas(accessKey)),
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(EditUserView);
