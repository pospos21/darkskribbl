// ==UserScript==
// @name         Skribbl.io Dark Mode
// @author       positivelypositive
// @match        https://skribbl.io/
// @require      http://code.jquery.com/jquery-3.5.1.min.js
// @require      https://raw.githubusercontent.com/pie6k/jquery.initialize/master/jquery.initialize.js
// ==/UserScript==

/* globals jQuery, $, waitForKeyElements */
//Credit to pie6k on GitHub for jquery.initialize.js.

var accessory = 'black';
main()

function main(){
    $("#formLogin").append($(`<div style="background-color:transparent; position:relative; float:left;
         top:0px; width:25%; text-align:center; margin:0;">
         <input id="black" name="black" style="width:16px; height:16px;" type="radio">
         <label for="black" style="all: initial; color:white; font-family:calibri; width:25%;">Black</label><br>`))
    .append($(`<div style="background-color:transparent; position:relative; float:left;
         top:0px; width:25%; text-align:center; margin:0;">
         <input id="grey" name="grey" style="width:16px; height:16px;" type="radio">
         <label for="grey" style="all: initial; color:white; font-family:calibri; width:25%;">Grey</label><br>`))
    .append($(`<div style="background-color:transparent; position:relative; float:left;
         top:0px; width:25%; text-align:center; margin:0;">
         <input id="carbon" name="carbon" style="width:16px; height:16px;" type="radio">
         <label for="carbon" style="all: initial; color:white; font-family:calibri; width:25%;">Carbon</label><br>`))
    .append($(`<div style="background-color:transparent; position:relative; float:left;
         top:0px; width:25%; text-align:center; margin:0;">
         <input id="metal" name="metal" style="width:16px; height:16px;" type="radio">
         <label for="metal" style="all: initial; color:white; font-family:calibri; width:25%;">Metallic</label><br>`));

    $("body").css('background-image', 'none');
    var preset = localStorage.getItem('background');
    if (preset !== null){
        if (preset == "black"){black();}
        if (preset == "grey"){grey();}
        if (preset == "carbon"){carbon();}
        if (preset == "metal"){metal();}
    }
    else{black();}

    $(".logo").attr('src', 'https://i.imgur.com/qsHVGvg.png');
    $(".loginPanelContent").css('background-color','transparent');
    $("#loginAvatarCustomizeContainer").css('background-color','transparent');
    $("#loginAvatarCustomizeContainer").css('border','transparent');
    $(".btn").css('background-color','transparent');
    $(".btn").css('border-color','white');
    $(".btn").css('color','white');
    $(".btn").css('padding','2px 16px');
    $(".btn").css('font-size','16px');
    $(".btn").css('border-radius','4px');
    $(".form-control").css('background-color', 'transparent');
    $(".form-control").css('color', 'white');
    $("body").css('font-family','calibri');
    $("body").css('color','white');
    $(".avatarArrow").css('width','25px');
    $(".form-control").css('padding','4px 12px');
    $(".avatarArrow").css('height','25px');
    $("#logoAvatarContainer").remove();
    $("[class='avatarArrow avatarArrowLeft']").css('background-image', 'url(https://i.imgur.com/aM3Wi4I.png)');
    $("[class='avatarArrow avatarArrowRight']").css('background-image', 'url(https://i.imgur.com/aM3Wi4I.png)');
    $("#audio").css('width','32px');
    $("#audio").css('height','32px');
    $("#audio").css({
        left: "unset",
        right: "0px"
    });
    if ($('#audio').attr("style") == 'width: 32px; height: 32px; left: unset; right: 0px;'){
        $("#audio").css('background', 'url(https://i.imgur.com/EalUCVJ.gif)');
    }
    else if ($('#audio').attr("style") == 'background-image: url("res/audio_off.gif"); width: 32px; height: 32px; left: unset; right: 0px;'){
        $("#audio").css('background', 'url(https://i.imgur.com/EbWX9aT.gif)');
    }

    $(".gameHeader").css('background-color', 'transparent');
    $("#timer").css('background', 'transparent');
    $('.modal-content').css('background-color', accessory);
    $('.score').css('color', 'white');
    $('.rank').css('color', 'white');
    $('.tool').css('background-color', 'transparent');
    $("#boxChat").css('background', 'transparent');
    $(".size").css('background-color','white');
    $(".brushSize").css('background-color','transparent');
    $('.lobbyName').css('color', 'white');

    $('.player').css('background', 'transparent');
    $('.lobbyContent').css('background-color', 'transparent');
    $('.lobbyName').css('background-color', 'transparent');
    $('.lobbyName').css('background-color', 'transparent');
    $('.invite-overlay').remove();
    $('#invite').css('background-color', 'transparent');
    $("#containerChat").css('background', 'transparent');
    $("#containerFreespace").css('background', 'transparent');

    setInterval(function(){
        $('.player').css('background', 'transparent');

        $('#containerGamePlayers').children('.player').children().children(".name").css('color', 'white');
        $('#containerGamePlayers').children('.player').children().children(".score").css('color', 'white');
        $('#containerGamePlayers').children('.player').children().css('color', 'white');

        $('#containerGamePlayers').children("[class='player guessedWord']").children().children(".name").css('color', 'rgb(86, 206, 39)');
        $('#containerGamePlayers').children("[class='player guessedWord']").children().children(".score").css('color', 'rgb(86, 206, 39)');
        $('#containerGamePlayers').children("[class='player guessedWord']").children().css('color', 'rgb(86, 206, 39)');
    }, 20);
}

$.initialize('p[style="color: rgb(0, 0, 0);"]', function(){
    $(this).css("color", "white");
});

$.initialize('p[style="color: rgb(0, 0, 0); background: transparent;"]', function(){
    $(this).css("color", "white");
});

$.initialize('p', function(){
    $(this).css("background", "transparent");
    if ($(this).text().includes("The word was '")){
        $('.player').css('background', 'transparent');
    }
});

$.initialize('.word', function(){
    $(this).css('background-color', accessory);
});

$('#audio').click(function() {
    if ($('#audio').attr("style").includes("res/audio_off.gif")){
        $("#audio").css('background', 'url(https://i.imgur.com/EbWX9aT.gif)');
    }
    else if ($('#audio').attr("style").includes("res/audio.gif")){
        $("#audio").css('background', 'url(https://i.imgur.com/EalUCVJ.gif)');
    }
});

function black(){
    localStorage.setItem("background","black");
    $("body").css('background-image', 'none');
    $("body").css('background-color', 'black');
    accessory = 'black';
    $('#black').prop("checked",true);
    $('#grey').prop("checked",false);
    $('#carbon').prop("checked",false);
    $('#metal').prop("checked",false);
}

function grey(){
    localStorage.setItem("background","grey");
    $("body").css('background-image', 'none');
    $("body").css('background-color', '#2c2f33');
    accessory = '#2c2f33';
    $('#grey').prop("checked",true);
    $('#black').prop("checked",false);
    $('#carbon').prop("checked",false);
    $('#metal').prop("checked",false);
}

function metal(){
    localStorage.setItem("background","metal");
    $("body").css('background-image', 'url(https://i.imgur.com/7Prf6.jpg)');
    accessory = 'rgb(35,35,35)';
    $('#metal').prop("checked",true);
    $('#black').prop("checked",false);
    $('#carbon').prop("checked",false);
    $('#grey').prop("checked",false);
}

function carbon(){
    localStorage.setItem("background","carbon");
    $("body").css('background-image', 'url(https://st.depositphotos.com/1915171/3376/v/600/depositphotos_33765721-stock-illustration-carbon-fiber-texture-seamless-vector.jpg)');
    accessory = 'rgb(25,25,25)';
    $('#carbon').prop("checked",true);
    $('#black').prop("checked",false);
    $('#metal').prop("checked",false);
    $('#grey').prop("checked",false);
}

$('#black').click(function() {
    black();
});

$('#grey').click(function() {
    grey();
});

$('#metal').click(function() {
    metal();
});

$('#carbon').click(function() {
    carbon();
});