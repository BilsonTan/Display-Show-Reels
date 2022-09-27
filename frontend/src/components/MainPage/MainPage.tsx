import "./MainPage.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import {FC} from "react";

const MainPage: FC= () => {
  const nav = useNavigate();
  const handleCreateReel = () => {
    nav("/create-reel");
  };
  return (
    <div className="App">
      <header className="App-header">
        <>
          <div className="welcome-title">Welcome!</div>
          <div className="button-container">
            {" "}
            <Button className="create-reel" onClick={handleCreateReel}>
              Create Reel
            </Button>
          </div>
        </>
      </header>
    </div>
  );
};

export default MainPage;
