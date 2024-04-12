document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const toggleBtn = document.querySelector(".toggle-btn");
    const nav = document.querySelector("nav ul");

    toggleBtn.addEventListener("click", function() {
        nav.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            nav.classList.remove("active");
            navLinks.forEach(navLink => navLink.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // JavaScript for handling calendar
    const calendarEl = document.getElementById('calendar');
    if (calendarEl) {
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', // Display the calendar in month view initially
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                // Add your events here
                {
                    title: 'Event 1',
                    start: '2024-04-10',
                    end: '2024-04-12'
                },
                {
                    title: 'Event 2',
                    start: '2024-04-15T12:00:00',
                    end: '2024-04-15T14:00:00'
                }
                // Add more events as needed
            ]
        });
        calendar.render();
    } else {
        console.error('Calendar element not found!');
    }
});
