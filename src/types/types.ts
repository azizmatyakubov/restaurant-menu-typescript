export interface Dish {
    id:          number;
    name:        string;
    image:       string;
    category:    string;
    label:       string;
    price:       string;
    description: string;
    comments:    Comment[];
}

export interface Comment {
    id:      number;
    rating:  number;
    comment: string;
    author:  string;
    date:    string;
}

export interface NavbarInterface {
    title: string;
}

export interface Reservation {
    name: string,
    phone: string,
    numberOfPeople: number,
    smoking: boolean,
    dateTime: string,
    specialRequests: string,
}