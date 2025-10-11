import Modal from "./components/Modal.jsx";
import nia from "./assets/images/nia.jpeg";
import sarah from "./assets/images/sarah.png";
import margaret from "./assets/images/margaret.jpg";
import radha from "./assets/images/radha.jpg";
import hillary from "./assets/images/hillary.jpg";
import ameen from "./assets/images/ameen.jpg";
import NavBar from "./components/navbar.jsx";
import "./Home.css";
import christian from "./assets/images/christian.jpg";

const MeetTheTeam = () => {
  return (
    <div>
      <NavBar />
      <title>Meet The Team</title>
      <div style={{ marginTop: "80px" }}></div>

      <div className="team-grid">
        {/* Squeak */}
        <Modal
          trigger={
            <div className="team-card">
              <img src={nia} alt="duck card" className="team-img" />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Nia Savova</h4>
                <p className="team-role">President</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Nia Savova</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            President <br/>
            Data Science BS, Computer Science BS, Statistics BS (Math and Business Minors)<br/>
            Undergrad Senior (Graduating 2026) and First Year Grad<br/><br/>
            <a class="header-link" style={{fontSize:"30px", color:"white"}}title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/nia-savova-6b4108296"><i class="fa fa-linkedin"></i></a>
          </p>
          <img src={nia} style={{ width: "250px" }} alt="inside modal" />
        </Modal>

        {/* Lucky */}
        <Modal
          trigger={
            <div className="team-card">
              <img src={sarah} alt="duck card" className="team-img" />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Sarah Mendoza</h4>
                <p className="team-role">Vice President</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Sarah Mendoza</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Vice President<br/>
            Computer Science BS, Data Science BS<br />
            Undergrad Senior (Graduating 2026)<br />
          </p>
          <img src={sarah} style={{ width: "300px" }} alt="inside modal" />
        </Modal>

        {/* Bubbles */}
        <Modal
          trigger={
            <div className="team-card">
              <img src={margaret} alt="duck card" className="team-img" />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Margaret Alt</h4>
                <p className="team-role">Lead Project Manager</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Margaret Alt</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Lead Project Manager<br/>
            Statistics, Political Science<br />
            Undergrad Senior (Graduating 2026)<br />
          </p>
          <img src={margaret} style={{ width: "300px", height: "300px" }} alt="inside modal" />
        </Modal>

        {/* Fluffy */}
        <Modal
          trigger={
            <div className="team-card">
              <img src={hillary} alt="duck card" className="team-img" />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Hillary Bhuiyan</h4>
                <p className="team-role">Treasurer</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Hillary Bhuiyan</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Treasurer<br/>
            Financial Economics, Statistics<br/>
            Undergrad Senior (Graduating 2026)<br/>
          </p>
          <img src={hillary} style={{ width: "300px" }} alt="inside modal" />
        </Modal>
         <Modal
          trigger={
            <div className="team-card">
              <img src={radha} alt="duck card" className="team-img" />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Radha Chitgopkar</h4>
                <p className="team-role">Marketing</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Radha Chitgopkar</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Marketing<br/>
            Operations Research, Data Science<br/>
            Undergrad Senior (Graduating 2026)<br/>
          </p>
          <img src={radha} style={{ width: "300px" }} alt="inside modal" />
        </Modal>
         <Modal
          trigger={
            <div className="team-card">
              <img src={christian} alt="duck card" className="team-img" />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Christian Sheehan</h4>
                <p className="team-role">Outreach</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Christian Sheehan</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Outreach<br/>
            Computer Science BS, Data Science<br/>
            Undergrad Sophomore (Graduating 2028)<br/>
          </p>
          <img src={christian} style={{ width: "300px" }} alt="inside modal" />
        </Modal>
         <Modal
          trigger={
            <div className="team-card">
              <img src={ameen} alt="duck card" className="team-img" />
              <div style={{ padding: "8px" }}>
                <h4 style={{ margin: 0 }}>Ameen Zia</h4>
                <p className="team-role">Program Coordinator</p>
              </div>
            </div>
          }
        >
          <h2 style={{ fontFamily: "RionaSansBlack" }}>Ameen Zia</h2>
          <p style={{ fontFamily: "RionaSansMedium", fontSize: "15px" }}>
            Program Coordinator<br/>
            Computer Engineering, Mathematics<br />
            Undergrad Junior (Graduating 2027)<br />
          </p>
          <img src={ameen} style={{ width: "300px" }} alt="inside modal" />
        </Modal>
      </div>

      <br />
    </div>
  );
};

export default MeetTheTeam;
