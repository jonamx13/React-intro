import React from "react";
import { TodoIcon } from './';

function CompleteIcon( { completed, onComplete }) {
    return (
        <TodoIcon
        type="check"
        color={completed ? 'white' : 'gray'}
        onClick={onComplete}
        completedColor={completed}
        />
    )
}

export { CompleteIcon }