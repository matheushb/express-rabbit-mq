### AMQP

Filas:

- Para onde as mensagens são enviadas e onde ficam armazenadas antes de serem consumidas.
- Por padrão seguem o modelo FIFO
- No RabbitMQ são armazenadas como buffers

Produtores:

- Serviços que enviam mensagens para fila
- Enviam mensagens para uma fila específica ou para um Exchange

Consumidores:

- Servicos que consomem mensagens da fila
- Podem consumir de umas ou mais filas
- Processam as mensagens conforme são recebidas
