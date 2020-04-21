import axios from 'axios';

function httpCall(url, method, params) {
    return axios({
        method: method,
        url: 'http://localhost:8080' + url,
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
