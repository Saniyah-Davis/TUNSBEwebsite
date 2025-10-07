function toggleNav(){
  const nav = document.querySelector('nav');
  if(!nav) return;
  if(nav.style.display === 'flex') nav.style.display = '';
  else nav.style.display = 'flex';
}

function submitForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name||!email||!message){
    alert('Please complete all fields.');
    return;
  }
  alert('Thanks, '+name+' — message received. (This demo does not actually send email.)');
  e.target.reset();
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
});
