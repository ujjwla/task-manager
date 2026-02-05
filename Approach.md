Task Manager – Project Explanation

1. Why did you choose Python (Flask) for the backend?
I chose Python with Flask for the backend because it is lightweight, simple, and ideal for building small REST
APIs. Flask allows quick development without heavy boilerplate code. Since the project required in-memory
storage (no database), Flask was a good fit. Python’s readability also helped in keeping the logic clear and easy to
understand. Additionally, Flask integrates smoothly with a React frontend using simple HTTP requests.
Trade-off
Flask does not enforce a strict project structure like Django, but for a small task manager application, simplicity
was more important than complexity.

2. How did you think about structuring the API?
I structured the API using RESTful principles, focusing on what actions the frontend needs to perform.
GET /tasks – Fetch all tasks
POST /tasks – Add a new task
PUT /tasks//complete – Mark a task as completed
This structure keeps the frontend simple and separates concerns properly. The backend only handles data and
logic, while the frontend focuses on UI.
Trade-off
Since tasks are stored in memory, data resets when the server restarts, which was acceptable as per the
requirements.

3. How did you handle state management in the frontend?
I handled state management using React hooks:
useState for managing tasks and form inputs
useEffect for fetching tasks when the component loads
The backend acts as the single source of truth. After adding or completing a task, the frontend re-fetches the task
list from the backend to stay in sync. This approach avoids unnecessary complexity like Redux, which is not
required for a small application.
Trade-off
For a larger or more complex application, global state management would be more suitable.

4. If you had more time, what improvements would you make?
Backend Improvements:
- Add a database (SQLite or MongoDB)
- Implement update and delete task functionality
- Improve error handling and validation
- Use environment variables for configuration
Frontend Improvements:
- Improve UI/UX with better styling and responsiveness
Add loading indicators and error messages
- Break UI into reusable components
- Add form validation
Overall Improvements:
- Add authentication (login/logout)
- Deploy the project (Vercel for frontend, Render for backend)
- Add API documentation (Swagger)
- Write unit tests

Evaluation Summary

Clarity of thought: Clear and simple approach from requirements to implementation

Backend & frontend integration: Clean REST API connected to React frontend

Code readability: Modular, readable, and easy-to-follow code

Problem-solving approach: Conscious trade-offs and scalable design thinking
