function make_album(artist, title, tracks) {
    const album = {
      artist: artist,
      title: title
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Call the function to create three album objects
  const album1 = make_album('Artist 1', 'Album 1');
  const album2 = make_album('Artist 2', 'Album 2', 10);
  const album3 = make_album('Artist 3', 'Album 3', 15);
  
  // Print the album information for each return value
  console.log(album1);
  console.log(album2);
  console.log(album3);
  