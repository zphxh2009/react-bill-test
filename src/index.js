import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import sum from './test';
import { RouterProvider } from 'react-router-dom';
import router from './router';

//导入定制主题文件
import './theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <App />
  <RouterProvider router={router} />
);
