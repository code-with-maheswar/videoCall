import '../App.css';
export default function LandingPage() {
  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Apna Video Call</h2>
        </div>
        <div className="navList">
          <p>Join As Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
