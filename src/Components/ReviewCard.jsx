const ReviewCard = ({imgURL, customerName, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col shadow flex-1 sm:w-[350] sm:min-w-[350] rounded-[20px] shadow-neutral-300 p-10 m-5">
        <p className="max-w-sm text-center info-text">"{feedback}"</p>
        <div className="flex-row gap-3 flex flex-1 mt-8">
            <img src={imgURL} alt="customer" className="rounded-full object-cover w-[30px] h-[30px]"/>
            <h3 className="sm:text-md text-xl text-center font-bold">{customerName}</h3>
        </div>
        
    </div>
  )
}

export default ReviewCard