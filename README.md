# Receipt Points Service

A service to process receipts and calculate points based on required conditions using node and NestJS.

## Prerequisites

Before running the service, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) 
- [Docker Compose](https://docs.docker.com/compose/install/)

## Running the Service

### Use Docker Compose

1. Clone the repository:
    ```bash
    git clone https://github.com/hafsahjilanee/ReceiptPoints.git
    ```

2. Build and start the service with Docker Compose:
    ```bash
    docker-compose up --build
    ```

    This will build the Docker image and start the application in a container. The service will be available at `http://localhost:3000`.

3. If you want to run the service in detached mode, add the `-d` flag:
    ```bash
    docker-compose up -d --build
    ```


## API Endpoints

- **POST /receipts/process**: To process a new receipt and calculate points.
    - **Request Example**:
      ```bash
      curl --location 'http://localhost:3000/receipts' \
      --header 'Content-Type: application/json' \
      --data '{
        "retailer": "M&M Corner Market",
        "purchaseDate": "2022-03-20",
        "purchaseTime": "14:33",
        "items": [
          {
            "shortDescription": "Strawberry",
            "price": "2.25"
          },
          {
            "shortDescription": "Mango",
            "price": "2.25"
          },
          {
            "shortDescription": "Orange",
            "price": "2.25"
          },
          {
            "shortDescription": "Kiwi",
            "price": "2.25"
          }
        ],
        "total": "9.00"
      }'
      ```
    - **Response**:
      ```json
      {
        "id": "0fa7b7ba-c87f-4073-b878-ecea0d30abcc"
      }
      ```

---

- **GET /receipts/points/:id**: Get points for a specific receipt by ID.
    - **Example**:
      ```bash
      curl --location 'http://localhost:3000/receipts/points/0fa7b7ba-c87f-4073-b878-ecea0d30abcc'
      ```
    - **Response**:
      ```json
      {
        "points": 150
      }
      ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
