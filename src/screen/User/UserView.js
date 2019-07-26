import React from 'react'
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { fetchDatas } from '../../redux/actions/userActions';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { HOST } from '../../redux/actions/types';

class UserView extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        !this.props.accessKey && Actions.home();
        //console.warn(this.props.accessKey);
    }
    render(){
        return (
            <Container>
                <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                    <Left>
                        {
                            (this.props.user.profilePic)?
                            <Thumbnail source={{uri: HOST+'uploads/users/'+this.props.user.profilePic}} />
                            :
                            <Thumbnail source={{uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-128.png'}} />
                        }
                        <Body>
                        <Text>{this.props.user.name}</Text>
                        <Text note>{this.props.user.email}</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                    <Body>
                        {
                            (this.props.user.profilePic)?
                            <Image source={{uri: HOST+'uploads/users/'+this.props.user.profilePic}} style={{height: 200, width: 200, flex: 1}}/>
                            :
                            <Image source={{uri: 'http://www.f-covers.com/namecovers/image/i-love-my-life.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
                        }
                        
                        <Text>
                        {this.props.user.blockquote}
                        </Text>
                    </Body>
                    </CardItem>
                    <CardItem>
                    <Left>
                        <Button transparent textStyle={{color: '#87838B'}}>
                        <Icon name="logo-github" />
                        <Text>1,926 stars</Text>
                        </Button>
                    </Left>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        )
    }
    
}
const mapStateToProps = (state) => {
        return{
            accessKey: state.users.accessKey,
            user: state.users.user
        }
    }
const mapDispatchToProps = (dispatch) => {
        return{
            fetchDatas: (accessKey) => dispatch(fetchDatas(accessKey)),
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(UserView);
