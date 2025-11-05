import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProfileCard = ({name, work, key, picture, fb, twitter, linkedin}) => {

    const socials = [
      {
        title: "facebook",
        path: fb,
        icon: "/icons/facebook.svg",
      },
      {
        title: "twitter",
        path: twitter,
        icon: "/icons/twitter-2.svg",
      },
      {
        title: "linkedin",
        path: linkedin,
        icon: "/icons/linkedin-2.svg",
      },
    ]

  return (
    <div key={key} className="bg-[linear-gradient(to_bottom,#262626_0%,#262626_50%,#1A1A1A_51%,#1A1A1A_100%)] p-5 2xl:p-9 rounded-lg space-y-10">

      <div className="flex flex-col items-center text-center space-y-2">
        <h4>{name}</h4>
        <p>{work}</p>

      </div>

      {picture && <div><Image src={picture} width={500} height={500} alt={name} className="aspect-3/2 w-full object-cover rounded-2xl" /></div>}

      <div className="flex justify-center gap-4">
        {socials.map((social, index) => (
          <Link key={index} className="w-fit rounded-full" target="blank" href={social.path}>
            <Image src={social.icon} width={50} height={50} alt={social.title} />
          </Link>
        ))}

        
      </div>

      
    </div>
  );
};

export default ProfileCard;
