/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onMessageSent = /* GraphQL */ `subscription OnMessageSent($roomId: ID!) {
  onMessageSent(roomId: $roomId) {
    id
    roomId
    username
    text
    sessionId
    createdAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnMessageSentSubscriptionVariables,
  APITypes.OnMessageSentSubscription
>;
