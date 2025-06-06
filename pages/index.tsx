import Image from "next/image"

const Hero = () => {
  return (
    <section className="rounded-2xl overflow-hidden mb-8">
      <Image
        src="/assets/Image 1.png"
        alt="Beautiful landscape"
        width={1920}
        height={1080}
      />
    </section>
  )
}

export default Hero