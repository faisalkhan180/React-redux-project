import React, { Suspense, lazy } from 'react'

const Products = lazy(()=> import("../components/Products"));

export default function Home() {
    
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Products</h2>

        <div style={{textAlign: "center"}}>
            <Suspense fallback={<h3>Products are loading in a sec</h3>}>
            <Products />
            </Suspense>
            
        </div>

    </div>
  )
}
