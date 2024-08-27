import person from '/assets/images/about_us/person.jpg';
import parts from '/assets/images/about_us/parts.jpg';

const About = () => {
  return (
    <div className="w-full h-[500px] mt-20">
      <div className="w-full h-full flex justify-between gap-10 items-start">
        <div className="h-full w-full relative">
          <img src={person} alt="" className="w-[80%] h-[470px] rounded-lg" />
          <div className="h-[330px] w-[325px] absolute bottom-0 right-0">
            <img src={parts} alt="" className="h-full w-full rounded-md" />
          </div>
        </div>
        <div className="h-full w-full flex flex-col justify-between items-start">
          <h4 className="text-xl font-bold text-[#FF3811]">About Us</h4>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.{' '}
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
