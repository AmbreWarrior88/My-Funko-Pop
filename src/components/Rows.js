import theLordOfTheRing from '../TheLordOfTheRing.json';

function createData(univers, name, edition, type, number, buy, price, newPrice) {
    return { univers, name, edition, type, number, buy, price, newPrice };
}

const rows = [

    // The Lord Of The Ring

    createData(theLordOfTheRing.univers, '', '', '', '', '', 0, 0),

    createData('', theLordOfTheRing.map(e => e.name), theLordOfTheRing.map(e => e.edition), theLordOfTheRing.map(e => e.type), theLordOfTheRing.map(e => e.number), theLordOfTheRing.map(e => e.buy), theLordOfTheRing.map(e => e.price), theLordOfTheRing.map(e => e.newPrice)),



    createData('', 'Galadriel', 'Tempted', 'Pop', '#634', '13/03/20', 14.95, 14.95),

    createData('', 'Roi Aragorn', 'Barnes&Noble Exclusive', 'Pop', '#534', '30/05/20', 23.95, 40.50),

    createData('', 'Saruman', '', 'Pop', '#447', '13/03/20', 9.81, 14),

    createData('', 'Gandalf sur Gwaihir', '', 'Rides', '#72', '20/11/19', 33.95, 25.85),

    // Harry Potter
    createData('Harry Potter', '', '', '', '', '', 0, 0),

    createData('', 'Harry Potter sur Balai', 'SDCC 2017', 'Pop', '#31', '18/09/17', 35, 85),

    createData('', 'Voldemort avec Nagini', 'EXC', 'Pop', '#85', '13/03/20', 14.95, 42.99),

    createData('', 'Albus Dumbledore', '', 'Pop', '#04', '21/05/18', 7.99, 11.81),

    createData('', 'Hermione Granger', 'Hot Topic EXC', 'Pop', '#80', '22/08/2019', 27.40, 40),

    createData('', 'Ron Weasley', 'Japan Expo 2019', 'Pop', '#72', '07/19', 15, 31.79),

    createData('', 'Patronus Hermione', '', 'Pop', '#106', '17/07/20', 13.11, 11.95),

    createData('', 'Minerva McGonagall', 'Yule', 'Pop', '#93', '08/01/20', 12.62, 11.95),

    createData('', 'Fumseck', '', 'Pop', '#87', '17/07/19', 15.10, 11.95),

    createData('', 'Buck', 'Flocké', 'Pop', '#104', '31/01/20', 17.99, 34.99),

    createData('', 'Sibylle Trelawney', '', 'Pop', '#86', '26/07/20', 16.90, 11.95),

    // Disney
    createData('Disney', '', '', '', '', '', 0, 0),

    createData('', 'Mickey Chef d’Orchestre', 'Mickey s 90Th Anniversary', 'Pop', '#428', '25/07/20', 8.56, 11.70),

    createData('Aladdin', 'Prince Ali', '', 'Pop', '#475', '25/07/20', 8.56, 9.90),

    createData('', 'Jasmine', 'New', 'Pop', '#326', '21/03/18', 9.85, 11.95),

    createData('', 'Rajah', '', 'Pop', '#355', '21/03/18', 6.77, 20.58),

    createData('Mulan', 'Mulan sur Khan', '', 'Rides', '#76', '24/01/20', 30.52, 32.95),

    createData('', 'Mulan', 'New', 'Pop', '#323', '21/03/18', 14.17, 16.95),

    createData('', 'Mushu & Cricket', '', 'Pop', '#167', '21/03/18', 17.57, 9.79),

    createData('', 'Mushu', 'Glitter', 'Pop', '#630', '31/01/20', 17.99, 39.99),

    createData('La Belle et La Bête', 'La Bête', '', 'Pop', '#239', '24/10/18', 14.99, 11.95),

    createData('', 'Belle', 'Movie', 'Pop', '#242', '21/03/18', 11.37, 14.71),

    createData('', 'Mme Samovar et Chip', '', 'Pop', '#92', '09/01/15', 15.98, 76.41),

    createData('Cendrillon', 'Cendrillon', 'Métallique', 'Pop', '#222', '21/03/18', 22, 50),

    createData('', 'Gus Gus dans pantoufle', '', 'Pop', '#139', '14/11/17', 14, 66.65),

    createData('', 'Marraine la Bonne Fée', '', 'Pop', '#739', '25/07/20', 8.56, 11.99),

    createData('La Petite Sirène', 'Ariel', '', 'Pop', '#27', '19/03/18', 12.18, 9.78),

    createData('', 'Ursula', 'Hot Topic - Pailleté', 'Pop', '#568', '25/07/20', 22.95, 22.95),

    createData('Hercule', 'Bébé Pégase', '', 'Pop', '#383', '24/10/18', 7.73, 10.29),

    createData('', 'Bébé Hercule', '', 'Pop', '#382', '24/10/18', 8.43, 11.95),

    createData('Le Bossu de Notre-Dame', 'Esmeralda', '', 'Pop', '#635', '08/01/20', 11.93, 8.12),

    createData('Alice Au Pays Des Merveilles', 'Reine de Coeur', 'HotTopic', 'Pop', '#234', '02/02/19', 22.50, 39.67),

    createData('L’Étrange Noël de Monsieur Jack', 'Zéro (Chien Fantôme)', '', 'Pop', '#71', '13/03/20', 11.95, 10.29),

    createData('', 'Jack et sa maison', '', 'Pop', '#07', '31/01/20', 29.58, 34.49),

    createData('The Maleficient (Live Action)', ' Maleficent', '', 'Pop', '#627', '24/10/19', 14.21, 14.71),

    createData('Villains', 'Maléfique sur son trône', '', 'Pop', '#784', '25/07/20', 27.95, 27.95),

    createData('', 'Cruella De Vil', 'Hot Topic - Pailleté', 'Pop', '#736', '25/07/20', 18.99, 24.75),

    // Back To The Futur
    createData('Retour vers le Futur', '', '', '', '', '', 0, 0),

    createData('', 'Dr. Emmett Brown', '', 'Pop', '#50', '21/05/18', 9.49, 19.83),

    createData('', 'Marty verifiant l heure', 'Exclusivité SDCC', 'Pop', '#965', '25/07/20', 19.99, 19.99),

    // Marvel
    createData('Marvel', '', '', '', '', '', 0, 0),

    createData('Deadpool', 'Deadpool', 'Bobble Head', 'Pop', '#320', '25/07/20', 8.56, 19.83),

    createData('Gardiens de la Galaxie', 'Groot dansant', '', 'Pop', '#65', '09/01/15', 10.95, 32),

    createData('Wonder Woman', 'Wonder Woman', 'Sepia EXC', 'Pop', '#229', '25/07/20', 10.76, 16.99),

    createData('X-Men', 'Mystique', '20Th Anniversary', 'Pop', '#638', '25/07/20', 11.95, 11.95),

    createData('Suicide Squad', 'Harley Quinn', '', 'Pop', '#97', '14/11/17', 13.12, 11.85),

    // Game Of Thrones
    createData('Game of Thrones', '', '', '', '', '', 0, 0),

    createData('', 'Jon Snow on Iron throne', 'Japan Expo 2019', 'Pop', '#72', '07/19', 15, 16.43),

    createData('', 'Daenerys & Drogon', 'Sans boîte', 'Rides', '#15', '14/11/17', 18.27, 20.19),

    // Animation
    createData('Bleach', 'Ichigo', '', 'Pop', '#59', '19/03/18', 14.99, 33.30),

    createData('Dragon Ball Z', 'Super Saiyan Goten', 'Hot Topic', 'Pop', '#641', '31/01/20', 11.04, 35),

    createData('', 'Vegeta', 'limited Edition 2019 Fall Convention', 'Pop', '#669', '31/01/20', 14.44, 40, 99),

    createData('How To Train Your Dragon', '', '', '', '', '', 0, 0),

    createData('', 'Light Fury', '', 'Pop', '#687', '03/04/19', 21.79, 23.50),

    createData('', 'Harrold', '', 'Pop', '#95', '2014', 0, 69.90),

    createData('', 'Krokmou', '', 'Pop', '#100', '2014', 0, 47.98),

    // Other
    createData('The Witcher', 'Geralt (Igni)', 'Glow in the Dark', 'Pop', '#554', '25/07/20', 30, 30),

    createData('La Casa de Papel', 'Nairobi', '', 'Pop', '#916', '20/11/19', 12.99, 42.30),

    createData('Ready Player One', 'Art3mis', '', 'Pop', '#497', '21/05/18', 9.25, 9.27),

]

export default rows;
