window.addEventListener('load', function() {
    var second = 1000, minute = second * 60, hour = minute * 60, date = hour * 24;
    let year = document.querySelector('.year').dataset.value;
    let month = document.querySelector('.month').dataset.value;
    let startDate = document.querySelector('.date').dataset.value;
    let startHour = document.querySelector('.start-hour').textContent;
    
    const countDown = new Date(year, month, startDate, startHour);

    x = this.setInterval(function(){
        var now = new Date().getTime();
        console.log (now, "=>")
        var distance = countDown - now;
        if(distance > 0){
            Math.floor(distance/(date));
            document.querySelectorAll('.js-timer-days').forEach(dateItem=>{
                dateItem.innerText = Math.floor(distance/(date));
            })
            document.querySelectorAll('.js-timer-hours').forEach(hourItem=>{
                hourItem.innerText = Math.floor((distance % (date)) / (hour));
            })
            document.querySelectorAll('.js-timer-minutes').forEach(minuteItem=>{
                minuteItem.innerText = Math.floor((distance % (hour)) / (minute));
            })
            document.querySelectorAll('.js-timer-seconds').forEach(secondItem=>{
                secondItem.innerText = Math.floor((distance % (minute)) / (second));
            })
        }
    }, second)
    
})