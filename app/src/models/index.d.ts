import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerSocialHandle = {
  readonly twitter?: string | null;
  readonly email?: string | null;
  readonly discord?: string | null;
}

type LazySocialHandle = {
  readonly twitter?: string | null;
  readonly email?: string | null;
  readonly discord?: string | null;
}

export declare type SocialHandle = LazyLoading extends LazyLoadingDisabled ? EagerSocialHandle : LazySocialHandle

export declare const SocialHandle: (new (init: ModelInit<SocialHandle>) => SocialHandle)

type EagerUserInfo = {
  readonly name?: string | null;
  readonly gamer_tag?: string | null;
  readonly email?: string | null;
  readonly pronouns?: string | null;
  readonly location?: string | null;
  readonly socials?: SocialHandle | null;
}

type LazyUserInfo = {
  readonly name?: string | null;
  readonly gamer_tag?: string | null;
  readonly email?: string | null;
  readonly pronouns?: string | null;
  readonly location?: string | null;
  readonly socials?: SocialHandle | null;
}

export declare type UserInfo = LazyLoading extends LazyLoadingDisabled ? EagerUserInfo : LazyUserInfo

export declare const UserInfo: (new (init: ModelInit<UserInfo>) => UserInfo)

type EagerPlayerModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PlayerModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly games?: string | null;
  readonly experiences?: string | null;
  readonly user_info?: UserInfo | null;
  readonly user_id?: string | null;
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
  readonly user_info?: UserInfo | null;
  readonly user_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlayerModel = LazyLoading extends LazyLoadingDisabled ? EagerPlayerModel : LazyPlayerModel

export declare const PlayerModel: (new (init: ModelInit<PlayerModel>) => PlayerModel) & {
  copyOf(source: PlayerModel, mutator: (draft: MutableModel<PlayerModel>) => MutableModel<PlayerModel> | void): PlayerModel;
}