// Smooth reveal animation on scroll
const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  const trigger = window.innerHeight / 1.2;
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add('fade-in');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
