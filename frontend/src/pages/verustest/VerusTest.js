import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function VerusTest() {
const [address, setAddress] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/')
      .then((response) => {
        setAddress(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(address)
  return (
    <div>
      <h1>New Address: {address}</h1>
    </div>
  );
}
