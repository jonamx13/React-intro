import { ImCross } from 'react-icons/im';
import { ImCheckmark } from "react-icons/im";

const iconTypes = {
    'check': <ImCheckmark />,
    'delete': <ImCross />,
};


function TodoIcon({ type }) {
    return (
    <span
    className={`Icon Icon-${type}`}
    >
        {iconTypes[type]}
    </span>
    )
}

export { TodoIcon }