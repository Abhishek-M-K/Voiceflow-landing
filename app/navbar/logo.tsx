import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image src="/images/logo/logo.svg" width={70} height={50} alt="logo" />
    </div>
  );
};

export default Logo;
