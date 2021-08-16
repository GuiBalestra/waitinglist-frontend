import ClientFactory from '../../factories/client'

const config = {
  baseURL: process.env.VUE_APP_BaseURLWaitingList,
  headers: { 'Content-Type': 'application/json' },
}

const ABDAClient = ClientFactory.New(config);

ABDAClient.interceptors.request.use((request) => {
  return request
}, error => Promise.reject(error))

ABDAClient.interceptors.response.use(response => response, async (error) => {
  if (error.response.status.toString().match(/4\d[13]/)) {
    Promise.resolve(ABDAClient.request(error.response.config))
  }
  return Promise.reject(error)
})

export default ABDAClient
