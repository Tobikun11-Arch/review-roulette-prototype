'use client';

import {useReviewRoulette} from './useReviewRoulette';
import {ReviewForm} from './ReviewForm';
import {RouletteWheel} from './RouletteWheel';

export default function ReviewRoulette() {
  const {
    currentPage,
    reviewText,
    setReviewText,
    errorMessage,
    result,
    isSpinning,
    handleSubmitReview,
    handleSpin
  } = useReviewRoulette();

  if (currentPage === 'review') {
    return (
      <ReviewForm
        reviewText={reviewText}
        errorMessage={errorMessage}
        onReviewTextChange={setReviewText}
        onSubmit={handleSubmitReview}
      />
    );
  }

  return (
    <RouletteWheel
      result={result}
      isSpinning={isSpinning}
      onSpin={handleSpin}
    />
  );
}
