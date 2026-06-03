# Personalized Dashboard

A lightweight, client-side web application that generates a personalized dashboard based on user input. 


## Overview

Users enter their **name** and **age**, and the app instantly generates a custom dashboard that includes:

- A personalized greeting
- Their age displayed in months
- A content access status based on their age
- A daily motivational quote displayed five times

All data is persisted in the browser using `localStorage`, so the dashboard is automatically restored on the next visit.


## Features

| Feature | Description |
|---|---|
|  Personalized Greeting | Welcomes the user by name with a friendly emoji |
|  Age in Months | Calculates and displays the user's age converted to months |
|  Content Access Check | Shows "Access Granted" or "Access Restricted" based on whether the user is 18+ |
|  Daily Manifestation | Renders a motivational quote exactly 5 times  |
|  LocalStorage Persistence | Saves name and age so the dashboard reloads automatically on return visits |
|  Reset Button | Clears all saved data and resets the form with one click |


## Tech Stack
- HTML5
- Tailwindcss
- Javascript


##  Project Structure

```
personalized-dashboard/
│   
├───index.html            
│       
└───script.js

```


## Getting Started

No installation or build step required.

1. **Download or clone** the project.
2. **Open `index.html`** in any modern web browser.
3. Enter your name and age, then click **Generate Dashboard**.

```bash 
git clone https://github.com/JeromeJason-dev/Personalized-Dashboard.git
cd personalized-dashboard
open index.html

```

## How It Works

### Form Submission
When the user submits the form, the app:
1. Reads the `name` and `age` values from the inputs.
2. Saves them to `localStorage`.
3. Calls `renderDashboard()` to build and display the UI.

### `renderDashboard()`
This is the core function. It:
- Retrieves saved data from `localStorage`.
- Populates the form inputs (so they remain filled after a page refresh).
- Updates the greeting using a **template literal**
- Calculates age in months via `calculateMonths(age)` (`years × 12`).
- Applies a **conditional check** (`age >= 18`) to show green "Access Granted" or amber "Access Restricted" UI.
- Uses a **`for` loop** (`i < 5`) to render the motivational quote five times.



On every page load, `renderDashboard()` runs immediately. If `localStorage` has saved data, the dashboard is shown automatically — no need to re-enter details.

### Reset
Clicking **Reset & Clear My Data** calls `localStorage.clear()`, resets the form, and hides the dashboard.

---

## Future Roadmap
Backend integration


## License

This project is licensed by the MIT license.