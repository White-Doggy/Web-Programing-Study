import React, {useEffect} from 'react';

const User = React.memo(function User({user, onRemove}) {
    const {username, email, id} = user;
   
    useEffect(()=> {
        console.log('변경');      
        return () => {
            console.log('변경 전');      
        }  
    }, [user]);

    return (
        <div>
            <b>{username}</b> <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
});

function UserList({users, onRemove }) {

    return (
        <div>
            {
                (
                    users.map(                        
                        user => (
                        <User 
                            user={user} 
                            key={user.email}
                            onRemove={onRemove}                         
                        />)
                    )
                )
            }
        </div>
    )
}

export default UserList;