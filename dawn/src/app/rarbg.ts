export interface RARBGTorrent {
    filename: string;
    category: string;
    download: string;
}

export interface RARBGSearchResults {
    torrent_results: RARBGTorrent[];
}

export interface RARBGToken {
    token: string;
}
