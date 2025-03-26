import { useState } from 'react';
import Hero from './Hero.jsx';
import Stickyhero from './Stickyhero.jsx';
import Footer from './Footer';

const Prods = () => {
  const pros = [
    {
      id: 1,
      name: 'Sennheiser - HD 660S2',
      price: 29990,
      rating: 4.5,
      image1 : 'https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-660S2-02.jpg?v=1678449682&width=1000',
      image: 'https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-660S2-01.jpg?v=1678449682&width=1000',
      category: 'Open back'
    },
    {
      id: 2,
      name: 'Sennheiser - HD 800 S',
      price: 134990,
      rating: 4.2,
      image1: 'https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-800-S-1160-1160-1.jpg?v=1593668952&width=1000',
      image:'https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-800-S-1160-1160-3.jpg?v=1593668952&width=1000',
      category: 'Open back'
    },
    {
      id: 3,
      name: 'Sennheiser - HD 820',
      price: 164990,
      rating: 4.7,
      image1: 'https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-820-1160-1160-1.jpg?v=1593677179&width=1000',
      image:'https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-820-1160-1160-3.jpg?v=1593677197&width=1000',
      category: 'Open back'
    },
    {
      id: 4,
      name: 'Focal - Stellia',
      price: 184999,
      rating: 4.8,
      image: 'https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-Stellia-02.jpg?v=1726573473&width=1000',
      image1:'https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-Stellia-01.jpg?v=1726573460&width=1000',
      category: 'Open back'
    },
    {
      id: 5,
      name: 'Focal - Azurys',
      price: 36999,
      rating: 4.7,
      image: 'https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Focal-Azurys-02.jpg?v=1715161192&width=1000',
      image1:'https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Focal-Azurys-01.jpg?v=1715161192&width=1000',
      category: 'Open back'
    },
    {
        id: 6,
        name: 'FiiO - FT1',
        price: 14999,
        rating: 4.7,
        image: 'https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-FiiO-FT1-02.jpg?v=1724142980&width=1000',
        image1:'https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-FiiO-FT1-04.jpg?v=1724142980&width=1000',
        category: 'Open back'
      },
  ];

  const [products, setProducts] = useState(pros);
  const [sortOption, setSortOption] = useState('featured');

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);
    
    let sortedProducts = [...products];
    
    switch(option) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedProducts = [...pros];
    }
    
    setProducts(sortedProducts);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[url(https://mezeaudio.com/cdn/shop/files/Meze-Audio-Empyrean-headphone-04.webp?v=1713431934&width=1200)] bg-cover relative overflow-hidden">
      
      <div className="relative z-10 w-full">
        <Hero/>
        <Stickyhero/>
        
        <div className="container mx-auto px-4 py-12">
          <div className="bg-black/30 backdrop-blur-sm p-4  mb-8 flex justify-between items-center">
            <h2 className="text-white text-xl font-light">6 Products</h2>
            <div className="flex items-center">
              <label htmlFor="sort" className="text-white mr-2 text-sm">Sort by:</label>
              <select 
                id="sort" 
                value={sortOption}
                onChange={handleSortChange}
                className="bg-black/30 border border-white text-white  px-3 py-1 text-sm focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Ascending</option>
                <option value="price-high">Price: Descending</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
             <div key={product.id} className="bg-black/30 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-white/30 transition-shadow duration-300 group">
             <div className="h-[300px] flex items-center justify-center bg-white/10 relative overflow-hidden">
               <img 
                 src={product.image1} 
                 alt={product.name} 
                 className="h-full object-contain absolute transition-opacity duration-500 ease-in-out group-hover:opacity-0"
               />
               <img 
                 src={product.image} 
                 alt={product.name} 
                 className="h-full object-contain absolute transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
               />
             </div>
             <div className="p-4">
               <h3 className="text-white font-medium mb-1 line-clamp-2">{product.name}</h3>
               <div className="flex justify-between items-center">
                 <span className="text-white font-bold">INR {product.price.toFixed(2)}</span>
               </div>
             </div>
           </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Prods;