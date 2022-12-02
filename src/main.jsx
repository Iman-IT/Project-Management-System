import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.css'
import 'antd/dist/antd'
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider } from 'antd';

ConfigProvider.config({ theme: { primaryColor: "#7b68ee", } });
// ConfigProvider.config({ theme: {  successColor:"#3DEd97" } });
ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
 
  <React.StrictMode>
   
      <ConfigProvider>
        <App />
        </ConfigProvider>
   
  </React.StrictMode>
)
