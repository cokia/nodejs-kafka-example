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

  ```js
const app = Consumer.create({
  queueUrl: config.queueUrl,
  region: config.region,
  handleMessage: async (message: { MessageId: string, ReceiptHandle: string, Body: string }) => {
    console.log(`{${message.MessageId}} ${message.Body} is received!`)
    // Super Awesome Messaging handling logic 🚀
  },
  sqs: new AWS.SQS()
});

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.on('timeout_error', (err) => {
  console.error(err.message);
});

app.start();
```