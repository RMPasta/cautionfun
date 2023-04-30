import React, { useEffect } from 'react'
import { ImmutableXClient, Link } from '@imtbl/imx-sdk';
// import libExample from './imx-client-test';

export default function IMX() {
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
        console.log("balances: ", balances, " orders: ", orders, " assets: ", assets)
      }
    }
    libExample()
  }, [])

  return (
    <div>
        <h1>IMX Testing</h1>
    </div>
  )
}
