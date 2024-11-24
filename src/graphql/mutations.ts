/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const sendMessage = /* GraphQL */ `mutation SendMessage($sessionId: String!, $username: String!, $text: String!) {
  sendMessage(sessionId: $sessionId, username: $username, text: $text) {
    id
    sessionId
    username
    text
    createdAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SendMessageMutationVariables,
  APITypes.SendMessageMutation
>;
