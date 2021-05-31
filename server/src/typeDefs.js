export const typeDefs = `
    type Query {
        chat: [Message]        
    }

    type User {
        _id: ID
        name: String!
    }

    type Message {
        _id: ID
        user: User!        
        type: String
        value: String        
    }

    type Mutation {
        createUser(input: UserInput): User
        createMessage(input: MessageInput): Message
    }

    input UserInput {
        name: String!
    }

    input MessageInput {           
        user: ID
        type: String
        value: String!
    }

    type Subscription {
        messageAdded: Message!
    }
`;
