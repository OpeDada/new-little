import owners from "../../../assets/M and Ad-A.jpg";
import owners2 from "../../../assets/M and Ad-b.jpg";

const About = () => {
  return (
    <>
      <div id="about" className="lg:flex justify-between my-24 p-10 xl:px-40">
        <div className="">
          <h1 className="text-2xl font-bold">Little Lemon</h1>
          <h2 className="text-lg font-bold pb-4">Chicago</h2>
          <p className="pr-8 max-w-lg">
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
        </div>
        <div className="relative">
          <div className="relative bottom-8">
            <img
              src={owners}
              className="shadow-lg dark:shadow-black/20 rounded-lg max-w-sm"
              alt=""
            />
          </div>
          <div className="absolute right-60 top-16">
            <img
              src={owners2}
              className="shadow-lg dark:shadow-black/20 rounded-lg max-w-sm"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
