import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import styles from './MyPosts.module.css';
import {LoginFormDataType} from '../../Login/Login';



const PostTextarea : React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="newPost" component="textarea" type="text" className={styles.text}/>
            </div>
            <button type="submit" className={styles.button}>Add post</button>
        </form>
    )
}

const PostReduxForm = reduxForm<PostFormDataType>({
    form: 'post'
})(PostTextarea)


export const PostForm = (props:PostFormPropsType) => {
    const onSubmit = (formData: PostFormDataType) => {
        props.addNewPost(formData.newPost)
    }
    return <div>
        New post
        <PostReduxForm onSubmit={onSubmit}/>
    </div>
}


type PostFormDataType = {
    newPost: string
}

type PostFormPropsType = {
    addNewPost:(newPost: string)=>void}