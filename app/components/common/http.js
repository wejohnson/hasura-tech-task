import axios from 'axios';

const httpCall = (url, method, params) => axios({
  method,
  url: `${window.location.protocol}//${window.location.hostname}${window.location.port !== '' ? (`:${window.location.port}`) : ''}${url}`,
  params,
}).then(res => res)
  .catch(e => e.response);

export {
  httpCall,
};
