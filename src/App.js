import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Profile Card</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard image={AlexaImage} title="Alexa" handle="@alexa" />
            </div>
            <div className="column is-4">
              <ProfileCard
                image={CortanaImage}
                title="Cortana"
                handle="@cortana"
              />
            </div>
            <div className="column is-4">
              <ProfileCard image={SiriImage} title="Siri" handle="@Siri" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
