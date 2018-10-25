import React, { Component } from 'react'

export default class TireInfo extends Component {
  render() {
    return (
        <div className="tier-info">
        <div><span className="tiers-name"><b>Insider</b></span><span className="rectangle-bar" style={{backgroundColor:"#00D265"}}></span> </div>
        <div><span class="tiers-name">Select</span><span class="rectangle-bar"></span></div>
        <div><span class="tiers-name">ELITE</span><span class="rectangle-bar"></span></div>
        <div><span class="tiers-name">ICON</span><span class="rectangle-bar"></span></div>
      </div>
    )
  }
}
