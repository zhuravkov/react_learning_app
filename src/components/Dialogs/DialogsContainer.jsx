import Dialogs from './Dialogs';
import { addMessageActionCreator } from './../../redux/dialogsReduser';
import { updateNewMessageActionCreator } from './../../redux/dialogsReduser';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

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
        dialogsPage: state.dialogsPage,

    }
};
    

// let mapDispatchToProps =(dispatch) => {
//     return {
//        onSendMessageClick: () => {
//             dispatch(addMessageActionCreator());
//         },
    
//         // onNewMessageChange: (body) => {
//         //     let action = updateNewMessageActionCreator(body)
//         //     dispatch(action);
//         // }
//     }
// };


export default compose (
    withAuthRedirect,
    connect (mapStateToProps,{addMessageActionCreator})
    )(Dialogs)




// Оборачиваем в ХОК
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// let DialogsContainer = connect (mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;

