import {Document, Message, MessageMedia} from '@layer';

// BenchGram: View-Once and TTL media never expire and can always be seen and saved
export default function canSeeMessageMedia(message: Message) {
  const media = (message as Message.message)?.media;
  if(!media) {
    return false;
  }
  return true;
}