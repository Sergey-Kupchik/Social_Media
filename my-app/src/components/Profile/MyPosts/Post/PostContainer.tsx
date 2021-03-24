import React from 'react';
import {connect} from 'react-redux';
import {getUserName, getUserPhoto, likePost} from '../../../../redux/profileReducer';
import {Post} from './Post';


type PostContainerPropsType={
    id: string
    message: string
    likesCount: number
    img?:string
    time:string
    userId:string
    userPhoto:string|null
    userName:string
    getUserPhoto: (id: string) => void
    getUserName: (id: string) => void
    likePost: (id: string) => void
}

class PostContainer extends React.Component<PostContainerPropsType> {
    componentDidMount() {
        this.props.getUserPhoto(this.props.userId)
        this.props.getUserName(this.props.userId)

    }
    render() {
        return <Post id={this.props.id} message={this.props.message} likesCount={this.props.likesCount} key={this.props.id} img={this.props.img} time={this.props.time} userId={this.props.userId} userPhoto={this.props.userPhoto} userName={this.props.userName} likePost={this.props.likePost}/>
    }
}

export default connect(null,{getUserPhoto,getUserName,likePost})(PostContainer)