import "./Fotter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Todos los derechos reservados | Edgar Mayorga |{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
