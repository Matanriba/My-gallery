'use strict'
console.log('Starting up');

var gProjs = [
    {
        "id": "Minesweeper",
        "name": "Minesweeper",
        "title": "Good old fashioned Minesweeper",
        "desc": "A Retro Styled 8 bit mine sweeper game with classic design and new features",
        "url": "https://matanriba.github.io/MineSweeper/",
        "publishedAt": 1627056004000,
        "labels": ["Matrixes", "New features", "Mouse Events"]
    },
    {
        "id": "Bookstore",
        "name": "Bookstore",
        "title": "A very basic bookstore design",
        "desc": "The very beginning of designing your very own online book store",
        "url": "https://matanriba.github.io/Bookstore/",
        "publishedAt": 1627573504000,
        "labels": ["New Layout", "DB operations"]
    },
    {
        "id": "GuessMe",
        "name": "GuessMe",
        "title": "Let the genie Guess who you're thinking of",
        "desc": "A smart self-learning game of intuition where the genie guesses who you are thinking of!",
        "url": "https://matanriba.github.io/GuessMe/",
        "publishedAt": 1627836244000,
        "labels": ["Bootstrap", "jQuery", "DB operations"]
    },
    {
      "id": "Touch-nums",
      "name": "Touch-nums",
      "title": "Touch those numbers",
      "desc": "A game where you must click all the numbers on screen in order",
      "url": "https://matanriba.github.io/touch-nums/",
      "publishedAt": 1627836244000,
      "labels": ["Timed", "Matrixes", "Early Project"]
  }
]

function onInit() {
    renderProjs()
}

function renderProjs() {
    // console.log(gProjs);
    var strHTMLs = gProjs.map(function (proj) {
        return (`
            <div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal('${proj.id}')">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
            <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
            </div>
            </div>
            <img class="img-fluid" src="../img/${proj.id}-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
            </div>
            </div>
            `)
    }).join('')
    var elPortfolio = document.querySelector('.proj-container');
    elPortfolio.innerHTML = strHTMLs;
}

function renderModal(projId) {
    var currProj = getProjById(projId)
    var strHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${currProj.name}</h2>
                <p class="item-intro text-muted">${currProj.title}</p>
                <img class="img-fluid d-block mx-auto" src="../img/${currProj.id}-full.jpg" alt="">
                <p>${currProj.desc}</p>
                <ul class="list-inline">
                  <li>Link: <a href="${currProj.url}" class="badge badge-primary">${currProj.id}</a></li>
                  <li>Publish Date: ${new Date(currProj.publishedAt).toLocaleString()}</li>
                  <li>Client: Coding Academy</li>
                  <li>Highlights: ${currProj.labels.join(' , ')}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    var modalArea = document.querySelector('.portfolio-modal')
    modalArea.innerHTML = strHTML
}

function getProjById(projId) {
    var proj = gProjs.find(function (proj) {
        return projId === proj.id
    })
    return proj
}

function onSendMsg() {
    var elEmail = document.querySelector('[name=email]');
    var eMail = elEmail.value;
    var elName = document.querySelector('[name=name]');
    var name = elName.value;
    var elMsg = document.querySelector('[name=msg]');
    var msg = elMsg.value;

    if (!eMail || !msg || !name) return;
    else var newLink = `https://mail.google.com/mail/u/0/?fs=1&to=matanriba@gmail.com&su=Message from ${name} @ ${eMail}&body=${msg}&tf=cm`

    window.location.assign(newLink);
}