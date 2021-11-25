import styled from 'styled-components';

export const RestartButton = styled.button`
  font-family: 'Philosopher', sans-serif;
  display:inline-block;
  position:relative;
  padding:10px 20px;
  border:2px solid #fda;
  background-color: #8A9A5B;
  color:#355E3B;
  font-family: 'Philosopher', sans-serif;
  font-size: 20px;
  text-decoration:none;
  margin: 20px auto;
  margin-top: 18px;
  transition: color 0.4s; 
  cursor: pointer;
  @media (max-width: 768px) {
  font-size: 16px;
  margin: 16px auto;
}

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
    color: #fda;
  }

  &:hover:after { 
  border:2px solid #fda;
  width: calc(100% - 10px);
  height: calc(100% + 10px); 
  }
`