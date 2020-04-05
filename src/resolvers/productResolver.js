export default {
    Query: {
        allProduct: (_, args, { models }) => {
            return models.Product.findAll()
        },
        getProduct: (root, { id }, { models }) => {
            return models.Product.findByPk(id)
        },
    },
    Mutation: {
        createProduct: (_, args, { models }) => {
            return models.Product.create(args)
        },
        updateProduct: (_, args,  { id },{ models }) => {
            return models.Product.findByPk(id);
            // models.Product.update({
            //         name: name,
            //         price: price
            //     },
            //     {
            //         where: {
            //             id: id
            //         }
            //     });
            },
        }
    
}
