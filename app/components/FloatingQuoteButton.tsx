'use client';

import { useQuote } from './QuoteCart';
import { ShoppingCart } from 'lucide-react';

export default function FloatingQuoteButton() {
  const { count, openDrawer } = useQuote();

  return (
    <button
      onClick={openDrawer}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#b88a2d] hover:bg-[#a67925] text-white px-5 py-3 rounded-full shadow-lg font-medium transition"
    >
      <ShoppingCart size={20} />
      Quote ({count})
    </button>
  );
}
