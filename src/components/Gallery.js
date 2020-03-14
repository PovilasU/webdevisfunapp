import React from "react";
import Spinner from "../img/planets/spinner.svg";
import Sun from "../img/planets/sun.jpg";
import Mercury from "../img/planets/mercury.jpg";
import Venus from "../img/planets/venus.jpg";
import Earth from "../img/planets/earth.jpg";
import Mars from "../img/planets/mars.jpg";
import Jupiter from "../img/planets/jupiter.jpg";
import Saturn from "../img/planets/saturn.jpg";
import Uranus from "../img/planets/uranus.jpg";
import Neptune from "../img/planets/neptune.jpg";
// Dwarf planets
import Ceres from "../img/planets/Ceres_dwarf_planet.jpg";
import Pluto from "../img/planets/pluto.jpg";
import Haumea from "../img/planets/haumea_dwarf_planet.jpg";
import Makemake from "../img/planets/Makemake_dwarf_planet.jpg";
import Eris from "../img/planets/eris_dwarf_planet.jpeg";

export default Gallery => {
  return (
    <div>
      <h1>Solar System gallery</h1>
      <h2></h2>
      <p>Technologies used:</p>
      <p>
        <a href="https://github.com/aFarkas/lazysizes" target="_blank">
          lazySizes
        </a>
        &nbsp; is the ultimate and lightweight lazyLoader which lazy loads
        images (including responsive images (picture/srcset)), iframes and
        scripts. It is written in VanillaJS and with high performance in mind.
        Simply add the JS to your website and put the class lazyload to all
        elements, which should be lazy loaded.
      </p>

      <img
        src={Spinner}
        data-src={Sun}
        className="lazyload"
        alt="Image of the sun"
      />

      <img
        src={Spinner}
        data-src={Mercury}
        className="lazyload"
        alt="planet Mercury"
      />
      <img
        src={Spinner}
        data-src={Venus}
        className="lazyload"
        alt="planet Venus"
      />
      <img
        src={Spinner}
        data-src={Earth}
        className="lazyload"
        alt="planet Earth"
      />
      <img
        src={Spinner}
        data-src={Mars}
        className="lazyload"
        alt="planet Mars"
      />
      <img
        src={Spinner}
        data-src={Jupiter}
        className="lazyload"
        alt="planet Jupiter"
      />
      <img
        src={Spinner}
        data-src={Ceres}
        className="Ceres"
        alt="dwarf planet Ceres"
      />
      <img
        src={Spinner}
        data-src={Saturn}
        className="lazyload"
        alt="planet Saturn"
      />
      <img
        src={Spinner}
        data-src={Uranus}
        className="lazyload"
        alt="planet Uranus"
      />
      <img
        src={Spinner}
        data-src={Neptune}
        className="lazyload"
        alt="planet Neptune"
      />
      <img
        src={Spinner}
        data-src={Pluto}
        className="lazyload"
        alt="dwarf planet Pluto"
      />
      <img
        src={Spinner}
        data-src={Haumea}
        className="lazyload"
        alt="dwarf planet Haumea"
      />
      <img
        src={Spinner}
        data-src={Makemake}
        className="lazyload"
        alt="dwarf planet Makemake"
      />
      <img
        src={Spinner}
        data-src={Eris}
        className="lazyload"
        alt="dwarf planet Eris"
      />
    </div>
  );
};
