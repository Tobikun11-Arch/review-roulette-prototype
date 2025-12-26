'use client';

type ReviewFormProps = {
  reviewText: string;
  errorMessage: string;
  onReviewTextChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function ReviewForm({
  reviewText,
  errorMessage,
  onReviewTextChange,
  onSubmit,
}: ReviewFormProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-foreground">
          Leave a Review
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              id="review"
              value={reviewText}
              onChange={e => onReviewTextChange(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-background text-foreground"
              placeholder="Type your review here..."
            />
            {errorMessage && (
              <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

