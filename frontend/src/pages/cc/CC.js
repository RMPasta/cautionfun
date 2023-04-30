import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CC.css'

export default function CC() {
const [address, setAddress] = useState('');
const [price, setPrice] = useState('');
const [supply, setSupply] = useState('');
const [claims, setClaims] = useState('');
const [reserves, setReserves] = useState('');
const [ccIds, setCcIds] = useState('');
const [holders, setHolders] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/getaddress')
      .then((response) => {
        console.log(response)
        setAddress(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/price')
      .then((response) => {
        console.log(response)
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
        setSupply(response.data);
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
    <div className='cautioncoin'>
      <p>{address ? address : "No new address"}</p>
      <h1 className='cc-header'>CautionCoin Status</h1>
      <div className='economics'>
        <h2 className='economics-header'>Economics:</h2>
        <p>Current Supply: {supply ? supply : "...Loading"}</p>
        <p>Current Reserves: {reserves ? reserves : "...Loading"}</p>
        <p>Current Price: {price ? price : "...Loading"} VRSC</p>
      </div>
      <div className='general-info'>
        <h2 className='info-header'>General Info:</h2>
        <p>Airdrop Claims Remaining: {claims ? claims : "...Loading"}</p>
        <p>CC.IDs Registered: {ccIds ? ccIds : "...Loading"}</p>
        {/* <p>Top CC Holders: {holders ? holders : "...Loading"}</p> */}
        <div>
        <p>Top CC Holders: </p>
        {[1, 2, 3, 4, 5].map(holder => <p key={holder}>Tokens: {holder} --- Discord Tag: User{holder}</p>).reverse()}
        </div>
      </div>
    </div>
  );
}