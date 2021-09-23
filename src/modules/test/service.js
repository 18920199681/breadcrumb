import request from '@/utils/request';

export default {
  // test
  queryTest: (params = {}) => {
    request.get({
      url: `/api/get-city-list`,
      payload: params,
      isMock: false
    })
  },

}
