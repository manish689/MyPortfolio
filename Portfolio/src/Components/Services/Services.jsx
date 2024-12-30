import "./Services.css";
import web from "../../assets/web.png"

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-title">Services</div>
      <div className="services-cards">
        <div className="services-card">
          <img src={web} alt="Service 1" />
          <h2>Web Development</h2>
          <h3>Languages and Tools</h3>
        </div>

        <div className="services-card">
          <img src={web} alt="Service 1" />
          <h2>Web Development</h2>
          <h3>Languages and Tools</h3>
        </div>

        <div className="services-card">
          <img src={web} alt="Service 1" />
          <h2>Web Development</h2>
          <h3>Languages and Tools</h3>
        </div>

        <div className="services-card">
          <img src={web} alt="Service 1" />
          <h2>Web Development</h2>
          <h3>Languages and Tools</h3>
        </div>

        <div className="services-card">
          <img src={web} alt="Service 1" />
          <h2>Web Development</h2>
          <h3>Languages and Tools</h3>
        </div>

        <div className="services-card">
          <img src={web} alt="Service 1" />
          <h2>Web Development</h2>
          <h3>Languages and Tools</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
