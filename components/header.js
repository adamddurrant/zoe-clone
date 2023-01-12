import Link from 'next/link'

export default function Header() {
  return (
    
  <nav role="navigation" aria-label="Primary menu" class="default-nav grid grid-flow-col gap-x-[44px] w-full">

    <div class="block"></div>
    
    <ul role="menubar flex list-none">
    <li role="menuitem" className="list-item list-none py-[12px] px-[8px]"><a href="https://joinzoe.com/why-zoe">Why ZOE?</a></li>
    <li role="menuitem" className="list-item list-none py-[12px] px-[8px]"><a href="https://joinzoe.com/how-it-works">How It Works</a></li>
    <li role="menuitem" className="list-item list-none py-[12px] px-[8px]"><a href="https://joinzoe.com/success-stories">Reviews</a></li>
    </ul>
    
    <div class="block">
      <a href="/">
        <div class="Logo__StyledLogo-sc-rgx023-0 fmaVPR logo-container-desktop">
    
  <svg width="90" height="32" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo desktop" role="img">
  <path d="M25.9973 31.2644C26.1182 31.2802 26.2407 31.2517 26.3422 31.184C26.4436 31.1164 26.5171 31.0143 26.549 30.8966L29.369 21.9464C29.4917 21.5786 29.1851 21.4559 28.94 21.6398C25.9973 23.8469 22.4417 26.1764 18.8864 26.1764C15.8825 26.1764 14.5337 24.5825 14.5337 21.5786C14.5337 19.5557 15.0854 17.226 15.5759 15.5096C15.821 14.6514 16.2503 13.6092 16.4954 12.8123C16.6181 12.4446 16.1888 12.2606 15.9437 12.567L0.127482 30.6515C-0.117638 30.9578 0.0050559 31.2644 0.372858 31.2644H25.9973ZM52.5415 9.56336C52.5415 16.4904 47.7598 28.1381 42.5491 28.1381C40.7101 28.1381 38.9935 26.7281 38.9935 22.3754C38.9935 15.4484 43.7752 3.80071 48.9859 3.80071C50.8249 3.80071 52.5415 5.2107 52.5415 9.56336H52.5415ZM8.03574 0.612914C7.9148 0.597085 7.79223 0.625667 7.69077 0.693354C7.58931 0.761042 7.51586 0.863238 7.48403 0.980978L4.60284 9.86967C4.57251 9.93479 4.56549 10.0084 4.58296 10.078C4.60043 10.1477 4.64132 10.2093 4.69878 10.2524C4.75625 10.2955 4.82678 10.3175 4.89857 10.3148C4.97036 10.3121 5.03902 10.2848 5.09306 10.2375C8.46474 7.72407 12.3881 5.63996 15.8825 5.63996C18.8864 5.63996 20.48 7.23385 20.48 10.115C20.48 12.0153 20.051 13.9157 19.3766 16.3064C19.1315 17.226 18.8249 18.023 18.5798 18.8813C18.5511 18.9532 18.5496 19.033 18.5756 19.1059C18.6016 19.1788 18.6532 19.2397 18.7208 19.2773C18.7885 19.3148 18.8675 19.3264 18.9431 19.3099C19.0187 19.2934 19.0857 19.25 19.1315 19.1876L32.9858 1.34878C33.2312 1.04219 33.17 0.612914 32.6795 0.612914H8.03574ZM87.9132 16.7357C88.281 16.7357 88.3422 16.6131 88.4649 16.3679C89.1393 14.8965 89.691 12.0767 89.691 10.1151C89.691 4.22997 85.9515 0 79.5147 0C70.8711 0 62.7178 7.84677 62.7178 18.7586C62.7178 26.7281 68.1124 32 75.8364 32C83.8059 32 87.6681 26.5442 89.8137 21.3947C89.9361 21.0881 89.6298 20.843 89.3232 21.1493C87.3003 23.111 83.9286 25.3181 79.4535 25.3181C74.304 25.3181 71.1162 22.1915 71.1162 17.226C71.1162 10.6053 75.7752 3.8007 80.0052 3.8007C81.6603 3.8007 82.5186 4.90411 82.5186 6.37557C82.5186 9.86967 79.1469 13.6092 74.733 16.1226C74.4267 16.3065 74.4267 16.7357 74.9784 16.7357H87.9132ZM60.94 14.2836C60.94 6.25289 55.7293 0 48.0664 0C37.9514 0 30.5951 8.95018 30.5951 17.6552C30.5951 25.6859 35.8058 31.9388 43.4686 31.9388C53.7676 31.9388 60.94 22.9886 60.94 14.2836Z"></path></svg>
  </div>
  </a>
  </div>
  <ul role="menubar" className="flex justify-self-end list-none">
    <li role="menuitem" className="list-item list-none py-[12px] px-[8px]"><a href="/learn">Learn</a></li>
      <li role="menuitem" className="list-item list-none py-[12px] px-[8px]"><a href="https://joinzoe.com/our-science">Science</a></li>
      <li role="menuitem" className="list-item list-none py-[12px] px-[8px]"><a href="/faqs">Help</a></li>
      </ul>
      <div class="block"></div>
      </nav>
    
  //   <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
  //   <Link href="/" className="hover:underline">
  //     Blog
  //   </Link>
  //   .
  // </h2>
  )
}
