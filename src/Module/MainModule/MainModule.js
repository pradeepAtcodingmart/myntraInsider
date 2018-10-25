import React, { Component } from 'react'
import FAQ from '../Component/FAQ/FAQ';
import MainModuleHeader from './MainModuleHeader';
import Privilages from '../Component/Insider/Privilages'
import InsiderPoints from '../Component/Insider/InsiderPoints';
import Carousel from '../Component/Carousel/Carousel';
export default class MainModule extends Component {
  constructor(){
    super();
    this.state ={
      card:[
        {
          imgsrc:"https://assets.myntassets.com/assets/images/banners/2018/9/27/dc0b470b-2b8b-4eab-b350-1329416011861538042735609-Meet-Celeb_202742470.jpg",
          content:"Come Face to Face with your favourite celebrity"
        },
        {
          imgsrc:"https://assets.myntassets.com/assets/images/banners/2018/9/27/42ee1c35-00ce-4356-8004-618ee24adea71538042735573-Showcase_Creativity.jpg",
          content:"Come Face to Face with your favourite celebrity"
        },   {
          imgsrc:"https://assets.myntassets.com/assets/images/banners/2018/9/27/1c8de97b-8ad7-4a8b-85d2-6643bc4905a91538042735640-Cool-Tech-Innovation_527546032.jpg",
          content:"Come Face to Face with your favourite celebrity"
        },   {
          imgsrc:"https://assets.myntassets.com/assets/images/banners/2018/9/27/d7850df9-6b33-4393-b1d9-062944035b841538042735622-Fan-Council_197903273.jpg",
          content:"Come Face to Face with your favourite celebrity"
        },   {
          imgsrc:"https://assets.myntassets.com/assets/images/banners/2018/9/27/446c75f0-b3ed-4560-a180-689195b6f02f1538042735594-Model_On_Myntra.jpg",
          content:"Come Face to Face with your favourite celebrity"
        }
      ],
      card1:[
        {
          title:"Myntra",
          imgsrc:"https://assets.myntassets.com/assets/images/banners/2018/10/24/1efcbe77-98ef-410a-a9d7-360be1479b7b1540392538765-Fashionotsav300_up.png",
          content:"Come Face to Face with your favourite celebrity"
        },
        {
          title:"Myntra",
          imgsrc:"https://assets.myntassets.com/assets/images/banners/2018/10/24/b08ac99e-f45d-456b-a216-3cf2ba1c09b91540398827799-HOP_Offer5_up.jpg",
          content:"Come Face to Face with your favourite celebrity"
        },   {
          title:"Myntra",
          imgsrc:"https://assets.myntassets.com/assets/images/banners/2018/10/24/ef0fb257-0f50-4d6c-855c-cab3bc76935d1540392538753-HOP_Offer1_up.jpg",
          content:"Come Face to Face with your favourite celebrity"
        },   {
          title:"Myntra",
          imgsrc:"https://assets.myntassets.com/assets/images/retaillabs/2018/10/8/63cce456-c57c-4e10-aa1d-f7301af922f01539008105668-PhonePe.png",
          content:"Come Face to Face with your favourite celebrity"
        },   {
          title:"Myntra",
          imgsrc:"https://assets.myntassets.com/assets/images/banners/2018/9/27/dc0b470b-2b8b-4eab-b350-1329416011861538042735609-Meet-Celeb_202742470.jpg",
          content:"Come Face to Face with your favourite celebrity"
        }
      ]
    }
  }
  render() {
    return (
      <div className='MainModule'>
            <MainModuleHeader/>
            <Privilages/>
            <br/>
            <InsiderPoints/>
            <br/>
            <h3 style={{color:'white'}}><span style={{marginLeft:"10px"}}><b>Insider Perks</b></span><span style={{marginLeft:"200px"}}>View All></span></h3>
            <Carousel card={this.state.card1}/>
            <br/>  
            <h1 style={{color:'white',marginLeft:"10px"}}><b>Insider Experience</b></h1>
            <Carousel card={this.state.card}/>
             <br/>
            <FAQ/>
      </div>
    )
  }
}
