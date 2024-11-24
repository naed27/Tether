/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Message = {
  __typename: "Message",
  id: string,
  sessionId: string,
  username: string,
  text: string,
  createdAt: string,
};

export type SendMessageMutationVariables = {
  sessionId: string,
  username: string,
  text: string,
};

export type SendMessageMutation = {
  sendMessage?:  {
    __typename: "Message",
    id: string,
    sessionId: string,
    username: string,
    text: string,
    createdAt: string,
  } | null,
};

export type GetMessagesQueryVariables = {
};

export type GetMessagesQuery = {
  getMessages?:  Array< {
    __typename: "Message",
    id: string,
    sessionId: string,
    username: string,
    text: string,
    createdAt: string,
  } | null > | null,
};

export type OnMessageSentSubscriptionVariables = {
};

export type OnMessageSentSubscription = {
  onMessageSent?:  {
    __typename: "Message",
    id: string,
    sessionId: string,
    username: string,
    text: string,
    createdAt: string,
  } | null,
};
