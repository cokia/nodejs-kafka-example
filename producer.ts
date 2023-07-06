import { Kafka } from "kafkajs";
import config from "./config";

const kafka = new Kafka({
  clientId: config.clientId,
  brokers: config.brokers.split(","),
});

const producer = kafka.producer();

const initKafkaConnection = async () => {
  return await producer.connect();
}

// 만약 토픽이 존재하지 않을 경우, 토픽을 생성하기 위해서는 카프카에서 auto.create.topics.enable 설정을 true로 하여야 한다.

const sendMessage = async (topic: string, message: string) => {
  try {
    await producer.send({
      topic,
      messages: [
        { value: message },
      ],
    });
  } catch (error) {
    console.error(`[KafkaSendErr]${error}`);

  }
  return true
}

initKafkaConnection();

sendMessage('topic', 'message');

