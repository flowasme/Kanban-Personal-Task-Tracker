# Kanban Task Tracker

A lightweight, responsive Kanban task tracker built with plain **HTML, CSS, and JavaScript**. Create tasks, move them through a simple workflow, and delete them when they are no longer needed.

## Features

- Create tasks with a name, description, and due date/time.
- Organize tasks into three workflow columns: **To-Do**, **In Progress**, and **Done**.
- Move tasks between workflow columns.
- Delete tasks from any column.
- Display task creation date and time.
- Responsive layout for desktop, tablet, and mobile screens.
- No frameworks, build tools, or external dependencies required.

## Preview

Add a screenshot or live demo link here if you publish one:

```text
Live demo: https://your-username.github.io/your-repository-name/
```

## Getting Started

### Run locally

Clone the repository and move into the project directory:

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

Because this is a static web app, you can open `index.html` directly in a browser. For a local development server, use Python:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Publish with GitHub Pages

1. Push the project files to a GitHub repository.
2. Open the repository's **Settings** page.
3. Select **Pages** in the **Code and automation** section.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the branch containing the app, usually `main`, and choose the root folder.
6. Save the settings and wait for GitHub Pages to publish the site.

Your app will be available at a URL similar to:

```text
https://your-username.github.io/your-repository-name/
```

## How to Use

Enter a task name in the form. Optionally add a description and due date/time, then select **Add Task**. New tasks appear in the **To-Do** column.

Use the status buttons on a task card to move it to another workflow column. Select **Delete Task** to remove the task from the board.

## How Deletion Works

Each task receives a unique numeric `id` when it is created. The delete function uses that ID to locate the correct task in the task array:

```javascript
function deleteTask(taskId) {
    const taskIndex = tasksObjectList.findIndex(task => task.id === taskId)

    if (taskIndex === -1) return

    tasksObjectList.splice(taskIndex, 1)
    updateLists()
}
```

The function first finds the task's actual array position with `findIndex()`. It then removes exactly one task with `splice()` and calls `updateLists()` to redraw the board. This approach remains reliable even when earlier tasks have already been deleted and task IDs are no longer consecutive.

## Project Structure

```text
.
├── index.html       # Application markup and task-board layout
├── script.js        # Task creation, status changes, deletion, and rendering
├── style.css        # Visual styling and responsive layout rules
├── images/          # Logo and other image assets
└── fonts/           # Space Grotesk font files
```

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- GitHub Pages for optional static hosting

## Current Limitations

Tasks are currently stored in memory while the page is open. Reloading the page clears the task board because browser storage has not been added yet.

## Contributing

Contributions are welcome. To propose a change:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add your change description"
   ```

4. Push the branch and open a pull request.
