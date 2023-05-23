import React from 'react';
import './CustomButton.scss';
import { Button } from '@mui/material';

export default function CustomButton(props) {
  const { title, onClick, className, href, disabled } = props;

  return (
    <Button className={`custom-btn ${className}`} onClick={onClick} href={href} disabled={disabled}>{title}</Button>
  );
}
