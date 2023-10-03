import React from 'react';
import img from '../../assets/image/ethiotech.jpeg';

export default function Header() {
  return (
    <div className="md:flex hidden justify-between px-4 py-2">
      <div className="w-40">
        <img src={img} alt="logo" />
      </div>
      <div>
        <span>something</span>
      </div>
    </div>
  );
}
