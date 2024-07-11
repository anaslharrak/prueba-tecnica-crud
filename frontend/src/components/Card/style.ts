import styled from 'styled-components';

export const Card = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;  
  flex-direction: column;  
  align-items: center; 
  justify-content: start;  
  width: 100%;  
  max-width: 600px;  
  border-radius: 15px;
  border: 2px solid #ccc;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  
  width: 13%; 

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const Icon = styled.svg`
  cursor: pointer;
`;