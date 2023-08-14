function TodoCounter({ total, completed }) {
    return (
      <h1>
        You have completed {completed} of {total} TODO's
      </h1>
    );
}

export { TodoCounter };