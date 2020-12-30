import React from 'react';


type ProfileStatusPropsType = {
    status: string,
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
    }
    setIsMode = (editMode: boolean) => {
        this.state.editMode = editMode
    }

    render() {
        debugger
        return <>
            {!this.state.editMode && <div><span onClick={()=>this.setIsMode(true)}>{this.props.status}</span></div>}
            {this.state.editMode && <input type="text" value={'holla'}/>}
        </>
    }
}