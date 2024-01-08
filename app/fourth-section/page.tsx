const FourthSection = () => {
  return (
    <div className="md:py-20 p-8 ">
      <div className=" border-[1px] md:w-2/4 p-8 mx-auto rounded-xl">
        <div className="text-4xl mb-5 font-semibold">
          Boom your business with us{" "}
          <span role="img" aria-label="rocket">
            {" "}
            🚀
          </span>
        </div>

        <div>
          <span className="text-indigo-600">
            Wanna know more about how VoiceflowAI can help you grow your
            business ?{" "}
          </span>
          <br /> Get in touch with our team to learn more about our product and
          services.
        </div>

        <button className="bg-indigo-500 hover:bg-indigo-700 mt-4 text-white font-bold py-2 px-4 rounded">
          Connect Now
        </button>
      </div>
    </div>
  );
};

export default FourthSection;
