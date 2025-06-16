/**
 * React Coding Challenge - Review List Component
 * ==============================================
 * 
 * This challenge consists of three parts:
 * 1. EXPLAIN - Understand and explain the existing code
 * 2. IMPROVE - Suggest and implement improvements  
 * 3. EXTEND - Add new functionality
 *
 * Context: This component displays reviews for a business in our review analytics platform.
 */

import React, { useState, useEffect } from 'react';

// Type definitions
type Review = { 
  reviewId: number; 
  text: string;
  rating: number;
  date: string;
  helpful: number;
};

type Business = {
  businessId: number;
  name: string;
};

// PART 1: EXPLAIN
// ===============
// Please explain:
// 1. What issues do you see with this component?
// 2. What happens when businessId changes?
// 3. What are the potential bugs or edge cases?

function ReviewList({ businessId }: { businessId: number }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(`/api/reviews/${businessId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((r) => (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <div>Rating: {r.rating}/5</div>
          <div>{r.text}</div>
          <div>Date: {r.date}</div>
          <button onClick={() => console.log('Helpful clicked')}>
            Helpful ({r.helpful})
          </button>
        </div>
      ))}
    </div>
  );
}

// PART 2: IMPROVE
// ===============
// Please implement an improved version of this component that addresses the issues you identified.
// Consider:
// - Error handling
// - Loading states
// - Proper dependencies
// - Key props
// - Type safety
// - Performance optimizations

// YOUR IMPROVED COMPONENT HERE:
// function ImprovedReviewList({ businessId }: { businessId: number }) {
//   // Your implementation
// }


// PART 3: EXTEND
// ===============
// Add the following REQUIRED features to your improved component:
// 
// 1. Add Review Feature (REQUIRED):
//    - Add a simple input field for review text
//    - Add a rating selector (1-5 stars or simple number input)
//    - Add an "Add Review" button
//    - When clicked, add the new review to the local state (no API call needed)
//    - The new review should appear in the list immediately
//
// 2. Remove Review Feature (REQUIRED):
//    - Add a "Remove" or "Delete" button to each review
//    - When clicked, remove that review from the local state
//    - The review should disappear from the list immediately
//
// 3. Optional Enhancements (if time permits):
//    - Sort reviews by date or rating
//    - Filter reviews by rating
//    - Mark reviews as helpful
//
// Note: Focus on updating the local state correctly. No API calls are needed.

// YOUR EXTENDED COMPONENT HERE:


// BONUS CHALLENGES
// ================
// If you complete the above:
// 1. How would you optimize this component for a list of 1000+ reviews?
// 2. How would you test this component?
// 3. How would you handle real-time updates to reviews?
// 4. Add a feature to report inappropriate reviews


// EXAMPLE USAGE
// =============
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Review Analytics Platform - Coding Test</h1>
      <ReviewList businessId={123} />
      
      {/* Uncomment to test your improved component */}
      {/* <ImprovedReviewList businessId={123} /> */}
    </div>
  );
}