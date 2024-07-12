import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f9;
  width: 100%;
  height: 100%; 
`;

export const Card = styled.div`
  display: grid; 
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border: 1px solid #ddd;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
  text-align: center; 
`;

export const Text = styled.p`
  font-size: 16px;
  color: #444;
  text-align: center; 
`;

export const Section = styled.div`
  margin-bottom: 10px;
  text-align: center; 
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  width: auto; 
`;


export const Icon = styled.svg`
  width: 4vmax; 
  height: 4vmax; 
  min-width: 4vmax;
  min-height: 4vmax;
  cursor: pointer;
  transition: fill 0.3s ease, transform 0.3s ease;

  &:hover {
    &:first-of-type {
      fill: red; 
    }
    &:last-of-type {
      fill: #007bff; 
    }
  }
`;



export const BackButton = styled.button`
  margin-bottom: 20px;
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  text-align: center;
  align-items: center; 
`;
