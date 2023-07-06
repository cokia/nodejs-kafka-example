import { Kafka } from "kafkajs";
import config from "./config";

const kafka = new Kafka({
  clientId: config.clientId,
  brokers: config.brokers.split(","),
});

const consumer = kafka.consumer({ groupId: config.groupId });

const initKafkaConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'topic', fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`[KafkaConsumer] Topic: ${topic}, Partition: ${partition}, Offset: ${message.offset}, Message: ${message.value.toString()}`);
    }
  })
}

initKafkaConsumer();

