const downloadBtn = document.querySelector(".btn-download-timer");
const fileLink = "https://unsplash.com/photos/fgxxyYmSkRc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bHVmZnl8ZW58MHx8fHwxNjg1MjY4MzU0fDA&force=true";

const initTimer = () => {
  if(downloadBtn.classList.contains("disable-timer")){
    return (location.href = fileLink);
  }
  // let timer = downloadBtn.dataset.timer;
  let timer = 5;
  downloadBtn.classList.add("timer");
  downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`;
  
  const initCounter = setInterval( () => {
    if(timer > 0){
      timer--;
      return (downloadBtn.innerHTML = `Your file will download in <b>${timer}</b> seconds`);
    }
      clearInterval(initCounter);
    location.href = fileLink;
    downloadBtn.textContent = "Your file is downloading...";
    setTimeout( () => {
      downloadBtn.classList.replace("timer","disable-timer");
      downloadBtn.innerHTML = `<i class="fa-sharp fa-solid fa-arrow-down"></i>
  Download Again`;
    },3000);
  },1000);
};

downloadBtn.addEventListener('click', initTimer);