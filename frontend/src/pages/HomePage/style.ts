import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); 
  width: 100%;
  gap: 20px;
  padding: 20px;
  background-color: #f4f4f9;
  overflow: hidden;
`;


export const Icon = styled.svg`
  position: absolute;
  top: 2vh; 
  right: 2vw; 
  cursor: pointer;
  width: 4vmax;  
  height: 4vmax; 
  fill: #007bff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;



export const LoadingMessage = styled.h1`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-top: 5vh;
`;
