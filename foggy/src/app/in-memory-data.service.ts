import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const movies = [
            { id: 11, title: 'Mr. Nice', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false },
            { id: 12, title: 'Mr. Nicee', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false },
            { id: 13, title: 'Mr. Niceee', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false },
            { id: 14, title: 'Mr. Niceeee', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false },
            { id: 15, title: 'Mr. Niceeeee', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false },
            { id: 16, title: 'Mr. Niceeeeee', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false },
            { id: 17, title: 'Mr. Niceeeeeee', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false },
            { id: 18, title: 'Mr. Niceeeeeeee', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false },
            { id: 19, title: 'Mr. Niceeeeeeeee', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false },
            { id: 20, title: 'Mr. Niceeeeeeeeee', image: 'image', year: 2015, runtime: 1234, rating: 8.9, format: 'x264', resolution: '720p', filename: 'Mr. Nice (2015)', magnet_link: 'fklsdjlkfjsadklfjlsadfu3402lfjdlkfjsd', downloaded: false }
        ];
        return { movies };
    }
}