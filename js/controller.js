'use strics'

$(onInit)

function onInit() {
    init();
    renderProtfilioGrid();
    renderProtfilioModal();
    $('.send-email').click(onSendEmail)
}

function renderProtfilioGrid() {
    const projects = getProjects();
    var strHTML = projects.map(proj => {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="proj-img img-fluid" src="${proj.img}" alt="">
        </a>
        <div class="portfolio-caption">
            <h4 class="proj-name">${proj.name}</h4>
            <p class="text-muted">${proj.labels}</p>
        </div>
        </div>
        `
    });
    $('.protfolio-content').html(strHTML);
}

function renderProtfilioModal() {
    const projects = getProjects();
    var strHTML = projects.map(proj => {
        return `<div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
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
                    <h2 class="project-name">${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <a href="#"><h2>see full project here</h2></a>
                    <img class="proj-img img-fluid d-block mx-auto" src="${proj.img}" alt="">
                    <p class="desc">${proj.desc}</p>
                    <ul class="list-inline">
                      <li class="date">Date: ${proj.publishedAt}</li>
                      <li>Client: Coding Academy</li>
                      <li class="label">${proj.labels}</li>
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
      </div>`
    })
    $('.modal-container').html(strHTML)
}

function onSendEmail() {
    const userEmail = $('.user-email').val();
    const userSub = $('.user-subject').val();
    const userBodyMsg = $('.user-msg').val();
    sendEmail(userEmail, userSub, userBodyMsg);
    clearInputs();
}

function clearInputs(){
    $('input').val('');
    $('textarea').val('');
}
