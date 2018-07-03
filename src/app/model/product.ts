export class Product {
    constructor(
        private name: string,
        private description: string,
        private price: number,
        private createdAt: Date,
        private nbViews: number
    ) { }
}

export const PRODUCT_TEST: Product = new Product(
    'Hamac',
    `Pour se détendre après 3 jours intensifs d'Angular avec 35° à l'ombre.`,
    15.99,
    new Date(),
    168
);


export const TAB_PRODUCT: Product[] = [
    new Product('Hamac', `Pour se détendre après 3 jours intensifs d'Angular avec 35° à l'ombre.`, 15.99, new Date(), 168),
    new Product('Parasol', `Pour faire de l'ombre au Hamac`, 145, new Date(), 45),
    new Product('Pot de sable', `Pour tenir le parasol`, 10, new Date(), 4558),
    new Product('Diabolo fraise', `Pour se rafraichir`, 0.5, new Date(), 1444),
    new Product('Verre', `Pour mettre le diabolo`, 1.99, new Date(), 141414),
];

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
