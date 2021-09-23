import React from 'react';

export default function asyncRouter(importComponent) {
  class AsyncRouter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({
        component: component
      });
    }

    render() {
      const ComponentPage = this.state.component;
      return ComponentPage ? <ComponentPage {...this.props} /> : null;
    }
  }

  return AsyncRouter;
}
