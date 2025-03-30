import React from 'react';
import { useCart } from '/src/context/Cartcontext.jsx';
import { useAuth } from '/src/hooks/useAuth.js';
import { Link } from 'react-router-dom';
import Hero from './Hero.jsx';
import Stickyhero from './Stickyhero.jsx';
import Footer from './Footer';

const CartPage = () => {
  const { 
    items, 
    total, 
    itemCount, 
    removeItem, 
    updateQuantity, 
    clearCart,
    isLoading 
  } = useCart();
  
  const { currentUser } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  const calculateItemTotal = (price, quantity) => {
    return (price * quantity).toLocaleString('en-IN');
  };

  return (
    <div className="font-roboto tracking-widest min-h-screen flex flex-col items-center bg-center bg-[url(https://www.sennheiser-hearing.com/_next/image/?url=https%3A%2F%2Feu-central-1-akqa.graphassets.com%2FAGz66yvUcQ42Ggm7CrXdgz%2FzhbwLugYSXuAwQMaEN9m&w=1920&q=75)] bg-cover ">
      <div className="relative z-10 w-full">
        <Hero />
        <Stickyhero />
        
        <div className="container mx-auto px-4 py-8 max-w-6xl min-h-[83vh]">
          <h1 className="text-3xl text-white font-aboreto font-medium mb-8">Cart - {itemCount}</h1>
          
          {items.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <h2 className="text-2xl mb-4">Your cart is empty</h2>
              <Link 
                to="/products" 
                className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors duration-200"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <div key={`${item.id}-${item.quantity}`} className="p-4 flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/4 aspect-square bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        
                        <div className="flex-1 flex flex-col">
                          <div className="flex justify-between">
                            <h3 className="text-xl font-medium">{item.name}</h3>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-gray-500 hover:text-red-500 transition-colors"
                              aria-label={`Remove ${item.name} from cart`}
                            >
                              ×
                            </button>
                          </div>
                          <p className="text-gray-600 mb-2">{item.brand}</p>
                          <p className="text-lg font-medium mb-4">INR {item.price.toLocaleString('en-IN')}</p>
                          
                          <div className="mt-auto flex items-center">
                            <div className="flex items-center border border-gray-300 rounded">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-3 py-1 text-lg hover:bg-gray-100 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                −
                              </button>
                              <span className="px-4 py-1 border-x border-gray-300">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-3 py-1 text-lg hover:bg-gray-100 transition-colors"
                              >
                                +
                              </button>
                            </div>
                            
                            <div className="ml-auto text-lg">
                              INR {calculateItemTotal(item.price, item.quantity)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 border-t border-gray-200 flex justify-end">
                    <button 
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                  <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal ({itemCount} items)</span>
                      <span>INR {total.toLocaleString('en-IN')}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-600">FREE</span>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>INR {total.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  {currentUser ? (
                    <button 
                      className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors duration-200"
                      onClick={() => {/* Add checkout logic here */}}
                    >
                      Proceed to Checkout
                    </button>
                  ) : (
                    <div className="text-center">
                      <p className="mb-4 text-gray-600">Please sign in to checkout</p>
                      <Link 
                        to="/login" 
                        className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors duration-200 block"
                      >
                        Sign In
                      </Link>
                    </div>
                  )}
                  
                  <div className="mt-4 text-sm text-gray-500 text-center">
                    <p>30-day return policy • Free shipping on all orders</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CartPage;