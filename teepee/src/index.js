import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
window.__testCleanup = () => {
  const unregisterSW = () => {
    return navigator.serviceWorker.getRegistrations()
    .then((registrations) => {
      const unregisterPromise = registrations.map((registration) => {
        return registration.unregister();
      });
      return Promise.all(unregisterPromise);
    });
  };

  const clearCaches = () => {
    return window.caches.keys()
    .then((cacheNames) => {
      return Promise.all(cacheNames.map((cacheName) => {
        return window.caches.delete(cacheName);
      }));
    });
  };

  if (navigator.serviceWorker) {
    return Promise.all([
      unregisterSW(),
      clearCaches(),
    ]);
  }
};

window.__testCleanup();
