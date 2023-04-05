# Task Manager API

This API allows users to view and manage tasks.

## Get all tasks

Returns a list of all tasks.

**URL** : `/tasks`

**Method** : `GET`

**Response Codes** :

-   Success : 200 OK
-   Error : 500 Internal Server Error

**Success Response** :

```json
{
	"success": true,
	"data": [
		{
			"id": "1",
			"title": "Task 1",
			"description": "This is the first task.",
            "timestamp": 1577836800000
		},
		{
			"id": "2",
			"title": "Task 2",
			"description": "This is the second task.",
            "timestamp": 1577836801000
		}
	]
}
```

**Error Response** :

```json
{
	"success": false,
	"error": "Internal Server Error"
}
```

## Create a task

Create a task.

**URL** : `/tasks`

**Method** : `POST`

**Request Body** :

```json
{
	"title": "task_title",
	"description": "task_description"
}
```

**Response Codes** :

-   Success : 200 OK
-   Error : 400 Bad Request, 500 Internal Server Error

**Success Response** :

```json
{
	"id": "task_id",
	"title": "task_title",
	"description": "task_description",
	"timestamp": 1577836800000
}
```

**Error Response** :

```json
{
	"success": false,
	"error": "Internal Server Error"
}
```
