import owners from "../../../assets/M and Ad-A.jpg";
import owners2 from "../../../assets/M and Ad-b.jpg";

const About = () => {
  return (
    <>
      <div className="container flex gap-8 my-32 max-w-4xl ">
        <div className="">
          <h1 className="text-2xl font-bold">Little Lemon</h1>
          <h2 className="text-lg font-bold pb-4">Chicago</h2>
          <p className="pr-8 max-w-4xl">
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
        </div>
        <div className="object-contain relative w-full">
          <img
            src={owners}
            className="absolute  z-10 -left-4 -top-0 shadow-lg dark:shadow-black/20"
            alt=""
          />
          <img
            src={owners2}
            className="absolute  left-32 top-20 shadow-lg dark:shadow-black/20"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
