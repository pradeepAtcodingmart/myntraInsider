import React, { Component } from 'react'
import FAQ from '../Component/FAQ/FAQ';
import MainModuleHeader from './MainModuleHeader';
import Privilages from '../Component/Insider/Privilages'
import InsiderPoints from '../Component/Insider/InsiderPoints';
import Carousel from '../Component/Carousel/Carousel';
import Title from '../Component/Title/Title';
import EarnInsider from '../Component/EarnInsider/EarnInsider';
export default class MainModule extends Component {
  constructor(){
    super();
    this.state ={
      perks:[
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
      experience:[
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
      ],
      earnInsider:[
        {
          imgsrc:'https://assets.myntassets.com/assets/images/banners/2018/9/27/b9d8a6a5-a1cb-47ed-b04c-58905787063d1538042625718-Checkout-the-Beauty-products.png',
          content:'Add glam and glitz to your beauty!'
        },
        {
          imgsrc:'https://assets.myntassets.com/assets/images/banners/2018/9/21/42a461d9-ae88-4cda-be83-696c89c279bb1537533060853-Running_Store_Men.jpg',
          content:'Explore the Running store!'
        },
        {
          imgsrc:'https://assets.myntassets.com/assets/images/retaillabs/2018/10/24/9521cd03-1cf4-4b7e-b91c-f45211c56abb1540388168513-HOP_Offer3.jpg',
          content:'Saifs Biggest Fan Wins A Royal Makeover on ZoomTV'
        },
        {
          imgsrc:'https://assets.myntassets.com/assets/images/banners/2018/10/24/72b1c2a5-db81-489c-b4d2-735a1487dde61540392899678-Activity_HOP.png',
          content:'Checkout House Of Pataudi product'
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
            <Title header={'Insider Perks'} view={'View All >'}/>
            <Carousel card={this.state.perks}/>
            <Title header={'Insider Experience'} />
            <Carousel card={this.state.experience}/>
             <Title header={'Earn Insider Points'}/>
             <EarnInsider earnInsider={this.state.earnInsider}/>
             <Title header={'FAQs'} view={'View All >'}/>
            <FAQ/>
      </div>
    )
  }
}
