import React, { Component } from 'react'
import { Card } from 'antd';

export default class FAQ extends Component {
    constructor(){
        super();
        this.state ={
            faq:[
                {
                    question:"What is Myntra Insider?",
                    answer:"Myntra Insider is Myntra's loyalty programme which is open to registered users on Myntra.  A user has to opt in to join the program."
                },
                {
                    question:"Is there a membership fee for Myntra Insider?",
                    answer:"No. There is no membership fee to participate in Myntra's Insider loyalty programme. All you need to do is visit Myntra Insider and join the program."
                },
                {
                    question:"What do I get for being a Myntra Insider?",
                    answer:"You get certain perks and privileges for being a Myntra Insider. You can earn Insider Points for exploring or buying on Myntra app or website and redeem them for a variety of offers from Myntra and our partners in other lifestyle areas such as Dining, Travel, Stay and many more. You also a have access to a variety of privileges on Myntra."
                },
                {
                    question:"How many points do I get for shopping on Myntra?",
                    answer:"You get 1 Insider Point for every 10 rupees purchased on Myntra and is subject to cancellation and returns. The points will be in due state until 30 days after delivery.  Ex: You get 100 Insider Points for buying a product at Rs. 1000/- today and will be in Due status.  If the product was delivered on Day 5, your Insider Points will become available for redemption at the end of Day 35. You may also choose to not return the product once it is delivered to make your points available for redemption."
                },
                {
                    question:"What are Myntra Insider Experiences and how do I avail them?",
                    answer:"These are privileges offered by Myntra to as contests or as per selection. Myntra will open them up for users to participate on a sporadic basis. Keep an eye on the Insider Experiences section on when they open up."
                },
                {
                    question:"How do I earn by exploring Myntra?",
                    answer:"You will be shown a set of activities every day on your Myntra Insider page along with Insider Points associated with each activity. All you need to do is Unlock an Activity and complete the same as per the steps mentioned in the activity details. The Insider Points will be in Due status until the next business day when they will become available for redemption."
                },
                {
                    question:"I shopped at Myntra last week, but points are in ‘Due’ status.",
                    answer:"It is because the product is not yet delivered to you or is within the 30 day return period. If there was no cancellation of the order placed or the product was not returned - the Insider Points will be available for redemption."
                }
            ],
            current:0
        }
    }
    handleNext = ()=>{
        let current=this.state.current;
        if(current<6)
         current++;
        else
          current=0;
        this.setState({current:current})
        
    }
    handlePrevious = ()=>{
        let current=this.state.current;
        if(current>0)
         current--;
        else
          current=6;
        this.setState({current:current})
        
    }
  render() {
    return (
      <div>
            <Card
              style={{ width: 350,margin:'auto' }}
                            >
            <div>
             <h1>{this.state.faq[this.state.current].question}</h1>
             <p>{this.state.faq[this.state.current].answer}</p>
            </div>
            <span style={{float:'left',color:'#FF005C'}} onClick={this.handlePrevious}>Previous</span>
            <span style={{float:'right',color:'#FF005C'}}onClick={this.handleNext}>Next ></span>
            </Card>
      </div>
    )
  }
}
