// JavaScript for Smooth Scrolling to Sections

document.addEventListener('DOMContentLoaded', () => {

    // Get all category links
    const categoryLinks = document.querySelectorAll('.category-link');

    // Add click event to each category link
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetSection = document.querySelector(this.getAttribute('href')); // Get the target section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Success alert for downloads
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent actual download (for now)
            alert("Your download will start shortly!");
            // Here, you can add actual download logic if needed
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for the video section
    document.querySelector('a[href="#video-resources"]').addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    // Lazy load videos as the user scrolls to them
    const videoCards = document.querySelectorAll('.video-card iframe');
    
    const lazyLoadVideos = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const videoIframe = entry.target;
                const videoSrc = videoIframe.getAttribute('data-src');
                videoIframe.setAttribute('src', videoSrc);
                observer.unobserve(videoIframe);
            }
        });
    };

    const videoObserver = new IntersectionObserver(lazyLoadVideos, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    videoCards.forEach(videoCard => {
        const videoIframe = videoCard;
        videoIframe.setAttribute('data-src', videoIframe.getAttribute('src'));
        videoIframe.setAttribute('src', ''); // Empty src initially
        videoObserver.observe(videoIframe);
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Mapping folders to their respective videos
    const folderVideos = {
        adhd: [
            { title: "Understanding ADHD in Learning", src: "https://www.youtube.com/embed/VIDEO_ID_2" },
            { title: "ADHD Learning Strategies", src: "https://www.youtube.com/embed/VIDEO_ID_2" },
            { title: "Helping ADHD Students Focus", src: "https://www.youtube.com/embed/VIDEO_ID_3" },
            { title: "Classroom Tips for ADHD", src: "https://www.youtube.com/embed/VIDEO_ID_4" }
        ],
        dyslexia: [
            { title: "Supporting Students with Dyslexia", src: "https://www.youtube.com/embed/VIDEO_ID_5" },
            { title: "Dyslexia Reading Tips", src: "https://www.youtube.com/embed/VIDEO_ID_6" },
            { title: "Classroom Modifications for Dyslexia", src: "https://www.youtube.com/embed/VIDEO_ID_7" },
            { title: "Technology for Dyslexic Students", src: "https://www.youtube.com/embed/VIDEO_ID_8" }
        ],
        autism: [
            { title: "Creating an Inclusive Environment for Autism", src: "https://www.youtube.com/embed/VIDEO_ID_9" },
            { title: "Autism and Social Skills", src: "https://www.youtube.com/embed/VIDEO_ID_10" },
            { title: "Supporting Autistic Students in Class", src: "https://www.youtube.com/embed/VIDEO_ID_11" },
            { title: "Autism Communication Strategies", src: "https://www.youtube.com/embed/VIDEO_ID_12" }
        ]
    };

    const folderCards = document.querySelectorAll('.folder-card');
    const videoDisplay = document.getElementById('video-display');
    const folderTitle = document.getElementById('folder-title');
    const videoGrid = document.querySelector('.video-grid');

    // Function to display videos related to a folder
    function showFolderVideos(folder) {
        console.log(`Clicked folder: ${folder}`); // Debugging: check which folder is clicked

        const videos = folderVideos[folder];
        if (!videos) {
            console.error('No videos found for folder:', folder); // Debugging: check if the folder has videos
            return;
        }

        videoGrid.innerHTML = ''; // Clear previous videos
        folderTitle.innerText = folder.charAt(0).toUpperCase() + folder.slice(1); // Set folder title

        // Populate the video grid with the folder's videos
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.innerHTML = `
                <iframe src="${video.src}" frameborder="0" allowfullscreen></iframe>
                <h4>${video.title}</h4>
            `;
            videoGrid.appendChild(videoItem);
        });

        videoDisplay.style.display = 'block'; // Show video section
        videoDisplay.scrollIntoView({ behavior: 'smooth' });
    }

    // Add click event listeners to folder cards
    folderCards.forEach(card => {
        card.addEventListener('click', function() {
            const folder = this.getAttribute('data-folder');
            console.log('Folder clicked:', folder); // Debugging: check if click is working
            showFolderVideos(folder);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Mapping folders to their respective videos
    const folderVideos = {
        adhd: [
            { title: "Understanding ADHD in Learning", src: "https://www.youtube.com/watch?v=heZJUqptenQ" },
            { title: "ADHD Learning Strategies", src: "https://www.youtube.com/embed/MW7j5A3InyY" },
            { title: "Helping ADHD Students Focus", src: "https://www.youtube.com/embed/VIDEO_ID_3" },
            { title: "Classroom Tips for ADHD", src: "https://www.youtube.com/embed/VIDEO_ID_4" }
        ],
        dyslexia: [
            { title: "Supporting Students with Dyslexia", src: "https://www.youtube.com/embed/VIDEO_ID_5" },
            { title: "Dyslexia Reading Tips", src: "https://www.youtube.com/embed/VIDEO_ID_6" },
            { title: "Classroom Modifications for Dyslexia", src: "https://www.youtube.com/embed/VIDEO_ID_7" },
            { title: "Technology for Dyslexic Students", src: "https://www.youtube.com/embed/VIDEO_ID_8" }
        ],
        autism: [
            { title: "Creating an Inclusive Environment for Autism", src: "https://www.youtube.com/embed/VIDEO_ID_9" },
            { title: "Autism and Social Skills", src: "https://www.youtube.com/embed/VIDEO_ID_10" },
            { title: "Supporting Autistic Students in Class", src: "https://www.youtube.com/embed/VIDEO_ID_11" },
            { title: "Autism Communication Strategies", src: "https://www.youtube.com/embed/VIDEO_ID_12" }
        ]
    };

    const folderCards = document.querySelectorAll('.folder-card');
    const videoDisplay = document.getElementById('video-display');
    const folderTitle = document.getElementById('folder-title');
    const videoGrid = document.querySelector('.video-grid');
    let currentFolder = ''; // Variable to track the currently open folder

    // Function to display videos related to a folder
    function showFolderVideos(folder) {
        if (currentFolder === folder && videoDisplay.style.display === 'block') {
            // If the same folder is clicked again, hide the video display section
            videoDisplay.style.display = 'none';
            currentFolder = ''; // Reset the current folder
        } else {
            // Otherwise, show the videos for the selected folder
            const videos = folderVideos[folder];
            videoGrid.innerHTML = ''; // Clear previous videos
            folderTitle.innerText = folder.charAt(0).toUpperCase() + folder.slice(1); // Set folder title

            // Populate the video grid with the folder's videos
            videos.forEach(video => {
                const videoItem = document.createElement('div');
                videoItem.classList.add('video-item');
                videoItem.innerHTML = `
                    <iframe src="${video.src}" frameborder="0" allowfullscreen></iframe>
                    <h4>${video.title}</h4>
                `;
                videoGrid.appendChild(videoItem);
            });

            videoDisplay.style.display = 'block'; // Show video section
            videoDisplay.scrollIntoView({ behavior: 'smooth' });
            currentFolder = folder; // Update the current folder
        }
    }

    // Add click event listeners to folder cards
    folderCards.forEach(card => {
        card.addEventListener('click', function() {
            const folder = this.getAttribute('data-folder');
            showFolderVideos(folder); // Show or hide the folder's videos
        });
    });
});

