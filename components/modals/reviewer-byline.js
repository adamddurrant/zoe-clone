import React from "react";
import styles from "./byline-modal.module.css";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineLink,
} from "react-icons/ai";
import Link from "next/link";

export default function ReviewerByline({
  linkedin,
  twitter,
  personal,
  bio,
  picture,
  name,
}) {
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className={styles.reviewerposition}>
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className='flex'>
              <div className='flex-col'>
                <div className='w-12 h-12 relative mr-4'>
                  <img
                    src={picture.url}
                    layout='fill'
                    className='rounded-full'
                    alt={name}
                  />
                </div>
              </div>
              <div className='flex-col mb-4'>
                <div className='text-lg font-medium block no-underline'>
                  {name}
                </div>
                <div className='socials flex items-center'>
                  <Link href={twitter} className='pr-2'>
                    <AiOutlineTwitter className='w-5 h-auto' />
                  </Link>
                  <Link href={linkedin} className='pr-2'>
                    <AiFillLinkedin className='w-5 h-auto' />
                  </Link>
                  <Link href={personal}>
                    <AiOutlineLink className='w-5 h-auto' />
                  </Link>
                </div>
              </div>
            </div>
            <div id='bio'>{bio}</div>
            <hr className='border-accent-2 mt-3 mb-3' />
            <p>
              Learn about our{" "}
              <a className='text-[#445dc3]' href='/editorial-process'>
                editorial process
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
