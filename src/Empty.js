import React from 'react';
import { Redirect } from 'react-router';

function Empty() {
  return <Redirect to="/posts" />;
}

export default Empty;
