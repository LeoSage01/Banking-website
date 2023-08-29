import Button from './Button';
import IMG7 from '../img/jackdorsey.png';

const Mission = () => {
  return (
    <section className="p-4">
      <div className="rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 bg-primary p-6" >
        <div className="flex justify-center ">
          <img className="h-auto rounded-lg max-w-full" src={IMG7} alt="" />
        </div>

        <div className="py-2 text-white flex flex-col justify-around">
          <h3 className="text-xl font-bold mb-3">Discover the mission & story behind our company</h3>

          <p className="text-xs mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus turpis vitae ex vestibulum efficitur. Donec euismod diam eu turpis curshonct dolor tortor. Duis lacinia
          </p>

          <Button />
        </div>
      </div>
    </section>
  );
}

export default Mission;
