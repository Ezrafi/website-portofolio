import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Konfigurasi Handlebars
app.engine('hbs', engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Sajikan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware untuk menangani favicon agar tidak 404 di log
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.get('/', (req, res) => {
    const projects = [
        {
            title: "Sistem Monitoring Hidroponik Berbasis Blynk dan ESP32",
            tech: "Arduino IDE • C++, Blynk",
            desc: "A System Where you can monitor your hydroponic system using Blynk and ESP32.",
            link: "#",
            image: "/img/iot.png"
        },
        {
            title: "Sistem Manajemen Gudang Berbasis Web",
            tech: "Bootstrap • PHP • MySQL, CodeIgniter, XAMPP",
            desc: "Management system for warehouse operations using PHP, MySQL, and CodeIgniter.",
            link: "#",
            image: "/img/project1.png"
        }
    ];

    const experiences = [
        {
            role: "Research and Development assistant",
            company: "Lab Robotika Gunadarma University",
            logo: "/img/Robotika.jpeg",
            date: "Feb 2021 - September 2023",
            points: [
                "Mentoring students in Full Stack Development bootcamp",
                "Teaching Arduino, Robotic, Electrical, and related technologies",
                "Providing code reviews and technical guidance",
                "Developing curriculum and learning materials",
                "Conducting IoT research and projects such as Hydroponic Monitoring System"
            ],
            tech: ["Arduino IDE", "C++", "HTML", "CSS", "XAMPP"]
        },
        {
            role: "Virtual Internship Big Data Analyst",
            company: "Rakamin Academy - Kimia Farma Project",
            logo: "/img/Rakamin.png",
            date: "June 2024 - July 2024",
            points: [
                "Developed a Year-over-Year Revenue Comparison dashboard to identify revenue trends and patterns.",
                "Created an interactive Geo Map in Looker Studio to visualize total profit by province, aiding in regional performance analysis.",
                "Designed a Top 5 Branches with Highest Ratings but Lowest Transaction Ratings report to pinpoint areas for service improvement."
            ],
            tech: ["Looker Studio", "BigQuery", "MySQL", "MongoDB"]
        }
    ];

    const skills = [
        { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
        { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
        { name: "React", icon: "fab fa-react", color: "#61dafb" },
        { name: "Next.js", icon: "fab fa-react", color: "#000000" },
        { name: "PostgreSQL", icon: "fas fa-database", color: "#336791" },
        { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
        { name: "Tailwind", icon: "fab fa-css3-alt", color: "#06b6d4" },
        { name: "Arduino IDE", icon: "fas fa-microchip", color: "#00979d" },
    ];

    res.render('index', { projects, experiences, skills });
});

// Listener untuk lokal
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
}

export default app;