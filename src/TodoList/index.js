import React from 'react';
import './TodoList.css'


function TodoList(props) {
    const renderFunc= props.render || props.children;

  return (
    <section className="TodoList-container">
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {props.error && props.onError()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        {(props.totalTodos > 0 && !props.searchedTodos.length)&& props.onEmptySearchResults(props.searchText)}
        {(!props.loading && !props.error)&&props.searchedTodos.map(renderFunc)}
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };
