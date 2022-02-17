import React from 'react';

export const todoListItem = (props) => {
  return (
    <li key={props.id}>{props.title}</li>
  )
}