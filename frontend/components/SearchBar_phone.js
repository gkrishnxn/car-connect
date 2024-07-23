import React, { useState } from 'react';

const brandsData = {
  "Apple": {
    models: ["iPhone 13", "iPhone 12", "iPhone 11", "iPhone SE", "iPhone XR", "iPhone XS", "iPhone X", "iPhone 8", "iPhone 7", "iPhone 6S", "iPhone SE 2nd Gen", "iPhone 6", "iPhone 5S", "iPhone 5C", "iPhone 5"]
  },
  "Samsung": {
    models: ["Galaxy S21", "Galaxy S20", "Galaxy Note 20", "Galaxy S21 Ultra", "Galaxy S20 Ultra", "Galaxy Note 20 Ultra", "Galaxy Z Fold 3", "Galaxy Z Flip 3", "Galaxy A52", "Galaxy A72", "Galaxy A32", "Galaxy A12", "Galaxy M32", "Galaxy M12", "Galaxy M02"]
  },
  "OnePlus": {
    models: ["9 Pro", "9", "8T", "8 Pro", "8", "7T Pro", "7T", "7 Pro", "7", "6T", "6", "5T", "5", "Nord 2", "Nord"]
  },
  "Google": {
    models: ["Pixel 6 Pro", "Pixel 6", "Pixel 5a", "Pixel 5", "Pixel 4a 5G", "Pixel 4a", "Pixel 4 XL", "Pixel 4", "Pixel 3a XL", "Pixel 3a", "Pixel 3 XL", "Pixel 3", "Pixel 2 XL", "Pixel 2", "Pixel"]
  },
  "Huawei": {
    models: ["Mate 40 Pro", "P40 Pro", "Mate 30 Pro", "P30 Pro", "Mate X2", "Mate 20 Pro", "P20 Pro", "Mate 10 Pro", "P10 Plus", "Mate RS", "Nova 8 Pro", "Nova 7 Pro", "Nova 6", "Nova 5 Pro", "Nova 4"]
  },
  "Xiaomi": {
    models: ["Mi 11 Ultra", "Mi 11", "Redmi Note 10 Pro", "Mi 11 Lite", "Mi 10T Pro", "Redmi Note 9 Pro", "Mi 10 Lite", "Redmi Note 8 Pro", "Mi 9T Pro", "Redmi Note 7 Pro", "Mi 9", "Redmi Note 6 Pro", "Mi 8", "Redmi Note 5 Pro", "Mi Mix 2S"]
  },
  "Sony": {
    models: ["Xperia 1 III", "Xperia 5 III", "Xperia 10 III", "Xperia 1 II", "Xperia 5 II", "Xperia 10 II", "Xperia 1", "Xperia 5", "Xperia 10", "Xperia XZ3", "Xperia XZ2 Premium", "Xperia XZ2", "Xperia XZ1 Compact", "Xperia XZ1", "Xperia XZ Premium"]
  },
  "LG": {
    models: ["Velvet", "Wing", "G8 ThinQ", "V60 ThinQ", "G7 ThinQ", "V40 ThinQ", "G6", "V30", "G5", "V20", "G4", "V10", "G Flex 2", "G3", "Optimus G"]
  },
  "Motorola": {
    models: ["Edge+", "Moto G Power", "Razr", "Moto G Stylus", "Moto G Fast", "Moto G9 Power", "Moto G8 Plus", "Moto E7 Plus", "Moto G Pro", "Moto G8 Power", "Moto G8", "Moto G7 Power", "Moto G7", "Moto G6 Plus", "Moto G6"]
  },
  "OPPO": {
    models: ["Find X3 Pro", "Reno 6 Pro", "A94", "Find X2 Pro", "Reno 5 Pro", "A74", "Find X2", "Reno 4 Pro", "A54", "Reno 4", "A15", "A9", "A5", "Reno 3 Pro", "Reno 2"]
  },
  "Vivo": {
    models: ["X60 Pro+", "iQOO 7", "Y73", "X50 Pro", "iQOO 5", "V20 Pro", "X50", "iQOO 3", "V19", "iQOO Neo3", "S1 Pro", "V17 Pro", "Y30", "Z1x", "V15"]
  },
  "Realme": {
    models: ["GT 2 Pro", "X7 Max 5G", "8 Pro", "X7 Pro", "7 Pro", "6 Pro", "Narzo 30 Pro", "Q3 Pro", "X3 SuperZoom", "6i", "Narzo 20 Pro", "C15", "7i", "Narzo 10", "X50 Pro 5G"]
  },
  "Asus": {
    models: ["ROG Phone 5", "Zenfone 8", "Zenfone 7 Pro", "ROG Phone 3", "Zenfone 6", "ROG Phone 2", "Zenfone 5Z", "Zenfone 4 Pro", "Zenfone AR", "Zenfone 3 Deluxe", "Zenfone 2", "Zenfone Selfie", "Zenfone Zoom", "Zenfone Max", "Zenfone Live"]
  },
  "Lenovo": {
    models: ["Legion Phone Duel 2", "K13 Note", "K12", "Legion Phone Duel", "K10 Plus", "Z6 Pro", "K9", "Z5 Pro", "Z5s", "S5 Pro", "K8 Note", "Z5", "K8 Plus", "K8", "Z2 Plus"]
  },
  "Nokia": {
    models: ["G50", "X20", "5.4", "8.3 5G", "2.4", "3.4", "5.3", "1.3", "9 PureView", "3.2", "4.2", "7.2", "1 Plus", "8.1", "3.1 Plus"]
  },
  "BlackBerry": {
    models: ["KEY2", "KEYone", "Motion", "Aurora", "Priv", "Leap", "Classic", "Passport", "Z3", "Z30", "Q10", "Z10", "Q5", "Curve 9320", "Bold 9900"]
  },
};
const UsedSmartphoneSearchBar = () => {
  const [Brand, setBrand] = useState('');
  const [Model, setModel] = useState('');
  const [Storage, setStorage] = useState('');
  const [Condition, setCondition] = useState('');
  const [Location, setLocation] = useState('');
  const [RAM, setRAM] = useState('');

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setModel('');
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log({ Brand, Model, Storage, Condition, Location, RAM });
  };

  const models = Brand ? brandsData[Brand].models : [];

  const storageOptions = ["2GB","4GB","8GB","16GB","32GB","64GB", "128GB", "256GB", "512GB"];

  const conditions = ["Bad", "Fair", "Good","Flawless"];

  const ramOptions = ["4GB", "6GB", "8GB", "12GB", "16GB"];

  return (
    <div className='ms-8 px-10 mt-12 padding-x padding-y max-width flex items-center justify-center scale-110'>
      <div className='home__text-container'>
        <select 
          value={Brand} 
          onChange={handleBrandChange} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Brand</option>
          {Object.keys(brandsData).map((brand) => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <select 
          value={Model} 
          onChange={(e) => setModel(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Model</option>
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
        <select 
          value={Storage} 
          onChange={(e) => setStorage(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Storage</option>
          {storageOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select 
          value={RAM} 
          onChange={(e) => setRAM(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select RAM</option>
          {ramOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <select 
          value={Condition} 
          onChange={(e) => setCondition(e.target.value)} 
          className="p-2 border rounded mb-4"
        >
          <option value="">Select Condition</option>
          {conditions.map((condition) => (
            <option key={condition} value={condition}>{condition}</option>
          ))}
        </select>
        <input 
          type="text" 
          placeholder="Location" 
          value={Location} 
          onChange={(e) => setLocation(e.target.value)} 
          className="p-2 border rounded mb-4" 
        />
        <button 
          onClick={handleSearch} 
          className="bg-red-400 hover:bg-red-500 text-white px-10 py-2 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default UsedSmartphoneSearchBar;
