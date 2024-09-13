// src/components/ReviewCard.js
import React from 'react';
import './ReviewCard.css';  // Importing CSS specific to this component

const ReviewCard = ({ review, author, designation, stars }) => {
  return (
    <div className="review-card">
      <p className="review-text">"{review}"</p>
      <p className="review-author">{author}</p>
      <p className="review-designation">{designation}</p>
      <div className="review-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < stars ? "filled-star" : "empty-star"}>★</span>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
