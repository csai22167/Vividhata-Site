document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section.fade-in");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    sections.forEach((section) => observer.observe(section));
  });
  document.getElementById("join-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    alert("Thank you for joining us! We will contact you soon.");
    document.getElementById("join-form").reset();
  });
  

const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeBtn = document.querySelector(".close");


document.querySelectorAll(".gallery-item").forEach((img) => {
  img.addEventListener("click", function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
};

modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
const timelineItems = document.querySelectorAll(".timeline-item");

const showOnScroll = () => {
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
};
window.addEventListener("scroll", showOnScroll);

const teamMembers = document.querySelectorAll(".team-member");

const showOnScroll1 = () => {
  teamMembers.forEach(member => {
    const rect = member.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      member.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll1);

const facultyHead = document.querySelector(".faculty-card");

const showOnScroll2 = () => {
  const rect = facultyHead.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    facultyHead.classList.add("show");
  }
};

window.addEventListener("scroll", showOnScroll2);

const aboutSections = document.querySelectorAll(".fade-in");

const showOnScroll3 = () => {
  aboutSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll3);
