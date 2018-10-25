import React from 'react'
import { Badge } from 'antd';
import {Card} from 'antd';
export default function InsiderPoints() {
  return (
    <Card
        title={<h3><span style={{ backgroundColor: 'rgb(173,18,131)',fontSize:"20pt",padding:"5px",color:"white",borderRadius:'20px'}}>100</span><b>Insider Points earned</b></h3>}
        style={{ width: 350,margin:'auto' }}
            >
            <div class="welcome-message">
            You've been awarded with 100 Points for being a Insider. Go ahead, pamper yourself!
            </div>
            </Card>
  )
}
