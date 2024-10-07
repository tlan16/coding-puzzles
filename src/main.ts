import { initLogger, logger } from './logger';

export const main = async () => {
  initLogger();
  logger.debug(`App started.`, { timestamp: new Date().toISOString() });
};

await main();
