import greek from "../../../assets/greek salad.jpg";

const Specials = () => {
  return (
    <div className="py-40">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">This weeks specials!</h1>
        <button className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded">
          Online Menu
        </button>
      </div>
      <section className="cards py-8 grid grid-cols-3 gap-6">
        <article class="card max-w-sm bg-gray-light rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={greek} alt="greek salad" />
          <div class="card-info">
            <h2>Greek salad</h2>
            <p>$12.99</p>
            <p>
              Refreshing salad, made with tomato, lettuce, feta cheese, and
              olives. Dressed with salt, hot pepper, and olive oil.
            </p>
            <button className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded">
              Order for Delivery
            </button>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Specials;
