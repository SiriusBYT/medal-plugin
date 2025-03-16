import { Injector, Logger, common } from "replugged";

const inject = new Injector();
const logger = Logger.plugin("Medal Plugin");

export async function start(): Promise<void> {
  logger.log(`Ohio will be destroyed.`);
  let ChannelID = common.channels.getCurrentlySelectedChannelId()
  let Messages = common.messages.getMessages(ChannelID)
  for (let cycle=0; cycle < Messages.length; cycle++) {
    logger.log(Messages[cycle])
  }
}

export function stop(): void {
  inject.uninjectAll();
}
