/* eslint-disable no-unused-vars */
import React from 'react';
import Categories from '../components/categories/Categories';
import SimpleSlider from '../components/slider/Slider';

export default function HomePage() {
  return (
    <div className='custom-container'>
      <div className='flex flex-row justify-between'>
        <Categories />
        <SimpleSlider />
      </div>
    </div>
  );
}
