import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const Icon = styled.svg`
  position: absolute;
  top: 3vh; 
  right: 3vw; 
  cursor: pointer;
  width: 5vmax;
`;
