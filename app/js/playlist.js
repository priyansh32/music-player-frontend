const playlistMain = document.querySelectorAll('.playlist-main')
var myplaylist = [
    {
        song_name: "Mirage",
        artist: "Oreo",
        thumbnail_path: "./assets/images/thumbnails/electronic.jpg"
    },
    {
        song_name: "Runaway",
        artist: "Aurora",
        thumbnail_path: "./assets/images/thumbnails/chill.jpg"
    },
    {
        song_name: "Safari",
        artist: "Serena",
        thumbnail_path: "./assets/images/thumbnails/rock.jpg"
    },
    {
        song_name: "Lean on(feat. DJ Snake python sapola)",
        artist: "Major Lazer",
        thumbnail_path: "./assets/images/thumbnails/love.jpg",
    },
    {
        song_name: "Cradles",
        artist: "Sub urban",
        thumbnail_path: "./assets/images/thumbnails/roadtrip.jpg",
    },
    {
        song_name: "8 Parche",
        artist: "Baani Sandhu",
        thumbnail_path: "./assets/images/thumbnails/pop.jpg"
    },
    {
        song_name: "Señorita",
        artist: "Shawn Mendes \& Camila Cabello",
        thumbnail_path: "./assets/images/thumbnails/retro.jpg"
    },
    {
        song_name: "Waka Waka",
        artist: "Africa",
        thumbnail_path: "./assets/images/thumbnails/workout.jpg"
    },
    {
        song_name: "Believer",
        artist: "Imagine Dragons",
        thumbnail_path: "./assets/images/thumbnails/party.jpg"
    },
    {
        song_name: "Young Shahrukh",
        artist: "Tesher",
        thumbnail_path: "./assets/images/thumbnails/rock.jpg"
    }
]
var likedsongs = [
    {
        song_name: "Mirage",
        artist: "Oreo",
        thumbnail_path: "./assets/images/thumbnails/electronic.jpg"
    },
    {
        song_name: "Runaway",
        artist: "Aurora",
        thumbnail_path: "./assets/images/thumbnails/chill.jpg"
    },
    {
        song_name: "Safari",
        artist: "Serena",
        thumbnail_path: "./assets/images/thumbnails/rock.jpg"
    },
    {
        song_name: "Lean on(feat. DJ Snake)",
        artist: "Major Lazer",
        thumbnail_path: "./assets/images/thumbnails/love.jpg",
    },
    {
        song_name: "Cradles",
        artist: "Sub urban",
        thumbnail_path: "./assets/images/thumbnails/roadtrip.jpg",
    }]
myplaylist.forEach((song, index) => {
    let songdiv = `<div class="song flex flex-aic flex-jcsb">
    <div class="song-partone flex flex-aic">
    <p class="song-no">${index < 9 ? '0' + (index + 1) : index + 1}</p>
    <div class="song-poster">
    <img src="${song.thumbnail_path}" alt="Song Poster">
    </div>
    <div class="song-info flex flex-fdc">
        <p class="song-name">${song.song_name}</p>
        <p class="song-artist">${song.artist}</p>
    </div>
    </div>
    <svg class="likesvg pointer" height="18" width="20" xmlns:svgjs="http://svgjs.com/svgjs"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30"
	 style="enable-background:new 0 0 30 30;" xml:space="preserve">
<g id="SvgjsG1013">
	<g>
    <path fill="grey" class="st0" d="M3.8,16.1C1.1,13.3,0.7,9,3.1,5.8c1.5-2,3.8-3.1,6.3-3.1c1.7,0,3.3,0.5,4.7,1.6L15,4.9l0.9-0.6
			c1.4-1,3.1-1.5,4.8-1.5c2.1,0,4,0.8,5.5,2.3c1.5,1.5,2.4,3.5,2.4,5.7c0,2.1-0.8,4.1-2.2,5.5L15,27.3L3.8,16.1z"/>
		<path fill="grey" d="M9.4,4.1c1.4,0,2.7,0.4,3.8,1.3L15,6.7l1.8-1.3c1.2-0.8,2.5-1.3,3.9-1.3c1.7,0,3.2,0.6,4.4,1.8c2.5,2.5,2.6,6.6,0.1,9.1
			L15,25.2L4.9,15.1c-2.3-2.3-2.5-5.8-0.6-8.4C5.5,5.1,7.4,4.1,9.4,4.1L9.4,4.1 M9.4,1.1c-2.9,0-5.7,1.3-7.5,3.8
			c-2.8,3.8-2.4,9,0.9,12.3L14,28.4c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l11.2-11.2c3.6-3.6,3.6-9.6-0.1-13.3
			c-1.8-1.8-4.1-2.7-6.5-2.7c-2,0-4,0.6-5.7,1.8C13.3,1.7,11.3,1.1,9.4,1.1L9.4,1.1z"/>
	</g>
</g>
</svg>
</div>`
    playlistMain[0].innerHTML += songdiv;
})
likedsongs.forEach((song, index) => {
    let songdiv = `<div class="song flex flex-aic flex-jcsb">
    <div class="song-partone flex flex-aic">
    <p class="song-no">${index < 9 ? '0' + (index + 1) : index + 1}</p>
    <div class="song-poster">
    <img src="${song.thumbnail_path}" alt="Song Poster">
    </div>
    <div class="song-info flex flex-fdc">
        <p class="song-name">${song.song_name}</p>
        <p class="song-artist">${song.artist}</p>
    </div>
    </div>
    <svg class="likesvg pointer" height="18" width="20" xmlns:svgjs="http://svgjs.com/svgjs"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30"
	 style="enable-background:new 0 0 30 30;" xml:space="preserve">
<g id="SvgjsG1013">
	<g>
    <path fill="grey" class="st0" d="M3.8,16.1C1.1,13.3,0.7,9,3.1,5.8c1.5-2,3.8-3.1,6.3-3.1c1.7,0,3.3,0.5,4.7,1.6L15,4.9l0.9-0.6
			c1.4-1,3.1-1.5,4.8-1.5c2.1,0,4,0.8,5.5,2.3c1.5,1.5,2.4,3.5,2.4,5.7c0,2.1-0.8,4.1-2.2,5.5L15,27.3L3.8,16.1z"/>
		<path fill="grey" d="M9.4,4.1c1.4,0,2.7,0.4,3.8,1.3L15,6.7l1.8-1.3c1.2-0.8,2.5-1.3,3.9-1.3c1.7,0,3.2,0.6,4.4,1.8c2.5,2.5,2.6,6.6,0.1,9.1
			L15,25.2L4.9,15.1c-2.3-2.3-2.5-5.8-0.6-8.4C5.5,5.1,7.4,4.1,9.4,4.1L9.4,4.1 M9.4,1.1c-2.9,0-5.7,1.3-7.5,3.8
			c-2.8,3.8-2.4,9,0.9,12.3L14,28.4c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l11.2-11.2c3.6-3.6,3.6-9.6-0.1-13.3
			c-1.8-1.8-4.1-2.7-6.5-2.7c-2,0-4,0.6-5.7,1.8C13.3,1.7,11.3,1.1,9.4,1.1L9.4,1.1z"/>
	</g>
</g>
</svg>
</div>`
    playlistMain[1].innerHTML += songdiv;
})