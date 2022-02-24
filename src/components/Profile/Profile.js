import profileImg from "./assets/h6-perfil.png";
import "./Profile.css";

const Profile = () => {
  return (
    <section className="profile" id="perfil">
      <div className="profileMain">
        <div className="picture">
          <figure>
            <img src={profileImg} alt="foto de edgar mayorga" />
          </figure>
        </div>
        <div className="description">
          <p>
            Nació en el <strong>Municipio de El Colegio</strong>, es médico
            veterinario egresado de la
            <strong>
              {" "}
              Universidad ciencias Aplicadas y Ambientales UDCA,{" "}
            </strong>
            con maestría en ciencias políticas y especialización en
            <strong> resolución de conflictos</strong> de la Pontificia
            Universidad Javeriana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
