// Streak tracking
let streakCount = 0;
        let lastStudyDate = localStorage.getItem('lastStudyDate');

        // Display initial streak count
        document.getElementById('streak-count').innerText = streakCount;

        // Function to update the streak
        function updateStreak() {
            const today = new Date().toDateString();
            if (lastStudyDate !== today) {
                // Increment streak if a new day and study has been marked done
                streakCount++;
                localStorage.setItem('lastStudyDate', today);  // Save today's date in localStorage
            }
            document.getElementById('streak-count').innerText = streakCount;
        }

        // Function to mark study as done
        function markStudyDone() {
            const today = new Date().toDateString();
            if (lastStudyDate !== today) {
                updateStreak(); // Update streak count
                localStorage.setItem('lastStudyDate', today); // Store today's date
            } else {
                alert("You already studied today. Keep up the good work!");
            }
        }