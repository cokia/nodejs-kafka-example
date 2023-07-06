# nodejs-kafka eample
kafka api example with kafkajs

## Run scripts
  ### Install dependencies
  ```bash
  yarn
  ```
  ### Run producer
  1. Create a .env file in the root directory and add the following variables (example at .env.example)
  *   clientId
  *   brokers
  *   groupId

  2. edit producer.ts to add topic name and message body

  3. Run producer

  ```bash
  yarn producer
  ```
  ### Run consumer
  1. Create a .env file in the root directory and add the following variables (example at .env.example)
  *   clientId
  *   brokers
  *   groupId

  2. edit consumer.ts to add topic name

  3. Run Consumer
  ```bash
  yarn consumer
  ```