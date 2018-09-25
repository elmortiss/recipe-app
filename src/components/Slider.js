import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    {
      src: `${process.env.PUBLIC_URL}/slider/slide1.jpg`,
      altText: 'Make it easy to find great recipes',
      caption: 'Make it easy to find great recipes'
    },
    {
      src: `${process.env.PUBLIC_URL}/slider/slide2.png`,
      altText: 'All our recipes are tested thoroughly by us to make sure they’re suitable for your kitchen at home',
      caption: 'All our recipes are tested thoroughly by us to make sure they’re suitable for your kitchen at home'
    },
    {
      src: `${process.env.PUBLIC_URL}/slider/slide3.jpg`,
      altText: 'Enter ingredients, get recipe',
      caption: 'Enter ingredients, get recipe'
    }
  ];
  class Slider extends Component {
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }
    render() {
        const { activeIndex } = this.state;
    
        const slides = items.map((item) => {
          return (
            <CarouselItem className="Slider"
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption  captionHeader={item.caption} />
            </CarouselItem>
          );
        });
        return (
            <Carousel 
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          );
        }
      }
      
      
      export default Slider;