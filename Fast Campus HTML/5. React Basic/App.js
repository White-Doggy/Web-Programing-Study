import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function counterActiveUsers(users){
  console.log('활성 사용자 측정');
  return users.filter(user => user.id).length;
}

const initialState = {
  inputs: {
    user: '',
    email: '',
  },
  users:[
    {
        id: 1,
        username: 'a',
        email: 'aaa',
    },
    {
        id: 2,
        username: 'b',
        email: 'vvv',
    },
    {
        id: 3,
        username: 'c',
        email: 'ccc',
    },
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
        return {
          ...state,
          inputs:{
            ...state.inputs,
            [action.name]: action.value
          }
        }
    case 'CREATE_USER':
      return{
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }

    case 'TOGGLE_USER' :
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
          ? { ...user, active: !user.active}
          : user
          )
      }
    
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user=>user.id !== action.id)
      }

    default :
    throw new Error('Unhandled action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback(e => {
    const { name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, [])

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current+=1;    
  }, [username, email])

  const onToggle = useCallback(id=> {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, []);

  const onRemove = useCallback(id=> {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, []);

  const count = useMemo(() => counterActiveUsers(users), [users]);

  return (
    <>
      <CreateUser  
        username={username} 
        email={email} 
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>
  <div> 활성 사용자수 : {count}</div>
    </>
  )
}

export default App;
