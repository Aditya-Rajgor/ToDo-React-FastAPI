# ToDo-React-FastAPI

This is the open source repository for the a to-do web application, React frontend and FastAPI backend

# Video Demo

# Project Structure

## FastAPI in backend handles all CRUD operations including Authentication with Jason Web Tokens.

## Frontend is powered by React and Tailwind CSS.

# How to run

## Prerequisites

-   Python 3.8+
-   Node.js 14+
-   MongoDB

## Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/FastAPI-Mongo.git
    cd FastAPI-Mongo/backend
    ```

2. Create a virtual environment and activate it:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Create a `.env` file and add the following environment variables:

    ```plaintext
    MONGO_DB_USERNAME="xxx"
    MONGO_DB_PASSWORD="xxx"
    MONGO_DB_CLUSTER = "xxx"
    JWT_SECRET_KEY = "xxx"
    ```

5. Run the FastAPI server:
    ```bash
    uvicorn main:app --reload
    ```

## Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm run dev
    ```

## Running the Application

-   The FastAPI backend will be running at `http://127.0.0.1:8000`
-   The React frontend will be running at `http://localhost:5173`

Open your browser and navigate to `http://localhost:5173` to use the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

For any inquiries, please contact [me@adityarajgor.com](mailto:me@adityarajgor.com).
