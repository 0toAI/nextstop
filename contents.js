/* =================================================================
   🛑 ADMIN PANEL - EDIT CONTENT HERE
   =================================================================
   - Text inside "quotes" is visible on the website.
   - Image links inside "quotes" change the photos.
   - Do NOT delete commas (,) or brackets { }.
   =================================================================
*/

const config = {
    
    // 1. CONTACT INFO
    whatsapp: "995591705710", 

    // 2. HERO SLIDES (The Big Wheel at the top)
    heroSlides: [
        { 
            title: "The Heart of the Caucasus", 
            desc: "Discover 8,000 years of history and hospitality.",
            img: "https://images.unsplash.com/photo-1536599018102-9f80336b083a?q=80&w=2070", 
            fullText: "Experience the full breadth of Georgia. From the ancient streets of Tbilisi to the high peaks of Kazbegi."
        },
        { 
            title: "Winter in Gudauri", 
            desc: "Premium Ski Packages | 5 Days All Inclusive",
            img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=2070",
            fullText: "Our Gudauri ski package includes airport transfers, 5-star accommodation, ski pass, and equipment rental."
        },
        { 
            title: "VIP Lifestyle", 
            desc: "Yachts, Casinos & Private Jets",
            img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070",
            fullText: "Join our exclusive Junket program. Qualified players receive complimentary flights, luxury accommodation, and VIP hosting."
        }
    ],

    // 3. TRAVEL GRID (The 4 Boxes in Section 1)
    travelCards: [
        { 
            title: "Adventure", 
            desc: "Hiking & Rafting", 
            img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073", 
            tag: "Active", 
            subItems: [
                { title: "Kazbegi Hiking Day", desc: "Gergeti Church & Gveleti Waterfall hike.", details: "A full day expedition to the foot of Mt. Kazbek. Includes 4x4 transport, guided hike to Gergeti Trinity Church, and a picnic at Gveleti Waterfall." },
                { title: "Rafting on Aragvi", desc: "White water rafting with professional instructors.", details: "Adrenaline-filled rafting on the Aragvi river. Includes safety gear, certified instructor, and a traditional Georgian BBQ lunch after the ride." },
                { title: "Martvili Canyon", desc: "Boat ride through the emerald canyon.", details: "Explore the stunning Martvili Canyon by boat. Swim in crystal clear waters and visit the nearby Okatse Canyon skywalk." }
            ]
        },
        { 
            title: "Luxury & Leisure", 
            desc: "5-Star Resorts", 
            img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070", 
            tag: "Relax", 
            subItems: [
                { title: "Tsinandali Estate", desc: "Weekend at Radisson Collection. Wine & Spa.", details: "Stay at the historic Tsinandali Estate. Includes tour of Prince Chavchavadze's museum, private wine tasting, and access to the infinity pool." },
                { title: "Lopota Lake Resort", desc: "Family relaxation, pools, and horse riding.", details: "A perfect getaway in Kakheti. All-inclusive stay with 3 meals, spa access, horse riding, and tennis courts surrounded by mountains." },
                { title: "Rooms Hotel Kazbegi", desc: "The most famous mountain view terrace.", details: "Iconic design hotel facing Mt. Kazbek. Package includes room with view, buffet breakfast, and dinner on the famous terrace." }
            ]
        },
        { 
            title: "Wine Route", 
            desc: "Qvevri Tastings", 
            img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070", 
            tag: "Culture", 
            subItems: [
                { title: "8000 Vintages Tour", desc: "Visit Signagi and Bodbe Monastery.", details: "A journey through the 'City of Love' Signagi. Visit Bodbe Monastery and taste organic wines at Okro's Wines overlooking the Alazani Valley." },
                { title: "Qvevri Masterclass", desc: "Learn traditional winemaking at Ikalto.", details: "Visit the ancient Ikalto Academy. Participate in a Qvevri opening ceremony and learn to make Churchkhela and Khinkali." },
                { title: "Chateau Mukhrani", desc: "Royal estate tour with premium wine tasting.", details: "Experience the royal history of the Bagrationi dynasty. Tour the castle, vineyards, and enjoy a premium tasting of 5 wines." }
            ]
        },
        { 
            title: "Casino & Nightlife", 
            desc: "VIP Access", 
            img: "https://unsplash.com/photos/a-person-sitting-at-a-table-with-cards-and-chips-LDkm0b4fh48", 
            tag: "VIP", 
            subItems: [
                { title: "Tbilisi Poker Tour", desc: "Access to Shangri La & Ambassador VIP rooms.", details: "Exclusive entry to high-stakes tables. Complimentary drinks and transport included." },
                { title: "Batumi Junket", desc: "Eclipse Casino Weekend. Flight & Hotel Comped.", details: "For qualified players: Free flight, 5-star accommodation, and airport transfers. Minimum deposit required." },
                { title: "Private Club Hosting", desc: "Table reservations at top venues.", details: "Skip the line at Bassiani, Khidi, or noble Savage. Private table booking with bottle service and security." }
            ]
        }
    ],

    // 4. SERVICES GRID (The 4 Boxes in Section 2)
    servicesCards: [
        { 
            title: "Medical Tourism", 
            desc: "Wellbeing & Health", 
            img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070", 
            subItems: [
                { title: "Hair Transplantation", desc: "FUE/DHI Method. 3 Days.", details: "World-class hair transplant using FUE method. Package includes procedure, 2 nights hotel, and airport transfers. 100% painless." },
                { title: "Dental Tourism", desc: "Hollywood Smile Veneers & Implants.", details: "Save 70% on dental work compared to EU/US. Zirconia crowns, implants, and veneers done by top specialists in 5-7 days." },
                { title: "Balneological Spa", desc: "Sulfur bath recovery & massage.", details: "Post-treatment recovery programs in Tbilisi Balneological Resort. Sulfur baths, mud wraps, and therapeutic massage." }
            ]
        },
        { 
            title: "MICE & Corporate", 
            desc: "Events & Conferences", 
            img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069", 
            subItems: [
                { title: "Corporate Retreats", desc: "Team building in Gudauri or Batumi.", details: "Organized team-building activities: Jeep tours, cooking classes, and conference facilities in luxury hotels." },
                { title: "Conference Management", desc: "Hall booking at Pullman or Sheraton.", details: "Full technical support for your conference: Sound, light, translation booths, and catering coffee breaks." },
                { title: "Business Dinner", desc: "Arranging gala dinners with folk shows.", details: "Impress your partners with a Supra (feast) featuring polyphonic singing and traditional dancers at a top restaurant." }
            ]
        },
        { 
            title: "Business Opportunities", 
            desc: "Investment & Partners", 
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070", 
            subItems: [
                { title: "Company Registration", desc: "Fast-track business setup.", details: "Register your LLC in Georgia in 1 day. We provide legal address, translator, and bank account opening assistance." },
                { title: "Real Estate Tour", desc: "Investment property viewing.", details: "Guided tour of high-ROI properties in Tbilisi and Batumi. Consultation with legal experts on residency through investment." },
                { title: "B2B Matchmaking", desc: "Finding reliable local partners.", details: "We connect you with verified suppliers, distributors, or partners in your specific industry sector." }
            ]
        },
        { 
            title: "Guides & Transport", 
            desc: "Logistics & Experts", 
            img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070", 
            subItems: [
                { title: "Private Chauffeur", desc: "Mercedes S-Class or V-Class Minivan.", details: "Rent a premium vehicle with a professional, English-speaking driver for city or cross-country travel. Daily rates available." },
                { title: "Certified Guides", desc: "English, Russian, or Arabic speaking.", details: "Hire a licensed guide who specializes in history, wine, or culture to make your trip truly educational." },
                { title: "Airport Fast Track", desc: "VIP meeting at the aircraft door.", details: "Skip the lines. Personal assistant meets you at the plane, handles passport control, and escorts you to your car." }
            ]
        }
    ],

    // 5. JOURNAL POSTS
    blogPosts: [
        { 
            title: "Vineyards of Kakheti", 
            date: "Oct 2025", 
            img: "https://images.unsplash.com/photo-1566346547477-173084076792?q=80&w=2070", 
            text: "A journey through the ancient wine region. Discover the qvevri method and the best family-owned cellars to visit this autumn." 
        },
        { 
            title: "Medical Excellence", 
            date: "Sep 2025", 
            img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053", 
            text: "Why Georgia is the top choice for medical procedures. High quality, low cost, and no waiting lists for hair and dental work." 
        },
        { 
            title: "Ski Season Guide", 
            date: "Aug 2025", 
            img: "https://images.unsplash.com/photo-1610198871574-53537a702467?q=80&w=2070", 
            text: "Everything you need to know about Gudauri this winter. New ski lifts, best apres-ski spots, and gear rental prices." 
        },
        { 
            title: "Tbilisi Nightlife", 
            date: "July 2025", 
            img: "https://images.unsplash.com/photo-1555992336-03a2316dbbb3?q=80&w=2064", 
            text: "Best clubs and bars in the capital. A guide to the hidden gems of Sololaki and the techno raves of Bassiani." 
        }
    ]
};
```
5.  **Commit** this file.

---

### Step 2: Update the Engine (`index.html`)

Now we need to tell the website to stop using the "built-in" data and start looking at your new `content.js` file.

1.  Open `index.html` in GitHub.
2.  **Edit**.
3.  **Delete** everything inside the `<script>...</script>` tags at the bottom.
4.  **Paste** this new logic block in its place.
    *(Note: This code looks for `content.js`. If you named the file something else, change the `src=""` part).*

```html
    <!-- LINK TO YOUR CONTROL PANEL -->
    <script src="content.js"></script>

    <!-- THE ENGINE (DO NOT TOUCH) -->
    <script>
        /* --- RENDER LOGIC --- */
        let currentSlide = 0;
        let autoPlayTimer;
        let barAnimTimer;
        const SLIDE_DURATION = 10000; 

        function init() {
            updateWaLinks(config.whatsapp);
            
            // Render Hero
            const heroTrack = document.getElementById('heroTrack');
            const progContainer = document.getElementById('progressContainer');
            
            config.heroSlides.forEach((slide, index) => {
                const div = document.createElement('div');
                div.className = 'hero-slide';
                if(index === 0) div.classList.add('active');
                div.innerHTML = `<img src="${slide.img}" class="slide-bg"><div class="slide-content"><h2 class="slide-title">${slide.title}</h2><p class="slide-desc">${slide.desc}</p><button class="slide-btn" onclick="openModal('${slide.title}', null, '${slide.img}', 'hero', '${slide.fullText}')">View Details</button></div>`;
                heroTrack.appendChild(div);

                const bar = document.createElement('div');
                bar.className = 'progress-bar';
                bar.innerHTML = `<div class="progress-fill" id="bar-${index}"></div>`;
                progContainer.appendChild(bar);
            });

            // Render Grids
            const travelGrid = document.getElementById('travelGrid'); config.travelCards.forEach(item => travelGrid.appendChild(createCard(item, 'travel')));
            const servicesGrid = document.getElementById('servicesGrid'); config.servicesCards.forEach(item => servicesGrid.appendChild(createCard(item, 'service')));
            const blogTrack = document.getElementById('blogTrack'); config.blogPosts.forEach(item => blogTrack.appendChild(createCard(item, 'blog')));

            startStoryMode();
        }

        function updateWaLinks(number) {
            document.querySelectorAll('.wa-link').forEach(a => {
                if(!a.classList.contains('modal-btn')) { 
                    a.href = `https://wa.me/${number}`;
                }
            });
        }

        function createCard(item, type) {
            const div = document.createElement('div');
            div.className = type === 'blog' ? 'blog-card' : 'card';
            
            const subContent = type === 'blog' ? item.text : item.subItems;
            
            div.onclick = () => openModal(item.title, subContent, item.img, type, item.text);
            
            if (type === 'blog') {
                div.innerHTML = `<div class="blog-img-box"><img src="${item.img}" loading="lazy"></div><div class="blog-content"><div class="blog-date">${item.date}</div><h4 class="blog-title">${item.title}</h4><span class="blog-link">Read Article &rarr;</span></div>`;
            } else {
                div.innerHTML = `<img src="${item.img}" class="card-bg" loading="lazy"><div class="card-overlay">${item.tag ? `<span class="card-tag">${item.tag}</span>` : ''}<h3>${item.title}</h3><p>${item.desc}</p></div>`;
            }
            return div;
        }

        function startStoryMode() { showSlide(currentSlide); }

        function showSlide(index) {
            const track = document.getElementById('heroTrack');
            const slides = document.querySelectorAll('.hero-slide');
            const bars = document.querySelectorAll('.progress-fill');
            
            if (index >= slides.length) { currentSlide = 0; resetBars(); index = 0; }
            if (index < 0) { currentSlide = slides.length - 1; resetBars(); index = slides.length - 1; }

            track.scrollTo({ left: track.clientWidth * index, behavior: 'smooth' });

            slides.forEach(s => s.classList.remove('active'));
            slides[index].classList.add('active');

            bars.forEach((bar, idx) => {
                bar.classList.remove('active');
                if (idx < index) { bar.style.width = '100%'; bar.style.transition = 'none'; } 
                else if (idx === index) { bar.style.width = '0%'; setTimeout(() => { bar.style.transition = `width ${SLIDE_DURATION}ms linear`; bar.style.width = '100%'; }, 50); } 
                else { bar.style.width = '0%'; bar.style.transition = 'none'; }
            });

            clearTimeout(autoPlayTimer);
            autoPlayTimer = setTimeout(() => { currentSlide++; showSlide(currentSlide); }, SLIDE_DURATION);
        }

        function resetBars() {
            document.querySelectorAll('.progress-fill').forEach(bar => { bar.style.transition = 'none'; bar.style.width = '0%'; });
        }

        function manualSlide(dir) { currentSlide += dir; showSlide(currentSlide); }

        /* MODAL ENGINE */
        const modal = document.getElementById('detailModal'); 
        const modalImg = document.getElementById('modalImg'); 
        const modalTitle = document.getElementById('modalTitle'); 
        const modalListView = document.getElementById('modalListView');
        const modalList = document.getElementById('modalList');
        const modalDetailView = document.getElementById('modalDetailView');
        const detailTitle = document.getElementById('detailTitle');
        const detailText = document.getElementById('detailText');
        const detailBtn = document.getElementById('detailBtn');

        function openModal(title, content, img, type, textContent) { 
            modalImg.src = img; 
            
            if (type === 'blog' || type === 'hero') {
                modalTitle.innerText = title;
                modalList.innerHTML = `<div class="modal-text">${textContent || content}</div>` + 
                    (type === 'hero' ? `<a href="https://wa.me/${config.whatsapp}?text=Hi! I am interested in: ${title}" class="modal-btn wa-link">Contact Us</a>` : '');
                modalListView.style.display = 'block';
                modalDetailView.style.display = 'none';
            } 
            else if (Array.isArray(content)) {
                modalTitle.innerText = title;
                modalList.innerHTML = '';
                content.forEach(sub => {
                    const item = document.createElement('div');
                    item.className = 'modal-item';
                    item.onclick = () => showDetail(sub, title);
                    item.innerHTML = `
                        <div>
                            <div class="modal-item-title">${sub.title}</div>
                            <div class="modal-item-desc">${sub.desc}</div>
                        </div>
                        <div class="modal-item-arrow">&rarr;</div>
                    `;
                    modalList.appendChild(item);
                });
                modalListView.style.display = 'block';
                modalDetailView.style.display = 'none';
            }
            modal.classList.add('active'); 
        }

        function showDetail(subItem, parentTitle) {
            modalListView.style.display = 'none';
            modalDetailView.style.display = 'block';
            detailTitle.innerText = subItem.title;
            detailText.innerText = subItem.details;
            detailBtn.href = `https://wa.me/${config.whatsapp}?text=Hi! I am interested in: ${parentTitle} - ${subItem.title}`;
        }

        function showList() {
            modalListView.style.display = 'block';
            modalDetailView.style.display = 'none';
        }
        
        function closeModal() { modal.classList.remove('active'); }
        modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
        
        init();
    </script>
