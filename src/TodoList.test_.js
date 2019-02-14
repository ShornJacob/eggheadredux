import React from 'react'
import TodoList from './TodoList'
import renderer from 'react-test-renderer';

it('renders correctly', () => {

   const todos = [{id:1}]
   const onTodoClick = () => null


    const tree = renderer
      .create(<TodoList todos={todos} onTodoClick={onTodoClick} /> )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });