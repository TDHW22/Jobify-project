import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Testing";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <h1>
          job <span>tracking</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta
          fugiat itaque repellat voluptates eum, tenetur nulla ipsam quos
          pariatur neque maxime? Fuga voluptatibus quidem aliquam neque debitis
          doloremque, dignissimos pariatur modi, impedit ab maiores eos quisquam
          necessitatibus mollitia, soluta illo dolorum in illum inventore id
          omnis et. Dolorem, deleniti.
        </p>
        <Link to="/register" className="btn btn-hero">
          Login/Register
        </Link>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
