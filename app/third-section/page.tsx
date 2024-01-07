import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="flex flex-col p-10 md:flex-row md:justify-evenly">
      <div className=" flex-col md:flex-row md:px-10 gap-6 flex ">
        <div className="md:w-2/3 w-full">
          {/* <Image
            className="w-full"
            width="400"
            height="100"
            src="/content/ecom.jpg"
            alt="Ecom"
          /> */}
          <img
            src="/content/ecom.jpg"
            alt="ecom-content"
            className="rounded-xl"
          />
        </div>

        <div className=" flex-col border p-4 rounded-xl md:w-2/5">
          <div
            className="flex text-center justify-center text-3xl md:text-5xl font-bold
          bg-gradient-to-r from-blue-400 to to-purple-700 bg-clip-text text-transparent "
          >
            Complete Ecommerce Support
          </div>

          <div className="md:px-20 gap-y-6 flex-col items-center justify-center">
            <div className="pt-10 gap-4 flex text-lg">
              <Image
                src="/images/features/icon-store.png"
                alt="f1"
                width={70}
                height={70}
              />

              <div className="flex flex-col gap-2">
                Choose from best AI tools to build your store and manage your
                inventory efficiently.
              </div>
            </div>

            <div className="pt-10 gap-4 flex text-lg">
              <Image
                src="/images/features/icon-location.png"
                alt="f1"
                width={70}
                height={70}
              />

              <div className="flex flex-col gap-2">
                Ship your products to customers across the globe with our global
                shipping partners.
              </div>
            </div>

            <div className="pt-10 gap-4 flex text-lg">
              <Image
                src="/images/features/icon-analytics.png"
                alt="f1"
                width={70}
                height={70}
              />

              <div className="flex flex-col gap-2">
                Keep track of your profits and losses on each order precisely
                with our analytics tools.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
