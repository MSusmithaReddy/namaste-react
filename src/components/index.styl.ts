import React from 'react';
import styled from 'styled-components';

// Styled components for the rectangle, layer1, and layer2
export const RectangleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Adjust height as needed */
  margin: 10px;
`;

export const Rectangle = styled.div`
  position: relative;
  width: 100%; /* Adjust width as needed */
  height: 240px; /* Adjust height as needed */
  background-color: #FFE3D8; /* Base rectangle color */
  border-radius: 30px;
`;

export const Layer = styled.div`
  position: absolute;
  top: 10px; /* Adjust top position as needed */
  left: 10px; /* Adjust left position as needed */
  right: 10px; /* Adjust right position as needed */
  bottom: 10px; /* Adjust bottom position as needed */
  border-radius: 30px;
`;

export const Layer1 = styled.div`
  position: absolute;
  top: 10px; /* Adjust top position as needed */
  left: -10px; /* Adjust left position as needed */
  right: -10px; /* Adjust right position as needed */
  bottom: -10px; /* Adjust bottom position as needed */
  background-color: #FFBFA6;/* First layer color */
  z-index: 1; /* Ensure it's above the rectangle */
  border-radius: 30px;
`;

export const Layer2 = styled.div`
  position: absolute;
  top: 22px; /* Adjust top position as needed */
  left: -20px; /* Adjust left position as needed */
  right: -20px; /* Adjust right position as needed */
  bottom: -20px; /* Adjust bottom position as needed */
  background-color: #2F2F2F; /* Second layer color */
  z-index: 2;
  border-radius: 30px;
`;

export const Watch = styled.div`
  position: absolute;
  top: -34px; /* Adjust top position as needed */
  right: -30px; /* Adjust right position as needed */
  height: 320px;
`;

export const RectangleSection = styled.div`
    position: absolute;
    color: white;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    top: 17%; 
    height: 80%;
`
