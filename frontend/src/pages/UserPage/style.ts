import styled from 'styled-components';

export const Card = styled.div`
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  align-self: center;
  color: #333;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #444;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const Label = styled.span`
  font-weight: bold;
`;