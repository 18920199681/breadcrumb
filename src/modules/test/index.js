import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from "react-router-dom";
import Second from './second';
import Third from './third';
import Forth from './forth';

import Breadcrumb from '../../components/breadcrumb';

@inject('TestStore')
@observer
class Home extends React.Component {
  static defaultProps = {
    prefixCls: 'home-container',
  }

  renderTabs(prefixCls) {
    return (
      <div className={`${prefixCls}-tabs`}>
        <Link to='/home/second'>second</Link>
        <Link to='/home/second/third'>third</Link>
        <Link to='/home/second/third/forth'>forth</Link>
      </div>
    )
  }

  onChangeSize(val) {
    const { TestStore } = this.props;
    const { setBreadcrumbSize } = TestStore;

    setBreadcrumbSize(val);
  }

  renderSizeBtns(prefixCls) {
    const btns = [
      {
        name: '大',
        value: 'large',
      },
      {
        name: '中',
        value: 'middle',
      },
      {
        name: '小',
        value: 'small',
      }
    ];

    return (
      <div className={`${prefixCls}-size-btns`}>
        {btns.map(item => (<span key={item.value} onClick={() => this.onChangeSize(item.value)}>{item.name}</span>))}
      </div>
    )
  }

  renderPages() {
    const { history } = this.props;
    const { pathname } = history.location;

    return (
      <div>
        {(pathname === '/' || pathname === '/home') && <div> HOME </div>}
        {pathname === '/home/second' && <Second />}
        {pathname === '/home/second/third' && <Third />}
        {pathname === '/home/second/third/forth' && <Forth />}
      </div>
    );
  }

  render() {
    const { prefixCls, history, TestStore } = this.props;
    const { size } = TestStore.breadcrumb;

    const breadcrumbList = [
      {
        name: '首页',
        path: '/'
      },
      {
        name: '二级目录',
        path: '/home/second'
      },
      {
        name: '三级目录',
        path: '/home/second/third'
      },
      {
        name: '四级目录',
        path: '/home/second/third/forth'
      },
    ];

    const renderOpts = {
      breadcrumbList, // 列表
      separator: '>', // 自定义分隔符
      size, // 尺寸
      maxLength: 3,
      history,
    }

    return (
      <div className={prefixCls}>
        {this.renderTabs(prefixCls)}
        {this.renderSizeBtns(prefixCls)}
        <Breadcrumb {...renderOpts} />
        {this.renderPages()}
      </div>
    )
  }
}

export default Home;
