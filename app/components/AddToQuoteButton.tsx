'use client';

import { useQuote, QuoteItem } from './QuoteCart';
import { useState } from 'react';

interface AddToQuoteButtonProps {
  product: {
    id: number;
    name: string;
    material?: string;
    moq?: string;
    image?: { url: string } | null;
  };
}

export default function AddToQuoteButton({ product }: AddToQuoteButtonProps) {
  const { addItem } = useQuote();
  const [justAdded, setJustAdded] = useState(false);

  const handleClick = () => {
    addItem(product as QuoteItem);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full py-2 rounded-full font-medium transition ${
        justAdded
          ? 'bg-green-600 text-white'
          : 'bg-[#b88a2d] hover:bg-[#a67925] text-white'
      }`}
    >
      {justAdded ? '✓ Added to Quote' : 'ADD TO QUOTE'}
    </button>
  );
}
