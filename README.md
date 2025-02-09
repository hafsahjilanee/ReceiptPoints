# Receipt Processor Service

A service to process receipts and calculate points based on various criteria.

## Prerequisites

Before running the service, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) (for containerization)
- [Docker Compose](https://docs.docker.com/compose/install/) (for orchestrating multi-container environments)

## Running the Service

### Option 1: Using Docker Compose

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. Build and start the service with Docker Compose:
    ```bash
    docker-compose up --build
    ```

    This will build the Docker image and start the application in a container. The service will be available at `http://localhost:3000`.

3. If you want to run the service in detached mode (in the background), add the `-d` flag:
    ```bash
    docker-compose up -d --build
    ```

### Option 2: Running with Docker (Without Docker Compose)

1. Build the Docker image manually:
    ```bash
    docker build -t receipt-processor .
    ```

2. Run the container:
    ```bash
    docker run -p 3000:3000 receipt-processor
    ```

    This will start the service on `http://localhost:3000`.

## API Endpoints

- **POST /processReceipt**: To process a new receipt and calculate points.
    - **Request Body**:
      ```json
      {
        "purchaseDate": "2022-03-20",
        "purchaseTime": "15:30",
        "total": "25.75",
        "retailer": "Some Retailer",
        "items": [
          {
            "shortDescription": "Item 1",
            "price": "12.99"
          },
          {
            "shortDescription": "Item 2",
            "price": "12.75"
          }
        ]
      }
      ```
    - **Response**:
      ```json
      {
        "id": "some-unique-id"
      }
      ```

- **GET /points/:id**: Get points for a specific receipt by ID.
    - **Example**: `GET http://localhost:3000/points/some-unique-id`
    - **Response**:
      ```json
      {
        "points": 150
      }
      ```

## Troubleshooting

- **Error: `command not found: docker`**
  - Ensure Docker is installed and running. You can verify with `docker --version`.
  
- **Error: `EACCES permission denied` when running Docker**
  - On macOS and Linux, Docker may require superuser permissions. Try running the command with `sudo` or follow the instructions to fix Docker permissions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
