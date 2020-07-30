import React from "react";
import styles from './Post.module.css';


export type PostType = {
    id: string
    message: string
    likesCount: number
}


const Post: React.FC<PostType> = (props) => {
    return (
        <div className={styles.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQXfKnE7AhA5MsZLuFjHOFvPP1Mp36OXScKw&usqp=CAU"/>
            <div>
                <span>{props.message}</span>
                <div>
                    <span>Like {props.likesCount}</span>
                </div>
            </div>
        </div>

    )
}
export default Post;