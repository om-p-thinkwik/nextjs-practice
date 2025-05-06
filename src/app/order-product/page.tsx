'use client'

import { useRouter } from 'next/navigation'

export default function OrderProduct() {
  const router = useRouter()
  const handleOrderClick = () => {
    console.log('Order place button')
    router.push('/')
  }

  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleOrderClick}>Place Order</button>
    </div>
  )
}
