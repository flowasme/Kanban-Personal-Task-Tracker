# Kanban Personal Task Tracker

A clean and responsive personal Kanban board for organizing tasks through a simple visual workflow.

**Repository:** [github.com/flowasme/Kanban-Personal-Task-Tracker](https://github.com/flowasme/Kanban-Personal-Task-Tracker)

## Features

- Create tasks with a title, description, and due date/time.
- Organize tasks into three workflow stages:
  - **To-Do**
  - **In Progress**
  - **Done**
- Move tasks between workflow stages.
- Delete tasks from the board.
- View task descriptions, due dates, and creation dates.
- Responsive design for desktop, tablet, and mobile screens.
- Clear empty-state messages for columns without tasks.
- Simple, focused interface designed for personal productivity.

## Project Structure

```text
Kanban-Personal-Task-Tracker/
├── index.html       # Main page structure and task-board layout
├── style.css        # Application styling and responsive design rules
├── script.js        # Task-board behavior
├── images/          # Logo and image assets
└── fonts/           # Font assets used by the application
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/flowasme/Kanban-Personal-Task-Tracker.git
cd Kanban-Personal-Task-Tracker
```

Open `index.html` directly in a browser, or run a local server from the project directory:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000) in your browser.

## Usage

Enter a task title and optionally add a description and due date. Select **Add Task** to place the task in the To-Do column.

Use the workflow buttons on each task card to move the task between columns. Select **Delete Task** when a task no longer needs to appear on the board.

## Author

**Mehdi FERHAT**

- GitHub: [@flowasme](https://github.com/flowasme)
