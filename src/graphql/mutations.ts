/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const sendMessage = /* GraphQL */ `mutation SendMessage(
  $roomId: ID!
  $username: String!
  $text: String!
  $sessionId: ID!
) {
  sendMessage(
    roomId: $roomId
    username: $username
    text: $text
    sessionId: $sessionId
  ) {
    id
    roomId
    username
    text
    sessionId
    createdAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SendMessageMutationVariables,
  APITypes.SendMessageMutation
>;
