import "./error.css";
import notfound from "../../assets/error.png";

const Error = () => {
   
  return (
    <div className="error404">
      <img src={notfound} alt={notfound} className="notfound" />
    </div>
  );
};

export default Error;
