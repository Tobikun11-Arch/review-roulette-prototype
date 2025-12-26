'use client';

import {useState} from 'react';
import type {Page, Result} from './types';

export function useReviewRoulette() {
  const [currentPage, setCurrentPage] = useState<Page>('review');
  const [reviewText, setReviewText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [result, setResult] = useState<Result>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (reviewText.trim()) {
      setErrorMessage('');
      setCurrentPage('roulette');
    } else {
      setErrorMessage('Please enter a review.');
    }
  };

  const handleSpin = () => {
    setIsSpinning(true);
    setResult(null);

    setTimeout(() => {
      const spinResult: Result = Math.random() < 0.5 ? 'Win' : 'Lose';
      setResult(spinResult);
      setIsSpinning(false);
    }, 2000);
  };

  return {
    currentPage,
    reviewText,
    setReviewText,
    errorMessage,
    result,
    isSpinning,
    handleSubmitReview,
    handleSpin
  };
}
