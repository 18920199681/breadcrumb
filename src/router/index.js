import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import asyncRouter from '@/utils/asyncRouter';
// const Test = asyncRouter(() => import('@/modules/test/index'));

// 路由引入
import TestRouter from '@/modules/test/router';

function NotFound() {
  return <h2>404</h2>
}

const notFound = [
  {
    path: '*',
    component: NotFound
  }
]

// 组合路由
const routes = [
  ...TestRouter,

  ...notFound
]

class RouterIndex extends Component {
  // constructor(props, context) {
  //   super(props, context)
  // }

  render() {
    return (
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    );
  }
}

export default RouterIndex;
