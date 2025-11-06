import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import Link from 'next/link'

const BlogCard = ({key, cover, title, desc, path }) => {
  return (
    <div key={key} className='bg-[#1A1A1A] p-5 rounded-2xl space-y-4'>
      <div>
        <Image alt={title} src={cover} width={500} height={500} className='w-full h-full object-cover rounded-lg' />
      </div>

      <div className='p-3 space-y-4'>
        <h4>{title}</h4>

        <p>{desc}</p>

        <div className='flex mt-4'>
            <Link
                  href={path}
                  className="flex items-center gap-2 text-[#F9EFEC] font-normal uppercase text-xl w-fit font-(family-name:--font-roboto-mono)"
                >
                  <span className="border rounded-full p-2 bg-dark-main/50 text-[#E7BEB1]">
                    <GoArrowUpRight />
                  </span>{" "}
                  Read full blog
                </Link>
        </div>

      </div>
    </div>
  )
}

export default BlogCard
