# Full Stack Website Containerization Using Docker Networking

## Setup and Installation

### Prerequisites

- Node.js (version 16 or above)
- Docker

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Vishwas141/docker-networking-containerization.git
    cd dockernetworking
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Docker Commands:**

    3.1 **Build images:**

    ```bash
    docker build -t client .  # Client image
    docker build -t server .  # Server image
    ```

    3.2 **Start containers:**

    ```bash
    docker run -d --name mongodb --network vishwas mongo:latest
    docker run -d --network vishwas -p 5000:5000 server
    docker run -d --network vishwas -p 5173:5173 client npm run dev -- --host
    ```

4. **Accessing the Application:**

   - **Client:** Open http://localhost:5173 in your browser.
   - **Server API:** Use http://localhost:5000/api/ for API endpoints.

5. **Technology Stack:**

   - React
   - Node.js
   - Express
   - MongoDB
   - Docker


