var mainElement = document.querySelector('main');
var renderers = {};


function createModal() {
  var element = document.createElement('div');
  element.classList.add('modal');
  element.innerHTML = `<div class="body">
  <div class="controls">
    <button>close</button>
  </div>
  <div class="content"></div>
</div>
<div class="underlay"></div>`;
  return element;
}

function showModal(contentElement) {
  modalContentElement.innerHTML = '';
  modalContentElement.appendChild(contentElement);
  modalElement.classList.add('open');
}

function hideModal() {
  modalElement.classList.remove('open');
}


var modalElement = createModal();
var modalContentElement = modalElement.querySelector('.content');
var modalCloseButton = modalElement.querySelector('.controls button');
modalCloseButton.addEventListener('click', hideModal);
document.body.appendChild(modalElement);



/**************************************\
\**************************************/



function loadData(url, done) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = JSON.parse(xhr.responseText);
    done(response);
  };
  xhr.open('get', url);
  xhr.send();
}

function loadPeople(done) {
  loadData('https://swapi.co/api/people', done);
}

function loadPlanet(url, done) {
  loadData(url, done);
}



/**************************************\
\**************************************/


function renderPeople(data) {
  mainElement.textContent = '';
  var navElement = document.createElement('nav');

  if (data.previous) {
    var previousButton = document.createElement('button');
    previousButton.classList.add('previous');
    previousButton.textContent = 'previous';
    previousButton.addEventListener('click', function() {
      loadData(data.previous, renderPeople);
    });
    navElement.appendChild(previousButton);
  }

  if (data.next) {
    var nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'next';
    nextButton.addEventListener('click', function() {
      loadData(data.next, renderPeople);
    });
    navElement.appendChild(nextButton);
  }

  var cardsElement = document.createElement('div');
  cardsElement.classList.add('cards');

  mainElement.appendChild(cardsElement);
  mainElement.appendChild(navElement);

  data.results.forEach(function(object) {
    var sectionElement = document.createElement('section');

    var genderSymbol;
    switch (object.gender) {
      case 'male':
        genderSymbol = '♂';
        break;
      case 'female':
        genderSymbol = '♀';
        break;
      default:
        genderSymbol = '?';
    }

    sectionElement.innerHTML = `
    <header>
      <h1>
        ${object.name}
        <span class="gender" title="Gender: ${object.gender}">${genderSymbol}</span>
      </h1>
    </header>
    <div>

      <button>Tattooine</button>

      <ul>
        <li>
          <span class="label">Birth Year:</span>
          <span class="value">${object.birth_year}</span>
        </li>
        <li>
          <span class="label">Eye Color:</span>
          <span class="value">${object.eye_color}</span>
        </li>
        <li>
          <span class="label">Skin Color:</span>
          <span class="value">${object.skin_color}</span>
        </li>
        <li>
          <span class="label">Hair Color:</span>
          <span class="value">${object.hair_color}</span>
        </li>
        <li>
          <span class="label">Height:</span>
          <span class="value">${(object.height / 100).toFixed(2)}m</span>
        </li>
        <li>
          <span class="label">Mass:</span>
          <span class="value">${object.mass}kg</span>
        </li>
      </ul>
    </div>
    `;


    sectionElement
      .querySelector('button')
      .addEventListener('click', function() {
        loadPlanet(object.homeworld, renderPlanet);
      });

    cardsElement.appendChild(sectionElement);
  });
}
renderers.people = renderPeople;

// -------------------------------------

function renderSpecies(data) {
  mainElement.textContent = '';
  var navElement = document.createElement('nav');

  if (data.previous) {
    var previousButton = document.createElement('button');
    previousButton.classList.add('previous');
    previousButton.textContent = 'previous';
    previousButton.addEventListener('click', function() {
      loadData(data.previous, renderSpecies);
    });
    navElement.appendChild(previousButton);
  }

  if (data.next) {
    var nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'next';
    nextButton.addEventListener('click', function() {
      loadData(data.next, renderSpecies);
    });
    navElement.appendChild(nextButton);
  }

  var cardsElement = document.createElement('div');
  cardsElement.classList.add('cards');

  mainElement.appendChild(cardsElement);
  mainElement.appendChild(navElement);

  data.results.forEach(function(object) {
    var sectionElement = document.createElement('section');

    var genderSymbol;
    switch (object.gender) {
      case 'male':
        genderSymbol = '♂';
        break;
      case 'female':
        genderSymbol = '♀';
        break;
      default:
        genderSymbol = '?';
    }

    sectionElement.innerHTML = `
    <header>
      <h1>
        ${object.name}
      </h1>
    </header>
    <div>

      <button>Test</button>

      <ul>
        <li>
          <span class="label">Birth Year:</span>
          <span class="value">${object.birth_year}</span>
        </li>
        <li>
          <span class="label">Eye Color:</span>
          <span class="value">${object.eye_color}</span>
        </li>
        <li>
          <span class="label">Skin Color:</span>
          <span class="value">${object.skin_color}</span>
        </li>
        <li>
          <span class="label">Hair Color:</span>
          <span class="value">${object.hair_color}</span>
        </li>
        <li>
          <span class="label">Height:</span>
          <span class="value">${(object.height / 100).toFixed(2)}m</span>
        </li>
        <li>
          <span class="label">Mass:</span>
          <span class="value">${object.mass}kg</span>
        </li>
      </ul>
    </div>
    `;


    sectionElement
      .querySelector('button')
      .addEventListener('click', function() {
        loadPlanet(object.homeworld, renderPlanet);
      });

    cardsElement.appendChild(sectionElement);
  });
}
renderers.species = renderSpecies;

// -------------------------------------

function renderStarships(data) {
  mainElement.textContent = '';
  var navElement = document.createElement('nav');

  if (data.previous) {
    var previousButton = document.createElement('button');
    previousButton.classList.add('previous');
    previousButton.textContent = 'previous';
    previousButton.addEventListener('click', function() {
      loadData(data.previous, renderStarships);
    });
    navElement.appendChild(previousButton);
  }

  if (data.next) {
    var nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'next';
    nextButton.addEventListener('click', function() {
      loadData(data.next, renderStarships);
    });
    navElement.appendChild(nextButton);
  }

  var cardsElement = document.createElement('div');
  cardsElement.classList.add('cards');

  mainElement.appendChild(cardsElement);
  mainElement.appendChild(navElement);

  data.results.forEach(function(object) {
    var sectionElement = document.createElement('section');

    sectionElement.innerHTML = `
    <header>
      <h1>
        ${object.name}
      </h1>
    </header>
    <div>
      <ul>
        <li>
          <span class="label">MGLT:</span>
          <span class="value">${object.MGLT}</span>
        </li>
        <li>
          <span class="label">Cargo Capacity:</span>
          <span class="value">${object.cargo_capacity}</span>
        </li>
        <li>
          <span class="label">Consumables:</span>
          <span class="value">${object.consumables}</span>
        </li>
        <li>
          <span class="label">Cost in Credits:</span>
          <span class="value">${object.cost_in_credits}</span>
        </li>
        <li>
          <span class="label">Crew:</span>
          <span class="value">${object.crew}</span>
        </li>
        <li>
          <span class="label">Hyperdrive Rating:</span>
          <span class="value">${object.hyperdrive_rating}</span>
        </li>
        <li>
          <span class="label">Length:</span>
          <span class="value">${object.length}</span>
        </li>
        <li>
          <span class="label">Manufacturer:</span>
          <span class="value">${object.manufacturer}</span>
        </li>
        <li>
          <span class="label">Max Atmosphere Speed:</span>
          <span class="value">${object.max_atmosphering_speed}</span>
        </li>
        <li>
          <span class="label">Model:</span>
          <span class="value">${object.model}</span>
        </li>
        <li>
          <span class="label">Passengers:</span>
          <span class="value">${object.passengers}</span>
        </li>
        <li>
          <span class="label">Starship Class:</span>
          <span class="value">${object.starship_class}</span>
        </li>
      </ul>
    </div>
    `;

    cardsElement.appendChild(sectionElement);
  });
}

// -------------------------------------

function renderVehicles(data) {
  mainElement.textContent = '';
  var navElement = document.createElement('nav');

  if (data.previous) {
    var previousButton = document.createElement('button');
    previousButton.classList.add('previous');
    previousButton.textContent = 'previous';
    previousButton.addEventListener('click', function() {
      loadData(data.previous, renderVehicles);
    });
    navElement.appendChild(previousButton);
  }

  if (data.next) {
    var nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'next';
    nextButton.addEventListener('click', function() {
      loadData(data.next, renderVehicles);
    });
    navElement.appendChild(nextButton);
  }

  var cardsElement = document.createElement('div');
  cardsElement.classList.add('cards');

  mainElement.appendChild(cardsElement);
  mainElement.appendChild(navElement);

  data.results.forEach(function(object) {
    var sectionElement = document.createElement('section');

    sectionElement.innerHTML = `<header>
      <h1>${object.name}</h1>
    </header>
    <div>
      <ul>
        <li>
          <span class="label">Cargo Capacity:</span>
          <span class="value">${object.cargo_capacity}</span>
        </li>
        <li>
          <span class="label">Consumables:</span>
          <span class="value">${object.consumables}</span>
        </li>
        <li>
          <span class="label">Cost in Credits:</span>
          <span class="value">${object.cost_in_credits}</span>
        </li>
        <li>
          <span class="label">Crew:</span>
          <span class="value">${object.crew}</span>
        </li>
        <li>
          <span class="label">Length:</span>
          <span class="value">${object.length}</span>
        </li>
        <li>
          <span class="label">Manufacturer:</span>
          <span class="value">${object.manufacturer}</span>
        </li>
        <li>
          <span class="label">Max Atmosphere Speed:</span>
          <span class="value">${object.max_atmosphering_speed}</span>
        </li>
        <li>
          <span class="label">Model:</span>
          <span class="value">${object.model}</span>
        </li>
        <li>
          <span class="label">Passengers:</span>
          <span class="value">${object.passengers}</span>
        </li>
        <li>
          <span class="label">Vehicle Class:</span>
          <span class="value">${object.vehicle_class}</span>
        </li>
      </ul>
    </div>`;

    cardsElement.appendChild(sectionElement);
  });
}
renderers.vehicles = renderVehicles;


// -------------------------------------

function renderFilms(data) {
  mainElement.textContent = '';
  var navElement = document.createElement('nav');

  if (data.previous) {
    var previousButton = document.createElement('button');
    previousButton.classList.add('previous');
    previousButton.textContent = 'previous';
    previousButton.addEventListener('click', function() {
      loadData(data.previous, renderFilms);
    });
    navElement.appendChild(previousButton);
  }

  if (data.next) {
    var nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'next';
    nextButton.addEventListener('click', function() {
      loadData(data.next, renderFilms);
    });
    navElement.appendChild(nextButton);
  }

  var cardsElement = document.createElement('div');
  cardsElement.classList.add('cards');

  mainElement.appendChild(cardsElement);
  mainElement.appendChild(navElement);

  data.results.forEach(function(object) {
    var sectionElement = document.createElement('section');

    sectionElement.innerHTML = `<header>
      <h1><small>${object.episode_id}</small> ${object.title}</h1>
    </header>
    <div class="opening-crawl">
      <div class="text">
        ${object.opening_crawl.split('\n').join('<br/>')}
      </div>
    </div>
    <div>
      <ul>
        <li>
          <span class="label">Director:</span>
          <span class="value">${object.director}</span>
        </li>
        <li>
          <span class="label">Producer:</span>
          <span class="value">${object.producer}</span>
        </li>
        <li>
          <span class="label">Release Date:</span>
          <span class="value">${object.release_date}</span>
        </li>
      </ul>
    </div>`;

    cardsElement.appendChild(sectionElement);
  });
}
renderers.films = renderFilms;



/**************************************\
\**************************************/


function renderPlanet(planet) {
  var sectionElement = document.createElement('section');
  sectionElement.classList.add('planet');
  sectionElement.innerHTML = `<header>
    <h1>${planet.name}</h1>
  </header>
  <div>
    <ul>
      <li>
        <span class="label">Climate:</span>
        <span class="value">${planet.climate}</span>
      </li>
      <li>
        <span class="label">Diameter:</span>
        <span class="value">${planet.diameter}</span>
      </li>
      <li>
        <span class="label">Gravity:</span>
        <span class="value">${planet.gravity}</span>
      </li>
      <li>
        <span class="label">Orbital Period:</span>
        <span class="value">${planet.orbital_period}</span>
      </li>
    </ul>
    <ul>
      <li>
        <span class="label">Population:</span>
        <span class="value">${planet.population}</span>
      </li>
      <li>
        <span class="label">Rotation Period:</span>
        <span class="value">${planet.rotation_period}</span>
      </li>
      <li>
        <span class="label">Surface Water:</span>
        <span class="value">${planet.surface_water}</span>
      </li>
      <li>
        <span class="label">Terrain:</span>
        <span class="value">${planet.terrain}</span>
      </li>
    </ul>
  </div>`;
  showModal(sectionElement);
}


/**************************************\
\**************************************/


function renderUnimplemented() {
  mainElement.textContent = 'Doh! Not done yet.';
}


function renderMenu(data) {
  var menuListElement = document.querySelector('body > header ul');

  var keys = Object.keys(data);
  keys.forEach(function(key) {
    var liElement = document.createElement('li');

    var aElement = document.createElement('a');
    aElement.textContent = key;
    aElement.addEventListener('click', function() {
      if (!renderers[key]) return renderUnimplemented();
      loadData(data[key], renderers[key]);
    });

    liElement.appendChild(aElement);

    menuListElement.appendChild(liElement);
  });
}





loadPeople(renderPeople);
loadData('https://swapi.co/api/people/', renderMenu);