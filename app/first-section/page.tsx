const FirstSection = () => {
  return (
    <section
      className="md:py-20 py-10 bg-gradient-to-r 
    from gray-00  to-gray-200 spacey-10"
    >
      <div className="container mx-auto text-center">
        <div
          className="text-6xl flex justify-center font-bold md:px-20 pb-10 
            text-gradient bg-gradient-to-r from-[#ffa31d] to-[#ed1c24]
            bg-clip-text text-transparent
        "
        >
          Boost your business with AI and earn 10x profits
        </div>

        <p
          className="text-lg md:text-xl md-10 font-bold
        bg-gradient-to-r from-black to-gray-400
        bg-clip-text text-transparent
        "
        >
          No matter what your business is, Voiceflow has the right AI solution
          for you.
        </p>

        <div className="pt-10 w-full">
          <video className="rounded-xl" muted loop autoPlay playsInline>
            <source src="/content/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
