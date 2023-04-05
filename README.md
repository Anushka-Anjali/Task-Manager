# Instruction Manual for Task Manager API Project

Welcome to the Task Manager API project! This project is designed to help you learn how to develop and deploy a Node.js application with AWS services and Docker.

## Prerequisites

Before you begin, you will need to have the following:

-   Node.js installed on your local machine
-   An AWS account with access to the following services:
    -   IAM
    -   EC2
    -   S3
-   Basic knowledge of JavaScript and Node.js

## Software Requirements Specification

The following are the requirements for this project:

1. GET `/tasks` - Fetch all tasks

The API should return a list of all tasks available in the store. The task list file is stored in an S3 bucket of your choice named `processes.json`. An example of the tasks list file is provided in the project files.

2. POST `/tasks` - Create a task

The API should accept a request body with the following properties:

-   `title` - The title of the task
-   `description` - The description of the task

The API should return a 400 Bad Request response code if any of the required properties are missing.

This API should fetch the product list from the S3 bucket and calculate the total price of the order. The response format is provided in the API documentation.

This API should fetch the existing task list from the S3 bucket. The new task should be added to the list and the updated list should be saved to the S3 bucket. Along with the task title and description, the API should also save the following properties:

-   `id` - A unique ID for the message
-   `timestamp` - The timestamp of the message

## Project Setup

1. Download the project files from this drive folder.
2. Install the project dependencies by running `npm install` in the project root directory.
3. Set up the AWS SDK and configure it with your AWS credentials.
4. Set up an EC2 instance to deploy the application.
5. Launch the instance and SSH into it. Copy the project files to the instance using SCP or any other file transfer mechanism.
6. Build the Docker image with Docker Compose.
7. Run the Docker compose file to start the application.

## API Documentation

API documentation for this project can be found in the `API.md` file in the project root directory.

## Conclusion

Congratulations! You have now successfully set up and deployed the Task Manager API project using Node.js, Docker and AWS services. I hope you enjoyed this project and learned some valuable skills along the way.
