import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerUserInfo = {
  readonly name?: string | null;
  readonly gamer_tag?: string | null;
  readonly email?: string | null;
  readonly pronouns?: string | null;
  readonly location?: string | null;
  readonly twitter?: string | null;
  readonly youtube?: string | null;
}

type LazyUserInfo = {
  readonly name?: string | null;
  readonly gamer_tag?: string | null;
  readonly email?: string | null;
  readonly pronouns?: string | null;
  readonly location?: string | null;
  readonly twitter?: string | null;
  readonly youtube?: string | null;
}

export declare type UserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserInfo : LazyUserInfo

export declare const UserInfo: (new (init: ModelInit<UserInfo>) => UserInfo)

type EagerTestModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTestModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TestModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TestModel = LazyLoading extends LazyLoadingDisabled ? EagerTestModel : LazyTestModel

export declare const TestModel: (new (init: ModelInit<TestModel>) => TestModel) & {
  copyOf(source: TestModel, mutator: (draft: MutableModel<TestModel>) => MutableModel<TestModel> | void): TestModel;
}

type EagerPlayerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly games?: string | null;
  readonly experiences?: string | null;
  readonly user_info?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly games?: string | null;
  readonly experiences?: string | null;
  readonly user_info?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayerModel = LazyLoading extends LazyLoadingDisabled ? EagerPlayerModel : LazyPlayerModel

export declare const PlayerModel: (new (init: ModelInit<PlayerModel>) => PlayerModel) & {
  copyOf(source: PlayerModel, mutator: (draft: MutableModel<PlayerModel>) => MutableModel<PlayerModel> | void): PlayerModel;
}