document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelectorAll('.carousel img');
    let currentImageIndex = 0;
    const intervalTime = 5000; // Change slide every 5 seconds (5000 milliseconds)

    function nextImage() {
        // Hide the current active image
        carouselImages[currentImageIndex].classList.remove('active');

        // Move to the next image
        currentImageIndex++;
        if (currentImageIndex >= carouselImages.length) {
            currentImageIndex = 0; // Loop back to the first image
        }

        // Display the next image
        carouselImages[currentImageIndex].classList.add('active');
    }

    // Automatically change slide at intervals
    setInterval(nextImage, intervalTime);
});



 document.addEventListener('DOMContentLoaded', function () {
    const playlists = document.querySelectorAll('.playlist-card');

    playlists.forEach((playlist, index) => {
        playlist.addEventListener('click', () => {
            // Example: Change song and display music player
            const songName = `Song ${index + 1}`;
            const artistName = `Artist ${index + 1}`;
            const coverImage = `assets/images/cover ${index + 1}.jpg`;

            // Update UI elements with song details
            document.querySelector('.current-song-name').textContent = songName;
            document.querySelector('.artist-name').textContent = artistName;
            document.querySelector('.cover').setAttribute('src', coverImage);

            // Show music player section and hide others
            document.querySelector('.music-player-section').classList.add('active');
            document.querySelector('.playlist').classList.remove('active');
        });
    });

    // Add functionality to play/pause buttons, seek bar, etc.
    // Example: Handle play/pause button clicks, update seek bar, etc.
});

document.addEventListener('DOMContentLoaded', function () {
    const playlists = document.querySelectorAll('.playlist-card');
    const backBtn = document.querySelector('.back-btn');
    const musicPlayerSection = document.querySelector('.music-player-section');
    const playlistSection = document.querySelector('.playlist');

    // Handle click on back button to navigate back to playlist
    backBtn.addEventListener('click', () => {
        musicPlayerSection.classList.remove('active');
        playlistSection.classList.add('active');
    });

    playlists.forEach((playlist, index) => {
        playlist.addEventListener('click', () => {
            // Example: Change song and display music player
            const songName = `Song ${index + 1}`;
            const artistName = `Artist ${index + 1}`;
            const coverImage = `assets/images/cover ${index + 1}.jpg`;

            // Update UI elements with song details
            document.querySelector('.current-song-name').textContent = songName;
            document.querySelector('.artist-name').textContent = artistName;
            document.querySelector('.cover').setAttribute('src', coverImage);

            // Show music player section and hide others
            musicPlayerSection.classList.add('active');
            playlistSection.classList.remove('active');
        });
    });

    // Add functionality to play/pause buttons, seek bar, etc.
    // Example: Handle play/pause button clicks, update seek bar, etc.
});


document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio-source");
    const playPauseButton = document.querySelector(".fa-play");
    const nextButton = document.querySelector(".fa-forward");
    const prevButton = document.querySelector(".fa-backward");
    const songTitle = document.querySelector(".current-song-name");
    const artistName = document.querySelector(".artist-name");
    const coverImage = document.querySelector(".cover");
    const seekBar = document.querySelector(".music-seek-bar");
    const currentTimeDisplay = document.querySelector(".current-time");
    const durationDisplay = document.querySelector(".duration");

    let currentSongIndex = 0;
    let isSeeking = false;

    const songs = [
        {
            name: "song 1",
            path: "assets/musics/Song 1.mp3",
            artist: "artist 1",
            cover: "assets/images/cover 1.jpg"
        },
        {
            name: "song 2",
            path: "assets/musics/Song 2.mp3",
            artist: "artist 2",
            cover: "assets/images/cover 2.jpg"
        },
        {
            name: "song 3",
            path: "assets/musics/Song 3.mp3",
            artist: "artist 3",
            cover: "assets/images/cover 3.jpg"
        },
        {
            name: "song 4",
            path: "assets/musics/Song 4.mp3",
            artist: "artist 4",
            cover: "assets/images/cover 4.jpg"
        },
        {
            name: "song 5",
            path: "assets/musics/Song 5.mp3",
            artist: "artist 5",
            cover: "assets/images/cover 5.jpg"
        },
        {
            name: "song 6",
            path: "assets/musics/Song 6.mp3",
            artist: "artist 6",
            cover: "assets/images/cover 6.jpg"
        },
        {
            name: "song 7",
            path: "assets/musics/Song 7.mp3",
            artist: "artist 7",
            cover: "assets/images/cover 7.jpg"
        }
    ];

    function loadSong(song) {
        audio.src = song.path;
        songTitle.textContent = song.name;
        artistName.textContent = song.artist;
        coverImage.src = song.cover;
        seekBar.value = 0;
        audio.addEventListener("loadedmetadata", function () {
            durationDisplay.textContent = formatTime(audio.duration);
        });
    }

    function playSong() {
        audio.play();
        playPauseButton.classList.remove("fa-play");
        playPauseButton.classList.add("fa-pause");
    }

    function pauseSong() {
        audio.pause();
        playPauseButton.classList.remove("fa-pause");
        playPauseButton.classList.add("fa-play");
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        playSong();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
        playSong();
    }

    function updateSeekBar() {
        if (!isSeeking) {
            seekBar.value = audio.currentTime;
            currentTimeDisplay.textContent = formatTime(audio.currentTime);
        }
    }

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function setSeekBar() {
        audio.currentTime = seekBar.value;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        isSeeking = false;
    }

    function initializePlayer() {
        loadSong(songs[currentSongIndex]);
        audio.addEventListener("timeupdate", updateSeekBar);
        audio.addEventListener("ended", nextSong);
        seekBar.addEventListener("input", function () {
            isSeeking = true;
            setSeekBar();
        });
    }

    playPauseButton.addEventListener("click", function () {
        if (audio.paused) {
            playSong();
        } else {
            pauseSong();
        }
    });

    nextButton.addEventListener("click", nextSong);
    prevButton.addEventListener("click", prevSong);

    // Initialize
    initializePlayer();
});
