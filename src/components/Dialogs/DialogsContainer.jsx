import Dialogs from './Dialogs';
import { addMessageActionCreator } from './../../redux/dialogsReduser';
import { updateNewMessageActionCreator } from './../../redux/dialogsReduser';
import { connect } from 'react-redux';


// const DialogsContainerLast = (props) => {
    
//     let state = props.store.getState().dialogsPage;


//     let onSendMessageClick = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }

//     let onNewMessageChange = (body) => {
//         let action = updateNewMessageActionCreator(body)
//         props.store.dispatch(action);
//     }

//     return <Dialogs state = { state }
//                     sendMessage =  { onSendMessageClick }
//                     updateNewMessage = { onNewMessageChange }
//     />
// }



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
    

let mapDispatchToProps =(dispatch) => {
    return {
       onSendMessageClick: () => {
            dispatch(addMessageActionCreator());
        },
    
        onNewMessageChange: (body) => {
            let action = updateNewMessageActionCreator(body)
            dispatch(action);
        }
    }
};


let DialogsContainer = connect (mapStateToProps,mapDispatchToProps)(Dialogs);




export default DialogsContainer;

