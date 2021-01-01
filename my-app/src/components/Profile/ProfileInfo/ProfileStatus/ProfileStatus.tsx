import React from 'react';


type ProfileStatusPropsType = {
    status: string,
    textAreaForUserStatus: string,
    userID: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
    }
    setIsMode = (editMode: boolean) => {
        this.setState({editMode})
    }

    render() {
        debugger
        return <>
            {!this.state.editMode && <div><span onClick={()=>this.setIsMode(true)}>{this.props.status}</span></div>}
            {this.state.editMode && <input  autoFocus={true} type="text" value={this.props.textAreaForUserStatus} onBlur={()=>this.setIsMode(false)} />}
        </>
    }
}