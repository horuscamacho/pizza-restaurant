type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
    {
        id: 1,
        title: "Pizza Siciliana",
        desc: "Despierta tus papilas gustativas con una combinación ardiente de pepperoni picante, jalapeños, escamas de pimiento rojo triturado y queso mozzarella derretido, brindando un toque picante en cada bocado.",
        img: "/temporary/p1.png",
        price: 349,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 40,
            },
            {
                title: "Large",
                additionalPrice: 60,
            },
        ],
    },
    {
        id: 2,
        title: "Tocino Deluxe",
        desc: "Déjate llevar por la deliciosa esencia ahumada con una jugosa hamburguesa de carne a la parrilla, coronada con tocino crujiente, queso cheddar derretido, cebollas caramelizadas y un toque de salsa barbacoa picante.",
        img: "/temporary/p2.png",
        price: 389,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 40,
            },
            {
                title: "Large",
                additionalPrice: 60,
            },
        ],
    },
    {
        id: 3,
        title: "Napolitana",
        desc: "\n" +
            "Un clásico deleite italiano que presenta una delgada y crujiente masa, salsa de tomate picante, queso mozzarella fresco y una mezcla de hierbas aromáticas, todo coronado con lechuga, tomates y una cucharada de mayonesa picante.",
        img: "/temporary/p3.png",
        price: 329,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 40,
            },
            {
                title: "Large",
                additionalPrice: 60,
            },
        ],
    },
    {
        id: 4,
        title: "Arrabbiata Picante",
        desc: "¡Despierta tus papilas gustativas con esta ardiente creación de pasta, que combina penne en una salsa de tomate picante infusionada con ajo, escamas de chile rojo y albahaca fresca para una experiencia culinaria reconfortante y única!",
        img: "/temporary/p4.png",
        price: 269,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 5,
        title: "Jalapeño Deluxe",
        desc: "¡Despierta tus papilas gustativas con un toque ardiente! Esta hamburguesa cuenta con una jugosa carne de res, jalapeños picantes, queso pepper jack y una salsa de mayonesa de chipotle con un toque picante, junto con todos los ingredientes clásicos, todo servido en un pan tostado. ¡Una verdadera explosión de sabor!",
        img: "/temporary/p5.png",
        price: 390,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 40,
            },
            {
                title: "Large",
                additionalPrice: 60,
            },
        ],
    },
    {
        id: 6,
        title: "Margherita Especial",
        desc: "Un favorito atemporal con un toque especial, presentando una delgada masa cubierta de tomates dulces, albahaca fresca, cremosa mozzarella y un chorrito de aceite de oliva virgen extra, arúgula fresca y un toque de glaseado de balsámico. ¡Una combinación deliciosa y única que te transportará a la tradición italiana!",
        img: "/temporary/p6.png",
        price: 349,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 40,
            },
            {
                title: "Large",
                additionalPrice: 60,
            },
        ],
    },
    {
        id: 7,
        title: "Parmesano y Ajo",
        desc: "\n" +
            "Un deleite para los amantes del ajo, presentando linguine bañado en una cremosa salsa de Parmesano, infusionada con ajo y adornada con perejil picado, pimientos y tomates cherry. ¡Una explosión de sabor que hará que los fanáticos del ajo se deshagan de placer!",
        img: "/temporary/p7.png",
        price: 389,
        options: [
            {
                title: "Chica",
                additionalPrice: 0,
            },
            {
                title: "Medina",
                additionalPrice: 40,
            },
            {
                title: "Grande",
                additionalPrice: 60,
            },
        ],
    },
    {
        id: 8,
        title: "Delicia Mediterranea",
        desc: "¡Embárcate en un viaje culinario con esta creación inspirada en el Mediterráneo, que presenta queso feta lleno de sabor, aceitunas Kalamata, tomates secados al sol y un toque de orégano! Disfruta de la esencia de la región en cada bocado y déjate llevar por los sabores de la costa mediterránea. ¡Bon appétit! ",
        img: "/temporary/p8.png",
        price: 389,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 40,
            },
            {
                title: "Large",
                additionalPrice: 60,
            },
        ],
    },
    {
        id: 9,
        title: "Hawaiiana Teriyaki",
        desc: "Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.",
        img: "/temporary/p9.png",
        price: 399,
        options: [
            {
                title: "Chica",
                additionalPrice: 0,
            },
            {
                title: "Mediana",
                additionalPrice: 40,
            },
            {
                title: "Grande",
                additionalPrice: 60,
            },
        ],
    },
];


export const pizzas: Products = [
    {
        id: 1,
        title: "Sicilian",
        desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
        img: "/temporary/p1.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 2,
        title: "Mediterranean Delight",
        desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
        img: "/temporary/p8.png",
        price: 32.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 3,
        title: "Bella Napoli",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p3.png",
        price: 26.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 4,
        title: "Pesto Primavera",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p10.png",
        price: 28.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 5,
        title: "Veggie Supreme",
        desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
        img: "/temporary/p11.png",
        price: 24.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 6,
        title: "Four Cheese Fantasy",
        desc: "Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.",
        img: "/temporary/p12.png",
        price: 22.9,
        options: [
            {
                title: "Small",
                additionalPrice: 0,
            },
            {
                title: "Medium",
                additionalPrice: 4,
            },
            {
                title: "Large",
                additionalPrice: 6,
            },
        ],
    },
];

export const singleProduct: Product = {
    id: 1,
    title: "Sicilian",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
        {
            title: "Small",
            additionalPrice: 0,
        },
        {
            title: "Medium",
            additionalPrice: 4,
        },
        {
            title: "Large",
            additionalPrice: 6,
        },
    ],
};


type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
}[];

export const menu: Menu = [
    {
        id: 1,
        slug: "pastas",
        title: "Italian Pastas",
        desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
        img: "/temporary/m1.png",
        color: "white",
    },
    {
        id: 2,
        slug: "burgers",
        title: "Juicy Burgers",
        desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
        img: "/temporary/m2.png",
        color: "black",
    },
    {
        id: 3,
        slug: "pizzas",
        title: "Cheesy Pizzas",
        desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
        img: "/temporary/m3.png",
        color: "white",
    },
];