import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import styled from "styled-components";
import { FiHeadphones } from "react-icons/fi";

export default function Header() {
  const NavbarNoPadding = styled(Navbar)`
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
  `;

  return (
    <NavbarNoPadding
      fluid={true}
      rounded={true}
      className='mx-auto py-8 max-w-screen-2xl '
    >
      <Navbar.Brand href='/'>
        <img
          src='/assets/logos/desktop.svg'
          className='mr-3 h-6 sm:h-9'
          alt='ZOE Logo'
          width={90}
          height={32}
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Articles
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='items-center' id='dropdown'>
        <Navbar.Link href='#'>
          <div className='flex md:order-2'>
            <Dropdown
              id='dropdown'
              inline
              label='Gut Health'
              className='w-[50%]'
            >
              <Dropdown.Item>Microbiome</Dropdown.Item>
              <Dropdown.Item>Probiotics</Dropdown.Item>
              <Dropdown.Item>Gut Conditions</Dropdown.Item>
              <Dropdown.Item>Gut-Brain Connection</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Link>
        <Navbar.Link href='#'>
          <div className='flex md:order-2'>
            <Dropdown
              id='dropdown'
              inline
              label='Healthy Living'
              className='w-[50%]'
            >
              <Dropdown.Item>Hunger & Energy</Dropdown.Item>
              <Dropdown.Item>Immune Health</Dropdown.Item>
              <Dropdown.Item>Weight Management</Dropdown.Item>
              <Dropdown.Item>Metabolic Health</Dropdown.Item>
              <Dropdown.Item>Physical Activity</Dropdown.Item>
              <Dropdown.Item>Sleep</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Link>
        <Navbar.Link href='#'>
          <div className='flex md:order-2'>
            <Dropdown
              id='dropdown'
              inline
              label='Gut Health'
              className='w-[50%]'
            >
              <Dropdown.Item>Microbiome</Dropdown.Item>
              <Dropdown.Item>Probiotics</Dropdown.Item>
              <Dropdown.Item>Gut Conditions</Dropdown.Item>
              <Dropdown.Item>Gut-Brain Connection</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Link>
        <Navbar.Link href='#'>
          <div className='flex md:order-2'>
            <Dropdown
              id='dropdown'
              inline
              label='Life Stages'
              className='w-[50%]'
            >
              <Dropdown.Item>Perimenopause</Dropdown.Item>
              <Dropdown.Item>Menopause</Dropdown.Item>
              <Dropdown.Item>Healthy Aging</Dropdown.Item>
              <Dropdown.Item>Pregnancy</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Link>
        <Navbar.Link href='#'>
          <div className='flex md:order-2'>
            <Dropdown
              id='dropdown'
              inline
              label='Health Conditions'
              className='w-[50%'
            >
              <Dropdown.Item>Heart Health</Dropdown.Item>
              <Dropdown.Item>Blood Pressure</Dropdown.Item>
              <Dropdown.Item>Diabetes</Dropdown.Item>
              <Dropdown.Item>Cholesterol</Dropdown.Item>
              <Dropdown.Item>Mental Health</Dropdown.Item>
              <Dropdown.Item>Other Conditions</Dropdown.Item>
            </Dropdown>
          </div>
        </Navbar.Link>
        <Navbar.Link href='#' className='flex items-center'>
          <FiHeadphones className='mr-1 mb-1' />
          Podcasts
        </Navbar.Link>
        <Navbar.Link href='#'>
          <button className='bg-[#fac828] text-black py-2 px-3 rounded-full'>
            Join ZOE
          </button>
        </Navbar.Link>
      </Navbar.Collapse>
    </NavbarNoPadding>

    // <nav
    //   role='navigation'
    //   aria-label='Primary menu'
    //   class='default-nav grid grid-flow-col gap-x-[43px] w-full items-center'
    // >
    //   <div class='block'></div>

    //   <ul role='menubar' className='flex justify-end list-none'>
    //     <li role='menuitem' className='list-item list-none py-[12px] px-4'>
    //       <a className='py-4' href='https://joinzoe.com/why-zoe'>
    //         Why ZOE?
    //       </a>
    //     </li>
    //     <li role='menuitem' className='list-item list-none py-[12px] px-4'>
    //       <a className='py-4' href='https://joinzoe.com/how-it-works'>
    //         How It Works
    //       </a>
    //     </li>
    //     <li role='menuitem' className='list-item list-none py-[12px] px-4'>
    //       <a className='py-4' href='https://joinzoe.com/success-stories'>
    //         Reviews
    //       </a>
    //     </li>
    //   </ul>

    //   <div class='block px-[8px] py-[24px]'>
    //     <a href='/'>
    //       <div class='Logo__StyledLogo-sc-rgx023-0 fmaVPR logo-container-desktop'>
    //         <Image
    //           src='/assets/logos/desktop.png'
    //           alt='logo'
    //           width={90}
    //           height={32}
    //         />
    //       </div>
    //     </a>
    //   </div>
    //   <ul role='menubar' className='flex justify-start list-none'>
    //     <li role='menuitem' className='list-item list-none py-[12px] px-4'>
    //       <a className='py-[12px]' href='/learn'>
    //         Learn
    //       </a>
    //     </li>
    //     <li role='menuitem' className='list-item list-none py-[12px] px-4'>
    //       <a className='py-[12px]' href='https://joinzoe.com/our-science'>
    //         Science
    //       </a>
    //     </li>
    //     <li role='menuitem' className='list-item list-none py-[12px] px-4 b '>
    //       <a className='py-[12px]' href='/faqs'>
    //         Help
    //       </a>
    //     </li>
    //   </ul>
    //   <div class='block'></div>
    // </nav>
  );
}
