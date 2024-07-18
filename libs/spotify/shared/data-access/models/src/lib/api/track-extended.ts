export interface SpotifyArtistExtended extends Spotify.Entity {
  artistUrl: string;
}

export interface SpotifyTrackExtended extends Spotify.Track {
  albumUrl: string;
  playlistUrl: string;
  artists: SpotifyArtistExtended[];
}
