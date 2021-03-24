import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import styles from './MyPosts.module.scss';
import {LoginFormDataType} from '../../Login/Login';



const PostTextarea : React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    const sendData =(e: React.FormEvent<HTMLFormElement>)=>{
        props.handleSubmit(e)
        props.reset()
    }
    return (
        <form onSubmit={sendData}>
            <div className={styles.add_post_main}>
                <Field name="newPost" component="textarea" type="text"   className={styles.text} placeholder={"Write something here..."}/>
            </div>
            <div className={styles.btn_wrap}>
                <button type="submit" className={styles.btn}>Add post</button>
            </div>

        </form>
    )
}

const PostReduxForm = reduxForm<PostFormDataType>({
    form: 'AddPostForm'
})(PostTextarea)


export const AddPostForm = (props:PostFormPropsType) => {
    const onSubmit = (formData: PostFormDataType) => {
        props.addNewPost(formData.newPost)
    }
    return <div className={styles.add_post_wrapper}>
        <h4 className={styles.add_post_title}>Create Post</h4>
        <PostReduxForm onSubmit={onSubmit}/>
    </div>
}


type PostFormDataType = {
    newPost: string
}

type PostFormPropsType = {
    addNewPost:(newPost: string)=>void}

