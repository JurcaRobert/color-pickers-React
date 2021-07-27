import React, { useContext } from 'react';
import styled from 'styled-components';
import SelectedColorContext from './Providers/SelectedColorContext';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const Heading1 = styled.h1`
  font-size: 50px;
  font-family: 'Arial', sans-serif;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Heading2 = styled.h2`
  font-size: 30px;
  font-family: 'Arial', sans-serif;
  margin-top: 5px;
  margin-bottom: 0;
`;

export default function Text() {
    /**
     * Get color from the context, which will be changed.
     * @type {{backgroundColor: string, textColor: string}}
     */
    const selectedColors = useContext(SelectedColorContext);

    return (
        <Container
            style={{ backgroundColor: selectedColors.backgroundColor }}
        >
            <Heading1 style={{ color: selectedColors.textColor }}>Main Title</Heading1>
            <Heading2 style={{ color: selectedColors.textColor }}>Subtitle</Heading2>
        </Container>
    );
}
