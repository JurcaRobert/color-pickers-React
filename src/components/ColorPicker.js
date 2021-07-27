import React, { useState } from 'react';
import PropTypes from 'prop-types'; // ES6
import styled from 'styled-components';
import { COLORS } from '../constants';

const Button = styled.button`
    display: block;
    border: 1px solid;
`;

const Container = styled.div`
    width: 200px;
    height: 120px;
    display: grid;
    grid-template-rows: repeat(3, 30px);
    grid-template-columns: repeat(5, 30px);
    gap: 4px;
    @media (max-width: 576px) {
        width: 150px;
        grid-template-rows: repeat(3, 25px);
        grid-template-columns: repeat(5, 25px);
    }
`;

function setBorderColor(color, setColorState, colorStates) {
    // Set the selected color
    setColorState(color);

    // Unset the other colors
    for (const [key, setColorStateCallback] of Object.entries(colorStates)) {
        if (key !== color) setColorStateCallback('black');
    }
}

/**
 * The function set() will set the selected color.
 */
function ColorPicker({ set }) {
    const colorStates = {};

    return (
        <Container>
            {COLORS.map((color) => {
                // The default border color of the color picker's square
                const [borderColorState, setBorderColorState] = useState('black');

                // Set an array with colors and setters for colors, which will be used to unset
                // the unselected squares from the color picker
                colorStates[color] = setBorderColorState;

                return (
                    <Button
                        key={color}
                        style={{
                            backgroundColor: color,
                            borderWidth: '1px',
                            borderColor: borderColorState,
                        }}
                        type="button"
                        onClick={() => {
                            setBorderColor(color, setBorderColorState, colorStates);
                            set(color);
                        }}
                    >
                        {' '}
                    </Button>
                );
            })}
        </Container>
    );
}

ColorPicker.propTypes = {
    set: PropTypes.func.isRequired,
};

export default ColorPicker;
