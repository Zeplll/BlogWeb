/**
 * UNORDERED CONTEMPLATIONS
 * Interactive Digital Canvas - JavaScript Interactions
 * 
 * This script brings life to the digital oil painting through
 * elegant animations, scroll effects, and organic interactions.
 */

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initNavigationEffects();
    // initCursorEffects(); // 已禁用鼠标跟踪功能
    initParallaxEffects();
    initCardInteractions();
    initLanguageToggle();
    initMarkdownLoader();
    initClickRippleEffect();
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

/**
 * Observes elements with [data-scroll] attribute and reveals them
 * with elegant animations when they enter the viewport
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation delays for multiple elements
    setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with data-scroll attribute
    const scrollElements = document.querySelectorAll('[data-scroll]');
    scrollElements.forEach(el => observer.observe(el));
}

// ========================================
// CONSTELLATION NAVIGATION EFFECTS
// ========================================

/**
 * Creates organic, breathing animations for the navigation stars
 * and adds interactive hover effects with light trails
 */
function initNavigationEffects() {
    const starLinks = document.querySelectorAll('.star-link');
    
    starLinks.forEach((star, index) => {
        // Create unique breathing animation for each star
        const breatheAnimation = () => {
            const delay = index * 500;
            const duration = 2000 + (index * 300);
            
            setTimeout(() => {
                star.style.animation = `breathe ${duration}ms ease-in-out infinite`;
            }, delay);
        };
        
        breatheAnimation();
        
        // Add hover ripple effect
        star.addEventListener('mouseenter', (e) => {
            createRipple(e, star);
        });
        
        // Add subtle rotation on hover
        star.addEventListener('mouseover', () => {
            const symbol = star.querySelector('.star-symbol');
            symbol.style.transition = 'transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
    });
    
    // Add CSS animation for breathing effect dynamically
    if (!document.getElementById('dynamic-animations')) {
        const style = document.createElement('style');
        style.id = 'dynamic-animations';
        style.textContent = `
            @keyframes breathe {
                0%, 100% { transform: scale(1); opacity: 0.9; }
                50% { transform: scale(1.1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Creates a ripple effect around interactive elements
 */
function createRipple(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    
    ripple.style.position = 'absolute';
    ripple.style.width = '100px';
    ripple.style.height = '100px';
    ripple.style.borderRadius = '50%';
    ripple.style.border = '2px solid rgba(236, 72, 153, 0.5)';
    ripple.style.top = '50%';
    ripple.style.left = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '100';
    ripple.style.animation = 'rippleExpand 1s ease-out forwards';
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    // Add ripple animation
    if (!document.getElementById('ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes rippleExpand {
                to {
                    transform: translate(-50%, -50%) scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 1000);
}

// ========================================
// CUSTOM CURSOR EFFECTS
// ========================================

/**
 * Creates an artistic custom cursor that follows the mouse
 * with organic, flowing movements
 */
function initCursorEffects() {
    // Create cursor elements
    const cursor = document.createElement('div');
    const cursorFollower = document.createElement('div');
    
    cursor.className = 'custom-cursor';
    cursorFollower.className = 'cursor-follower';
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorFollower);
    
    // Add cursor styles
    const cursorStyles = `
        .custom-cursor {
            width: 10px;
            height: 10px;
            border: 2px solid #ec4899;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease;
            mix-blend-mode: difference;
        }
        
        .cursor-follower {
            width: 40px;
            height: 40px;
            border: 1px solid rgba(99, 102, 241, 0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transition: all 0.3s cubic-bezier(0.45, 0, 0.15, 1);
            mix-blend-mode: difference;
        }
        
        .custom-cursor.hover,
        .cursor-follower.hover {
            transform: scale(1.5);
        }
    `;
    
    if (!document.getElementById('cursor-styles')) {
        const style = document.createElement('style');
        style.id = 'cursor-styles';
        style.textContent = cursorStyles;
        document.head.appendChild(style);
    }
    
    // Update cursor position
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Smooth follower animation
    function animateFollower() {
        const distX = mouseX - followerX;
        const distY = mouseY - followerY;
        
        followerX += distX * 0.1;
        followerY += distY * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .featured-card, .skill-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });
}

// ========================================
// PARALLAX SCROLL EFFECTS
// ========================================

/**
 * Adds subtle parallax scrolling to floating shapes
 * creating depth and organic movement
 */
function initParallaxEffects() {
    const shapes = document.querySelectorAll('.shape, .floating-sidebar, .diagonal-shape');
    
    if (shapes.length === 0) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                
                shapes.forEach((shape, index) => {
                    const speed = 0.5 + (index * 0.2);
                    const yPos = -(scrolled * speed);
                    
                    shape.style.transform = `translateY(${yPos}px)`;
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// ========================================
// FEATURED CARD INTERACTIONS
// ========================================

/**
 * Adds 3D tilt effect to featured cards on mouse move
 * creating an immersive, tactile experience
 */
function initCardInteractions() {
    const cards = document.querySelectorAll('.featured-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
                scale3d(1.02, 1.02, 1.02)
            `;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale3d(1, 1, 1)';
  });
});
}

// ========================================
// TITLE WORD HOVER EFFECTS (Home Page)
// ========================================

/**
 * Makes title words interactive with playful animations
 */
if (document.querySelector('.title-word')) {
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach(word => {
        word.style.cursor = 'pointer';
        word.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        word.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.textShadow = '5px 5px 20px rgba(236, 72, 153, 0.4)';
        });
        
        word.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.textShadow = 'none';
        });
        
        // Add click animation
        word.addEventListener('click', function() {
            this.style.animation = 'bounce 0.6s ease';
            
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
  });
});

    // Add bounce animation
    if (!document.getElementById('bounce-animation')) {
        const style = document.createElement('style');
        style.id = 'bounce-animation';
        style.textContent = `
            @keyframes bounce {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-20px) scale(1.1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// ========================================
// SKILL ITEMS CONSTELLATION EFFECT
// ========================================

/**
 * Creates connection lines between skill items on hover
 * simulating a constellation effect
 */
if (document.querySelector('.skills-list')) {
    const skillsList = document.querySelector('.skills-list');
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Create canvas for connection lines
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    
    skillsList.style.position = 'relative';
    skillsList.insertBefore(canvas, skillsList.firstChild);
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = skillsList.offsetWidth;
        canvas.height = skillsList.offsetHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const ctx = canvas.getContext('2d');
    let hoveredItem = null;
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            hoveredItem = this;
            drawConnections();
        });
        
        item.addEventListener('mouseleave', () => {
            hoveredItem = null;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
});

    function drawConnections() {
        if (!hoveredItem) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const hoveredRect = hoveredItem.getBoundingClientRect();
        const listRect = skillsList.getBoundingClientRect();
        
        const hoveredX = hoveredRect.left - listRect.left + hoveredRect.width / 2;
        const hoveredY = hoveredRect.top - listRect.top + hoveredRect.height / 2;
        
        skillItems.forEach(item => {
            if (item === hoveredItem) return;
            
            const itemRect = item.getBoundingClientRect();
            const itemX = itemRect.left - listRect.left + itemRect.width / 2;
            const itemY = itemRect.top - listRect.top + itemRect.height / 2;
            
            // Draw line
            ctx.beginPath();
            ctx.moveTo(hoveredX, hoveredY);
            ctx.lineTo(itemX, itemY);
            ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Draw circle at connection point
            ctx.beginPath();
            ctx.arc(itemX, itemY, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
            ctx.fill();
        });
    }
}

// ========================================
// SMOOTH PAGE TRANSITIONS
// ========================================

/**
 * Adds elegant fade transitions when navigating between pages
 */
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Fade in on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 10);
});

// ========================================
// ORGANIC BACKGROUND MOVEMENT
// ========================================

/**
 * Creates subtle, organic movement in background shapes
 * responding to mouse position
 */
if (document.querySelector('.floating-shapes')) {
    const shapes = document.querySelectorAll('.shape');
    let mouseXPercent = 0.5;
    let mouseYPercent = 0.5;
    
    document.addEventListener('mousemove', (e) => {
        mouseXPercent = e.clientX / window.innerWidth;
        mouseYPercent = e.clientY / window.innerHeight;
    });
    
    function animateShapes() {
        shapes.forEach((shape, index) => {
            const speed = 20 + (index * 10);
            const xOffset = (mouseXPercent - 0.5) * speed;
            const yOffset = (mouseYPercent - 0.5) * speed;
            
            const currentTransform = shape.style.transform || '';
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
        
        requestAnimationFrame(animateShapes);
    }
    
    animateShapes();
}

// ========================================
// TEXT SELECTION EFFECT
// ========================================

/**
 * Adds artistic effects when text is selected
 */
document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        // Create highlight effect
        createSelectionHighlight(rect);
    }
});

function createSelectionHighlight(rect) {
    const highlight = document.querySelector('.selection-highlight');
    if (highlight) highlight.remove();
    
    const div = document.createElement('div');
    div.className = 'selection-highlight';
    div.style.position = 'fixed';
    div.style.left = rect.left + 'px';
    div.style.top = rect.top + 'px';
    div.style.width = rect.width + 'px';
    div.style.height = rect.height + 'px';
    div.style.border = '2px solid rgba(236, 72, 153, 0.3)';
    div.style.pointerEvents = 'none';
    div.style.zIndex = '9999';
    div.style.animation = 'fadeOut 0.8s ease forwards';
    
    document.body.appendChild(div);
    
    setTimeout(() => div.remove(), 800);
}

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================

/**
 * Creates a subtle visual indicator of scroll progress
 */
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.style.position = 'fixed';
    indicator.style.top = '0';
    indicator.style.left = '0';
    indicator.style.width = '0%';
    indicator.style.height = '3px';
    indicator.style.background = 'linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)';
    indicator.style.zIndex = '10000';
    indicator.style.transition = 'width 0.1s ease';
    indicator.style.mixBlendMode = 'multiply';
    
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        indicator.style.width = scrollPercent + '%';
    });
}

createScrollIndicator();

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
  let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    };
}

// Optimize resize events
window.addEventListener('resize', debounce(() => {
    // Re-initialize effects that depend on viewport size
    console.log('Viewport resized - effects updated');
}, 250));

// ========================================
// ACCESSIBILITY ENHANCEMENTS
// ========================================

/**
 * Respects user's motion preferences
 */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--ease-smooth', 'linear');
    document.documentElement.style.setProperty('--ease-elegant', 'linear');
    document.documentElement.style.setProperty('--ease-bounce', 'linear');
    
    // Remove cursor effects
    const customCursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    if (customCursor) customCursor.remove();
    if (cursorFollower) cursorFollower.remove();
}

// ========================================
// CONSOLE EASTER EGG
// ========================================

console.log(
    '%c✦ Unordered Contemplations ✦',
    'font-size: 20px; font-weight: bold; color: #ec4899; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);'
);

console.log(
    '%cWelcome to the digital canvas. Every pixel tells a story.',
    'font-size: 12px; color: #6366f1; font-style: italic;'
);

console.log(
    '%cCurious about the code? Explore with curiosity and respect.',
    'font-size: 10px; color: #14b8a6;'
);

// ========================================
// LANGUAGE TOGGLE FUNCTIONALITY
// ========================================

/**
 * Initializes language toggle functionality for post pages
 * Toggles between English and Chinese content
 */
function initLanguageToggle() {
    const langToggle = document.querySelector('.lang-toggle');
    if (!langToggle) return;

    // Get current language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('pageLang') || 'en';
    
    // Set initial state
    updateLanguage(currentLang);
    
    // Add click event listener
    langToggle.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'cn' : 'en';
        localStorage.setItem('pageLang', currentLang);
        updateLanguage(currentLang);
        
        // Reload markdown content if present
        const markdownContent = document.getElementById('markdown-content');
        if (markdownContent) {
            loadMarkdownContent(currentLang);
        }
    });
}

/**
 * Updates page content based on selected language
 * @param {string} lang - Language code ('en' or 'cn')
 */
function updateLanguage(lang) {
    const langToggle = document.querySelector('.lang-toggle');
    if (!langToggle) return;

    // Update button text
    langToggle.textContent = lang === 'en' ? 'CN' : 'EN';
    
    // Toggle language classes on elements
    document.querySelectorAll('[data-lang-en], [data-lang-cn]').forEach(element => {
        const enText = element.getAttribute('data-lang-en');
        const cnText = element.getAttribute('data-lang-cn');
        
        if (enText && cnText) {
            if (lang === 'en') {
                element.textContent = enText;
            } else {
                element.textContent = cnText;
            }
        }
    });
    
    // Update page language attribute
    document.documentElement.lang = lang;
}

// ========================================
// MARKDOWN CONTENT LOADER
// ========================================

/**
 * Initializes Markdown content loading for post pages
 * Loads and renders Markdown files based on current language
 */
function initMarkdownLoader() {
    const markdownContent = document.getElementById('markdown-content');
    if (!markdownContent) return;
    
    // Get current language
    const currentLang = localStorage.getItem('pageLang') || 'en';
    loadMarkdownContent(currentLang);
}

/**
 * Loads and renders Markdown content
 * @param {string} lang - Language code ('en' or 'cn')
 */
async function loadMarkdownContent(lang) {
    const markdownContent = document.getElementById('markdown-content');
    if (!markdownContent) return;
    
    // Get the current page filename (without .html extension)
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    const markdownFile = `${currentPage}.${lang}.md`;
    
    try {
        markdownContent.innerHTML = '<div class="loading-message">Loading content...</div>';
        
        // Fetch the markdown file
        const response = await fetch(markdownFile);
        if (!response.ok) {
            throw new Error(`Failed to load ${markdownFile}`);
        }
        
        const markdownText = await response.text();
        
        // Convert Markdown to HTML using simple parser
        const htmlContent = parseMarkdown(markdownText);
        
        // Render the content with fade-in animation
        markdownContent.style.opacity = '0';
        markdownContent.innerHTML = htmlContent;
        
        // Trigger fade-in
        setTimeout(() => {
            markdownContent.style.transition = 'opacity 0.5s ease';
            markdownContent.style.opacity = '1';
        }, 50);
        
        // Re-initialize scroll animations for new content
        initScrollAnimations();
        
    } catch (error) {
        console.error('Error loading markdown:', error);
        markdownContent.innerHTML = `
            <div class="error-message">
                <p>Failed to load content. Please try again later.</p>
            </div>
        `;
    }
}

/**
 * Simple Markdown parser
 * Converts Markdown text to HTML
 * @param {string} markdown - Markdown text
 * @returns {string} HTML string
 */
function parseMarkdown(markdown) {
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Blockquotes
    html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    
    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
    
    // Line breaks and paragraphs
    html = html.split('\n\n').map(paragraph => {
        paragraph = paragraph.trim();
        if (!paragraph) return '';
        
        // Don't wrap if already has HTML tags
        if (paragraph.startsWith('<h') || 
            paragraph.startsWith('<blockquote') || 
            paragraph.startsWith('<ul') || 
            paragraph.startsWith('<ol')) {
            return paragraph;
        }
        
        return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');
    
    return html;
}

// ========================================
// CLICK RIPPLE EFFECT - 流光溢彩点击效果
// ========================================

/**
 * Creates a colorful gradient ripple effect on click
 * 鼠标点击页面空白处时显示流光溢彩的渐变效果（抽象色彩扩散）
 */
function initClickRippleEffect() {
    // Add CSS styles for the ripple effect
    if (!document.getElementById('click-ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'click-ripple-styles';
        style.textContent = `
            .click-ripple {
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
            }
            
            .color-burst {
                position: absolute;
                opacity: 0;
                animation: color-burst 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                filter: blur(12px);
                mix-blend-mode: screen;
            }
            
            @keyframes color-burst {
                0% {
                    transform: translate(0, 0) scale(0.05);
                    opacity: 0.9;
                }
                40% {
                    opacity: 0.6;
                }
                100% {
                    transform: translate(var(--tx), var(--ty)) scale(1);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Array of vibrant colors
    const colors = [
        '#6366f1', // 深紫
        '#ec4899', // 粉红
        '#f59e0b', // 橙色
        '#14b8a6', // 青色
        '#a78bfa', // 薰衣草
        '#f43f5e', // 玫红
        '#8b5cf6', // 紫色
        '#06b6d4', // 天蓝
        '#f97316', // 橙红
        '#10b981'  // 绿色
    ];
    
    // Listen for clicks on the document
    document.addEventListener('click', (e) => {
        // Check if clicked on an interactive element
        const isInteractive = e.target.closest('a, button, input, textarea, select, .featured-card, .nav-back, .nav-next, .lang-toggle, .star-link');
        
        // Only create ripple on non-interactive areas
        if (!isInteractive) {
            createColorBurst(e.clientX, e.clientY);
        }
    });
    
    function createColorBurst(x, y) {
        const container = document.createElement('div');
        container.className = 'click-ripple';
        container.style.left = x + 'px';
        container.style.top = y + 'px';
        
        // Create abstract color bursts (cloud-like)
        const burstCount = 6;
        
        for (let i = 0; i < burstCount; i++) {
            const burst = document.createElement('div');
            burst.className = 'color-burst';
            
            const angle = (360 / burstCount) * i + Math.random() * 40;
            const distance = 15 + Math.random() * 20; // 15-35px - smaller spread
            const size = 20 + Math.random() * 15; // 20-35px - smaller clouds
            
            // Random colors for gradient (lighter, more ethereal)
            const color1 = colors[Math.floor(Math.random() * colors.length)];
            const color2 = colors[Math.floor(Math.random() * colors.length)];
            const color3 = colors[Math.floor(Math.random() * colors.length)];
            
            burst.style.width = `${size}px`;
            burst.style.height = `${size}px`;
            burst.style.borderRadius = '50%'; // Softer, cloud-like edges
            
            // Lighter, more diffused gradients for cloud effect
            burst.style.background = `
                radial-gradient(ellipse at 25% 25%, ${color1}cc, transparent 65%),
                radial-gradient(ellipse at 75% 75%, ${color2}bb, transparent 65%),
                radial-gradient(circle, ${color3}99, transparent 55%)
            `;
            
            // Calculate trajectory
            const radians = (angle * Math.PI) / 180;
            const tx = Math.cos(radians) * distance;
            const ty = Math.sin(radians) * distance;
            
            burst.style.setProperty('--tx', `${tx}px`);
            burst.style.setProperty('--ty', `${ty}px`);
            burst.style.animationDelay = `${i * 0.04}s`;
            
            container.appendChild(burst);
        }
        
        document.body.appendChild(container);
        
        // Remove after animation completes
        setTimeout(() => {
            container.remove();
        }, 1800);
    }
}
