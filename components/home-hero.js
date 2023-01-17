import React from "react";
import Avatar from "./avatar";
import CoverImage from "./cover-image";

export default function HomeHero({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  console.log(title);
  return (
    <section className='w-full mt-12 mb-12'>
      <div className='top-grid'>
        <div className='slot-1'>
          <div className='slot-1-grid spotlight'>
            <div className='first-slot'>
              <ul className='ul-grid h-full'>
                <li>
                  <div className='card flex flex-col p-6 border h-full justify-between'>
                    <a href={`/posts/${slug}`}>
                      <div className='font-bold font-Nantes text-2xl'>
                        {title}
                      </div>
                    </a>
                    <Avatar name={author.name} picture={author.picture} />
                  </div>
                </li>
                <li>
                  <div className='card flex flex-col p-6 border h-full justify-between'>
                    <div className='font-bold font-Nantes text-2xl'>
                      {title}
                    </div>

                    <Avatar name={author.name} picture={author.picture} />
                  </div>
                </li>
              </ul>
            </div>
            <div className='second-slot border '>
              <ul className=''>
                <li>
                  <div className=''>
                    <CoverImage
                      title={title}
                      responsiveImage={coverImage.responsiveImage}
                      slug={slug}
                    />
                    <div className='card-text p-6'>
                      <div className='font-bold font-Nantes text-2xl mb-4'>
                        {title}
                      </div>
                      <Avatar name={author.name} picture={author.picture} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='slot-2'>test</div>
      </div>
    </section>
  );
}
