import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api'

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://tjpulue4q5dq7phz3gtni4xgza.appsync-api.ap-northeast-1.amazonaws.com/graphql',
      region: 'ap-northeast-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-zpbn64qisvdmbiqj3w6ialsb74'
    }
  }
});

export const client = generateClient()
