import React, {ChangeEvent, KeyboardEvent} from 'react';
import {AddPostAC, ShowTextInTextareaAC} from '../../../redux/profileReducer';
import {MyPosts} from './MyPosts';
import {StoreType} from '../../../redux/state';
import {StoreContext} from '../../../StoreContext';


type MyPostsConteinerPropsType = {
    // store: StoreType
}

export const MyPostsConteiner: React.FC<MyPostsConteinerPropsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const publishNewPost = () => {
                    store.dispatch(AddPostAC())
                }
                const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(ShowTextInTextareaAC(e.currentTarget.value));
                }

                const onKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
                    if (e.key === 'Enter') {
                        publishNewPost();
                    }
                }

                const valueForPost = store.getState.bind(store)().profilePage.newPostInTextArea;
                const listOfPosts = store.getState.bind(store)().profilePage.posts

                return <MyPosts publishNewPost={publishNewPost}
                                onChange={onChange}
                                onKeyPress={onKeyPress}
                                listOfPosts={listOfPosts}
                                valueForPost={valueForPost}/>
            }}

        </StoreContext.Consumer>
    )
}
export default 12