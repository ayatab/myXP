// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PlayerModel, SocialHandle, UserInfo } = initSchema(schema);

export {
  PlayerModel,
  SocialHandle,
  UserInfo
};