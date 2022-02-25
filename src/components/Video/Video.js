// import backVideo from "./assets/h16-img-video-edgar.png";
import "./Video.css";

const Video = () => {
  return (
    <section className="video">
      <div className="backVideo">
        {/* <figure>
          <img src={backVideo} alt="edgar mayorga comunidad" />
        </figure> */}
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=316&href=https%3A%2F%2Fwww.facebook.com%2FSoyMayorguista%2Fvideos%2F2781252622178229%2F&show_text=false&width=560&t=0"
          width="560"
          height="316"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen="true"
          title="edgar mayorga campaña"
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
