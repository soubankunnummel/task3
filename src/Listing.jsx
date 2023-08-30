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

// with async and await

// import React, { useEffect, useState } from 'react';

// function Listing() {
//   const [list, setList] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://dummyjson.com/quotes');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);

//       if (Array.isArray(data.quotes)) {
//         setList(data.quotes.slice(0, 10));
//       } else {
//         console.log('Data is not available');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data List</h1>
//       {list.map((lists, i) => (
//         <ul key={i}>{lists.quote}</ul>
//       ))}
//     </div>
//   );
// }

// export default Listing;

