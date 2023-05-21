import React from 'react';
import "./Footer.scss";

export default function Footer({ data }) {
  const headerDetails = data?.allBoutiques[0];
  console.log('data', data);

  if (!headerDetails) {
    // Handle the case when headerDetails is undefined or null
    return null; // Or you can display a loading state or an error message
  }

  return (
    <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Seasoned cellars is a fine wine supplier located in Sweden. 
                        Enjoy the most prestigious wines the word has to offer.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <div className="text">Phone: 000000000</div>
                    </div>
                    <div className="c-item">
                        <div className="text">Email: 000000000</div>
                    </div>
                </div>
                <div className="col">
                    <a href="/Terms" className="text">Terms & Conditions</a>
                    <a href="/Contact" className="text">Contact Us</a>
                </div>
            </div>
        </div>
  );
}