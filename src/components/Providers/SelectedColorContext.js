import { createContext } from 'react';
import { COLORS } from '../../constants';

const SelectedColorContext = createContext({
    textColor: COLORS[0],
    backgroundColor: COLORS[1],
});

export default SelectedColorContext;
