const features = [
  {
    name: "Basic Plan",
    price: "$10/month",
    description:
      "Access to build 3 online stores and start drop shipping from today including 1 staff account.",
  },
  {
    name: "Standard Plan",
    price: "$60/month",
    description:
      "Build upto 5 online stores with 3 staff accounts each. Plus get access to our cloud storage to manage the customer data efficiently.",
  },
  {
    name: "Zuper Plan",
    price: "$100/month",
    description:
      "[Includes Standard Plan] +  Build andmanage upto 8 online stores with 5 staff accounts each. Plus get access to our premium cloud analytics tool .",
  },
];

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="text-center text-4xl md:text-6xl font-bold 
      bg-gradient-to-r from-blue-500 to to-purple-700 bg-clip-text text-transparent md:pb-10"
      >
        Pricing
        <div className="text-center font-bold text-2xl md:text-4xl md:py-10">
          Choose a plan that works best for your business needs.
        </div>
      </div>

      <div className="md:flex">
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <div
              className="grid justify-center items-center gap-4
            border rounded-xl p-4 w-[350px] h-[350px]"
            >
              <div className="text-black text-2xl font-semibold pb-4">
                {feature.name}
              </div>
              <div className=" text-xl ">{feature.price}</div>
              <div className="text-xl ">{feature.description}</div>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
