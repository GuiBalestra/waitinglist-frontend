import axios from 'axios'
import {
  merge,
  clone,
} from 'lodash'

/**
 * @property Client
 * @description O objeto que é utilizado para gerar os clients.
 */
let Client

/**
 * @function setInterceptors
 * @description Seta os interceptors do client.
 * @param {Object} interceptors Os interceptors que serão utilizados neste client.
 * @param {Object} interceptors.request Os interceptors das requisições do client.
 * @param {Object} interceptors.response Os interceptors das respostas do client.
 * @returns {void}
 */
const setInterceptors = (interceptors) => {
  if (interceptors.request) {
    Object.values(interceptors.request).forEach((interceptor) => {
      Client.interceptors.request.use(interceptor)
    })
  }
  if (interceptors.response) {
    Object.values(interceptors.response).forEach((interceptor) => {
      Client.interceptors.response.use(interceptor)
    })
  }
}

/**
 * @function setDefaults
 * @description Seta as configurações padrão que serão utilizadas em
 * todas as requisições do client.
 * @param {Object} defaults O objeto com as configurações padrão que serão utilizadas
 * em todas as requisições do client.
 * @returns {void}
 */
const setDefaults = (defaults) => {
  merge(Client.defaults, defaults)
}

/**
 * @function setBaseURL
 * @description Seta a URL base de todas as requisições do client.
 * @param {string} baseURL A URL base de todas as requisições do client.
 * @returns {void}
 */
const setBaseURL = (baseURL) => {
  Client.defaults.baseURL = baseURL
}

/**
 * @function Configure
 * @description Configura o client.
 * @param {string} baseURL A URL base de todas as requisições do client.
 * @param {Object} defaults O objeto com as configurações padrão que serão utilizadas
 * em todas as requisições do client.
 * @param {Object} interceptors Os interceptors que serão utilizados neste client.
 * @param {Object} interceptors.request Os interceptors das requisições do client.
 * @param {Object} interceptors.response Os interceptors das respostas do client.
 * @returns {void}
 */
const Configure = (baseURL = '', defaults = {}, interceptors = {}) => {
  Client = axios.create()
  setInterceptors(interceptors)
  setDefaults(defaults)
  setBaseURL(baseURL)
}

const New = ({ baseURL = '', defaults = {}, interceptors = {} }) => {
  Configure(baseURL, defaults, interceptors)
  return clone(Client)
}

const ClientFactory = {
  New
}

export default ClientFactory
