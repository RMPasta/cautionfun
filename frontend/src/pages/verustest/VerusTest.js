import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function VerusTest() {
// const [address, setAddress] = useState('');
const [price, setPrice] = useState('');
const [info, setInfo] = useState('');
const [claims, setClaims] = useState('');

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:5000/')
  //     .then((response) => {
  //       console.log(response)
  //       setAddress(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  // console.log(address)

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/price')
      .then((response) => {
        // console.log(response)
        setPrice(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/ccinfo')
      .then((response) => {
        // console.log(response)
        setInfo(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/claimsleft')
      .then((response) => {
        // console.log(response)
        setClaims(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <h1>Price: {price ? price : "...Loading"}</h1>
      <h1>Info: {info ? info : "...Loading"}</h1>
      <h1>Claims: {claims ? claims : "...Loading"}</h1>
    </div>
  );
}
