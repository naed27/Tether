/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Message = {
  __typename: "Message",
  id: string,
  roomId: string,
  username: string,
  text: string,
  sessionId: string,
  createdAt: string,
};

export type SendMessageMutationVariables = {
  roomId: string,
  username: string,
  text: string,
  sessionId: string,
};

export type SendMessageMutation = {
  sendMessage?:  {
    __typename: "Message",
    id: string,
    roomId: string,
    username: string,
    text: string,
    sessionId: string,
    createdAt: string,
  } | null,
};

export type GetMessagesQueryVariables = {
  roomId: string,
};

export type GetMessagesQuery = {
  getMessages?:  Array< {
    __typename: "Message",
    id: string,
    roomId: string,
    username: string,
    text: string,
    sessionId: string,
    createdAt: string,
  } | null > | null,
};

export type OnMessageSentSubscriptionVariables = {
  roomId: string,
};

export type OnMessageSentSubscription = {
  onMessageSent?:  {
    __typename: "Message",
    id: string,
    roomId: string,
    username: string,
    text: string,
    sessionId: string,
    createdAt: string,
  } | null,
};
