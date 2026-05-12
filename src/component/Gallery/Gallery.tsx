import Image from "next/image";

const Gallery = () => {
  return (
    <section className="w-full bg-white py-12">

      {/* TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-green-800">
          Our Gallery View
        </h2>
      </div>

      {/* MAIN LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">

        {/* LEFT LARGE IMAGE */}
        <div className="relative h-[700px] w-full overflow-hidden rounded-lg">
          <Image
            src="/image 5.png"
            alt="main"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="relative h-[340px] overflow-hidden rounded-lg">
            <Image
              src="/pexels-cottonbro-studio-4507715 2.png"
              alt="img1"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-lg">
            <Image
              src="/pexels-cottonbro-studio-4507715 3.png"
              alt="img2"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-lg">
            <Image
              src="/pexels-cottonbro-studio-4507715 4.png"
              alt="img3"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-lg">
            <Image
              src="/pexels-cottonbro-studio-4507715 5.png"
              alt="img4"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Gallery;