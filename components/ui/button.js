import React from "react";
import Link from "next/link";

const Button = ({ value, type, href, onClick, isButton, className,  }) => {
  const baseClasses = `text-lg flex items-center justify-center gap-3 uppercase w-fit py-3 px-5 md:py-3 md:px-6 text-center cursor-pointer rounded-lg m-auto ${className}`;
  const outlinedClasses = `bg-dark-main text-[#F3DFD8] hover:bg-opacity-10 ${className}`;
  const solidClasses = `text-dark-main bg-orange-main hover:bg-opacity-80 `;

  const combinedClasses = `${baseClasses} ${type === "outlined" ? outlinedClasses : solidClasses}`;

  if (isButton) {
    return (
      <button onClick={onClick} className={combinedClasses}>
        {value}
      </button>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {value}
    </Link>
  );
};

export default Button;