import { useState, useEffect } from 'react';
import axios from 'axios'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"

export function useFetch(params) {
  const { table, condition, type } = params
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // const HTTPS = 'https://vlg-adi-web01.megafon.ru/legacy-dash/'
  const HTTPS = 'https://gdc-rts.megafon.ru/proxy-api'


  useEffect(() => {
    async function fetching() {
      let response
      switch (type) {
        case 'post':
          // response = await axios.post(HTTPS + `/api-health/gettables/`, {tables: el})
          response = await axios.post(HTTPS + '/post', {tables: table + ' ' + condition})
          return setData(response.data)
      
        case 'get':
          // response = await axios.get(HTTPS + '/api-health/gettables/' + el)
          response = await axios.get(HTTPS + '/get' + table + ' ' + condition)
          return setData(response.data)
      
        default:
          break;
      }
    }
    
    try {
      fetching()
    } catch (error) {
      console.log(error)
    } finally {
      if(data.length > 0) return setIsLoading(false)
    } 
  }, [condition, data.length, table, type]) 

  return {
    data, isLoading
  }
}