const likeButton = document.querySelectorAll('.likesvg');
//Event Listener to 
likeButton.forEach((button) => {
    button.addEventListener('click', () => {
        let likebuttonmain = button.querySelector('.st0');
        console.log(likebuttonmain.getAttribute('fill'))
        if (likebuttonmain.style.fill != "grey") {
            likebuttonmain.style.fill = "grey";
        }
        else {
            likebuttonmain.style.fill = "#0c1027";
        }
    });
})

const playlists = document.querySelectorAll('.playlist');
playlists.forEach((playlist) => {
    let playlistToggle = playlist.querySelector('.playlist-toggle');
    playlistToggle.addEventListener('click', () => {
        let arrow = playlist.querySelector('.arrow');
        if (playlist.classList.contains('playlist-collapse')) {
            playlist.classList.remove('playlist-collapse')
            arrow.classList.remove('arrow-down')
            arrow.classList.add('arrow-up')
        }
        else {
            playlist.classList.add('playlist-collapse');
            arrow.classList.remove('arrow-up')
            arrow.classList.add('arrow-down')
        }
    })
})
