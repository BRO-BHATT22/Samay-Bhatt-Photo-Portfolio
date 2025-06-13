// Initialize Vue app
const { createApp } = Vue;

createApp({
    data() {
        return {
            menuActive: false,
            hoveredProject: null,
            navItems: [
                { text: 'About', link: '#about' },
                { text: 'Work', link: '#work' },
                { text: 'Contact', link: '#contact' }
            ],
            aboutData: {
                bio: "My photography is driven by passion and a deep appreciation for capturing emotion, detail, and story in every shot. I have a sharp eye for composition and lighting, which helps me turn everyday moments into striking images. Whether I'm photographing people, nature, or urban scenes, I always aim to bring a unique perspective and creative touch to my work. My skills go beyond just taking pictures—I understand how to work with my subjects, frame a scene with intention, and edit thoughtfully to bring out the best in every image. I've grown a lot as a photographer, developing both the technical knowledge and artistic intuition that define a skilled and thoughtful artist.",
                image: "face.jpg",
            },
            projects: [
                {
                    title: "A pretty View",
                    description: "A nice background vibe with a singular car on the road",
                    image: "car.jpg",
                },
                {
                    title: "Flower",
                    description: "An up close picture of a pretty flower",
                    image: "flower.jpg",
                },
                {
                    title: "Natural",
                    description: "A beautiful shot of foliage with a small creature",
                    image: "frog.jpg",
                },
                {
                    title: "Waves",
                    description: "A Warm enviroment complete with nice waves",
                    image: "wave.jpg",
                },
                {
                    title: "Sunset",
                    description: "A beautiful photo of a sunset",
                    image: "sun.jpg",
                },
                {
                    title: "Abstract",
                    description: "A photo that you are not quite sure of",
                    image: "water.jpg",
                },
            ],
            contactInfo: [
                { icon: "fas fa-envelope", title: "Email", value: "samaybhatt06@gmail.com" },
                { icon: "fas fa-phone", title: "Phone", value: "+1 848-309-8570" },
                { icon: "fas fa-map-marker-alt", title: "Location", value: "New Jersey, United States" }
            ],

            form: {
                name: "",
                email: "",
                message: ""
            }
        }
    },
    methods: {
        toggleMenu() {
            this.menuActive = !this.menuActive;
            document.body.classList.toggle('nav-active');
        },
        closeMenu() {
            this.menuActive = false;
            document.body.classList.remove('nav-active');
        },
        submitForm() {
            // Form submission logic would go here
            alert(`Thanks for your message, ${this.form.name}! I'll get back to you soon.`);
            this.form = {
                name: "",
                email: "",
                message: ""
            };
        }
    },
    mounted() {
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector("[data-header]");
            if (window.scrollY > 100) {
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
}).mount('#app');