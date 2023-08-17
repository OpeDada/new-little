import owners from "../../../assets/M and Ad-A.jpg";
import owners2 from "../../../assets/M and Ad-b.jpg";

const About = () => {
  return (
    <>
      <div className="container flex gap-8 my-24 mx-auto md:px-6">
        <div>
          <h1>Little Lemon Chicago</h1>
          <h2>Chicago</h2>
          <p className="">
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recognized the
            lack of Mediterranean cuisine in Chicago, and were inspired to bring
            the flavors of their hometown in Italy to the people of Chicago. The
            two brothers continue to oversee the Little Lemon restaurant, nearly
            thirty years later.
          </p>
        </div>
        <div className="object-contain relative h-82 w-128">
          <img
            src={owners}
            className="absolute left-12 top-8 shadow-lg dark:shadow-black/20"
            alt=""
          />
          <img
            src={owners2}
            className="absolute -left-4 -top-0 shadow-lg dark:shadow-black/20"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default About;
