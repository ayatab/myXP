/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTestModel = /* GraphQL */ `
  mutation CreateTestModel(
    $input: CreateTestModelInput!
    $condition: ModelTestModelConditionInput
  ) {
    createTestModel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTestModel = /* GraphQL */ `
  mutation UpdateTestModel(
    $input: UpdateTestModelInput!
    $condition: ModelTestModelConditionInput
  ) {
    updateTestModel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTestModel = /* GraphQL */ `
  mutation DeleteTestModel(
    $input: DeleteTestModelInput!
    $condition: ModelTestModelConditionInput
  ) {
    deleteTestModel(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPlayerModel = /* GraphQL */ `
  mutation CreatePlayerModel(
    $input: CreatePlayerModelInput!
    $condition: ModelPlayerModelConditionInput
  ) {
    createPlayerModel(input: $input, condition: $condition) {
      id
      games
      experiences
      user_info
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePlayerModel = /* GraphQL */ `
  mutation UpdatePlayerModel(
    $input: UpdatePlayerModelInput!
    $condition: ModelPlayerModelConditionInput
  ) {
    updatePlayerModel(input: $input, condition: $condition) {
      id
      games
      experiences
      user_info
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePlayerModel = /* GraphQL */ `
  mutation DeletePlayerModel(
    $input: DeletePlayerModelInput!
    $condition: ModelPlayerModelConditionInput
  ) {
    deletePlayerModel(input: $input, condition: $condition) {
      id
      games
      experiences
      user_info
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
