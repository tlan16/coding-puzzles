import pino, { type Logger, type TransportSingleOptions } from 'pino';

export let logger: Logger;

export const initLogger = () => {
  const prettyTransport = {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  } satisfies TransportSingleOptions;
  logger = pino({
    level: 'debug',
    redact: ['user'],
    transport: prettyTransport,
  });
};
