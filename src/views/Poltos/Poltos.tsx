import King from "./../../assets/basilikos-poltos.jpg";

export default function Poltos() {
  return (
    <div>
      <div className="flex text-center items-center justify-center bg-linear-to-t from-yellow-50/1 to-yellow-200/100">
        <img
          src={King}
          alt=""
          className="h-[350px] w-[350px] mt-40 object-cover sm:h-[450px] sm:w-[450px] rounded-full ml-15 border-amber-300 border-8 transition-shadow duration-300 cursor-pointer hover:shadow-xl hover:shadow-yellow-700"
        />
        <div className="mt-3 text-xl">
          <h3 className="text-gray-900 mt-15 font-sans font-semibold group-hover:underline group-hover:underline-offset-4">
            Βασιλικός Πολτός
          </h3>
          <p className="mt-5 text-pretty text-lg font-sans text-gray-900 font-light animate-fade-up p-9">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            velit iusto dolores sapiente? Minima explicabo nesciunt aperiam
            voluptatibus itaque, assumenda maiores autem, delectus voluptates
            sed labore aliquam nulla quaerat laboriosam. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Distinctio voluptatem earum
            soluta quis perferendis voluptatum magni nobis architecto, quasi
            odit ducimus consectetur? Explicabo autem quia sunt debitis ipsam,
            harum rerum.
          </p>
        </div>
      </div>
    </div>
  );
}
