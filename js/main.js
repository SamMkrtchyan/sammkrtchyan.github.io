// N js
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $('#client-1').attr('src', 'images/clients/client_1_dark.png').css({filter: 'initial'});
    $('#client-2').attr('src', 'images/clients/client_2_dark.png').css({filter: 'initial'});
    $('#client-5').attr('src', 'images/clients/client_5_dark.png').css({filter: 'initial'});
    $('#client-8').attr('src', 'images/clients/client_8_dark.png').css({filter: 'initial'});
}