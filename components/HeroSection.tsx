import { Button } from "@/components/ui/button";

const HeroSection=()=> {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-2/3  flex flex-col items-center justify-center text-center  px-4  ">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
      Unlock Your Potential with Our Innovative Solutions
      </h1>
      <p className="text-lg text-gray-300 mb-8 mx-0 md:mx-44">
      We deliver cutting-edge technology and expert guidance to help you
overcome challenges and achieve extraordinary success. Our team is committed to delivering exceptional results and enabling you to reach your full potential. Join us on a journey of growth and transformation.
      </p>
      <Button className="h-12">Discover Our Services</Button>
    </div>
  );
}
export default HeroSection