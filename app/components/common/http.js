import axios from 'axios';

function httpCall(url, method, params) {
    return axios({
        method: method,
        url: window.location.protocol + '//' + window.location.hostname + url,
        params: params,
      }).then(res => 
        {
            return res}
            )
        .catch((e) => {
          return e.response;
        });
};

export {
    httpCall,
};
