$(window).on('load', () => {
  setTimeout(() => {
    $('#loading').addClass('loaded');
  }, 1200);
});

const closeModal = (modalId) => {
  $(modalId).modal('hide');
};

$('.navbar-nav>li>a , .dropdown-menu>a').on('click', (e) => {
  if(this.id != 'navbarDropdown' && $(e.target).hasClass('dropdown-toggle') != true){
    $('.navbar-collapse').collapse('hide');
  }
});

$('.button').on('click', (e) => {
  e.preventDefault();
  const bg = $(e.target)
  const linkUrl = bg.parent().attr('href');
 
  // ここにリンク先への遷移直前に実行する内容を記述
  
  bg.addClass('bgw');
  bg.removeClass('bg');
  setTimeout(() => {
    bg.addClass('bg');
    bg.removeClass('bgw');
  }, 600);   
 
  const action = () => {
    if ( linkUrl ){
      location.href = linkUrl; 
    }
    // ここにリンク先への移動直後に実行する内容を記述
   
  }
  setTimeout(action,600);
});

/*$('#sentemail').on('click', (e) => {
  e.preventDefault();
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "gettodowithallhaste9@gmail.com",
    Password : "B5F0EC81D6A025E3431E6ECF22885B36C033",
    To : 'gettodowithallhaste9@gmail.com',
    From : "fenway934ryo.homerun@icloud.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
    message => console.log(message)
  ); 
});*/