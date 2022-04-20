import React, { useEffect, useState } from 'react';


const StatusWithHOOK = (props) =>  {

    let [editMode, setEditMode] = useState (false)
    let [status, setStatus] = useState(props.status)

    useEffect( () =>{
        setStatus(props.status); 
        // подписываемся на изменение значения
    }, [props.status]);


    let activateEditMode = () => {
        setEditMode(true)
        }

    let deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusThunk(status)
        }

    let onLocalStatusChange = (e) => {
        setStatus(e.currentTarget.value);  
    }

    // componentDidUpdate (prevProps, prevState) {
    //     if (prevProps.status !== this.props.status){
    //         this.setState({
    //             localStatus: this.props.status
    //         });
    //     }
    

        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={ activateEditMode } >{ props.status || '------' } </span>
                    </div>
                }

                { editMode &&
                    <div>
                        <input onChange={ onLocalStatusChange } autoFocus={true} onBlur={ deActivateEditMode } value={ status } />
                    </div>
                }
            </div>

        )
    }

export default StatusWithHOOK