import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl font-bold leading-[68px] lg:max-w-md font-palanquin">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="flex items-center justify-between sm:border sm:border-slate-gray rounded-full p-2 lg:max-w-[45%] w-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="flex-1 border-transparent 
          borded-none outline-none ml-5 text-slate-gray"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
