'use client';

import Image from 'next/image';
import type {Result} from './types';

type RouletteWheelProps = {
  result: Result;
  isSpinning: boolean;
  onSpin: () => void;
};

export function RouletteWheel({
  result,
  isSpinning,
  onSpin,
}: RouletteWheelProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-6 text-center">
        <h1 className="text-3xl font-bold text-foreground">
          Spin the Roulette
        </h1>
        <div className="py-8 flex items-center justify-center">
          <div
            className={`relative w-64 h-64 ${isSpinning ? 'animate-spin' : ''}`}
            style={{
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Image
              src="/roulette-wheel.png"
              alt="Roulette Wheel"
              width={256}
              height={256}
              className="rounded-full"
              priority
            />
          </div>
        </div>
        <button
          onClick={onSpin}
          disabled={isSpinning}
          className={`w-full px-6 py-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors text-lg font-semibold ${
            isSpinning
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isSpinning ? 'Spinning...' : 'Spin'}
        </button>
        <div className="mt-6">
          <textarea
            readOnly
            value={result || ''}
            className="w-full px-4 py-3 border border-gray-300 rounded-md bg-background text-foreground text-center text-lg font-semibold resize-none"
            placeholder="Result will appear here..."
            rows={3}
          />
        </div>
      </div>
    </div>
  );
}

