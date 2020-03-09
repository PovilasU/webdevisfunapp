import React from "react";
//import favicon1 from "./images/facivon_v1.JPG";
//import favicon2 from "./images/facivon_v1.JPG";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Web dev is fun</h1>
      </header>
      <p>This is React App</p>
      <h2>Projects</h2>
      <ul>
        <li>
          <a
            href="https://iseewavingwaterthroughmywindown.s3.amazonaws.com/index.html"
            target="_blank"
          >
            I see waving water through the window
          </a>
        </li>
        <li>
          <a
            href="https://povilas-angularjs-calc.s3.amazonaws.com/index.html"
            target="_blank"
          >
            Electricity price calc demo (Angular js 2019)
          </a>
        </li>
        <li>
          <a
            href="https://povilas.s3-eu-west-1.amazonaws.com/index.html"
            target="_blank"
          >
            Crypto currency website (03 2019)
          </a>
        </li>
        <li>
          <a
            href="https://productmanangercrudr-20190405020141-hostingbucket-linux.s3.amazonaws.com/index.html"
            target="_blank"
          >
            Products Manager Demo (CRUD app, ReactJs, LocalStorage 2019)
          </a>
        </li>
        <ul>
          <li>future projects todo</li>
          <li>
            <a href="" target="_blank">
              travel Gallery
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              blog
            </a>
          </li>
        </ul>
        <li>
          <a href="#"> Steps: How this app page was developed </a>
          <ol>
            <li>everything started at 09/03/31</li>
            <li>
              installed react app
              <ul>
                <li>npx create-react-app</li>
              </ul>
            </li>
            <li>Created git repository</li>
            <li>Deployed react app to AWS Aplify</li>
            <li>
              <span>favicon is a small icon visable in webrowser tab</span>
              Created favicon &nbsp;
              <a href="https://favicon.io/favicon-generator/">
                https://favicon.io/favicon-generator/
              </a>
              <br></br>
              <a href="https://www.codepile.net/pile/LmMv8dkG" target="_blank">
                favicon html code snippet&nbsp;
              </a>
              <a href={require("./images/facivon_v1.JPG")} target="_blank">
                &nbsp; facivon_v1
              </a>
              <a href={require("./images/facivon_v2.JPG")} target="_blank">
                &nbsp; facivon_v2
              </a>
              <li></li>
            </li>
          </ol>
        </li>
      </ul>
      <footer>
        <a
          href="https://www.linkedin.com/in/povilas-urbonas-0a6a53a4/"
          target="_blank"
        >
          LinkedIn
        </a>
        <a href="https://github.com/PovilasU" target="_blank">
          GitHub
        </a>
        <span>2020</span>
      </footer>
    </div>
  );
}

export default App;
