import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurCicle from './BlurCicle';
import MovieCard from './MovieCard';
import { useAppContext } from '../context/AppContext';

const FeaturedSection = () => {

  const navigate = useNavigate();
  const {shows} = useAppContext();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      {/* Header */}
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <BlurCicle top="0" right="-80px" />

        <p className="text-gray-300 font-medium text-lg">Now Showing</p>

        <button
          onClick={() => navigate('/movies')}
          className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer"
        >
          View All
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Movies */}
      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8">
        {shows.slice(0, 4).map((show) => (
          <MovieCard key={show._id} movie={show} />
        ))}
      </div>

      {/* Footer Button */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate('/movies');
            scrollTo(0, 0);
          }}
          className="flex items-center px-6 py-2 mt-2 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default FeaturedSection;
