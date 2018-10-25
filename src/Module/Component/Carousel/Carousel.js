import React from 'react';
import Swiper from 'react-id-swiper';
import {Card} from 'antd';
const { Meta } = Card;
class Carousel extends React.Component {
  constructor(){
    super();
    
  }
  render() {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    };
    return (
      <Swiper {...params}>
     {this.props.card.map((data,index)=>(
                <Card
                hoverable
                title={data.title}
                style={{ width: 40 }}
                cover={<img alt="example" src={data.imgsrc} />}
              >
                <Meta
                  title={data.content}
                />
              </Card>
     ))}
      </Swiper>
    )
  }
}
 
export default Carousel;