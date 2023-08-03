import { Categorie, Slide } from "./categorie"; // inportation de la class catégorie

/**
 * @CATEGORIES Le grand tableau qui contient les différents catégorie instancier a partir de la class categorie
 */
export const CATEGORIES : Categorie[] =[
    {
        "id": "1",
        "name": "Automobile",
        "seen": false,
        "choose": false
    },
    {
        "id": "2",
        "name": "Restauration",
        "seen": false,
        "choose": false
    },
    {
        "id": "3",
        "name": "Finance",
        "seen": false,
        "choose": false
    },
    {
        "id": "4",
        "name": "Sport",
        "seen": false,
        "choose": false
    },
    {
        "id": "5",
        "name": "Design",
        "seen": false,
        "choose": false
    },
    {
        "id": "6",
        "name": "Technologie",
        "seen": false,
        "choose": false
    },
    {
        "id": "7",
        "name": "marseille",
        "seen": false,
        "choose": false
    }
];

export const slides: Slide[] = [

    {
        headline: "For Your Current Mood",
        src: "../assets/img-carou/mountains.jpg"
    },
    {
        headline: "Miouw",
        src: "../assets/img-carousel/nature.jpg"
    },
    {
        headline: "In The Wilderness",
        src: "../assets/img-carousel/nature.jpg"
    },

];
