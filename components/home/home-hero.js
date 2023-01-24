import React from "react";
import CoverImage from "../post/cover-image";
import Date from "../post/date";
import HomeAvatar from "./home-avatar";
import Link from "next/link";

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
      <div className='top-grid max-sm:grid-cols-1'>
        <div className='slot-1'>
          <div className='slot-1-grid spotlight h-full max-sm:flex max-sm:flex-col-reverse'>
            <div className='first-slot'>
              <ul className='ul-grid h-full'>
                <li>
                  <Link href={`/posts/${slug}`}>
                    <div className='card flex flex-col p-6 border h-full justify-between'>
                      <div className='text-xl flex mb-4'>
                        <div className='basis-[70%] flex-col pr-3'>
                          <div className='mb-2 text-lg'>
                            <Date dateString={date} />
                          </div>
                          <span className='font-Nantes'>{title}</span>
                        </div>
                        <div className='basis-[30%] flex-col'>
                          <div className='h-[80px] w-[80px] mt-[10px]'>
                            <CoverImage
                              title={title}
                              responsiveImage={coverImage.responsiveImage}
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <HomeAvatar name={author.name} picture={author.picture} />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href={`/posts/${slug}`}>
                    <div className='card flex flex-col p-6 border h-full justify-between'>
                      <div className='text-xl flex mb-4'>
                        <div className='basis-[70%] flex-col pr-3'>
                          <div className='mb-2 text-lg'>
                            <Date dateString={date} />
                          </div>
                          <span className='font-Nantes'>{title}</span>
                        </div>
                        <div className='basis-[30%] flex-col'>
                          <div className='h-[80px] w-[80px] mt-[10px]'>
                            <CoverImage
                              title={title}
                              responsiveImage={coverImage.responsiveImage}
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <HomeAvatar name={author.name} picture={author.picture} />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='second-slot border'>
              <ul>
                <li>
                  <Link href={`/posts/${slug}`}>
                    <div className='wrapper h-full'>
                      <div className='h-[300px] max-sm:h-[200px]'>
                        <CoverImage
                          title={title}
                          responsiveImage={coverImage.responsiveImage}
                        />{" "}
                      </div>

                      <div className='card-text p-6 flex flex-col justify-between h-auto'>
                        <div className='text-xl mb-4 flex-col'>
                          <div className='mb-2 text-lg'>
                            <Date dateString={date} />
                          </div>
                          <div className='text-2xl mb-2 font-Nantes'>
                            {title}
                          </div>
                          <div className='text-lg font-Lota font-light max-sm:text-sm'>
                            {excerpt}...
                          </div>
                        </div>
                        <div className='no-underline flex mt-3'>
                          <HomeAvatar
                            name={author.name}
                            picture={author.picture}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='slot-2 border'>
          <div className='card'>
            <h2 className='bg-[#fac928] text-center p-2'>Trending</h2>
            <ul className=''>
              <li>
                <div className=''>
                  <div className='card-text p-6'>
                    <Link href={`/posts/${slug}`}>
                      <div className='font-bold font-Nantes text-xl mb-8'>
                        {title}
                        <br />
                        <span className='text-sm font-Lota font-light max-sm:text-sm'>
                          {author.name}
                        </span>
                      </div>
                    </Link>
                    <Link href={`/posts/${slug}`}>
                      <div className='font-bold font-Nantes text-xl mb-8'>
                        {title}
                        <br />
                        <span className='text-sm font-Lota font-light max-sm:text-sm'>
                          {author.name}
                        </span>
                      </div>
                    </Link>
                    <Link href={`/posts/${slug}`}>
                      <div className='font-bold font-Nantes text-xl mb-8'>
                        {title}
                        <br />
                        <span className='text-sm font-Lota font-light max-sm:text-sm'>
                          {author.name}
                        </span>
                      </div>
                    </Link>
                    <Link href={`/posts/${slug}`}>
                      <div className='font-bold font-Nantes text-xl'>
                        {title}
                        <br />
                        <span className='text-sm font-Lota font-light max-sm:text-sm'>
                          {author.name}
                        </span>
                      </div>
                    </Link>
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
