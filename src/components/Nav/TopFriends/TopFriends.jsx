import Friend from '../../Friends/Friend/Friend';
import s from './topFriends.module.css'

const TopFriends = (props) => {
    let topFriendList = props.state.friends.slice(0,3).map( f => <Friend name = { f.name} /> );
    return (

        <div className= { s.topFriends } >
            { topFriendList }
        </div>
        
        
    )
}

export default TopFriends;