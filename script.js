document.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelectorAll(".task-card");
    const progressText = document.getElementById("progress-text");
    const resetBtn = document.getElementById("reset-btn");
    const ring = document.querySelector(".progress-ring-fill");

    const circumference = 240;

    function updateProgress() {
        let total = tasks.length;
        let done = 0;

        tasks.forEach(task => {
            if (task.classList.contains("done") || task.classList.contains("na")) {
                done++;
            }
        });

        let percent = Math.round((done / total) * 100);
        progressText.textContent = percent + "%";

        let offset = circumference - (percent / 100) * circumference;
        ring.style.strokeDashoffset = offset;
    }

    tasks.forEach(task => {
        const completeBtn = task.querySelector(".complete-btn");
        const naBtn = task.querySelector(".na-btn");
        const timestamp = task.querySelector(".timestamp");

        completeBtn.addEventListener("click", () => {
            if (task.classList.contains("done")) {
                task.classList.remove("done");
                timestamp.textContent = "";
            } else {
                task.classList.add("done");
                task.classList.remove("na");
                timestamp.textContent = "Completed at: " + new Date().toLocaleTimeString();
            }
            updateProgress();
        });

        naBtn.addEventListener("click", () => {
            if (task.classList.contains("na")) {
                task.classList.remove("na");
                timestamp.textContent = "";
            } else {
                task.classList.add("na");
                task.classList.remove("done");
                timestamp.textContent = "Marked N/A at: " + new Date().toLocaleTimeString();
            }
            updateProgress();
        });
    });

    resetBtn.addEventListener("click", () => {
        tasks.forEach(task => {
            task.classList.remove("done", "na");
            task.querySelector(".timestamp").textContent = "";
        });
        updateProgress();
    });

    updateProgress();
});
