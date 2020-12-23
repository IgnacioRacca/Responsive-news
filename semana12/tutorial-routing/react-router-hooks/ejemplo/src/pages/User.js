import React from 'react';
import {useParams} from 'react-router';

function User() {
    const {firstname, lastname} = useParams();
  return (
    <div>
      User {firstname} {lastname}
    </div>
  )
}

export default User;