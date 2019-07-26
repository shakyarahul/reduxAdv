import React from 'react'
import { connect } from 'react-redux';
import {fetchDatas,fetchUserData,loadingData} from '../redux/actions/userActions';
import { Container,
            Header,
            Content, 
            List, 
            ListItem, 
            Thumbnail, 
            Text, 
            Left, 
            Body, 
            Right, 
            Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { HOST } from '../redux/actions/types';
import Loading from '../components/Loading';

class Dashboard extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
        !this.props.accessKey && Actions.login();
        console.log(this.props.accessKey);
        this.props.loadingData();
        this.props.fetchDatas(this.props.accessKey);
    }
    render(){
        console.log(this.props.loggedInUser)
        return (
            <Container>
                <Content>
                <Text onPress={() => Actions.edituserview()} style={{textAlign:"center"}}>Welcome {this.props.loggedInUser.prefix && this.props.loggedInUser.prefix} {this.props.loggedInUser.name},</Text>
                <List>
                    {
                        this.props.data && this.props.data.map((v,i) =>
                            <ListItem key={"user-"+v.id} thumbnail>
                                <Left>
                                    {
                                        (v.profilePic)?
                                        <Thumbnail source={{uri: HOST+'uploads/users/'+v.profilePic}} />
                                        :
                                        <Thumbnail source={{uri: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-128.png'}} />
                                    }
                                    
                                </Left>
                                <Body>
                                    <Text>{v.name}</Text>
                                    <Text note numberOfLines={1}>{v.blockquote}</Text>
                                </Body>
                                <Right>
                                    <Button transparent onPress={() => {
                                            this.props.loadingData();
                                            this.props.fetchUserData(this.props.accessKey,v.id);
                                    }}>
                                    <Text>View</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                            )
                    }
                </List>
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
            data: state.users.data,
            loading: state.users.loading,
            loggedInUser:state.users.loggedInUser
        }
    }
const mapDispatchToProps = (dispatch) => {
        return{
            fetchDatas: (accessKey) => dispatch(fetchDatas(accessKey)),
            fetchUserData: (accessKey,id) => dispatch(fetchUserData(accessKey,id)),
            loadingData: () => dispatch(loadingData())
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
