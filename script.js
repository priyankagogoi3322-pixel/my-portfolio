// JavaScript to handle opening/closing the Artwork Modal

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('artModal');
  const closeBtn = document.querySelector('.close-btn');
  const artCards = document.querySelectorAll('.art-card');

  // Modal elements to update
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalMedium = document.getElementById('modalMedium');
  const modalTags = document.getElementById('modalTags');
  const modalDescription = document.getElementById('modalDescription');

  // Add click listener to every artwork card
  artCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const medium = card.getAttribute('data-medium');
      const tags = card.getAttribute('data-tags').split(',');
      const imageSrc = card.getAttribute('data-image');
      const description = card.getAttribute('data-description');

      // Populate Modal Fields
      modalTitle.textContent = title;
      modalMedium.textContent = medium;
      modalImg.src = imageSrc;
      modalDescription.textContent = description;

      // Render tags
      modalTags.innerHTML = '';
      tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.classList.add('tag');
        tagSpan.textContent = tag.trim();
        modalTags.appendChild(tagSpan);
      });

      // Display Modal
      modal.style.display = 'flex';
    });
  });

  // Close Modal on Close Button Click
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close Modal when clicking outside the content box
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});