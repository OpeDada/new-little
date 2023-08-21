import bruchetta from "../../../assets/bruchetta.svg";

const Specials = () => {
  return (
    <div className="pt-48 py-16">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">This weeks specials!</h1>
        <button className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded">
          Online Menu
        </button>
      </div>
      <section className="cards mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <article class="card max-w-sm bg-gray-light rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src={require("../../../assets/greek salad.jpg")}
            alt="greek salad"
            className="rounded-t-lg"
          />
          <div class="card-info px-6 py-4 ">
            <div className="flex justify-between py-4 font-bold">
              <h2>Greek salad</h2>
              <p className="text-orange ">$12.99</p>
            </div>
            <p className="pb-8">
              Refreshing salad, made with tomato, lettuce, feta cheese, and
              olives. Dressed with salt and olive oil.
            </p>
            <button className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded">
              Order for Delivery
            </button>
          </div>
        </article>
        <article class="card max-w-sm bg-gray-light rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={bruchetta} alt="bruchetta" className="rounded-t-lg" />
          <div class="card-info px-6 py-4 ">
            <div className="flex justify-between py-4 font-bold">
              <h2>Bruchetta</h2>
              <p className="text-orange ">$16.99</p>
            </div>
            <p className="pb-8">
              Toasted bread, topped with tomato, prosciutto, and cheese.
              Seasoned with salt and olive oil.
            </p>
            <button className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded">
              Order for Delivery
            </button>
          </div>
        </article>
        <article class="card max-w-sm bg-gray-light rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src={require("../../../assets/lemon_d.jpg")}
            alt="lemon dessert"
            className="rounded-t-xl"
          />
          <div class="card-info px-6 py-4">
            <div className="flex justify-between py-4 font-bold">
              <h2>Lemon Dessert</h2>
              <p className="text-orange ">$8.50</p>
            </div>
            <p className="pb-8">
              Fresh baked lemon bread coated in salt and sugar. Powdered in
              citrus and lemon zest.
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
