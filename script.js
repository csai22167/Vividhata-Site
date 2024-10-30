const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const zoomBox = entry.target.querySelector('.zoom-box');
        
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            setTimeout(() => {
                zoomBox.style.transform = 'scale(0.8)';
            }, 1000);
        } else {
            entry.target.classList.remove('active');
            zoomBox.style.transform = 'scale(0.5)';
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    const zoomBox = section.querySelector('.zoom-box');
    zoomBox.style.transform = 'scale(0.5)';
    observer.observe(section);
});
