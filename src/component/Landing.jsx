import Navigation from "./Navigation";
import background from "../assets/background.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Landing() {
  const style = {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4)),url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={style}>
      <Navigation />
      <div className="p-8 flex flex-col justify-center items-center w-full h-screen gap-2">
        <h1 className=" text-5xl text-white font-poppins font-semibold">
          Made <span className="text-primary">Fresh</span>. Priced{" "}
          <span className="text-primary">Fair</span>. 100%{" "}
          <span className="text-primary">Halal</span>.
        </h1>
        <p className="text-white">
          Taste the quality in every bite — freshly prepared meals made with
          care, flavor, and halal integrity.
        </p>
        <div className="mt-4 p-2.5 cursor-pointer  border-2 flex justify-center items-center  rounded-xl gap-2">
          <button className="relative text-xl overflow-hidden cursor-pointer text-white rounded-2xl border border-primary px-6 py-2.5 group flex justify-center items-center">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white gap-2 flex justify-center items-center">
              Book a table
              <ArrowForwardIcon></ArrowForwardIcon>
            </span>
            <span className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
