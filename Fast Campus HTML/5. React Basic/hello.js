import React from 'react';

function Hello(props) {    
    return <div>
        {props.isSpecial ? <b>*</b> : null }
        
        // {props.isSpecial && <b>*</b>}
        // 보여주기만 하는 경우는 && 를 활용하는게 나음

        hi, {props.name}
    </div>;
}

export default Hello;