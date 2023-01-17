import React from "react";
import CoverImage from "./cover-image";
import Date from "./date";
import HomeAvatar from "./home-avatar";

export default function HomeHero({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className='w-full mt-12 mb-12'>
      <div className='top-grid'>
        <div className='slot-1'>
          <div className='slot-1-grid spotlight h-full'>
            <div className='first-slot'>
              <ul className='ul-grid h-full'>
                <li>
                  <div className='card flex flex-col p-6 border h-full justify-between'>
                    <div className='font-bold font-Nantes text-2xl flex mb-4'>
                      <div className='basis-[70%] flex-col'>
                        <div className='mb-2 text-lg'>
                          <Date dateString={date} />
                        </div>
                        {title}
                      </div>
                      <div className='basis-[30%] flex-col'>
                        <CoverImage
                          title={title}
                          responsiveImage={coverImage.responsiveImage}
                          slug={slug}
                        />{" "}
                      </div>
                    </div>
                    <HomeAvatar name={author.name} picture={author.picture} />
                  </div>
                </li>
                <li>
                  <div className='card flex flex-col p-6 border h-full justify-between'>
                    <div className='font-bold font-Nantes text-2xl flex mb-4'>
                      <div className='basis-[70%] flex-col'>
                        <div className='mb-2 text-lg'>
                          <Date dateString={date} />
                        </div>
                        {title}
                      </div>
                      <div className='basis-[30%] flex-col'>
                        <CoverImage
                          title={title}
                          responsiveImage={coverImage.responsiveImage}
                          slug={slug}
                        />{" "}
                      </div>
                    </div>
                    <HomeAvatar name={author.name} picture={author.picture} />
                  </div>
                </li>
              </ul>
            </div>
            <div className='second-slot border '>
              <ul>
                <li>
                  <div className='wrapper h-full'>
                    <div className='h-full'>
                      <CoverImage
                        title={title}
                        responsiveImage={coverImage.responsiveImage}
                        slug={slug}
                      />
                    </div>
                    <div className='card-text p-6 flex flex-col justify-between h-full'>
                      <div className='font-bold font-Nantes text-2xl mb-4 flex-col'>
                        <div className='mb-2 text-lg'>
                          <Date dateString={date} />
                        </div>
                        <div className='text-3xl mb-2'>{title}</div>
                        <div className=' text-lg'>{excerpt}</div>
                      </div>
                      <div className='no-underline flex mt-3'>
                        <HomeAvatar
                          name={author.name}
                          picture={author.picture}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='slot-2 border'>
          <div className='card'>
            <h2 className='bg-yellow-200 text-center p-2'>Trending Articles</h2>
            <ul className=''>
              <li>
                <div className=''>
                  <div className='card-text p-6'>
                    <div className='font-bold font-Nantes text-2xl mb-5'>
                      {title}
                      <br />
                      <span className='text-sm'>{author.name}</span>
                    </div>
                    <div className='font-bold font-Nantes text-2xl mb-5'>
                      {title}
                      <br />
                      <span className='text-sm'>{author.name}</span>
                    </div>
                    <div className='font-bold font-Nantes text-2xl mb-5'>
                      {title}
                      <br />
                      <span className='text-sm'>{author.name}</span>
                    </div>
                    <div className='font-bold font-Nantes text-2xl'>
                      {title}
                      <br />
                      <span className='text-sm'>{author.name}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}