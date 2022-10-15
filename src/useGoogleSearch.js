import React from 'react'
import API_KEY from './Keys'
import {useState, useEffect} from 'react'

const CONTEXT_KEY = '546477ffcfdec426b'

function useGoogleSearch(term) {
     const [data, setData] = useState(null)

     useEffect(() => {
       const fetchData = async() => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=
            ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response => response.json())
        .then(reslut =>
            setData(reslut))
       }

       fetchData()
     }, [term]);
  
     return {data}
}

export default useGoogleSearch