import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import store from './store/store';

// Init VK  Mini App
bridge.send('VKWebAppInit');

export const rerender = (store) => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

rerender(store);
