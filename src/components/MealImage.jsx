const MealImage = ({ src, alt }) => {
  return (
    <div className="lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
      <img
        className="w-3/4 max-h-80 object-cover rounded-lg shadow-md"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default MealImage;
