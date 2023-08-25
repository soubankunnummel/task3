import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Listing() {

    const [list,setList] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/quotes')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            Array.isArray(data.quotes)
            ? setList(data.quotes.slice(0,10))
            : console.log("data is not awilable");
        })
        .catch(error => {
            console.error("Erroer feching data :",error);
        })
    },[])
  return (
    <div>
      <h1 >Data List</h1>
      {/* {console.log(list)} */}
      {list.map((lists,i) => 

      <ul key={i}>{lists.quote} </ul>
      )}
    </div>
  )
}

export default Listing
