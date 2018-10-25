import React from 'react'
import TireInfo from './Tire-Info';

export default function MainModuleHeader() {
  return (
    <div style={{ marginTop: '150px', textAlign: 'center' }}>
      <img src='https://assets.myntassets.com/assets/images/banners/2018/9/22/c5c6f538-6cb2-4f10-afd4-c696e32d2f2a1537625295072-logo-WO_tagline.png' alt='myntra-insider' width='250px' object-fit='cover' />
      <TireInfo/>
    </div>

  )
}
