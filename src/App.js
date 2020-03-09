import React from "react";

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
            <li>
              installed react app
              <ul>
                <li>npx create-react-app</li>
              </ul>
            </li>
            <li>Created git repository</li>
            <li>Deployed react app to AWS Aplify</li>
            <li>
              Created favicon
              <a href="https://favicon.io/favicon-generator/">
                https://favicon.io/favicon-generator/
              </a>
            </li>
          </ol>
          <p></p>
          {/* //https://favicon.io/favicon-generator/ */}
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
