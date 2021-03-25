import React from 'react';
import styles from './../Dialogs.module.scss';

export type MessageType = {
    id: string
    message: string | number
}
const Message: React.FC<MessageType> = (props) => {
    return <div className={styles.message}>{props.message}</div>
}

export default Message;



type MessagePropsType = {
    id: string
    userPhoto: string | null,
    message: string|number,
    data: string,
    position: '' | ' right'
}


export const Message2 = React.memo(function Message(props: MessagePropsType) {
        return (
            <div className={`message ${props.position}`}>
                {
                    props.userPhoto ? <img src={props.userPhoto} alt={'Photo of User'}/> :
                        <img src={'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}
                             alt={'Photo of User'}/>
                }
                <div className={'bubble'}>
                    {props.message}
                    <div className="corner"></div>
                    <span>{props.data}</span>
                </div>
            </div>
        )
    }
)