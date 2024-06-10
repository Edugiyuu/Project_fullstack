import prismaClient from "../prisma";

class ListCustomersService{
    async execute(){
        //ACHAR
        const customers = await prismaClient.customer.findMany()

        return customers;
    }
}

export{ListCustomersService}