import React from 'react';
import classNames from 'classnames';

class Breadcrumb extends React.Component {
  static defaultProps = {
    prefixCls: 'braamcreumb',
  }

  renderBraedcremb() {
    const { braamcreumbList, separator, prefixCls, history, size, maxLength } = this.props;
    const { pathname } = history.location;

    const sepa = separator || '/';

    const onClick = (item, index) => {
      if (index === braamcreumbList.length - 1) return;
      history.push(item.path);
    }

    let lastIndex = -1;

    const CNS = classNames({
      "braamcreumb": true,
      'small': size === 'small',
      'middle': size === 'middle',
      'large': size === 'large',
    });

    return (
      <div className={CNS}>
        {
          braamcreumbList.map((item, index) => {
            if (item.path === pathname) lastIndex = index;

            if (lastIndex !== -1 && index > lastIndex) return false;

            const renderNameOpts = {
              className: `${prefixCls}-items-name`,
              onClick: () => onClick(item, index),
            };

            return (
              <span key={String(index)} className={`${prefixCls}-items`}>
                <span {...renderNameOpts}>{item.name}</span>
                <span className={`${prefixCls}-items-separator`}>
                  {index > lastIndex && sepa}
                </span>
              </span>
            );
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderBraedcremb()}
      </div>
    )
  }
}

export default Breadcrumb;
