import React from 'react';
import "./Footer.scss";

export default function Footer({ data }) {
  const footerDetails = data?.allBoutiques[0];

  if (!footerDetails) {
    return null;
  }

  return (
    <div className="footer">
            <div className="footer-content">
                <div className="col left">
                    <div className="title">About</div>
                    <div className="text">
                        Seasoned cellars is a fine wine supplier located in Sweden. 
                        Enjoy the most prestigious wines the word has to offer.
                    </div>
                </div>
                <div className="col right">
                    <a href="/" className="text">Terms & Conditions</a>
                    <a href="/" className="text">Contact Us</a>
                </div>
            </div>
        </div>
  );
}