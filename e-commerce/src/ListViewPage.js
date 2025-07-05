// ListViewPage.js
import React from 'react';
import UnifiedProductView from './UnifiedProductView';

const ListViewPage = () => {
  return (
    <div>
      <h2 style={{ padding: '20px', fontSize: '24px' }}>All Products - List View</h2>
      <UnifiedProductView viewMode="list" />
    </div>
  );
};

export default ListViewPage;
