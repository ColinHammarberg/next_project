import Image from 'next/image';
import React from 'react';
import CustomButton from './CustomButton';

export default function BoutiqueContainer({ data }) {
  const headerDetails = data?.allBoutiques[0];

  if (!headerDetails) {
    // Handle the case when headerDetails is undefined or null
    return null; // Or you can display a loading state or an error message
  }

  return (
    <div className="content-container">
      <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SEASONED CELLARS WINE</h1>
                    <p>
                      Seasoned cellars is a fine wine supplier located in Sweden. 
                      Enjoy the most prestigious wines the word has to offer.
                    </p>
                    <div className="ctas">
                      <CustomButton title="Read More" onClick={""} />
                      <CustomButton title="Shop Now" onClick={""} />
                    </div>
                </div>
                <Image className="banner-img" />
            </div>
        </div>
    </div>
  );
}
