const time_duration_wrapper_DOM = document.getElementById('ephy-time-duration-wrapper');
      duration_day_DOM = document.getElementById('ephy-duration-day');
      timer_btn_DOM = document.getElementById('ephy-timer-btn');
      message_DOM= document.getElementById('ephy-msg-box');
      typing_status_DOM = document.getElementById('ephy-typing-status-txt');


var is_timer_clicked = true;

timer_btn_DOM.onclick = () => { 
    time_duration_wrapper_DOM.style.visibility = is_timer_clicked ? "visible" : "hidden";
    is_timer_clicked = !is_timer_clicked;
};
 
message_DOM.onkeyup = () => {
    typing_status_DOM.style.visibility = "hidden";
};

message_DOM.onkeypress = () => {
    typing_status_DOM.style.visibility = "visible";
    typing_status_DOM.innerHTML = 'someone is typing ...';
};