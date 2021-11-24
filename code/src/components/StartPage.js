import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { gamestate } from 'reducers/gamestate';

import { fetchGameInstructions } from 'reducers/gamestate';

import styled from 'styled-components';


export const StartPage = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const setUsernameInStore = (event) => {
    event.preventDefault();

    dispatch(gamestate.actions.setUsername(username))

    dispatch(fetchGameInstructions(username));

  };

  return (
    <>
    
    <StartScreen>
      <StartForm onSubmit={setUsernameInStore}>
        <label>
          Enter Username:
          <div>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          </div>
        </label>
        <StartButton type="submit">Begin!</StartButton>
      </StartForm>
      </StartScreen>
      
    </>
  );
};

export const StartScreen = styled.section`  
  width: 100%;
  height: 100vh;
  font-family: 'Philosopher', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 500px; */

  /* @media (min-width: 768px) {
    max-width: 800px;
  } */

`

export const StartForm = styled.form`
color: white;
font-size: 30px;
margin-bottom: 10px;
`

export const StartButton = styled.button`
  font-family: 'Philosopher', sans-serif;
  display:inline-block;
  position:relative;
  padding:10px 20px;
  border:2px solid #fda;
  background-color: white;
  color:#4F7942;
  font-family: 'Philosopher', sans-serif;
  font-size:20px;
  text-decoration:none;
  margin:20px auto;
  transition: color 0.4s; 

  &:after {
  content:" ";
  border:2px solid rgba(0,0,0,0);
  display:inline-block;
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  transition:all 0.4s;
  }
 
  &:hover {
    color:#023020;
  }

  &:hover:after { 
  border:2px solid #fda;
  width: calc(100% - 10px);
  height: calc(100% + 10px); 
  }
`

