import React from 'react';
import { assets } from '../assets/assets';
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div
      className='flex flex-col items-start justify-center gap-4 px-6 md:px-16
      lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen text-white'
    >
      {/* Logo */}
      <img
        src={assets.marvelLogo}
        alt='Marvel Logo'
        className='max-h-11 lg:h-11 mt-20'
      />

      {/* Title */}
      <h1 className='text-5xl md:text-[70px] leading-tight font-semibold max-w-[700px] drop-shadow-lg'>
        Weapons
      </h1>

      {/* Genre & Info */}
      <div className='flex items-center gap-4 text-gray-30'>
        <span>Horror | Mystery </span>

        <div className='flex items-center gap-1'>
          <CalendarIcon className='w-4 h-4' /> 2025
        </div>

        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4 h-4' /> 2h 1m
        </div>
      </div>

      {/* Description */}
      <p className='max-w-md text-gray-1'>
      When all but one child from the same class are mysteriously vanish on the 
      same night at exactly the same time, a community is left questioning
      who or what is behind their disappearance.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate('/movies')}
        className='flex items-center gap-2 px-6 py-2 mt-2 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'
      >
        Explore Movies
        <ArrowRight className='w-5 h-5' />
      </button>
    </div>
  );
};

export default HeroSection;
