import "./CastHeadshot.scss";
import poster from "../../../../../../assets/poster.jpg";

const CastHeadshot = () => {
  return (
    <span className="cast-headshot">
      <div className="cast-headshot__image">
        <img src={poster} alt="" />
      </div>

      <span>Five Hargraeves</span>
    </span>
  );
};

export default CastHeadshot;
