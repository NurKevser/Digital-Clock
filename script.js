function showTime(){
    const time = new Date();
    const timeLabel = document.querySelector('p');

    timeLabel.innerHTML = time.toLocaleTimeString(); 
};

const clock = setInterval(() => {
    showTime();
}, 1000);

