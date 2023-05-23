import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.scss';
import { Button } from '@mui/material';

export default function CustomButton(props) {
  const { title, onClick, className, href, disabled } = props;

  return (
    <Button className={`custom-btn ${className}`} onClick={onClick} href={href} disabled={disabled}>
      {title}
    </Button>
  );
}

CustomButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
};
