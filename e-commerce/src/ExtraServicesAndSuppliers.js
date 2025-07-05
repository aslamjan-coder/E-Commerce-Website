import React from 'react';
import './ExtraServicesAndSuppliers.css';

// 🏳️‍🌈 Flag Imports
import AE from './AE@2x.png';
import AU from './icon.png'; // replace with correct Australia flag
import US from './US@2x.png';
import RU from './RU@2x.png';
import IT from './IT@2x.png';
import DE from './DE@2x.png';
import ZE from './AE@2x.png';
import FR from './FR@2x.png';
import CN from './CN@2x.png';
import GB from './GB@2x.png';

const extraServices = [
  {
    title: 'Source from Industry Hubs',
    icon: '🔍',
    image: '/bb1.png',
  },
  {
    title: 'Customize Your Products',
    icon: '🎨',
    image: '/bb2.png',
  },
  {
    title: 'Fast, reliable shipping by ocean or air',
    icon: '✈️',
    image: '/bb3.png',
  },
  {
    title: 'Product monitoring and inspection',
    icon: '🛡️',
    image: '/bb4.png',
  },
];

const suppliers = [
  { name: 'Arabic Emirates', domain: 'shopname.ae', flag: AE },
  { name: 'Australia', domain: 'shopname.au', flag: AU },
  { name: 'United States', domain: 'shopname.ae', flag: US },
  { name: 'Russia', domain: 'shopname.ru', flag: RU },
  { name: 'Italy', domain: 'shopname.it', flag: IT },
  { name: 'Denmark', domain: 'denmark.com.dk', flag: DE },
  { name: 'Arabic Emirates', domain: 'shopname.ae', flag: ZE },
  { name: 'France', domain: 'shopname.com.fr', flag: FR },
  { name: 'China', domain: 'shopname.ae', flag: CN },
  { name: 'Great Britain', domain: 'shopname.co.uk', flag: GB },
];

const ExtraServicesAndSuppliers = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Our extra services</h2>
      <div className="services-grid">
        {extraServices.map((service, idx) => (
          <div key={idx} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="icon-overlay">{service.icon}</div>
            <p className="service-text">{service.title}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Suppliers by region</h2>
      <div className="suppliers-grid">
        {suppliers.map((supplier, idx) => (
          <div key={idx} className="supplier-item">
            <img src={supplier.flag} alt={supplier.name} className="supplier-flag-img" />
            <span className="supplier-name">{supplier.name}</span>
            <a
              href={`https://${supplier.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="supplier-link"
            >
              {supplier.domain}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraServicesAndSuppliers;
