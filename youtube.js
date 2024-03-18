document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-box input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim().toLowerCase();
        const videoTitles = document.querySelectorAll('.vediosSection .item h4');
        
        videoTitles.forEach(title => {
            const videoTitle = title.textContent.trim().toLowerCase();
            const videoContainer = title.parentNode;
            
            if (videoTitle.includes(searchTerm)) {
                videoContainer.style.display = 'block';
            } else {
                videoContainer.style.display = 'none';
            }
        });
    });
});
