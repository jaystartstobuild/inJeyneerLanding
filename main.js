// Interactive functionality for inJeyneer site

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Guide Copy Blocks (Modular multi-button support)
  const copyButtons = document.querySelectorAll('.guide-copy-button');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-copy-target');
      const targetElement = targetId 
        ? document.getElementById(targetId) 
        : btn.closest('.guide-copy-block')?.querySelector('code');

      if (!targetElement) return;

      const textToCopy = targetElement.innerText || targetElement.textContent;
      const statusElement = btn.closest('.guide-copy-block')?.querySelector('.guide-copy-status');
      const originalText = btn.textContent;

      try {
        await navigator.clipboard.writeText(textToCopy);
        btn.textContent = 'COPIED!';
        btn.style.backgroundColor = 'var(--emerald)';
        btn.style.color = '#06111e';
        if (statusElement) {
          statusElement.textContent = '✓ Copied prompt to clipboard! Ready to paste into Claude or ChatGPT.';
        }
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = 'var(--cyan)';
          btn.style.color = '#06111e';
          if (statusElement) {
            statusElement.textContent = '';
          }
        }, 3000);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.textContent = 'COPIED!';
        setTimeout(() => {
          btn.textContent = originalText;
        }, 3000);
      }
    });
  });

  // 2. Guide Search & Filter
  const searchInput = document.getElementById('guide-search-input');
  const filterChips = document.querySelectorAll('.filter-chip');
  const guideCards = document.querySelectorAll('.guide-card');
  const guideCount = document.getElementById('guide-count-label');
  const guideEmpty = document.getElementById('guide-empty-state');

  function filterGuides() {
    if (!guideCards.length) return;
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const activeChip = document.querySelector('.filter-chip.is-active');
    const activeCategory = activeChip ? activeChip.getAttribute('data-category') : 'all';

    let visibleCount = 0;

    guideCards.forEach((card) => {
      const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
      const desc = (card.querySelector('p')?.textContent || '').toLowerCase();
      const cat = (card.getAttribute('data-category') || '').toLowerCase();

      const matchesSearch = !query || title.includes(query) || desc.includes(query);
      const matchesCategory = activeCategory === 'all' || cat === activeCategory.toLowerCase();

      if (matchesSearch && matchesCategory) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (guideCount) {
      guideCount.textContent = `${visibleCount} published guide${visibleCount === 1 ? '' : 's'}`;
    }

    if (guideEmpty) {
      guideEmpty.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterGuides);
  }

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      filterGuides();
    });
  });
});
