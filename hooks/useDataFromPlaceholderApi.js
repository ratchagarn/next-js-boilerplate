import { useState, useEffect } from 'react'
import axios from 'axios'

const baseApiEndpoint = 'https://jsonplaceholder.typicode.com'

function useDataFromApi(path) {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const request = async () => {
      setLoading(true)
      const resp = await axios.get(`${baseApiEndpoint}/${path}`)

      setLoading(false)
      setData(resp.data)
    }

    request()
  }, [])


  return [
    data,
    loading,
  ]
}

export default useDataFromApi
