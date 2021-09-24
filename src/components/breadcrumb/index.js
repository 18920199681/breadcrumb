import React from 'react';
import classNames from 'classnames';

class Breadcrumb extends React.Component {
  static defaultProps = {
    prefixCls: 'braamcreumb',
  }

  renderBraedcremb() {
    const { breadcrumbList, separator, prefixCls, history, size, maxLength } = this.props;
    const { pathname } = history.location;

    const sepa = separator || '/';

    const onClick = (item, index) => {
      if (index === breadcrumbList.length - 1) return;
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
          breadcrumbList.map((item, index) => {
            if (item.path === pathname) lastIndex = index;

            if (lastIndex !== -1 && index > lastIndex) return false;

            const renderNameOpts = {
              className: `${prefixCls}-items-name`,
              onClick: () => onClick(item, index),
            };

            return (
              <span key={String(index)} className={`${prefixCls}-items`}>
                {
                  (index < maxLength-1 || index === lastIndex)
                  && <span {...renderNameOpts}>{item.name}</span>
                }

                {
                  index === maxLength-1
                  && index !== lastIndex
                  && <span className={`${prefixCls}-items-ellipsis`} onClick={() => onClick(item, index)}>...</span>
                }

                {
                  index <= maxLength-1
                  && maxLength-1 !== lastIndex
                  && index !== lastIndex
                  && (
                    <span className={`${prefixCls}-items-separator`}>
                      {sepa}
                    </span>
                  )
                }
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
