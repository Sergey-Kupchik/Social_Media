import React, {KeyboardEvent, useState, DetailedHTMLProps, InputHTMLAttributes} from 'react';


type ProfileStatusPropsType = {
    status: string,
    textAreaForUserStatus: string,
    userID: string
    showStatusTextInTextareaSuccess: (statusChanging: string) => void
    updateUserStatus: (status: string,) => void
    authorizedUserID: string
}


export const ProfileStatusWithHOC: React.FunctionComponent<ProfileStatusPropsType> = (props) => {

    const [editMode, setEditMode] = useState(false)
    const setIsMode = (editMode: boolean) => {
        if (props.userID == props.authorizedUserID) {
            setEditMode(editMode)
        }
    }
    const onKeyPress = (e: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.updateUserStatus(props.textAreaForUserStatus)
            setIsMode(false)
        }
    }
    return <>
        {!editMode &&
        <div >
            <span onClick={() => setIsMode(true)}>{props.status.length==0?"Set status" : props.status}</span>
        </div>
        }
        {editMode &&
        <input autoFocus={true}
               type="text"
               value={props.textAreaForUserStatus}
               onBlur={() => setIsMode(false)}
               onChange={(e) => props.showStatusTextInTextareaSuccess(e.currentTarget.value)}
               onKeyPress={onKeyPress}/>
        }
    </>
}
