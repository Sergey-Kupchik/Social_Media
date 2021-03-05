import React, {KeyboardEvent} from 'react';
import {log} from 'util';
import {updateUserStatus} from '../../../../redux/profileReducer';


type ProfileStatusPropsType = {
    status: string,
    textAreaForUserStatus: string,
    userID: string
    showStatusTextInTextareaSuccess: (statusChanging: string) => void
    updateUserStatus: (status: string,) =>void
    authorizedUserID: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  onKeyPress=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key==="Enter"){
            this.props.updateUserStatus(this.props.textAreaForUserStatus)
            this.setIsMode(false)
        }
    }
    state = {
        editMode: false,
    }
    setIsMode = (editMode: boolean) => {
        if (this.props.userID == '12113') {
            this.setState({editMode})
        }
    }

    render() {


        return <>
            {!this.state.editMode &&
            <div>
                <span onClick={() => this.setIsMode(true)}>{this.props.status}</span>
            </div>
            }
            {this.state.editMode &&
            <input autoFocus={true}
                   type="text"
                   value={this.props.textAreaForUserStatus}
                   onBlur={() => this.setIsMode(false)}
                   onChange={(e) => this.props.showStatusTextInTextareaSuccess(e.currentTarget.value)}
                // @ts-ignore
            onKeyPress={this.onKeyPress}/>
            }
        </>
    }
}