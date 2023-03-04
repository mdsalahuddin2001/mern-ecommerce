import { useEffect, useState } from "react";
import moment from "moment";
import { useReviewProductMutation } from "../../features/products/productsApi";
import ButtonLoader from "../../components/ui/loaders/ButtonLoader";
import Rating from "./Rating";

const Reviews = ({ productId, reviews }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewProduct, { isLoading, isSuccess }] = useReviewProductMutation();
  // handle review
  const handleReview = () => {
    if (rating > 0 && review) {
      reviewProduct({ productId, review: { rating, comment: review } });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setRating(0);
      setReview("");
    }
  }, [isSuccess]);
  return (
    <div>
      <Rating rating={rating} setRating={setRating} />
      <div className="mt-6">
        <label htmlFor="review" className="inline-block mb-2 font-semibold">
          Review
        </label>
        <textarea
          className="w-full  border border-gray-300 max-w-[400px] h-20 block rounded placeholder:text-sm font-light focus:outline-0 focus:ring-0 focus:border-gray-300"
          placeholder="Write your review."
          name="review"
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <button
          className="px-8 py-3 mt-4 bg-gray-800 btn hover:bg-black disabled:opacity-50 disabled:pointer-events-none"
          disabled={!rating > 0 || !review}
          onClick={handleReview}
        >
          {isLoading && <ButtonLoader />} submit
        </button>
      </div>
      <div className="mt-6 space-y-4">
        {reviews.map((review) => {
          return (
            <div className="flex items-start p-4 space-x-4 bg-white border rounded shadow-cardShadow">
              <div className="flex items-center justify-center w-8 h-8 text-center text-white rounded-full bg-primaryHover">
                MS
              </div>
              <div>
                <span className="block mb-1 font-medium">
                  {review.user.name}
                </span>
                <div className="mb-4">
                  <Rating rating={review.rating} />
                </div>
                <p className="mb-2">{review.comment}</p>
                <p>{moment(review.updatedAt).format("MMMM Do YYYY, h:mm A")}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Reviews;
