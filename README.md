# AI Powered CRM

## Overview

Welcome to the **AI Powered CRM** project! Our goal is to create a cutting-edge customer relationship management system that leverages artificial intelligence to streamline and enhance various business processes. While we're in the early stages of development, we've successfully implemented **Contact Management Features** as a foundational part of the system. This will eventually be integrated with advanced AI functionalities to automate tasks and offer insightful analytics.

![Screenshot](/sc1.png)
![Screenshot](/sc2.png)
![Screenshot](/sc3.png)

## Database Schema

The database schema for the AI-Powered CRM focuses on managing contact information efficiently. Below is the structure of the `contacts` collection, which is used to store details about each contact.

### `contacts` Collection

| Field Name  | Data Type   | Constraints                   | Description                               |
|-------------|-------------|-------------------------------|-------------------------------------------|
| `firstName` | String      | Required                     | The first name of the contact.           |
| `lastName`  | String      | Required                     | The last name of the contact.            |
| `email`     | String      | Required, Unique             | The contact's email address.             |
| `phone`     | String      | Required                     | The contact's phone number.              |
| `company`   | String      | Optional                     | The name of the company the contact belongs to. |
| `jobTitle`  | String      | Optional                     | The contact's job title or role.         |

### Example Document

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "company": "TechCorp",
  "jobTitle": "Software Engineer"
}


## Technologies Used

We’ve used a modern tech stack to build and power this CRM. Here’s a breakdown of the key technologies:

### Frontend

- **React**: A powerful JavaScript library for building user interfaces. React allows us to create a dynamic and responsive UI for users to interact with the CRM.
- **Next.js**: A React framework for building production-grade web applications with features like server-side rendering and static site generation.
- **UI Framework**: We used Material UI for building the user interface of the CRM, providing a modern and responsive design.
- **Axios**: A promise-based HTTP client for the browser and Node.js, which we use to make API requests.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 engine that enables us to build fast and scalable network applications.
- **Express.js**: A web framework for Node.js that simplifies the creation of API endpoints for our CRM.
- **MongoDB**: A NoSQL database to store and manage customer information, offering flexibility with document-based data storage.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, making it easier to interact with MongoDB.

### AI Features (Future)

- **Machine Learning Algorithms**: We plan to incorporate AI-based features such as predictive analytics, lead scoring, and customer sentiment analysis.
- **Natural Language Processing (NLP)**: To enable the system to interpret and act on customer queries and interactions.

## Features

### 1. **Contact Management**
We’ve implemented the first key feature: **Contact Management**. With this feature, users can:
- Add, update, and delete customer contact details.
- Search and filter contacts by different criteria like first name, last name, email, etc.
- Display contacts in a user-friendly table format.
### 2. Import Contacts
- You can import contacts using a CSV file.
- The **Import Contacts** button allows you to select a `.csv` file from your local machine and upload it to the system.
- The file is parsed, and the contact data is added to the database.

### 3. Export Contacts
- The **Export Contacts** button allows you to download all the current contacts as a `.csv` file.
- This exported file includes the following fields: First Name, Last Name, Email, Phone, Company, and Job Title.

## How to Use

1. **Add a new contact**: Click on the "Add New Contact" button to add a new contact.
2. **Import contacts**: 
   - Click the "Import Contacts" button.
   - Select a `.csv` file containing contact information.
   - The system will process the file and add the contacts to the system.
3. **Export contacts**: 
   - Click the "Export Contacts" button.
   - A `.csv` file containing all your contacts will be downloaded automatically.
This feature serves as the foundation for our CRM, allowing businesses to manage customer information easily.

## How We Developed It

We started with designing a simple yet powerful **Contact Management** system. Here’s a quick look at how we developed it:

### 1. Frontend Development

- We created an intuitive user interface with React and Next.js to allow users to interact with the CRM.
- Implemented search and filtering functionality using **Axios** to make API requests to our backend.

### 2. Backend Development

- The backend is built with **Node.js** and **Express.js**, which serves API routes for adding, updating, deleting, and fetching contact information.
- We connected to **MongoDB** using **Mongoose** to store and retrieve contact data efficiently.

### 3. AI Integration (Future Plans)

- Although we’ve implemented the core features, we are planning to integrate AI functionalities in the future. These will include intelligent contact recommendations, automated email responses, and predictive sales insights based on customer data.

## Installation

To get started with this CRM, follow the steps below:

### Prerequisites

- Node.js installed on your machine.
- MongoDB running locally or on a cloud service like MongoDB Atlas.

### Clone the Repository

``bash
git clone https://github.com/your-username/ai-powered-crm.git
cd ai-powered-crm
## Install Dependencies

### Frontend
Go to the frontend directory and install dependencies:

```bash
cd frontend
npm install

## Backend

Go to the backend directory and install dependencies:

cd backend
npm install

Start the Backend

cd backend
npm start
Start the Frontend

cd frontend
npm run dev
The frontend will be available at http://localhost:3000 and the backend will be running on http://localhost:5000.


###Future Plans
We’re working on adding more advanced features such as:

AI-Powered Lead Scoring: Automatically assess and score leads based on their interactions and data.
Customer Sentiment Analysis: Use NLP to gauge customer sentiment and improve interactions.
Sales Predictions: Implement machine learning models to predict sales trends and outcomes.
We’re excited about the potential of this AI-powered CRM and will continue to expand its capabilities over time!

Contributing
We welcome contributions from the community! If you would like to contribute to the project, please fork the repository and create a pull request. Make sure to follow our code of conduct and contribution guidelines..
