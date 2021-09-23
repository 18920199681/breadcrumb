import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import stores from '@/store';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import 'antd/dist/antd.css';
import { configure } from 'mobx';

configure({
  enforceActions: 'always',
});

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
