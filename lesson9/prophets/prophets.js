const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let images = document.createElement("img");
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        p1.textContent = prophets[i].birthdate;
        p2.textContent = "Place of birth: " + prophets[i].birthplace;
        images.setAttribute('src', prophets[i].imageurl);
        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(images);
        document.querySelector('div.cards').appendChild(card);
    }

  });