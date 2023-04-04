interface ApiType {
  method: 'get' | 'post' | 'delete' | 'put';
  url: String;
  data?: Object | Object[];
  params?: Object;
}

export type { ApiType };
