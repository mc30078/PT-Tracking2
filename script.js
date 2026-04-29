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
