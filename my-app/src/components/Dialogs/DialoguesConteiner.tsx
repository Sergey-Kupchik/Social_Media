import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './Dialogues.module.css';
import Message, {MessageType} from './Message/Message';
import Dialogue, {DialogWithFriend} from './Dialog/Dialogue';
import {DispatchType, StoreType, ActionsTypes} from '../../redux/state';
import {SendMessageOrderAC, ShowMessageInTextareaAC} from '../../redux/dialogsReducer';
import {Dialogues} from './Dialogues';
import {StoreContext} from '../../StoreContext';


type DialoguesContainerPropsType = {}

export const DialoguesContainer: React.FC<DialoguesContainerPropsType> = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const dialogues = store.getState.bind(store)().dialogsPage.dialogs;
                const messages = store.getState.bind(store)().dialogsPage.messages;

                const onSendMessage = (newMessage: string) => {
                    let action: ActionsTypes = SendMessageOrderAC(newMessage);
                    store.dispatch(action);
                }

                const ShowMessageInTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
                    store.dispatch(ShowMessageInTextareaAC(e.currentTarget.value));
                }

                const textareaValue = store.getState.bind(store)().dialogsPage.newMessageInTextArea
                return <Dialogues dialogs={dialogues} messages={messages} onSendMessage={onSendMessage}
                                  ShowMessageInTextarea={ShowMessageInTextarea} textareaValue={textareaValue}/>
            }
            }
        </StoreContext.Consumer>
    )
}
