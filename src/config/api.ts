import { ApiType } from '../types/api';
import config from './config';
import axios from 'axios';

const Api = async ({ method, url, data, params }: ApiType) => {
  const address = config.baseUrl + url;
  const lowerMethod = method.toLowerCase();
  if (lowerMethod === 'get' || lowerMethod === 'delete') {
    return await axios[method](address, { params, data });
  } else {
    return await axios[method](address, data, { params });
  }
};

export default {
  userLogin: (data: Object) =>
    Api({ method: 'post', url: '/todo/login', data: data }),
};
