import React from 'react';
import MerchTitles from '../components/merch page/MerchTitles';
import AlbumnMerchInfo from '../components/merch page/AlbumnMerchInfo';
import '../styles/MerchPage.css';

function MerchPage() {
  return (
    <div className="music-merch-page">
      <div className="music-merch-background" />
      <MerchTitles />
      <AlbumnMerchInfo />
    </div>
  );
}

export default MerchPage;
