import backVideo from "./assets/h16-img-video-edgar.png";
import "./Video.css";

const Video = () => {
  return (
    <section className="video">
      <div className="backVideo">
        <figure>
          <img src={backVideo} alt="edgar mayorga comunidad" />
        </figure>
      </div>
    </section>
  );
};

export default Video;
