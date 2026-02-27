AOS.init({ duration: 1000 });

new Typed("#typed", {
    strings: [
        "Embedded AI Engineer",
        "Edge AI Systems Developer",
        "Computer Vision Specialist",
        "Real-Time Inference Engineer"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

/* Scroll Progress */
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
};



/* Modal Logic */
function openModal(project) {

    const title = document.getElementById("modalTitle");
    const desc = document.getElementById("modalDescription");
    const tech = document.getElementById("modalTech");
    const perf = document.getElementById("modalPerformance");
    const github = document.getElementById("modalGithub");

    if (project === "jetson") {
        title.innerText = "Real-Time Traffic Violation Monitoring";
        desc.innerText = "Deployed Advanced Pre-Trained Model In Raspberry pi";
        tech.innerText = "Tech: Python, YOLO, Sqlite3, Opencv";
        github.href = "https://github.com/harish4722/smart-traffic-violation-rpi.git";
    }

    if (project === "livestream") {
        title.innerText = "Live Stream AI Application";
        desc.innerText = "Real-time object detection using Opencv and Yolov8";
        tech.innerText = "Tech: OpenCV, Pre-Trained Model";
        perf.innerText = "Achieved stable 30 FPS detection.";
        github.href = "https://github.com/harish4722/Live_Object_Detection.git";
    }

    if (project === "esp32") {
        title.innerText = "Real-Time Attendance System";
        desc.innerText = "A real-time Face Recognition Attendance System built using Python and OpenCV.";
        tech.innerText = "Tech: Raspberry pi, OpenCV, MySQL";
        perf.innerText = "Low-latency signal acquisition system.";
        github.href = "https://github.com/harish4722/attendance_tracker.git";
    }

    document.getElementById("projectModal").style.display = "block";
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const lamp = document.querySelector(".theme-toggle");
    if (document.body.classList.contains("light-mode")) {
        lamp.textContent = "🌙";
    } else {
        lamp.textContent = "💡";
    }
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("projectModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("mousemove", function(e) {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
});