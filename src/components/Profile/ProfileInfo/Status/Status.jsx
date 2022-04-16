import React from 'react';


class Status extends React.Component {

    // local state
    state = {
        editMode: false,
        localStatus: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode:true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode:false
        });
        this.props.updateUserStatusThunk(this.state.localStatus);
    }

    onLocalStatusChange = (e) => {
        this.setState({
            localStatus: e.currentTarget.value
        })    
    }
    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                localStatus: this.props.status
            });
        }
    }






    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode } >{this.props.status || '------' } </span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input onChange={this.onLocalStatusChange} autoFocus={true} onBlur={ this.deActivateEditMode } value={this.state.localStatus} />
                    </div>
                }
            </div>

        )
    }
}
export default Status