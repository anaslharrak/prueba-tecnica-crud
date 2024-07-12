import styled from 'styled-components';

export const Card = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;  
  flex-direction: column;  
  align-items: center; 
  justify-content: start;  
  width: 100%;  
  max-width: 500px;
  border-radius: 15px;
  border: 1px solid #ddd;  
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;


export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px; 
  height: 100px;
`;

export const IconEdit = styled.svg`
  width: 1vmax;
  height: 1vmax;
  min-width: 1vmax;
  min-height: 1vmax;
  cursor: pointer;
  transition: fill 0.3s ease, transform 0.3s ease;

  &:hover {
    fill: #007bff;
    transform: scale(1.1);
  }
`;

export const IconDelete = styled(IconEdit)`
  &:hover {
    fill: red;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 5px;
`;
