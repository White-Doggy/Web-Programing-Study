import React from 'react';

function CreateUser({username,email,onChange,onCreate}) {
    return(
        <div>
            <input 
                name="username" 
                placeholder="계정명"   
                onChange={onChange}
                vale={username}
            />
            <input 
                name="email" 
                placeholder="이메일"   
                onChange={onChange}
                vale={email}
            />
            <button onClick={onCreate}>등록</button>            
        </div>
    )    
}

export default React.memo(CreateUser);