import React from "react";

export default function LatestPodcasts() {
  return (
    <>
      <h2 class='w-full text-center pb-10 text-3xl my-4'>
        Latest Podcast Episodes
      </h2>
      <div className='suggestedcarousel podcasts flex flex-wrap h-auto'>
        <div className='flex-none w-screen80 md:w-1/4 flex flex-col md:pb-7 pr-6 md:px-7'>
          <a href='#' className='relative block mb-2'>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAMAAAFoY8eqAAACcFBMVEWj4cai4MWh3sOh38Sk4cag4MSd38Ks5My96dbC69m76NWq48qh4MSt7tKp6c2i38We38Ku5Mzg9ez8/v3////+/v76/fzb8+mp48mf38Ol48ib171CW1CFt6Gn58ui38S66NT9/v71+/iw5c6m5sovQztJZ1qg3cOk4sej4Mb6/fv//v/8/f39/f38/fzy+ven4sih4MWj48et1sSUyLKc2r/j9e39/v3V8eWc38L3+vnQ7uGd4MOk4May5c/i4uLr6+vw8PD6+vrb29ve3t7n5+f19fXq6urZ2tn5+fn3/Pqo4sml4cf2+/nz+/ei4cWk48ed38PH7NzOz86vr6+7u7vQ0NCfn5/GxsawsLCqqqqlpaXd3d2559Oj4saf3cLd5uLOz8/d8+qg1b6Y2r3Y9ej49PbU1dTg4ODm5ubo6Ojl5eXf39/k5eTG7Nyc3sGm5MmIwajG2NCPvamg1L2Wx7KPzrPa9+r59fetrq2urq60tLS/v7+3t7fAwMDPz8+pqam/wMDH7dyZ1rui1b+SxK6PyrDI7Nz8/Pzv7+/Dw8PCwsKt79JbfW4oOjITHBhNaV2w8dWc28Cy5s/R0dG4uLju7u72/Pmk48id2b8JDQxxnIptl4ULDw2f3MKe3sLh9ezT8OOx9dhTc2YtPzev8dSr7M8lMy1ghXWd3MCu5M34/Pvv+vWm4cem5cmX0LcgLCePxq6m5cqp6s6AspwnNzCs7dGd3sK359Kt5Myt79Nwm4kvQjqg3MKv8tVIY1c2S0KX0bin5cqs48vd9OrX8uam4siCtJ6UzLOl5MmVzra56NO+6ten4smc3sKe38OlbDgkAAABvElEQVQYV2NgYOBkYGAoq8lnYFjGxsDAxMrDUFTVwMAIFGQw1lQUNWdhmLd0qYiuCEiAkZ2bkYHR1ExU1IKhoKQipE6EYfHyVaKiaxk2yzPwGAJVSMnIMbKJiSqKKkkCjWD09Q8UCQmLiIoWAZrd0zdhkqLOlMhputMNGXbtYd534NBhMdHVx1iAChmZGRlY2Di42EAcaVl5FgURUVERZSDPyERDUgTI0RaxZGDw8QsICg4Nj4yKiWVgLCwuLa+sDq2tb2xiUO/tnzhZVKRqqoi2N8OiJctWrFxtrisqvMaQYTff3v0Htx8RETkKdBHjSYZ1jIwsbOdZwB5kZODl4wdSLAKCQsIioiJi4hKSYBlGRhVVNXUNTUllLW0dUV1dUVE9bX0DkAeBiq2sbWwl7UTsHRydnF1c3dw9PL28eYAScfEJiUnJKalp6Q4ZzplZ2dmOObkieflAwxibW1rb5NjaRXQ6RDq7urOdRHV1RBTYGBhnzJw1e87ceVLzF4iYi4KBiLDIQksWhnXrN2zctHnL1m0a23esBvpeESijv1MS6GJ5ueMn1jGfPHVcg5GFlY379JkdZ88ZghwNAIGCbDrfbm5cAAAAAElFTkSuQmCC'
              width={300}
              height={300}
              data-sizes='100vw'
              className='inline-block blur-up h-auto w-full lazyloaded'
              data-srcset='/imager/clientcontent/337398/Pendergast-TIL-bubble_9f46f19777d38f7def8eb71716e118cb.png 768w, /imager/clientcontent/337398/Pendergast-TIL-bubble_b0d0279203a8a920b66a18ab5f080860.png 640w, /imager/clientcontent/337398/Pendergast-TIL-bubble_6b7cfb03bd76ae7d37f7fac061e31a30.png 320w, /imager/clientcontent/337398/Pendergast-TIL-bubble_8a8b8ee367eb198bbd99101a79203309.png 25w'
              alt=''
              sizes='100vw'
              srcSet='/imager/clientcontent/337398/Pendergast-TIL-bubble_9f46f19777d38f7def8eb71716e118cb.png 768w, /imager/clientcontent/337398/Pendergast-TIL-bubble_b0d0279203a8a920b66a18ab5f080860.png 640w, /imager/clientcontent/337398/Pendergast-TIL-bubble_6b7cfb03bd76ae7d37f7fac061e31a30.png 320w, /imager/clientcontent/337398/Pendergast-TIL-bubble_8a8b8ee367eb198bbd99101a79203309.png 25w'
            />
          </a>
          <div className='card px-4'>
            <h5>
              {" "}
              <a href='#'>Careers</a>
            </h5>
            <h2 className='pb-3 text-xl leading-tight'>
              <a href='#' className='no-underline text-black'>
                Podcast: What to Expect When Joining a Family-Owned Business
              </a>
            </h2>
            <p>
              There are cons—but a lot of pros, too. On this episode of The
              Insightful Leader, we’ll explore what it’s like to work at a
              family business when you’re not a family member.
            </p>
          </div>
        </div>
        <div className='flex-none w-screen80 md:w-1/4 flex flex-col md:pb-7 pr-6 md:px-7'>
          <a href='#' className='relative block mb-2'>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAMAAAFoY8eqAAAC0FBMVEWj4cai4MWh3sOh38Sk4cag4MSd38Ks5My96dbC69m76NWq48qh4MSt7tKp6c2i38We38Ku5Mzg9ez8/v3////+/v76/fzb8+mp48mf38Ol48ib171CW1CFt6Gn58ui38Sd3sK459L5/Pv9/v78/f39/f30+/iv5M2e38Om5sovQztJZ1qg3cOk4sej4Maz6NH7//3//v/z/Piq5Muj48et1sSUyLKc2r+h4sbR49vc2Nrm5+b09PTt7e35+fnq6uri4uL39/f09fX48/XN6d2d4MP3+vnQ7uGk4Maz5tD6+/q4uLirq6uvr6/b29uxsbHJycmurq7Ozs7Hx8epqKjFyceu6M+f3sOl4cf2+/nz+/ei4cWk48fJ7t7++vzp6urh4eHKysrl5eXv7+/r6+vd3d3a2trU1dX28/W86taj4saf3cLd5uLOz8/d8+qg1b6X2r3a9+rh3d+1tra0tLS3t7fX19e9vb26urrCwsKur67l4ePL8eGa3cCm5MmIwajG2NCPvamg1L2Wx7KQz7PX9Of6+/v8/Pzz8/PZ2dnBwcHx8fH5+vn//f/H7dyc3sGZ1rui1b+SxK6PyrDI7Nz9/v319fXExMTFxcW5ubm66NSt79JbfW4oOjITHBhNaV2w8dWc28Cx5c7g4ODGxsbW1ta+vr7Pz8/R0dHc3Nzj4uL3/fqn4sih4MWk48id2b8JDQxxnIptl4ULDw2f3MKc3cHn+/LLyMm8vbzS0tLJysn//P7U8eSx9dhTc2YtPzev8dSr7M8lMy1ghXWd3MCu5M34+/r+//7v+fWm4cem5cmX0LcgLCePxq6m5cqp6s6AspwnNzCs7dG359L3+/n8/fz+/f7x+vat5Myt79Nwm4kvQjqg3MKv8tVIY1c2S0KX0bin5cqd3sGr48vd9Or4/PvX8uam4siCtJ6UzLOl5MmVzra56NO+6ten4smc3sKNGL/OAAABx0lEQVQYV2NgYOBkYGBoCepnYDjIxsDAxMrD0NCuysAIFGQwZbS2d2Jh2HLggMhxEZAAIzs3IwOjuaWtjQtDXZNIR3cvw75DR0WPn2Q4L8/AsxaoQkpGjlFBSVRFVE0DaARjZDRbXIJfcmpahgIDw+y58xeKLFmWtmLl6rUMN28z373/8LGY6NPnLECFjMyMDCxsHFxsII60rDyLooiyqog6kGdipmthZWPn4OjsysAQERUTG5+YlJKWnsnAWN/Y3Nom2tkl2tPHoDNn3oJFi5cuD+hatYZh7/6Dh48cExURVT6xluEW3517Dx49ERF5Jgl0+yuGU4yMLGwaLGAPMjLw8vEDKRYBQSFhEVERMXEJSbAMI6OmlraOrp6kvoGhqCjQJFFlESNjHrAeFjd3Vw8NTy9vH19fP/+AwKDgkNCwcKBEVnZObl5+QWFRsa9vSWlZaXlFZVV1TS3QMMYJEydNlmObIjJVVGTa9Bkz7UVU20RmsTEwrlu/YeOmzVuktm7bviNxWUVwwM4Zu3bv6WdhOHX6zNlz5y9cvKSrcPmKoepVFdVrItdvSAJdLC/34uUp5levX+gysrCycb95e/nd+7UgRwMAvyqI3wMPeUUAAAAASUVORK5CYII='
              width={300}
              height={300}
              data-sizes='100vw'
              className='inline-block blur-up h-auto w-full lazyloaded'
              data-srcset='/imager/clientcontent/336601/HK_activity_productivity_9f46f19777d38f7def8eb71716e118cb.png 768w, /imager/clientcontent/336601/HK_activity_productivity_b0d0279203a8a920b66a18ab5f080860.png 640w, /imager/clientcontent/336601/HK_activity_productivity_6b7cfb03bd76ae7d37f7fac061e31a30.png 320w, /imager/clientcontent/336601/HK_activity_productivity_8a8b8ee367eb198bbd99101a79203309.png 25w'
              alt=''
              sizes='100vw'
              srcSet='/imager/clientcontent/336601/HK_activity_productivity_9f46f19777d38f7def8eb71716e118cb.png 768w, /imager/clientcontent/336601/HK_activity_productivity_b0d0279203a8a920b66a18ab5f080860.png 640w, /imager/clientcontent/336601/HK_activity_productivity_6b7cfb03bd76ae7d37f7fac061e31a30.png 320w, /imager/clientcontent/336601/HK_activity_productivity_8a8b8ee367eb198bbd99101a79203309.png 25w'
            />
          </a>
          <div className='card px-4'>
            <h5>
              {" "}
              <a href='#'>Careers</a>
            </h5>
            <h2 className='pb-3 text-xl leading-tight'>
              <a href='#' className='no-underline text-black'>
                Podcast: Does Your Life Reflect What You Value?
              </a>
            </h2>
            <p>
              On this episode of The Insightful Leader, a former CEO explains
              how to organize your life around what really matters—instead of
              trying to do it all.
            </p>
          </div>
        </div>
        <div className='flex-none w-screen80 md:w-1/4 flex flex-col md:pb-7 pr-6 md:px-7'>
          <a href='#' className='relative block mb-2'>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAMAAAFoY8eqAAACVVBMVEWj4cai4MWh3sOh38Sk4cag4MSd38Ks5My96dbC69m76NWq48qh4MSt7tKp6c2i38We38Ku5Mzg9ez8/v3////+/v76/fzb8+mp48mf38Ol48ib171CW1CFt6Gn58ui38S66NT9/v71+/iw5c6m5sovQztJZ1qg3cOk4sej4Mb//v/7/Pz9/f39/v37/fzy+ven4sih4MWj48et1sSUyLKc2r/j9e3//v7V8eWc38L3+vnQ7uGd4MOk4Maz5s/V1dW9vb3Y2NjZ2dnk5OTa2trOzs7e3t7p6en2+/mo4sml4cfz+/ei4cWk48ed38PI7d319fXBwcHAwMDT09PGxsbS0tK+vr676NSj4saf3cLd5uLOz8/d8+qg1b6Y277V8uXf39/U1NTNzc3KysrG7Nyc3sGm5MmIwajG2NCPvamg1L2Wx7KQz7TX9OfJycnFxcXPz8/b29u1tbXq6uqZ1rui1b+SxK6PyrDI7Nzx8fHR0dH7+/ut79JbfW4oOjITHBhNaV2w8dWc28Cy5s/t7e3Q0NC4uLi5ubmxsbHExMTs7Oz2/Pmk48id2b8JDQxxnIptl4ULDw2f3MKe3sLh9ezT8OOx9dhTc2YtPzev8dSr7M8lMy1ghXWd3MCu5M34/fv8/fz8/f3v+fWm4cem5cmX0LcgLCePxq6m5cqp6s6AspwnNzCs7dGd3sK359L4/Put5Myt79Nwm4kvQjqg3MKv8tVIY1c2S0KX0bin5cqs48vd9OrX8uam4siCtJ6UzLOl5MmVzra56NO+6ten4smc3sKe38NEes9nAAABtklEQVQYVx1P+TuUYRS9t3l9KkLcd/JJM4bKmL6h0WaphmFEi6hJK8mSpZKkfV/sS6UkS5GGkp12WSr1d3XHT/c5y3PuOQCwAgDO5xcDdCkAy7x8oTTlMiCTsCXKJK0C2jo7LRp5CPT2QcBt26WMg7PldPESQUf3G63vHQwZwdfGjpBQAyp6aZLhKkdg+v5Myso+fMROnH377v2H2uPa+gJqssHktO7z1+8/9HJ8VrARdQhCWb5S8YC164wijKSkCEaxW80q7SCSFA+wd9+Bg5R0yJVDRwFLys5doApXZRUVQeSdew8eUU1dQ6MlA16+6up53btJ097222DK79OXb6MzRD+5ES6AG1Eo/8TSQIRVfv58RMDqwCD+oF8TrC4piOs3bIw0R6kRegvnSM0aTTGbPQPZnJC4c5e6W5I9KdmRkupM20PpGSzhseMnTp7KzTtNlG8/U+BwOAuziIqKOQyrr1y9ZlCuE90orHC6buak3iIKUwCbW1qfPH3WFvL8BVl5ME+WQdQeL8A9MPj+w9DH4RHz6Ng4KyaWYiZUbmw0zM27dQu/5swovBSf33/GFv/aPKX/A/gfZjJawMk0AAAAAElFTkSuQmCC'
              width={300}
              height={300}
              data-sizes='100vw'
              className='inline-block blur-up h-auto w-full lazyloaded'
              data-srcset='/imager/clientcontent/332403/QQ-bubble_9f46f19777d38f7def8eb71716e118cb.png 768w, /imager/clientcontent/332403/QQ-bubble_b0d0279203a8a920b66a18ab5f080860.png 640w, /imager/clientcontent/332403/QQ-bubble_6b7cfb03bd76ae7d37f7fac061e31a30.png 320w, /imager/clientcontent/332403/QQ-bubble_8a8b8ee367eb198bbd99101a79203309.png 25w'
              alt=''
              sizes='100vw'
              srcSet='/imager/clientcontent/332403/QQ-bubble_9f46f19777d38f7def8eb71716e118cb.png 768w, /imager/clientcontent/332403/QQ-bubble_b0d0279203a8a920b66a18ab5f080860.png 640w, /imager/clientcontent/332403/QQ-bubble_6b7cfb03bd76ae7d37f7fac061e31a30.png 320w, /imager/clientcontent/332403/QQ-bubble_8a8b8ee367eb198bbd99101a79203309.png 25w'
            />
          </a>
          <div className='card px-4'>
            <h5>
              {" "}
              <a href='#'>Leadership</a>
            </h5>
            <h2 className='pb-3 text-xl leading-tight'>
              <a href='#' className='no-underline text-black'>
                Podcast: How to Engage a Disengaged Employee
              </a>
            </h2>
            <p>
              On this episode of The Insightful Leader, we hear how leaders can
              work with their “quiet-quitters” and rebuild morale.
            </p>
          </div>
        </div>
        <div className='flex-none w-screen80 md:w-1/4 flex flex-col md:pb-7 pr-6 md:px-7'>
          <a href='#' className='relative block mb-2'>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAARCAMAAAFoY8eqAAACeVBMVEWj4cai4MWh3sOh38Sk4cag4MSd38Ks5My96dbC69m76NWq48qh4MSt7tKp6c2i38We38Ku5Mzg9ez8/v3////+/v76/fzb8+mp48mf38Ol48ib171CW1CFt6Gn58ui38S66NT9/v71+/iw5c6m5sovQztJZ1qg3cOk4sej4MWf4MSv5M36/fv7/fz8/f39/f3//v/x+fan4sih4MWj48et1sSUyLKc2r+j4Mbj9e3V8eX3+vnQ7uGd4MOk4Mae3sK36tTn6OfT09PX19fZ2dnGxsbd3d3e3t6zs7PIyMjMzMzX1tbt8vCq5Mug38Sl4cf2+/nz+/ei4cWk48ec3sLM8OHx7e7P0M+4uLi9vb3R0dHY2NjCwsLDw8PU1NS7u7u5urrz8fK+7Nic3sGj4saf3cLd5uLOz8/d8+qg1b6Y277V8uXz8/PExMTi4uLy8vL9/v3G7Nym5MmIwajG2NCPvamg1L2Wx7KQz7PX9Of8/fz19fXW1tbg4ODOzs74+Pj7/PyZ1rui1b+SxK6PyrDI7Nzu7u65ubnAwMC2tra8vLyt79JbfW4oOjITHBhNaV2w8dWc28Cy5s/q6urJycnb29vS0tL7+/uo4smk48id2b8JDQxxnIptl4ULDw2f3MLh9ez+//7T8OOc38Kx9dhTc2YtPzev8dSr7M8lMy1ghXWd3MCu5M34/fvv+vWm4cem5cmX0LcgLCePxq6m5cqp6s6AspwnNzCs7dGd3sK359L4/Pvy+vet5Myt79Nwm4kvQjqg3MKv8tVIY1c2S0KX0bin5cqs48vd9OrX8uam4siCtJ6UzLOl5MmVzra56NO+6ten4sme38PfNI+zAAABvklEQVQYV2NgYOBkYGCoiEtmYFjBxsDAxMrDUCIiysAIFGQwtVAUUWRhmL98uYi+CEiAkZ2bkYHR3FJE1IqhqEykpk6EYenKNfp66xm2yjPwGANVSMnIMbKJiSqKKkkCjWAMCAoJ84qMjo1PBJrf3ds/UX/yVOdp0wOMGfYdYD505NhxMdHdp1iAChmZGRlY2Di42EAcaVl5FgURUVERZSDPxExDUsRAFMgDOs8/MDg0PCIqJi4hiYGxuLS8sqrauba+oZBBvadvwiSRKTXO0SIzGJYsW7Fq9doqff2GdcYM+/kOHj6684SIyEmgixjPMmxgZGRhu8QC9iAjAy8fP5BiERAUEhYRFRETl5AEyzAyqqiqqWtoamnriOrq6evri+oZGBqBPAhUbG1ja2fv4Ojk7OLq5u7q4enl7ePrB5RISU1Lz8jMyhbRE8lxznXNi8gXKRApTAYaxtjY1Nwix9YqItLW3hGb2xnfJaIoosDGwDhz1uw5c+fNl7JfIFIgCvSx6EIRYZFFi1kYNmzctHnL1m3bd2js3LUbKKEI9P+evZJAF8vLnT6zgfnsudMajCysbNznL+y6GGIMcjQARR9wZkP79dwAAAAASUVORK5CYII='
              width={300}
              height={300}
              data-sizes='100vw'
              className='inline-block blur-up h-auto w-full lazyloaded'
              data-srcset='/imager/clientcontent/329739/TheInsightfulLeader_bubble62_9f46f19777d38f7def8eb71716e118cb.png 768w, /imager/clientcontent/329739/TheInsightfulLeader_bubble62_b0d0279203a8a920b66a18ab5f080860.png 640w, /imager/clientcontent/329739/TheInsightfulLeader_bubble62_6b7cfb03bd76ae7d37f7fac061e31a30.png 320w, /imager/clientcontent/329739/TheInsightfulLeader_bubble62_8a8b8ee367eb198bbd99101a79203309.png 25w'
              alt=''
              sizes='100vw'
              srcSet='/imager/clientcontent/329739/TheInsightfulLeader_bubble62_9f46f19777d38f7def8eb71716e118cb.png 768w, /imager/clientcontent/329739/TheInsightfulLeader_bubble62_b0d0279203a8a920b66a18ab5f080860.png 640w, /imager/clientcontent/329739/TheInsightfulLeader_bubble62_6b7cfb03bd76ae7d37f7fac061e31a30.png 320w, /imager/clientcontent/329739/TheInsightfulLeader_bubble62_8a8b8ee367eb198bbd99101a79203309.png 25w'
            />
          </a>
          <div className='card px-4'>
            <h5>
              {" "}
              <a href='#'>Finance &amp; Accounting</a>
            </h5>
            <h2 className='pb-3 text-xl leading-tight'>
              <a href='#' className='no-underline text-black'>
                Podcast: What the FTX Meltdown Means for the Future of Crypto
              </a>
            </h2>
            <p>
              The implosion of the crypto exchange has sent the industry
              reeling. We dig into what happened and whether cryptocurrency, as
              a concept, can weather the storm.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
