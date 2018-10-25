import React, { Component } from 'react'
import { Card } from 'antd';
import { Badge } from 'antd';
export default class Privilages extends Component {

    render() {
        const title = (
            <div>
                Welcome,<b>Pradeep</b><br />
                You're an <b>Insider</b>
            </div>
        )
        return (
            <Card
                title={title}
                extra={<img src='https://assets.myntassets.com/assets/images/banners/2018/9/27/c6c35585-0f14-4d67-a7cc-a1f2db4483e81538054891482-badge_insider.png' width='70px' />}
                style={{ width: 350, margin: 'auto' }}
            >
                <div>
                    <span style={{ fontSize: '15pt' }}><b>Insider Privileges</b></span>
                    <span style={{ float: 'right', color: "white" }}><Badge count={'active'} style={{ backgroundColor: '#00D1A2' }} /></span>
                </div>
                <div style={{float:"left"}}>
                    <ul>
                        <li>Get Welcome Insider Points</li>
                        <li>Earn points for Activities &amp; Purchases</li>
                        <li>Redeem points for Insider Perks</li>
                        <li>Co-Create fashion with Myntra</li>
                    </ul>
                </div>
            </Card>
        )
    }
}
