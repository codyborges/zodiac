//DOM variables
let month = document.querySelector('.month')
let day = document.querySelector('.day')
let submitBtn = document.querySelector('.sub')
let answer = document.querySelector('.result')

//Event Listener
submitBtn.addEventListener('click', horoscope)

//functions
function horoscope(){
  if (month.value == 03 && day.value > 21 && day.value <= 31 || month.value == 04 && day.value >1 && day.value <= 19){
    answer.innerHTML = "You might have planned an exciting evening with friends or your current love interest, but you have to postpone it due to forces beyond your control. This could prove both disappointing and frustrating, Aries, but there won't be much you can do about it. Just reschedule and plan something else for tonight. Distracting yourself might be the best way to go. See a movie or play on your own."
  }else if (month.value == 04 && day.value > 20 && day.value <= 30  || month.value == 05 && day.value > 1 && day.value <= 20){
    answer.innerHTML = "Upsetting events in the neighborhood might have family members in a funk. This could be something major like construction crews tearing up the streets, or something as minor as a bout of bad weather. No matter, Taurus, it's going to make your lives a bit more difficult for a while, but you'll have to bear with it. In the meantime, try to cheer everyone up by throwing an impromptu party."
  }else if (month.value == 05 && day.value > 21 && day.value <= 31 || month.value == 06 && day.value > 1 && day.value <= 20){
    answer.innerHTML = "Upsetting events in the neighborhood might have family members in a funk. This could be something major like construction crews tearing up the streets, or something as minor as a bout of bad weather. No matter, Taurus, it's going to make your lives a bit more difficult for a while, but you'll have to bear with it. In the meantime, try to cheer everyone up by throwing an impromptu party."
  }else if (month.value == 06 && day.value >21 && day.value <= 30 || month.value == 07 && day.value > 1 && day.value <= 22){
    answer.innerHTML = "Personal or professional projects you've been working on might be moving a bit more slowly than you're comfortable with today, Cancer. You may wonder if this is because you aren't doing something right. This probably isn't the case. It's no doubt just a normal lag in the energy, which should pick up again tomorrow. Keep at it, get done what you have to, and don't make yourself crazy over it. Go with the flow."
  }else if (month.value == 07 && day.value >23 && day.value <= 31 || month.value == 08 && day.value > 1 && day.value <= 22){
    answer.innerHTML = "Today you might feel stifled by your current situation. Perhaps you're thinking of changing jobs or professions, or maybe you're considering moving to a more exotic place. These all might be good ideas, Leo, but today isn't the day to make any definite decisions or even consider your options. You aren't in an objective frame of mind. Wait a few days and then think about this some more. You might change your mind."
  }else if  (month.value == 08 && day.value > 23 && day.value <= 31 || month.value == 09 && day.value > 1 && day.value <= 22){
    answer.innerHTML = "Attempts to master a new computer program or other form of high-tech equipment could seem to be going nowhere, Virgo. You might tend to doubt your ability and thus feel very frustrated. However, keep at it. You aren't beyond all help! Nothing more than a little focus, concentration, and dogged persistence is required. It might also pay to ask someone's help who knows more about it."
  }else if (month.value == 09 && day.value > 23 && day.value <= 30 || month.value == 10 && day.value > 1 && day.value <= 22){
    answer.innerHTML = "The rapid level of growth that you've probably been experiencing could suddenly prove too much for you today, Libra. You might need to take a little breather to grasp what's happening in your life. New friends, new knowledge, and new opportunities have appeared in profusion, but you could still be feeling a bit down, wondering if you can handle it all. Don't fight these feelings; work through them instead. You'll be better off for it."
  }else if (month.value == 10 && day.value > 23 && day.value <= 31 || month.value == 11 && day.value > 1 &&  day.value <= 21){
    answer.innerHTML ="The energy that has propelled you forward for the past several weeks might seem to lag a bit today, causing you momentary panic that your progress won't continue. As a result, you could be feeling a bit blue. Don't fall into this trap, Scorpio. The pace has been so fast that it had to slow down sometime. It will pick up again, and you'll have had time to catch your breath. Hang in there!"
  }else if (month.value == 11 && day.value > 22 && day.value <= 30 || month.value == 12 && day.value >1 && day.value <= 21){
    answer.innerHTML = "Today you might experience a slight (and very temporary) dark night of the soul, Sagittarius. You could take a long look at your life and, even though you're doing well, still feel that you aren't yet where you want to be. Spiritually, you might doubt the traditional views you've questioned and still wonder about new concepts you've adopted. Try to distract yourself through reading or perhaps a movie. This feeling will pass by tomorrow."
  }











}