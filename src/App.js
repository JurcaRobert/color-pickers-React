import React, { useState } from 'react';
import styled from 'styled-components';
import ColorPicker from './components/ColorPicker';
import SelectedColorContext from './components/Providers/SelectedColorContext';
import Text from './components/Text';
import { COLORS } from './constants';

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: row;
    @media (max-width: 576px) {
        flex-direction: column;
    }
`;

const ColorPickers = styled.div`
    display: flex;
    align-content: space-between;
    flex-direction: column;
    height: 300px;
    @media (max-width: 576px) {
        flex-direction: row;
        height: 100px;
        justify-content: space-between;
    }
`;

function App() {
    // States for the 2 color pickers
    const [firstColor, setFirstColor] = useState(COLORS[1]);
    const [secondColor, setSecondColor] = useState(COLORS[14]);

    return (
        <Container>
            <ColorPickers>
                <ColorPicker set={setFirstColor} />
                <ColorPicker set={setSecondColor} />
            </ColorPickers>

            {/* Set the provided values as a state that will be changed by 2components. */}
            <SelectedColorContext.Provider
                value={{ textColor: firstColor, backgroundColor: secondColor }}
            >
                <Text />
            </SelectedColorContext.Provider>
        </Container>
    );
}

export default App;
