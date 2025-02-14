function calculateAge() {
    const birthDate = new Date('2002-06-18');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    const birthdayElement = document.querySelector('.Lrounded1 p');
    if (birthdayElement) {
        const text = birthdayElement.innerHTML;
        birthdayElement.innerHTML = text.replace('18 June 2002', `18 June 2002 (${age} years)`);
    }
}

document.addEventListener('DOMContentLoaded', calculateAge);

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars');
    stars.forEach(star => {
      const rating = star.getAttribute('data-rating');
      star.style.setProperty('--rating', rating / 5);
    });
  });
  