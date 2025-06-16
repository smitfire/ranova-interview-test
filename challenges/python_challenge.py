"""
Python Coding Challenge - Review Analytics
==========================================

This challenge consists of three parts:
1. EXPLAIN - Understand and explain the existing code
2. IMPROVE - Suggest and implement improvements
3. EXTEND - Add new functionality

Context: Ranova is a review analytics platform that helps businesses understand customer feedback.
"""

from typing import List, Dict, Optional
from datetime import datetime
import json


# PART 1: EXPLAIN
# ===============
# Please explain what this class does and how it works.
# What are the potential issues with this implementation?

class ReviewAnalyzer:
    def __init__(self):
        self.reviews = []
        
    def add_review(self, review_data: str):
        # Parse JSON string to dict
        review = json.loads(review_data)
        self.reviews.append(review)
        
    def process_reviews(self):
        positive = []
        negative = []
        neutral = []
        
        for review in self.reviews:
            rating = review['rating']
            
            if rating >= 4:
                positive.append(review)
            elif rating <= 2:
                negative.append(review)
            else:
                neutral.append(review)
                
        return {
            'positive': positive,
            'negative': negative,
            'neutral': neutral,
            'stats': {
                'total': len(self.reviews),
                'positive_count': len(positive),
                'negative_count': len(negative),
                'neutral_count': len(neutral)
            }
        }
    
    def get_average_rating(self):
        if not self.reviews:
            return 0
            
        total = 0
        for review in self.reviews:
            total += review['rating']
            
        return total / len(self.reviews)


# Example usage:
analyzer = ReviewAnalyzer()
analyzer.add_review('{"rating": 5, "text": "Excellent service!", "date": "2024-01-15"}')
analyzer.add_review('{"rating": 2, "text": "Not satisfied", "date": "2024-01-16"}')
analyzer.add_review('{"rating": 4, "text": "Pretty good", "date": "2024-01-17"}')

results = analyzer.process_reviews()
print(f"Average Rating: {analyzer.get_average_rating()}")
print(f"Review Distribution: {results['stats']}")


# PART 2: IMPROVE
# ===============
# The code above has several issues and areas for improvement.
# Please:
# 1. List at least 3 improvements you would make
# 2. Implement these improvements in a new version of the class below

# YOUR IMPROVED CODE HERE:
# class ImprovedReviewAnalyzer:
#     pass


# PART 3: EXTEND
# ===============
# Add the following functionality to your improved class:
# 1. A method to get reviews within a date range
# 2. A method to search reviews by keywords in the text
# 3. A method to get the most common words in negative reviews (excluding common words like 'the', 'a', 'is', etc.)
# 4. Error handling for malformed review data
# 
# Bonus: Add any other analytics methods you think would be useful for a review analytics platform

# YOUR EXTENDED CODE HERE:


# TEST YOUR IMPLEMENTATION
# ========================
# Write some test cases to demonstrate your implementation works correctly
# Include edge cases and error scenarios