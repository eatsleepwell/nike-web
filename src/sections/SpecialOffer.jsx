import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";

const SpecialOffer = () => {
  return (
    <section
      className="flex justify-wrap items-center 
      max-xl:flex-col-reverse gap-10 max-container"
    >
      <article className="flex-1">
        <img
          src={offer}
          alt="products"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </article>
      <article className="flex flex-1 flex-col">
        <h2 className="text-4xl font-semibold">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines our experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-5 info-text">
          Navigate a realm of possiblities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-10 flex gap-10">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            bgColor="bg-white"
            borderColor="border-slate-gray"
            texColor="text-slate-gray"
          />
        </div>
      </article>
    </section>
  );
};

export default SpecialOffer;
