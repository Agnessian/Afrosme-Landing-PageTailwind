import { reviews } from "../Constants"
import ReviewCard from "../Components/ReviewCard.jsx"
const Reviews = () => {
  return (
    <section>
      <div>
        <h1 className="text-center text-black text-3xl font-bold">Our customers</h1>
        <div className="flex flex-1 justify-evenly sm:m-0 lg:ml-30 lg:mr-30 lg:p-10">
        {reviews.map((review, index) => (
          <ReviewCard
          key={review.customerName}
          imgURL = {review.imgURL}
          customerName = {review.customerName}
          feedback={review.feedback}
          />
        ))}
      </div>
      </div>
    </section>
  )
}

export default Reviews