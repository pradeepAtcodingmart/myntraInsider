import React, { Component } from 'react'
import { Card } from 'antd';
import { Badge } from 'antd';

export default class EarnInsider extends Component {
  render() {
    return (
      <div>
        <Card
        title={<b>Unlock a new activity to earn points</b>}
         style={{ width: 350,margin:'auto' }}

        >
        {this.props.earnInsider.map((data,index)=>(
          <div className="earn-data" style={{display:'flex',padding:'16px'}} key={index}>
          <span className='float-left'><img style={{ borderRadius: '8px',opacity: 0.8}} src={data.imgsrc} alt="image" width='100'/></span>
          <span className='float-left' style={{marginLeft:'2px',borderBottom:'1px solid lightgrey'}}><Badge count={'active'} style={{ backgroundColor: '#00D1A2' }} />
          <p>{data.content}</p></span>
         </div>
        ))}
        </Card>
      </div>
    )
  }
}
