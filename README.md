# Task Management App

A simple task management application built with React Native. This app allows you to add, remove, and toggle tasks, as well as search through tasks using a search bar.

## Features

- Add new tasks
- Mark tasks as completed
- Remove tasks
- Search tasks by text

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kumarnagender09/TodoListApp.git
    cd task-management-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the app:**
    ```bash
    npx react-native run-android
    # or for iOS
    npx react-native run-ios
    ```

## Usage

- **Add Task:** Enter a new task in the "Add new Task" input field and press the "Add Task" button.
- **Mark as Completed:** Tap on a task to mark it as completed. Completed tasks will have a line-through style.
- **Remove Task:** Tap the "Remove" button next to a task to delete it.
- **Search Tasks:** Enter text in the "Search Tasks" input field to filter tasks based on the search query.

## Code Structure

### Components

- `App.tsx`: The main component containing the entire application logic.

### State Management

- `useState`: Used for managing the state of tasks, the current task input, and the search query.

### Functions

- `addTask`: Adds a new task to the list.
- `toggleTask`: Toggles the completion status of a task.
- `removeTask`: Removes a task from the list.
- `filterTasks`: Filters tasks based on the search query.

### Styling

- `styles`: Contains all the styles for the components in the application.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -m 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Open a pull request

## Contact

If you have any questions or feedback, feel free to reach out to [kumarnagender09@gmail.com].
