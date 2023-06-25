import IMG11 from "../img/test.png";
import IMG12 from "../img/test2.png";
import IMG13 from "../img/test3.png";

const Testimonials = () => {
  return (
    <section className="animate-fad p-4">
      <div className="px-6 py-12 bg-black rounded-2xl">
        <h3 className="text-white text-xl font-bold mb-4">You are in good company</h3>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white">
            <div>
              <p className="font-bold text-lg  mb-3">"This Bank is a truly great bank"</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sequi autem harum earum voluptatibus magni totam saepe modi helsedh dgea Rerum?</p>
            </div>

            <div className="flex flex-row mt-3">
              <div>
                <img className="w-10 h-10 rounded-full" src={IMG11} alt="" />
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-base">Henry Joe</h4>
                <p className="text-xs">Head of sales at Chase</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white">
            <div>
              <p className="font-bold text-lg mb-3">"This Bank is a truly great bank"</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sequi autem harum earum voluptatibus magni totam saepe modi cash dgea Rerum?</p>
            </div>

            <div className="flex flex-row mt-3">
              <div>
                <img className="h-10 w-10 rounded-full" src={IMG12} alt="" />
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-base ">Henry Joe</h4>
                <p className="text-xs">Account at Fin</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white">
            <div>
              <p className="font-bold text-lg mb-3">"This Bank is a truly great bank"</p>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga sequi autem harum earum voluptatibus magni totam saepe modi helsedh dgea Rerum?</p>
            </div>

            <div className="flex flex-row mt-3">
              <div>
                <img className="h-10 w-10 rounded-full" src={IMG13} alt="" />
              </div>
              <div className="ml-3">
                <h4 className="font-bold text-base">Henry Joe</h4>
                <p className="text-xs">CEO at Chase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
