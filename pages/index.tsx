import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative w-full h-[350] rounded-2xl overflow-hidden flex items-center justify-center mb-8">
      <Image
        src="/assets/Image 1.png"
        alt="Beautiful landscape"
        fill
        className="object-cover"
        priority
      />
    </section>
  )
}

export default Hero