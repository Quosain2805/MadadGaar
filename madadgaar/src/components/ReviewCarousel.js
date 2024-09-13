// src/components/ReviewCarousel/ReviewCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import ReviewCard from './ReviewCard';
import './ReviewCarousel.css';  // Importing CSS specific to this component
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ReviewCarousel = () => {
  const reviews = [
    {
      review: "We have been working with Positivus for the past year and have seen a significant increase in website traffic...",
      author: "John Smith",
      designation: "Marketing Director at XYZ Corp",
      stars: 4
    },
    {
      review: "Positivus has been an excellent partner for our business growth...",
      author: "Jane Doe",
      designation: "CEO at ABC Ltd",
      stars: 5
    },
    {
      review: "The professionalism and dedication from Positivus have made a big difference...",
      author: "Michael Johnson",
      designation: "CTO at Tech Solutions",
      stars: 3
    },
    {
      review: "Their team goes above and beyond to deliver exceptional results and support...",
      author: "Anna Lee",
      designation: "Founder of Startup XYZ",
      stars: 5
    }
  ];

  return (
    <Carousel 
      showThumbs={false} 
      showIndicators={true} 
      showStatus={false} 
      infiniteLoop 
      useKeyboardArrows
      emulateTouch
      centerMode
      centerSlidePercentage={33.33} // Adjust to show three cards at a time
      swipeable
      dynamicHeight
    >
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          review={review.review}
          author={review.author}
          designation={review.designation}
          stars={review.stars}
        />
      ))}
    </Carousel>
  );
};

export default ReviewCarousel;
