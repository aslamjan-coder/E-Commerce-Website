// GridViewPage.js
import React from 'react';
import UnifiedProductView from './UnifiedProductView';

const GridViewPage = () => {
  return (
    <div>
      <h2 style={{ padding: '20px', fontSize: '24px' }}>All Products - Grid View</h2>
      <UnifiedProductView viewMode="grid" />
    </div>
  );
};

export default GridViewPage;
