const translations = {
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            experience: 'Experience',
            contact: 'Contact'
        },
        about: {
            title: 'About Me',
            bio: 'Passionate Full Stack Developer with expertise in modern web technologies',
            downloadCV: 'Download CV',
            viewGithub: 'View GitHub'
        },
        skills: {
            title: 'Skills',
            years: 'Years Experience',
            projects: 'Projects',
            clients: 'Clients'
        },
        projects: {
            title: 'Projects',
            viewProject: 'View Project',
            allCategories: 'All'
        },
        experience: {
            title: 'Experience',
            present: 'Present',
            responsibilities: 'Responsibilities',
            technologies: 'Technologies'
        },
        contact: {
            title: 'Contact Me',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send Message',
            success: 'Message sent successfully!',
            error: 'Error sending message. Please try again.'
        }
    },
    ru: {
        nav: {
            about: 'Обо мне',
            skills: 'Навыки',
            projects: 'Проекты',
            experience: 'Опыт',
            contact: 'Контакты'
        },
        about: {
            title: 'Обо мне',
            bio: 'Опытный Full Stack разработчик, специализирующийся на современных веб-технологиях',
            downloadCV: 'Скачать резюме',
            viewGithub: 'GitHub профиль'
        },
        skills: {
            title: 'Навыки',
            years: 'Лет опыта',
            projects: 'Проектов',
            clients: 'Клиентов'
        },
        projects: {
            title: 'Проекты',
            viewProject: 'Просмотр',
            allCategories: 'Все'
        },
        experience: {
            title: 'Опыт работы',
            present: 'Настоящее время',
            responsibilities: 'Обязанности',
            technologies: 'Технологии'
        },
        contact: {
            title: 'Связаться',
            name: 'Имя',
            email: 'Email',
            message: 'Сообщение',
            send: 'Отправить',
            success: 'Сообщение успешно отправлено!',
            error: 'Ошибка отправки. Пожалуйста, попробуйте снова.'
        }
    },
    uz: {
        nav: {
            about: 'Men haqimda',
            skills: 'Ko\'nikmalar',
            projects: 'Loyihalar',
            experience: 'Tajriba',
            contact: 'Aloqa'
        },
        about: {
            title: 'Men haqimda',
            bio: 'Zamonaviy veb-texnologiyalarda tajribaga ega Full Stack dasturchi',
            downloadCV: 'CV yuklab olish',
            viewGithub: 'GitHub profili'
        },
        skills: {
            title: 'Ko\'nikmalar',
            years: 'Yillik tajriba',
            projects: 'Loyihalar',
            clients: 'Mijozlar'
        },
        projects: {
            title: 'Loyihalar',
            viewProject: 'Ko\'rish',
            allCategories: 'Barchasi'
        },
        experience: {
            title: 'Ish tajribasi',
            present: 'Hozirgi vaqtgacha',
            responsibilities: 'Vazifalar',
            technologies: 'Texnologiyalar'
        },
        contact: {
            title: 'Bog\'lanish',
            name: 'Ism',
            email: 'Email',
            message: 'Xabar',
            send: 'Yuborish',
            success: 'Xabar muvaffaqiyatli yuborildi!',
            error: 'Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.'
        }
    }
};

const app = Vue.createApp({
    data() {
        return {
            currentLang: localStorage.getItem('language') || 'uz',
            translations: {
                uz: {
                    nav: {
                        about: "Men haqimda",
                        skills: "Ko'nikmalar",
                        projects: "Loyihalar",
                        experience: "Tajriba",
                        contact: "Aloqa"
                    },
                    about: {
                        title: 'Men haqimda',
                        bio: 'Zamonaviy veb-texnologiyalarda tajribaga ega Full Stack dasturchi',
                        downloadCV: 'CV yuklab olish',
                        viewGithub: 'GitHub profili'
                    },
                    skills: {
                        title: 'Ko\'nikmalar',
                        years: 'Yillik tajriba',
                        projects: 'Loyihalar',
                        clients: 'Mijozlar'
                    },
                    projects: {
                        title: 'Loyihalar',
                        viewProject: 'Ko\'rish',
                        allCategories: 'Barchasi'
                    },
                    experience: {
                        title: 'Ish tajribasi',
                        present: 'Hozirgi vaqtgacha',
                        responsibilities: 'Vazifalar',
                        technologies: 'Texnologiyalar'
                    },
                    contact: {
                        title: 'Bog\'lanish',
                        name: 'Ism',
                        email: 'Email',
                        message: 'Xabar',
                        send: 'Yuborish',
                        success: 'Xabar muvaffaqiyatli yuborildi!',
                        error: 'Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.'
                    }
                },
                en: {
                    nav: {
                        about: "About",
                        skills: "Skills",
                        projects: "Projects",
                        experience: "Experience",
                        contact: "Contact"
                    },
                    about: {
                        title: 'About Me',
                        bio: 'Passionate Full Stack Developer with expertise in modern web technologies',
                        downloadCV: 'Download CV',
                        viewGithub: 'View GitHub'
                    },
                    skills: {
                        title: 'Skills',
                        years: 'Years Experience',
                        projects: 'Projects',
                        clients: 'Clients'
                    },
                    projects: {
                        title: 'Projects',
                        viewProject: 'View Project',
                        allCategories: 'All'
                    },
                    experience: {
                        title: 'Experience',
                        present: 'Present',
                        responsibilities: 'Responsibilities',
                        technologies: 'Technologies'
                    },
                    contact: {
                        title: 'Contact Me',
                        name: 'Name',
                        email: 'Email',
                        message: 'Message',
                        send: 'Send Message',
                        success: 'Message sent successfully!',
                        error: 'Error sending message. Please try again.'
                    }
                },
                ru: {
                    nav: {
                        about: "Обо мне",
                        skills: "Навыки",
                        projects: "Проекты",
                        experience: "Опыт",
                        contact: "Контакты"
                    },
                    about: {
                        title: 'Обо мне',
                        bio: 'Опытный Full Stack разработчик, специализирующийся на современных веб-технологиях',
                        downloadCV: 'Скачать резюме',
                        viewGithub: 'GitHub профиль'
                    },
                    skills: {
                        title: 'Навыки',
                        years: 'Лет опыта',
                        projects: 'Проектов',
                        clients: 'Клиентов'
                    },
                    projects: {
                        title: 'Проекты',
                        viewProject: 'Просмотр',
                        allCategories: 'Все'
                    },
                    experience: {
                        title: 'Опыт работы',
                        present: 'Настоящее время',
                        responsibilities: 'Обязанности',
                        technologies: 'Технологии'
                    },
                    contact: {
                        title: 'Связаться',
                        name: 'Имя',
                        email: 'Email',
                        message: 'Сообщение',
                        send: 'Отправить',
                        success: 'Сообщение успешно отправлено!',
                        error: 'Ошибка отправки. Пожалуйста, попробуйте снова.'
                    }
                }
            },
            profile: {
                name: 'John Doe',
                title: 'Full Stack Developer',
                photo: 'https://via.placeholder.com/180',
                coverPhoto: 'https://via.placeholder.com/1200x300',
                bio: 'Passionate Full Stack Developer with expertise in modern web technologies and a knack for creating beautiful, functional applications.',
                experience: {
                    years: 5,
                    current: {
                        position: 'Senior Full Stack Developer',
                        company: 'Tech Solutions Inc.',
                        period: '2020 - Present',
                        description: 'Leading development of enterprise web applications using Vue.js and Node.js. Managing team of 5 developers.',
                        responsibilities: [
                            'Lead a team of 5 developers',
                            'Architect and develop enterprise applications',
                            'Implement CI/CD pipelines',
                            'Code review and mentoring'
                        ],
                        technologies: ['Vue.js', 'Node.js', 'AWS', 'Docker']
                    },
                    previous: [
                        {
                            position: 'Full Stack Developer',
                            company: 'Digital Innovations',
                            period: '2018 - 2020',
                            description: 'Developed and maintained multiple client projects using React and Django.',
                            responsibilities: [
                                'Frontend development with React',
                                'Backend development with Django',
                                'Database design and optimization',
                                'API development and integration'
                            ],
                            technologies: ['React', 'Django', 'PostgreSQL', 'Redis']
                        },
                        {
                            position: 'Frontend Developer',
                            company: 'Creative Agency',
                            period: '2016 - 2018',
                            description: 'Created responsive web applications and maintained client websites.',
                            responsibilities: [
                                'Frontend development',
                                'UI/UX implementation',
                                'Client communication',
                                'Website maintenance'
                            ],
                            technologies: ['JavaScript', 'HTML/CSS', 'jQuery', 'Bootstrap']
                        }
                    ],
                    skills: {
                        frontend: ['Vue.js', 'React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
                        backend: ['Node.js', 'Python', 'Django', 'Express'],
                        database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'],
                        devops: ['Docker', 'AWS', 'CI/CD', 'Git'],
                        tools: ['VS Code', 'Postman', 'Jira', 'Figma']
                    }
                },
                projects: 50,
                clients: 30,
                resume: 'path/to/resume.pdf',
                basicInfo: [
                    { label: 'Location', value: 'New York, USA', icon: 'fas fa-map-marker-alt' },
                    { label: 'Email', value: 'john@example.com', icon: 'fas fa-envelope' },
                    { label: 'Phone', value: '+1 234 567 890', icon: 'fas fa-phone' },
                    { label: 'Website', value: 'www.johndoe.com', icon: 'fas fa-globe' }
                ],
                skills: [
                    'JavaScript', 'Vue.js', 'React', 'Node.js', 'Python',
                    'Django', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
                    'Git', 'REST API', 'GraphQL', 'TypeScript', 'HTML/CSS'
                ],
                languages: [
                    { name: 'English', level: 100 },
                    { name: 'Spanish', level: 80 },
                    { name: 'French', level: 60 }
                ],
                socialLinks: [
                    { name: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
                    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'fab fa-linkedin' },
                    { name: 'Twitter', url: 'https://twitter.com', icon: 'fab fa-twitter' },
                    { name: 'Instagram', url: 'https://instagram.com', icon: 'fab fa-instagram' }
                ]
            },
            projects: [
                {
                    id: 1,
                    title: 'E-commerce Platform',
                    description: 'Full-featured e-commerce platform with payment integration and admin dashboard.',
                    image: 'https://via.placeholder.com/300',
                    link: '#',
                    category: 'Web App',
                    technologies: ['Vue.js', 'Node.js', 'MongoDB']
                },
                {
                    id: 2,
                    title: 'Task Management System',
                    description: 'Project management tool with real-time updates and team collaboration features.',
                    image: 'https://via.placeholder.com/300',
                    link: '#',
                    category: 'Web App',
                    technologies: ['React', 'Firebase', 'Material-UI']
                },
                {
                    id: 3,
                    title: 'Portfolio Website',
                    description: 'Responsive portfolio website with modern design and animations.',
                    image: 'https://via.placeholder.com/300',
                    link: '#',
                    category: 'Website',
                    technologies: ['HTML', 'CSS', 'JavaScript']
                },
                {
                    id: 4,
                    title: 'Weather App',
                    description: 'Real-time weather application with location-based forecasts.',
                    image: 'https://via.placeholder.com/300',
                    link: '#',
                    category: 'Mobile App',
                    technologies: ['React Native', 'Weather API']
                },
                {
                    id: 5,
                    title: 'Blog Platform',
                    description: 'Content management system with markdown support and SEO optimization.',
                    image: 'https://via.placeholder.com/300',
                    link: '#',
                    category: 'Web App',
                    technologies: ['Django', 'PostgreSQL', 'AWS']
                },
                {
                    id: 6,
                    title: 'Chat Application',
                    description: 'Real-time chat application with video call support.',
                    image: 'https://via.placeholder.com/300',
                    link: '#',
                    category: 'Web App',
                    technologies: ['Vue.js', 'WebRTC', 'Socket.io']
                }
            ],
            currentFilter: 'All',
            form: {
                name: '',
                email: '',
                message: ''
            }
        }
    },
    computed: {
        t() {
            return this.translations[this.currentLang];
        },
        projectFilters() {
            const categories = ['All', ...new Set(this.projects.map(p => p.category))]
            return categories
        },
        filteredProjects() {
            if (this.currentFilter === 'All') {
                return this.projects
            }
            return this.projects.filter(project => project.category === this.currentFilter)
        },
        allExperience() {
            return [this.profile.experience.current, ...this.profile.experience.previous]
        }
    },
    methods: {
        changeLang(lang) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
        },
        filterProjects(category) {
            this.currentFilter = category
        },
        async submitForm() {
            try {
                console.log('Form submitted:', this.form)
                await new Promise(resolve => setTimeout(resolve, 1000))
                this.form = {
                    name: '',
                    email: '',
                    message: ''
                }
                alert(this.t.contact.success)
            } catch (error) {
                console.error('Error submitting form:', error)
                alert(this.t.contact.error)
            }
        }
    },
    mounted() {
        document.documentElement.setAttribute('lang', this.currentLang);
    }
})

app.mount('#app')
