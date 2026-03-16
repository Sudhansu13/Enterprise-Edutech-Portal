import { Carousel } from 'flowbite-react';
import backgroundImage from '../images/bakground-image2.jpg';
import courseone from '../images/course-one.jpg';
import coursetwo from '../images/course-two.avif';
import coursethree from '../images/course-three.jpg';


export default function Home(){
    return (<>
    <section class="hero-section relative">
    <div class="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${backgroundImage})`}}></div>
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container mx-auto relative z-10 text-white py-20">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">Unlock Your Potential with Our Courses</h1>
      <p class="text-lg md:text-xl mb-8">Empower yourself with our expert-led courses designed to help you achieve your goals.</p>
      <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">Explore Courses</a>
    </div>
  </section>


        <div className='px-2'>
            <section class="container mx-auto px-6 p-10">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Diverse Course Selection</h4>
          <p class="text-gray-600 mb-8">Explore a vast array of courses spanning diverse subjects and disciplines, ensuring there's something to cater to every interest and skill level.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src={courseone} alt="Monitoring" />
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <img src={coursetwo} alt="Reporting" />
        </div>
        <div class="w-full md:w-1/2 pl-10">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Expert-Led Content</h4>
          <p class="text-gray-600 mb-8"> Immerse yourself in learning from industry leaders and seasoned professionals who curate and deliver top-tier course content, providing you with invaluable insights and expertise.</p>
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-800 font-bold mb-3">Interactive Learning</h4>
          <p class="text-gray-600 mb-8">Experience dynamic learning environments enriched with multimedia content, interactive quizzes, and engaging assignments, fostering active participation and deep understanding.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src={coursethree} alt="Syncing" />
        </div>
      </div>
    </section>
        </div>

        <section class="bg-gray-100">
      <div class="container mx-auto px-6 py-20">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
          Testimonials
        </h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
              <p class="text-gray-800 text-base px-6 mb-5">"I've been amazed by the variety and quality of courses available on this platform. The expert-led content has helped me advance my skills in ways I never thought possible. Highly recommend!"</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">Sarah Johnson, Digital Marketer</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
              <p class="text-gray-800 text-base px-6 mb-5">As a working professional, I appreciate the flexibility this platform offers. The diverse course selection allowed me to tailor my learning to my career goals, and the interactive learning experience kept me engaged throughout.</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">Michael Chang, Software Engineer</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
              <p class="text-gray-800 text-base px-6 mb-5">I've tried other online learning platforms before, but none compare to the level of support and engagement I've experienced here. The community aspect, along with the personalized learning paths .</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">Emily Rodriguez, Graphic Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}