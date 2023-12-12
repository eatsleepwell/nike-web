import { star } from "../assets/icons";

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <article className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt="customer review"
        height={120}
        width={120}
        className="item-center rounded-full object-cover"
      />
      <p className="info-text text-center mt-6 m-auto max-w-sm">{feedback}</p>
      <div className="flex gap-2 items-center justify-center mt-3">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="text-3xl text-center font-bold font-palanquin mt-1">
        {customerName}
      </h3>
    </article>
  );
};

export default CustomerReviewCard;
