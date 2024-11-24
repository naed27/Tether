/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMessages = /* GraphQL */ `query GetMessages {
  getMessages {
    id
    sessionId
    username
    text
    createdAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessagesQueryVariables,
  APITypes.GetMessagesQuery
>;
