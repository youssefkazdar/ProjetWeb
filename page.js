import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative mx-auto" style={{ backgroundImage: '/bg.jpg', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main className="flex-grow mx-auto">
        <div className="container mx-auto flex-grow flex items-stretch px-5 py-2 lg:px-32 lg:pt-24">
          <div className="-m-1 flex flex-wrap flex-grow md:-m-2">
            <div className="flex w-full flex-grow md:w-1/2 flex-wrap"> {/* Adjusted width to full on smaller screens */}
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center" // Removed h-full
                  src="/run4.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center" // Removed h-full
                  src="/bb.jpg"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center" // Removed h-full
                  src="/dd.jpg"
                />
              </div>
            </div>
            <div className="flex w-full md:w-1/2 flex-wrap"> {/* Adjusted width to full on smaller screens */}
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center" // Removed h-full
                  src="/kk.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center" // Removed h-full
                  src="/gym.jpg"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center" // Removed h-full
                  src="/running.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <div className="align-middle absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-bold text-4xl bg-black bg-opacity-75 px-6 py-4 rounded-lg transition duration-300 ease-in-out hover:bg-opacity-90 hover:scale-105">
  <p className="mb-2">Kazdar offers you the best prices!</p>
  <p className="text-2xl">-80%</p>
  <div className="flex align-middle">
    <a className="" href="/articles">
      <div className="flex-items-center"  style={{ display: 'grid', placeItems: 'center' }}>
        <Image className="object fill" src="/ll.jpg" alt="Shoes" width={900} height={200} />
        
        
      </div>
    </a>
  </div>
</div>

    </div>
  );
}
