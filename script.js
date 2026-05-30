  // DOM Elements
        const userForm = document.getElementById('userForm');
        const userNameInput = document.getElementById('userName');
        const userAgeInput = document.getElementById('userAge');
        const dashboard = document.getElementById('dashboard');
        const greeting = document.getElementById('greeting');
        const ageInMonths = document.getElementById('ageInMonths');
        const contentAccess = document.getElementById('contentAccess');
        const quoteContainer = document.getElementById('quoteContainer');
        const clearBtn = document.getElementById('clearBtn');

        // Form Submit Event Listener
        userForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 1. Capture and Save data to localStorage
            localStorage.setItem('savedName', userNameInput.value.trim());
            localStorage.setItem('savedAge', userAgeInput.value);

            // Render the dashboard with new data
            renderDashboard();
        });

        // 2. Function to calculate age in months
        function calculateMonths(years) {
            return years * 12;
        }

        // Render Dashboard Function
        function renderDashboard() {
            // Retrieve data from localStorage
            const name = localStorage.getItem('savedName');
            const age = parseInt(localStorage.getItem('savedAge'), 10);

            // If no data exists, keep the dashboard hidden
            if (!name || !age) {
                dashboard.classList.add('hidden');
                return;
            }

            // Populate Form inputs so they stay filled on refresh
            userNameInput.value = name;
            userAgeInput.value = age;

            // 3. Personalized Greeting using Template Literals
            greeting.textContent = `Welcome back, ${name}! 👋`;

            // Display age in months
            const months = calculateMonths(age);
            ageInMonths.textContent = `You have been alive for approximately ${months.toLocaleString()} months.`;

            // 4. Adult Content Check (Conditional statements)
            if (age >= 18) {
                contentAccess.className = "rounded-xl p-4 flex items-center space-x-3 border font-medium bg-emerald-50 border-emerald-100 text-emerald-800";
                contentAccess.innerHTML = `
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z"></path></svg>

                    <span>Access Granted: You are old enough to view restricted content.</span>
                `;
            } else {
                contentAccess.className = "rounded-xl p-4 flex items-center space-x-3 border font-medium bg-amber-50 border-amber-100 text-amber-800";
                contentAccess.innerHTML = `
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd"></path></svg>

                    <span>Access Restricted: You are too young for adult content.</span>
                `;
            }

            // 5. Motivational Quote Loop (Displays exactly 5 times)
            quoteContainer.innerHTML = ''; // Clear previous items if any
            const quoteText = "With great power comes great responsibility.";
            
            for (let i = 0; i < 5; i++) {
                const quoteCard = document.createElement('div');
                quoteCard.className = "p-3 bg-gray-50 rounded-lg text-sm italic text-gray-600 border-l-4 border-indigo-500";
                quoteCard.textContent = `"${quoteText}"`;
                quoteContainer.appendChild(quoteCard);
            }

            // Show dashboard
            dashboard.classList.remove('hidden');
        }

        // Clear Data Event Listener
        clearBtn.addEventListener('click', function() {
            localStorage.clear();
            userForm.reset();
            dashboard.classList.add('hidden');
        });

        // Initialize App on Page Load (Checks if user has visited before)
        window.addEventListener('DOMContentLoaded', renderDashboard);