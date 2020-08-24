var scores,roundScore,currentscore,activePlayer;
init();
function init(){
scores=[0,0];
roundScore=0;
currentscore=0;
activePlayer=0;
document.querySelector('#score-0').textContent=0;
document.querySelector('#current-0').textContent=0;
document.querySelector('#score-1').textContent=0;
document.querySelector('#current-1').textContent=0;
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 0';
document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-roll').addEventListener('click',function(){
  let rollDice = Math.floor(Math.random()*6+1);
  document.querySelector('#score-'+activePlayer).textContent=roundScore;
  document.getElementById('dice-1').src='dice-'+rollDice+'.png';
  document.querySelector('.dice').style.display='block';
  if(rollDice!==1){
  document.querySelector('#current-'+activePlayer).textContent=rollDice;
  roundScore+=rollDice;
  }else{
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;
    document.querySelector('.dice').style.display='none';
    document.querySelector('#current-0').textContent=0;
    document.querySelector('#current-1').textContent=0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
  }
})
document.querySelector('.btn-new').addEventListener('click',init);