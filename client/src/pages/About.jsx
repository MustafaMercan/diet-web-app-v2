import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <div className="relative bg-white overflow-hidden m-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="pt-1" />
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  Hi I'm Mustafa Mercan
                </h2>
                <p>
                  Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                  libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                  volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere
                  ultrices, purus nulla tristique turpis, hendrerit rutrum augue quam ut est. Fusce malesuada
                  posuere libero, vitae dapibus eros facilisis euismod. Sed sed lobortis justo, ut tincidunt
                  velit. Mauris in maximus eros.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_960_720.jpg" alt="" />
        </div>
      </div>


      <div className="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl my-24">
        <div className="mb-12">
          <h1 className="text-3xl lg:text-4xl text-center mb-6 tracking-wider">Services</h1>
          <p className="tracking-wide text-sm mb-6 leading-relaxed mx-auto max-w-xl text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br className="hidden md:block" />Aenean commodo ligula eget dolor.</p>
          <p className="tracking-wide text-xs text-gray-600 leading-loose mx-auto max-w-xl text-center">Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.</p>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-1/3 p-2">
            <a href="#" className="block mb-8 bg-black hover:bg-gray-700">
              <img src="https://images.unsplash.com/photo-1499175898579-d743fea6e7dc?w=800" className="w-full h-auto opacity-75" />
            </a>
            <a href="#" className="block text-xl text-center">Services</a>
          </div>
          <div className="w-1/3 p-2">
            <a href="#" className="block mb-8 bg-black hover:bg-gray-700">
              <img src="https://images.unsplash.com/photo-1477064996809-dae46985eee7?w=800" className="w-full h-auto opacity-75" />
            </a>
            <a href="#" className="block text-xl text-center">Services</a>
          </div>
          <div className="w-1/3 p-2">
            <a href="#" className="block mb-8 bg-black hover:bg-gray-700">
              <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" className="w-full h-auto opacity-75" />
            </a>
            <a href="#" className="block text-xl text-center">Services</a>
          </div>
        </div>
      </div>


    </div>
  )
}

export default About
