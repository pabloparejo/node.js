var oneArtist = {
    name: 'Artist name',
    songs: ['song1', 'song2', 'song3'],
    events: ['Spain']
}

module.exports = {
    artist: oneArtist,
    other: require('./other'),
    justin: require('./justin')
}