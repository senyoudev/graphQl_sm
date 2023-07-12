import postResolvers from './postResolvers.js'

const resolvers = {
    Query:{
        ...postResolvers.Query
    }
}


export default resolvers