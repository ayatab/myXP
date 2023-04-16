// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TestModel, PlayerModel, UserInfo } = initSchema(schema);

export {
  TestModel,
  PlayerModel,
  UserInfo
};