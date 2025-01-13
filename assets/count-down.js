window.addEventListener('load', function() {
    var second = 1000, minute = second * 60, hour = minute * 60, date = hour * 24;
    let year = document.querySelector('.event_year').dataset.value;
    console.log(year, "==>")
    let month = document.querySelector('.event_month').dataset.value;
    let startDate = document.querySelector('.event_date').dataset.value;
    let startHour = document.querySelector('.event-end-hour').dataset.value;
    
    const countDown = new Date(year, month, startDate, startHour);

    x = this.setInterval(function(){
        var now = new Date().getTime();
        var distance = countDown - now;
        if(distance > 0){
            Math.floor(distance/(date));
            // document.querySelectorAll('.js-timer-days').forEach(dateItem=>{
            //     dateItem.innerText = Math.floor(distance/(date));
            // })
            document.querySelectorAll('.js-timer-hours').forEach(hourItem=>{
                hourItem.innerText = Math.floor(distance/ (hour));
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