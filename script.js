const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const zoomBox = entry.target.querySelector('.zoom-box');
        const noteBox = entry.target.querySelector('.note-box');
        
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            setTimeout(() => {
                zoomBox.style.transform = 'scale(0.8)';
                noteBox.style.bottom = '15%'; 
            }, 1000);
        } else {
            entry.target.classList.remove('active');
            zoomBox.style.transform = 'scale(0.5)';
            noteBox.style.bottom = '-100%'; 
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    const zoomBox = section.querySelector('.zoom-box');
    const noteBox = section.querySelector('.note-box');
    zoomBox.style.transform = 'scale(0.5)';
    noteBox.style.bottom = '-100%';
    observer.observe(section);
});
