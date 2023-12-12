const Button = ({ label, iconURL, bgColor, borderColor, textColor }) => {
  return (
    <button
      className={`flex justify-center 
      items-center gap-2 px-7 py-4 border 
      font-monstserrat text-lg leading-none
      ${
        bgColor
          ? `${bgColor} ${borderColor} ${textColor} 
            hover:bg-coral-red hover:text-white hover:border-none`
          : `bg-coral-red text-white border-coral-red`
      } rounded-full`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrow" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
