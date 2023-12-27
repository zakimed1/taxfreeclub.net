

function openPage(url) {
  window.location.href = url;
}

// Simulate loading delay (you can replace this with actual loading logic)
// setTimeout(function () {
// // Hide loading screen
// document.getElementById('loading-screen').style.display = 'none';
// // Show main content
// document.getElementById('main-content').style.display = 'block';
// }, 2250); // 3000 milliseconds (adjust as needed)

function openDiscordInvite(){
window.open("https://discord.gg/yuYsMAAsBx");
}window

var d = new Date();
document.getElementById('currentYear').innerText = d.getFullYear();

function showSidebar(){
const sidebar =document.querySelector('.sidebar')
sidebar.style.display ='flex'
}

function hideSidebar(){
const sidebar =document.querySelector('.sidebar')
sidebar.style.display ='none'
}

