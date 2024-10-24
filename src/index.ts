import app from "./app";
import client, { Connection, Channel, ConsumeMessage } from "amqplib";

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

const sendMessage = async (channel: Channel) => {
  channel.sendToQueue("queue", Buffer.from("Hello World!"));
};

const consumer =
  (channel: Channel) =>
  (msg: ConsumeMessage | null): void => {
    if (msg) {
      console.log(msg.content.toString());
      channel.ack(msg);
    }
  };

async function go() {
  const connection: Connection = await client.connect(
    "amqp://admin:admin@localhost:5672"
  );
  const channel: Channel = await connection.createChannel();

  await channel.assertQueue("queue");
  sendMessage(channel);
  channel.consume("queue", consumer(channel));
}

go();
