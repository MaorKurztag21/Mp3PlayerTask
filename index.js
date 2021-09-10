const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [4, 5] },
  ],
  playSong(song) {
    console.log(`Playing ${song.title} from ${song.album} by ${(song.artist)} | ${mmssDuration(song.duration)}.`);
  }
}
const mmssDuration=(duration)=> {
  let minutes = Math.floor(duration / 60);
  let seconds = duration % 60;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes.toString() + ':' + seconds.toString();
}

const getSongById= (id)=>{
  /*function getSongById(id) {*/
    for (let num in player.songs) { 
      if (player.songs[num].id === id){ 
        return player.songs[num]; 
    }}
    throw new Error("No song was found");
  }
  function playSong(id) {
    if(getSongById(id)===undefined){
    throw " ${id} ID not exists";
  }
  return player.playSong(getSongById(id));
}
function removeSong(id) {
  if(getSongById(id)===undefined){
    throw new Error("${id} ID not valid");
  }
player.songs.splice(getSongById(id),1);
  for(let num1 in player.playlists){            
    for(let num2 in player.playlists[num1].songs){  
      if(player.playlists[num1].songs[num2] ===id){
        player.playlists[num1].songs.splice(num2,1);
       }
    }}
}
const idExist=(id)=> {
  for (let num in player.songs) {
    if (player.songs[num].id === id)
      return true;
  }
  return false;
}
const secondsFormat= (duration)=>{
  let sum = duration.split(":");
  let minute = parseInt(sum[0]) * 60;
  let second = parseInt(sum[1]);

  return minute + second;
}


function addSong(title, album, artist, duration, id = Math.floor(Math.random() * 100) + 1){
  if(idExist(id)){
    throw new Error("${id} ID already exists");
  }
  else{
    player.songs.push({id: id, title: title,album: album,artist: artist,duration:secondsFormat(duration)});
      return id;
  }
}

function removePlaylist(id) {
}


function createPlaylist(name, id ) {
 
  }

//createPlaylist
function playPlaylist(id) {
}

function editPlaylist(playlistId, songId) {
 
}

function playlistDuration(id) {
}


function searchByQuery(query) {
}
function searchByDuration(duration) {
}
module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}