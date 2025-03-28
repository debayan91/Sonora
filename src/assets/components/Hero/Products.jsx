import { useState } from 'react';
import Hero from './Hero.jsx';
import Stickyhero from './Stickyhero.jsx';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Prods = () => {
  const navigate = useNavigate();
  const pros = [
    {
      id: 1,
      name: "Sennheiser - HD 660S2",
      price: 29990,
      rating: 4.5,
      image1: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-660S2-02.jpg?v=1678449682&width=1000",
      image: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-660S2-01.jpg?v=1678449682&width=1000",
      category: "Open back",
      img3: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-660S2-17.jpg?v=1719229582&width=600",
      img4: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-660S2-16.jpg?v=1719229582&width=600",
      img5: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-660S2-14.jpg?v=1719229582&width=600",
      bname: "SENNHEISER",
      pname: "HD 660 S2",
      des: "The new, high-end Sennheiser HD 660S2 headphone outperforms the iconic HD 660S's excellent performance. Sennheiser is attempting to expand its product line with the HD 660S2, designed specifically for the most demanding listeners. An eye-catching new matte black design is featured on the Sennheiser HD 660S2. It has a classically exquisite appearance with some modern influences.",
      fr: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Sennheiser-HD-660S2-graph.png?v=1729057570",
      drivers: "38mm Dynamic Driver",
      connectors: "4.4mm (Balanced)\n6.35mm (Single-Ended)\n3.5mm (Single-Ended)",
      sensi: "",
      fres: "8 – 41,500 Hz",
      impedence: "300 Ω",
    },
    {
      id: 2,
      name: "Sennheiser - HD 800 S",
      price: 134990,
      rating: 4.2,
      image1: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-800-S-1160-1160-1.jpg?v=1593668952&width=1000",
      image: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-800-S-1160-1160-3.jpg?v=1593668952&width=1000",
      category: "Open back",
      img3: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-800-S-1160-1160-2.jpg?v=1593668952&width=600",
      img4: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Sennheiser-HD-800-S-1180-450-1.jpg?v=1593663988",
      img5: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-800-S-1160-1160-4.jpg?v=1657361721&width=600",
      bname: "SENNHEISER",
      pname: "HD 800 S",
      des: "The Sennheiser HD 800s sport an open, circum-aural dynamic stereo headphone design that makes you feel directly connected to the music. Music emerges from silence and sounds so profound that would travel into a soundstage of amazement. Soundstage refers to being able to sense the spatial surroundings of a recording.",
      fr: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD800s-Gallery.jpg?v=1657361721&width=600",
      drivers: "Dynamic Open",
      connectors: "6.35 mm/ 4.4 mm\nXLR-4 (optional)",
      sensi: "102 dB @ 1 kHz",
      fres: "4 – 51000 Hz (- 10 dB)",
      impedence: "300 Ohms",
    },
    {
      id: 3,
      name: "Sennheiser - HD 820",
      price: 164990,
      rating: 4.7,
      image1: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-820-1160-1160-1.jpg?v=1593677179&width=1000",
      image: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-820-1160-1160-3.jpg?v=1593677197&width=1000",
      category: "Open back",
      img3: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sennheiser-HD-820-1160-1160-2.jpg?v=1593677188&width=600",
      img4: "https://www.headphonezone.in/cdn/shop/products/sennheiser-hd-820-headphone-zone-4232625455167.jpg?v=1593677206&width=600",
      img5: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Sennheiser-HD-820-1180-450-12.jpg?v=1593674529",
      bname: "SENNHEISER",
      pname: "HD 820",
      des: "The Sennheiser HD 820s sport a closed, circum-aural dynamic stereo headphone design that makes you feel directly connected to the music. Music emerges from silence and sounds so profound that would travel into a soundstage of amazement.",
      fr: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Sennheiser-HD820-Banner.jpg?v=1657354280",
      drivers: "dynamic, closed",
      connectors: "6.35 mm / 4.4 mm\nXLR-4 (optional)",
      sensi: "103 dB at 1 kHz, 1V",
      fres: "12 - 43800 Hz (-3 dB)\n6 - 48000 Hz (-10 dB)",
      impedence: "300 Ohms",
    },
    {
      id: 4,
      name: "Focal - Stellia",
      price: 184999,
      rating: 4.8,
      image: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-Stellia-02.jpg?v=1726573473&width=1000",
      image1: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-Stellia-01.jpg?v=1726573460&width=1000",
      category: "Open back",
      img3: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-Stellia-03.jpg?v=1726573485&width=1000",
      img4: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-Stellia-09.jpg?v=1726573571&width=600",
      img5: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-Stellia-04.jpg?v=1726573497&width=600",
      bname: "FOCAL",
      pname: "Stellia",
      des: "Focal has continued to push its boundaries over the years. Its ultimate mission - Continuous innovation through a unique approach aimed at constantly exceeding the limits of acoustics and sound engineering is a testament to Hi-Fidelity Sound. Focal's brand-new Stellia Closed-back circum-aural headphone is the prime example of cutting-edge technology, innovation, and exceptional aesthetics.",
      fr: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-Stellia-08.jpg?v=1726573559&width=600",
      drivers: "1.6\" (40mm) Pure Beryllium \"M\" Shape Dome",
      connectors: "3.5mm (Single-Ended)6.35mm (Single-Ended)4-Pin XLR (Balanced)",
      sensi: "106dB SPL / 1mW @ 1kHz",
      fres: "5Hz – 40kHz",
      impedence: "35 Ohms",
    },
    {
      id: 5,
      name: "Focal - Azurys",
      price: 36999,
      rating: 4.7,
      image: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Focal-Azurys-02.jpg?v=1715161192&width=1000",
      image1: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Focal-Azurys-01.jpg?v=1715161192&width=1000",
      category: "Open back",
      img3: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Focal-Azurys-03.jpg?v=1720078055&width=600",
      img4: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Focal-Azurys-014.jpg?v=1720078055&width=600",
      img5: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Focal-Azurys-04.jpg?v=1720078055&width=600",
      bname: "FOCAL",
      pname: "Azurys",
      des: "Azurys are Focal’s new passive closed-back headphones, designed for enjoying music on the go or at home. The all-new Focal Azurys feature 40mm Aluminium/Magnesium 'M' dome drivers, designed and engineered in France. The Focal Azurys are the perfect blend of premium materials, innovative technology and a classic design that sets it apart in the world of high-quality audio.",
      fr: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-zone-Focal-Azurys-Graph-new.png?v=1738317981",
      drivers: "15/8'' (40mm) Aluminium/ Magnesium ‘M’-Shaped Dome",
      connectors: "3.5mm (Single-Ended)\n6.35mm (Single-Ended)",
      sensi: "100dB SPL / 1mW @ 1kHz",
      fres: "15 Hz - 22 kHz",
      impedence: "26 Ω",
    },
    {
      id: 6,
      name: "FiiO - FT1",
      price: 14999,
      rating: 4.7,
      image: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-FiiO-FT1-02.jpg?v=1724142980&width=1000",
      image1: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-FiiO-FT1-04.jpg?v=1724142980&width=1000",
      category: "Open back",
      img3: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-FiiO-FT1-015.jpg?v=1724142980&width=600",
      img4: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-FiiO-FT1-012.jpg?v=1724142981&width=600",
      img5: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-FiiO-FT1-07.jpg?v=1724142980&width=600",
      bname: "FIIO",
      pname: "FT1",
      des: "The FT1 is FiiO's latest offering in full-sized dynamic driver headphones, featuring a 60mm driver with a nano wood fibre composite diaphragm for powerful, low-distortion sound and exceptional clarity. Engineered for an ultra-wide frequency response of 10Hz to 40kHz, the FT1 showcases FiiO's dedication to innovation. Its premium construction includes an adaptive 3-axis headband for optimal comfort.",
      fr: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-zone-FiiO-FT1-graph.png?v=1724149256",
      drivers: "60mm Dynamic Driver",
      connectors: "Dual 3.5mm TRS",
      sensi: "98dB/mW@1kHz\n113dB/Vrms@1kHz",
      fres: "10Hz-40kHz",
      impedence: "32 Ω",
    },
    {
      id: 7,
      name: "Sennheiser - HD 620S",
      price: 29990,
      rating: 4.7,
      image: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Sennheiser-HD-620S-03.jpg?v=1717157896&width=1000",
      image1: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Sennheiser-HD-620S-01.jpg?v=1717157897&width=1000",
      category: "Open back",
      img3: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Sennheiser-HD-620S-02.jpg?v=1717157896&width=600",
      img4: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Sennheiser-HD-620S-015.jpg?v=1717158125&width=600",
      img5: "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-Sennheiser-HD-620S-06.jpg?v=1717158125&width=600",
      bname: "SENNHEISER",
      pname: "HD 620S",
      des: "The Sennheiser HD 620S closed-back headphones redefine the boundaries of private listening, offering audio enthusiasts a blend of distraction-free immersion with natural and airy sound. It features advanced 42 mm angled transducers and ultra-light 150-ohm aluminium voice coils for expansive and speaker-like imaging. The HD 620S features durable steel reinforcements yet remains lightweight for extended listening sessions. Combining the clarity of the HD 600 series with the spacious sound of the 500 series, these headphones offer a natural, immersive listening experience without fatigue.",
      fr: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Sennheiser-HD-620S-Graph.png?v=1719817732",
      drivers: "42 mm Dynamic with 38 mm Duofol diaphragm",
      connectors: "3.5mm (Single-Ended)\n6.35mm (Single-Ended)",
      sensi: "110 dB (1 kHz / 1 Vrms)",
      fres: "6 Hz - 30 kHz",
      impedence: "150 Ohm",
    },
    {
      id: 8,
      name: "Focal - Bathys",
      price: 69999,
      rating: 4.7,
      image: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-Bathys-New-4.jpg?v=1694759796&width=1000",
      image1: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-bathys-New-010.jpg?v=1694759796&width=1000",
      category: "Open back",
      img3: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-bathys-New-09.jpg?v=1694759796&width=600",
      img4: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-bathys-New-023.jpg?v=1694759796&width=600",
      img5: "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Focal-bathys-New-026.jpg?v=1694759796&width=600",
      bname: "FOCAL",
      pname: "Bathys",
      des: "Focal is proudly introducing their first-ever Active Noise Cancelling wireless headphones - the Bathys. Bathys is Focals' first high-end wireless headphone that promises to deliver exceptional performance wirelessly with Bluetooth support.",
      fr: "https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-Focal-Bathys-Graph.png?v=1720871648",
      drivers: "40mm Aluminium-Magnesium",
      connectors: "Bluetooth® / Jack 3.5mm / USB-C®",
      sensi: "",
      fres: "15Hz To 22kHz",
      impedence: "",
    },
  ];
  const clicky = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };




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
            <h2 className="text-white text-xl font-light">{pros.length} Products</h2>
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
             <div key={product.id} onClick={() => clicky(product)} className="bg-black/30 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-white/30 transition-shadow duration-300 group">
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