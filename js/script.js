// Welcome
let username = prompt("The EIC Class of 2025 would like to know your name, what's your name please?");

if (username === "") {
    alert("You refused to tell us your name, it's fine anyways, you're welcome.")
} else {
    alert("The EIC Class of 2025 welcomes you, " + username + ".");
}

document.addEventListener('DOMContentLoaded', () => {
    // ========== Initialize Libraries ==========
    // Animate On Scroll
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Particles.js Background
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#a29bfe"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#a29bfe",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });


    //  Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    //  Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    //  Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    // Scroll Progress Indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        progressBar.style.width = `${progress}%`;
    });

    // Countdown section
    function updateCountdown() {
        const gradDate = new Date("2025-07-26").getTime();
        const now = new Date().getTime();
        const distance = gradDate - now;

        document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
          // Trigger confetti when countdown hits zero
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "WE MADE IT!";
    fireConfetti(); // Call the confetti function
    clearInterval(countdownTimer); // Stop the countdown
  }
    }
    const countdownTimer = setInterval(updateCountdown, 1000);
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    //  Image Lazy Loading
    const lazyImages = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '0px 0px 100px 0px'
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    //  Scroll to Top Button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
function fireConfetti() {
    confetti({
      particleCount: 500,      // Number of confetti pieces
      spread: 1000,             // How wide the explosion is
      origin: { y: 0.6 },     // Start from bottom (0.6 = 60% down the screen)
      colors: ["#3b82f6", "#8b5cf6", "#ec4899"], // Your brand colors
      shapes: ["circle", "square", "rectangle", "trapezium", "triangle"], // Mix of shapes
    });
  
    // Optional: Fire multiple bursts for drama
    setTimeout(() => confetti({ particleCount: 500, spread: 1000 }), 500);
    setTimeout(() => confetti({ particleCount: 250, angle: 60, spread: 55 }), 500);

  }
  fireConfetti();


// ========== Additional CSS for New Features ==========
const style = document.createElement('style');
style.textContent = `

    /* Scroll Progress */
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(to right, var(--primary), var(--accent));
        z-index: 1000;
        transition: width 0.1s linear;
    }
    
    /* Countdown Banner */
    .countdown-banner {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 2rem;
        flex-wrap: wrap;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        padding: 1rem;
        border-radius: 10px;
        max-width: 600px;
        margin-left: auto;
        margin-right: 1rem;
    }
    
    .countdown-item {
        text-align: center;
    }
    
    .countdown-number {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--accent);
        display: block;
    }
    
    .countdown-label {
        font-size: 0.8rem;
        color: var(--text-dark);
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .countdown-message {
        width: 100%;
        text-align: center;
        font-size: 1rem;
        color: var(--text);
        margin-top: 0.5rem;
    }
    
    /* Scroll to Top Button */
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--accent);
        color: var(--dark);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .scroll-to-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
    
    /* Lazy Load Images */
    img[data-src] {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    img.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);



// Classmates Data
const classmates = [
    { name: "Abdullah Abubakar", major: "Science", ig: "https://www.instagram.com/itz_bak.ar/", snap: ""},
    { name: "Adam Umar Farouq", major: "Science", ig: "https://www.instagram.com/adxm_danks/" },
    { name: "Adebisi Al-amin", major: "Art", ig: "https://instagram.com" },
    { name: "Adedayo Wisdom", major: "Science", ig: "https://www.instagram.com/wisdomadedayo/" },
    { name: "Adekola Muhammad", major: "Science", ig: "https://www.instagram.com/kola_cl/" },
    { name: "Ademola Nicholas", major: "Science", ig: "https://instagram.com" },
    { name: "Abdulrasheed Doyinmade", major: "Art", ig: "https://instagram.com" },
    { name: "Akanni Hameedat", major: "Science", ig: "https://www.instagram.com/_vip._.ammy_/" },
    { name: "Bashar Firdaus", major: "Art", ig: "https://www.instagram.com/theyluv.fridaus/" },
    { name: "Bello Rabiu", major: "Science", ig: "https://www.instagram.com/_r.a.b.i.u_/" },
    { name: "Gbadamosi Abdus-somad", major: "Science", ig: "https://www.instagram.com/thetechtrekkerr/" },
    { name: "Jejelola Ayomide", major: "Science", ig: "https://www.instagram.com/heis.oxford" },
    { name: "Okeniyi Hameedat", major: "Science", ig: "https://www.instagram.com/hammy_szn/" },
    { name: "Olatunji Olamide", major: "Commercial", ig: "https://www.instagram.com/symplymeedey/" },
    { name: "Abdulkadir Muhammad", major: "Commercial", ig: "https://instagram.com" },
    { name: "Abdulwahab Nabeel", major: "Science", ig: "https://instagram.com" },
    { name: "Abubakr Khadija", major: "Science", ig: "https://instagram.com" },
    { name: "Adam Lateefah", major: "Science", ig: "https://www.instagram.com/temmi.004/" },
    { name: "Adenekan Dunsin", major: "Art", ig: "https://instagram.com" },
    { name: "Adeyemi Damian", major: "Science", ig: "https://instagram.com" },
    { name: "Ahmed Abdulraheem", major: "Science", ig: "https://instagram.com" },
    { name: "Akande Haliyah", major: "Science", ig: "https://instagram.com" },
    { name: "Akinleye Opeyemi", major: "Art", ig: "https://instagram.com" },
    { name: "Amosun Ayomidola", major: "Science", ig: "https://instagram.com" },
    { name: "Anjorin Eniola", major: "Science", ig: "https://instagram.com" },
    { name: "Ayanwale Teslim", major: "Science", ig: "https://instagram.com" },
    { name: "Balogun Widad", major: "Science", ig: "https://instagram.com" },
    { name: "Bello Abdullah", major: "Science", ig: "https://instagram.com" },
    { name: "Bolarinwa Faith", major: "Science", ig: "https://instagram.com" },
    { name: "Chima Chiamaka", major: "Science", ig: "https://instagram.com" },
    { name: "Daramola Tioluwani", major: "Science", ig: "https://instagram.com" },
    { name: "Idowu Ayomide", major: "Science", ig: "https://instagram.com" },
    { name: "Kadir Al-amin", major: "Science", ig: "https://instagram.com" },
    { name: "Layemo Ayomide", major: "Science", ig: "https://instagram.com" },
    { name: "Muhammad-Bello Kamaldeen", major: "Art", ig: "https://www.instagram.com/kamal835603/" },
    { name: "Muhammad Fatiu", major: "Commercial", ig: "https://instagram.com" },
    { name: "Musa Musa", major: "Science", ig: "https://instagram.com" },
    { name: "Obichukwu Chinenyenwa", major: "Commercial", ig: "https://instagram.com" },
    { name: "Ogunkunle Richard", major: "Art", ig: "https://instagram.com" },
    { name: "Olawale Naqeebah", major: "Science", ig: "https://instagram.com" },
    { name: "Olukotun Inioluwa", major: "Commercial", ig: "https://instagram.com" },
    { name: "Olusanmi Jewel", major: "Science", ig: "https://instagram.com" },
    { name: "Omole Demilade", major: "Science", ig: "https://instagram.com" },
    { name: "Osinowo Fiyinfoluwa", major: "Commercial", ig: "https://instagram.com" },
    { name: "Rotimi Inioluwa", major: "Science", ig: "https://instagram.com" },
    { name: "Saka Abubakar", major: "Science", ig: "https://www.instagram.com/luffy_rocks26/" },
    { name: "Salaudeen Abdulmujeeb", major: "Science", ig: "https://instagram.com" },
    { name: "Salihu Bashir", major: "Science", ig: "https://instagram.com" },
    { name: "Sarumi Aisha", major: "Science", ig: "https://instagram.com" },
    { name: "Sulaiman Ali", major: "Science", ig: "https://instagram.com" },
    { name: "Suleiman Abdulmalik", major: "Science", ig: "https://instagram.com" },
    { name: "Tiamiyu Oluwatobi", major: "Science", ig: "https://instagram.com" },
    { name: "Toba-Joshua Ayomide", major: "Science", ig: "https://instagram.com" },
    { name: "Uddin Janeil", major: "Science", ig: "https://instagram.com" },
    { name: "Wole-Abikoye Semilore", major: "Art", ig: "https://instagram.com" },
];

function generateInitials(name) {
    return name.split(' ').map(n => n[0]).join('');
}

//  Stores the original HTML generation function
function createCardHTML(student) {
    return `
    <div class="classmate-card">
      <div class="initials-avatar">${generateInitials(student.name)}</div>
      <h3>${student.name}</h3>
      <p class="major">${student.major}</p>
      <div class="social-links" data-aos="fade-up" data-aos-delay="300">
        <a href="${student.ig}"><i class="fab fa-instagram"></i></a>
        <a href="${student.snap}"><i class="fab fa-snapchat"></i></a> 
      </div>
    </div>
  `;
}

//  New load more implementation
let currentBatch = 0;
const batchSize = 5;
let allCardsRendered = false;

const loadMoreBtn = document.createElement('button');
loadMoreBtn.id = 'loadMoreBtn';
loadMoreBtn.textContent = 'Load More Classmates';
loadMoreBtn.className = 'load-more-btn';
document.querySelector('.classmate-grid').insertAdjacentElement('afterend', loadMoreBtn);

//  Completely new render approach
function renderCards() {
    const grid = document.querySelector('.classmate-grid');

    // Only render if not all cards are shown
    if (!allCardsRendered) {
        // Create document fragment for better performance
        const fragment = document.createDocumentFragment();

        // Calculate current batch
        const startIdx = currentBatch * batchSize;
        const endIdx = startIdx + batchSize;
        const batch = classmates.slice(startIdx, endIdx);

        batch.forEach(student => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = createCardHTML(student);
            fragment.appendChild(tempDiv.firstElementChild);
        });

        grid.appendChild(fragment);

        // Update state
        currentBatch++;
        allCardsRendered = endIdx >= classmates.length;
    }

    // Update button visibility
    loadMoreBtn.style.display = allCardsRendered ? 'none' : 'block';

    // Force icon redraw 
    setTimeout(() => {
        document.querySelectorAll('.fab').forEach(icon => {
            icon.style.display = 'inline-block';
        });
        AOS.refresh();
    }, 50);
}

//  Click handler with icon protection
loadMoreBtn.addEventListener('click', () => {
    renderCards();

    // Additional icon protection
    document.querySelectorAll('.social-links').forEach(links => {
        if (!links.innerHTML.includes('fa-')) {
            const card = links.closest('.classmate-card');
            const name = card.querySelector('h3').textContent;
            const student = classmates.find(s => s.name === name);
            if (student) links.innerHTML = `
        <a href="${student.ig}"><i class="fab fa-instagram"></i></a>
        <a href="${student.snap}"><i class="fab fa-snapchat"></i></a>
      `;
        }
    });
});

// Initial render
renderCards();


// Search functionality
function handleSearch(term) {
    currentBatch = 0; // Reset to first batch when searching
    filteredClassmates = classmates.filter(student =>
        student.name.toLowerCase().includes(term.toLowerCase()) ||
        student.major.toLowerCase().includes(term.toLowerCase())
    );

}

renderCards();


// Shuffle animation
document.getElementById('shuffle').addEventListener('click', () => {
    const grid = document.querySelector('.classmate-grid');
    grid.style.animation = 'shuffleEffect 0.8s ease';

    setTimeout(() => {
        grid.style.animation = '';
        [...grid.children]
            .sort(() => Math.random() - 0.5)
            .forEach(node => grid.appendChild(node));
    }, 800);
});


// Call on page load
renderCards();