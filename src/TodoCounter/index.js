import './TodoCounter.css';
import parse from 'html-react-parser';

function TodoCounter({ total, completed }) {

    const message = completed === total
    ?  parse('<span>YOU HAVE COMPLETED ALL YOUR TASKS</span>')
    :  parse(`You have completed <span>${completed}</span> of <span>${total}</span> TODO's`)


    return (
      <h1 className='TodoCounter'>
        {message}
      </h1>
    );
}

export { TodoCounter };