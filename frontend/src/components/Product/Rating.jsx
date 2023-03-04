import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Rating = ({ rating, setRating }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span
        key={index}
        className="text-base cursor-pointer text-primary"
        onClick={() => setRating(index + 1)}
      >
        {rating > number ? (
          <BsStarFill />
        ) : rating > index ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-2">{tempStars}</div>
    </div>
  );
};

export default Rating;
