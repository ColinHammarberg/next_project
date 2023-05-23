import React from 'react';
import PropTypes from 'prop-types';

export default function BoutiqueContainer({ data }) {
  const headerDetails = data?.allBoutiques[0];

  if (!headerDetails) {
    return null;
  }

  return (
    <div className="content-container">
      <div className="hero-banner">
        <div className="content">
          <div className="text-content">
            <h1>SEASONED CELLARS WINE</h1>
            <p>
              Seasoned cellars is a fine wine supplier located in Sweden. Enjoy the most prestigious
              wines the word has to offer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

BoutiqueContainer.propTypes = {
  data: PropTypes.instanceOf(Object),
};
