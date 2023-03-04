import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ rating, setRating }) => {
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
      <div className="flex items-center space-x-2">
        {tempStars}{" "}
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
          {rating}
        </span>
      </div>
    </div>
  );
};

export default Stars;
