import React from "react";
import styles from "./Modal.module.css";
import Avatar from "./avatar";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import SectionSeparator from "./section-separator";

export default function Modal({
  setIsOpen,
  linkedin,
  twitter,
  bio,
  picture,
  name,
}) {
  console.log(picture);
  return (
    <>
      <div onClick={() => setIsOpen(false)} />
      <div className={styles.position}>
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
                <div className='text-lg font-bold block no-underline'>
                  {name}
                </div>
                <div className='socials flex items-center'>
                  <Link href={twitter} className='pr-2'>
                    <AiOutlineTwitter className='w-5 h-auto' />
                  </Link>
                  <Link href={linkedin}>
                    <AiFillLinkedin className='w-5 h-auto' />
                  </Link>
                </div>
              </div>
            </div>
            <div id='bio'>{bio}</div>
            <hr className='border-accent-2 mt-3 mb-3' />
            <p>
              Learn about our{" "}
              <a className='text-[#445dc3]' href='#'>
                editorial process
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
