export class Product {
    constructor(
        private name: string,
        private description: string,
        private price: number,
        private createdAt: Date,
        private nbViews: number
    ) { }
}

export const PRODUCT_TEST = new Product(
    'Hamac',
    `Pour se détendre après 3 jours intensifs d'Angular avec 35° à l'ombre.`,
    15.99,
    new Date(),
    168
);


/*
class Product {
    private name: string;
    private description: string;
    private price: number;
    private createdAt: Date;
    private nbViews: number;

    constructor(
        name: string,
        description: string,
        price: number,
        createdAt: Date,
        nbViews: number
    ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.createdAt = createdAt;
        this.nbViews = nbViews;
    }
}*/
