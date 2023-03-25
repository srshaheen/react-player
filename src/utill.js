import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: 'Over You',
            cover: 'https://i.scdn.co/image/ab67616d0000b27339b5c3fe6a4512de0fc6cd36',
            artist: 'El Train, Paal Singh',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=49367',
            color: ['#41241E', '#F9FF7C'],
            id: uuidv4(),
            active: true,
        },
        {
            name: 'Cloud Zone',
            cover: 'https://chillhop.com/wp-content/uploads/2023/02/71374d07888a8b1b3fbef53b82d283f53209cc1a-1024x1024.jpg',
            artist: 'Evil Needle, Misha',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=51078',
            color: ['#AE8D62', '#D9D9D9'],
            id: uuidv4(),
            active: false,
        },

        {
            name: 'Dreaming',
            cover: 'https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg',
            artist: 'Misha, Jussi Halme, El Train, goodie bags',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=49425',
            color: ['#7A9A75', '#252B29'],
            id: uuidv4(),
            active: false,
        },
        {
            name: 'Lose Her Way',
            cover: 'https://chillhop.com/wp-content/uploads/2022/04/8cc8bdc59b30dd1f9d401cb485b8537d909e1f50-1024x1024.jpg',
            artist: 'C Y G N',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=31589',
            color: ['#434733', '#F1E1E2'],
            id: uuidv4(),
            active: false,
        },

        {
            name: 'Embers',
            cover: 'https://chillhop.com/wp-content/uploads/2022/01/d7c0bd347f56540babd9dd85454b93a89df84a15-1024x1024.jpg',
            artist: 'Molly McPhaul, Enluv',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=30135',
            color: ['#143C4A', '#E4B9AB'],
            id: uuidv4(),
            active: false,
        }
        
    ]
}

export default chillHop;