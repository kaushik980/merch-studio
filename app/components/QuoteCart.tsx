'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { postQuoteRequest, getProducts, Product } from '@/lib/strapi';
import emailjs from '@emailjs/browser';
import { X, Plus, Minus, Search } from 'lucide-react';

export interface QuoteItem {
  id: number;
  name: string;
  material?: string;
  moq?: string;
  image?: { url: string } | null;
}

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (item: QuoteItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  count: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteCartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('merch_quote');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse quote cart:', e);
      }
    }
  }, []);

  const addItem = (item: QuoteItem) => {
    setItems((prev) => {
      const updated = [...prev];
      const existing = updated.findIndex((i) => i.id === item.id);
      if (existing === -1) {
        updated.push(item);
      }
      localStorage.setItem('merch_quote', JSON.stringify(updated));
      return updated;
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => {
      const updated = prev.filter((i) => i.id !== id);
      localStorage.setItem('merch_quote', JSON.stringify(updated));
      return updated;
    });
  };

  const clearCart = () => {
    setItems([]);
    localStorage.removeItem('merch_quote');
  };

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        count: items.length,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
      }}
    >
      {children}
      {mounted && <QuoteCartDrawer />}
    </QuoteContext.Provider>
  );
};

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within QuoteCartProvider');
  }
  return context;
}

function QuoteCartDrawer() {
  const { items, addItem, removeItem, clearCart, isDrawerOpen, closeDrawer } = useQuote();
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showProductSelector, setShowProductSelector] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: '',
    email: '',
    phone: '',
    company: '',
    notes: '',
  });

  useEffect(() => {
    if (isDrawerOpen && showProductSelector && allProducts.length === 0) {
      getProducts().then(setAllProducts);
    }
  }, [isDrawerOpen, showProductSelector, allProducts.length]);

  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isProductAdded = (productId: number) => {
    return items.some((item) => item.id === productId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const quoteData = {
        ...formData,
        items: items.map((i) => ({ id: i.id, name: i.name })),
      };

      await postQuoteRequest(quoteData);

      await emailjs.send(
        'service_p2zipif',
        'template_bpdk1ma',
        {
          from_name: formData.customer_name,
          from_email: formData.email,
          from_phone: formData.phone,
          company_name: formData.company,
          message: `Quote Request for:\n${items.map((i) => `- ${i.name}`).join('\n')}\n\nNotes: ${formData.notes}`,
        },
        'i4bGyEBc8W9aH8CJV'
      );

      alert('Quote request submitted successfully!');
      clearCart();
      closeDrawer();
      setFormData({ customer_name: '', email: '', phone: '', company: '', notes: '' });
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Failed to submit quote. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isDrawerOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeDrawer}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Quote Cart ({items.length})</h2>
            <button onClick={closeDrawer} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>

          {/* Product Selector Toggle */}
          <button
            onClick={() => setShowProductSelector(!showProductSelector)}
            className="w-full mb-4 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            <Plus size={18} />
            {showProductSelector ? 'Hide Products' : 'Add Products'}
          </button>

          {/* Product Selector */}
          {showProductSelector && (
            <div className="mb-6 pb-4 border-b">
              <div className="relative mb-3">
                <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
                />
              </div>
              <div className="max-h-48 overflow-y-auto space-y-2">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex-1">
                      <p className="font-sm text-gray-800">{product.name}</p>
                      {product.moq && <p className="text-xs text-gray-500">MOQ: {product.moq}</p>}
                    </div>
                    <button
                      onClick={() => {
                        if (!isProductAdded(product.id)) {
                          addItem(product);
                        } else {
                          removeItem(product.id);
                        }
                      }}
                      className={`px-3 py-1 rounded text-sm font-medium transition ${
                        isProductAdded(product.id)
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                    >
                      {isProductAdded(product.id) ? '✓ Added' : 'Add'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {items.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No items in quote. Use "Add Products" above.</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-start border-b pb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      {item.material && <p className="text-sm text-gray-600">{item.material}</p>}
                      {item.moq && <p className="text-sm text-gray-600">MOQ: {item.moq}</p>}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.customer_name}
                  onChange={(e) =>
                    setFormData({ ...formData, customer_name: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <textarea
                  placeholder="Additional Notes (Optional)"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                  rows={3}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#b88a2d] hover:bg-[#a67925] text-white py-2 rounded-lg font-medium disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Submit Quote Request'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
