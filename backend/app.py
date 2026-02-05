from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# In-memory storage (NO database as per PDF)
tasks = []
task_id_counter = 1


@app.route("/")
def home():
    return "Task Manager API is running"


# GET /tasks → View all tasks
@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks)


# POST /tasks → Add new task
@app.route("/tasks", methods=["POST"])
def add_task():
    global task_id_counter
    data = request.get_json()

    task = {
        "id": task_id_counter,
        "title": data.get("title"),
        "description": data.get("description"),
        "completed": False
    }

    tasks.append(task)
    task_id_counter += 1
    return jsonify(task), 201


# PUT /tasks/<id>/complete → Mark task as completed
@app.route("/tasks/<int:task_id>/complete", methods=["PUT"])
def complete_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = True
            return jsonify(task)

    return jsonify({"error": "Task not found"}), 404


if __name__ == "__main__":
    app.run(debug=True)
