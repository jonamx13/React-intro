import { ImCross } from 'react-icons/im';
import { ImCheckmark } from "react-icons/im";
import './TodoIcon.css'

const iconTypes = {
    'check': (color) => <ImCheckmark className='Icon-svg' fill={color}/>,
    'delete': (color) => <ImCross className='Icon-svg' fill={color}/>,
};


function TodoIcon({ type, color, onClick, completedColor }) {
    return (
    <span
    className={`Icon-container 
    Icon-container-${type} ${completedColor && 'Icon-container-check--active'}
    `}
    onClick={onClick}
    >
        {iconTypes[type](color)}
    </span>
    )
}

export { TodoIcon }