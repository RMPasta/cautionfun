import React, { useEffect, useState } from 'react'
import { ImmutableXClient } from '@imtbl/imx-sdk';
// import libExample from './imx-client-test';

export default function IMX() {

  const [userAssets, setUserAssets] = useState([])

  useEffect(() => {
    async function libExample() {
      const client = await ImmutableXClient.build({
        publicApiUrl: 'https://api.sandbox.x.immutable.com/v1',
      })
      // const address = localStorage.getItem('address')
      const address = "0x5989Cc6bbAc8f8E3afc4143bFE57ba68Ef20F84F"
      if (address) {
        const balances = await client.getBalances({ user: address })
        const orders = await client.getOrders()
        // const order = await client.getOrder({ orderId: 1 })
        const assets = await client.getAssets({
          user: address,
        })
        // console.log("balances: ", balances, " orders: ", orders, " assets: ", assets)
      }

    }
    libExample()
  }, [])
useEffect(() => {
  async function getUserAssets(assetCursor) {
    const client = await ImmutableXClient.build({
      publicApiUrl: 'https://link.x.immutable.com',
    })
    const address = "0x5989Cc6bbAc8f8E3afc4143bFE57ba68Ef20F84F"
    const assetsRequest = await client.getAssets({ user: address, cursor: assetCursor, status: 'imx', collection: "0xacb3c6a43d15b907e8433077b6d38ae40936fe2c" });
    setUserAssets(assetsRequest.result)
    console.log(assetsRequest)
    return { assets: assetsRequest.result, cursor: assetsRequest.cursor };
 }
 getUserAssets()

}, [])
  return (
    <div>
        <h1>IMX Testing</h1>
        <div>{userAssets}</div>
    </div>
  )
}
