const Specials = () => {
  return (
    <div className="px-20 py-40">
      <div className="flex justify-between">
        <h1>This weeks specials!</h1>
        <button className="bg-yellow hover:bg-green hover:text-white hover:border border-gray font-bold py-2 px-4 rounded">
          Online Menu
        </button>
      </div>
      <section className="cards">
        <div className="card">
          <img></img>
        </div>
      </section>
    </div>
  );
};

export default Specials;
