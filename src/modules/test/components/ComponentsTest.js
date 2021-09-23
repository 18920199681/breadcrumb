import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('TestStore')
@observer
class ComponentsTest extends React.Component {
  static defaultProps = {
    prefixCls: 'test-components',
  }

  constructor(props) {
    super(props);
    this.state = {
      isGray: false
    }
  }

  render() {
    const { prefixCls } = this.props;

    return (
      <div className={prefixCls}>
        componentTest
      </div>
    )
  }
}

export default ComponentsTest;
