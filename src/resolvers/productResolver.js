export default  {
    Query:{
        allProduct:(_,args,{models}) => {
            return models.Product.findAll()
        }
    },
    Mutation:{
        createProduct:(_,args, {models}) =>{
            return models.Product.create(args)
        }
    }
}