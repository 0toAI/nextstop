/* ============================================================
   --- YOUR CONTROL PANEL (ADMIN) ---
   Change text, images, and tags here.
   ============================================================ */

const config = {
    whatsapp: "995591705710", 

    // 1. HERO SLIDES (The Big Wheel)
    heroSlides: [
        { 
            title: { en: "The Heart of the Caucasus", ka: "კავკასიის გული" },
            desc: { en: "Discover 8,000 years of history.", ka: "აღმოაჩინეთ 8,000 წლოვანი ისტორია." },
            img: "https://images.unsplash.com/photo-1536599018102-9f80336b083a?q=80&w=2070", 
            fullText: { en: "Experience the full breadth of Georgia. From the ancient streets of Tbilisi to the high peaks of Kazbegi.", ka: "გამოიცანით საქართველოს სრული მშვენება..." }
        },
        { 
            title: { en: "Winter in Gudauri", ka: "ზამთარი გუდაურში" },
            desc: { en: "Premium Ski Packages", ka: "პრემიუმ სათხილამურო პაკეტები" },
            img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=2070",
            fullText: { en: "Our Gudauri ski package includes airport transfers, 5-star accommodation, ski pass, and equipment rental.", ka: "ჩვენი გუდაურის სათხილამურო პაკეტი..." }
        },
        { 
            title: { en: "VIP Lifestyle", ka: "VIP ცხოვრების სტილი" },
            desc: { en: "Yachts, Casinos & Private Jets", ka: "იახტები, კაზინოები და კერძო თვითმფრინავები" },
            img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070",
            fullText: { en: "Join our exclusive Junket program. Qualified players receive complimentary flights, luxury accommodation, and VIP hosting.", ka: "შემოუერთდით ჩვენს ექსკლუზიურ ჯანკეტ..." }
        }
    ],

    // 2. TRAVEL GRID (The 4 Boxes in Section 1)
    travelCards: [
        { 
            title: { en: "Adventure", ka: "თავგადასავალი" }, 
            desc: { en: "Hiking & Rafting", ka: "ლაშქრობა და რაფტინგი" }, 
            img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073", 
            tags: { en: ["Active", "Nature"], ka: ["აქტიური", "ბუნება"] },
            subItems: [
                { 
                    title: "The High Caucasus: Kazbegi Luxury", 
                    desc: "3 Days | Mountains & Comfort",
                    details: "DAY 1: Travel the Georgian Military Highway. Visit Ananuri Fortress and the Friendship Monument. Check-in at Rooms Hotel Kazbegi with terrace views.\n\nDAY 2: 4x4 Expedition to Gergeti Trinity Church (2,170m). Afternoon picnic at Gveleti Waterfall. Optional paragliding.\n\nDAY 3: Hike in Sno Valley near the Chaukhi Massif. Lunch at Fifth Season. Return to Tbilisi.",
                    img: "https://images.unsplash.com/photo-1565118531796-763e5082d113?q=80&w=2070"
                },
                { 
                    title: "Svaneti: Land of 1,000 Towers", 
                    desc: "5 Days | UNESCO Heritage",
                    details: "DAY 1: Flight to Mestia (weather permitting). Svaneti Museum of History.\n\nDAY 2: Chalaadi Glacier hike and Hatsvali cable car sunset.\n\nDAY 3: Full day in Ushguli (highest village in Europe). Traditional Kubdari masterclass.\n\nDAY 4: Hike to Koruldi Lakes for panoramic views.\n\nDAY 5: Return via Enguri Dam.",
                    img: "https://images.unsplash.com/photo-1571258267881-5d6929516187?q=80&w=2070"
                },
                { 
                    title: "Rafting on Aragvi", 
                    desc: "1 Day | Adrenaline",
                    details: "White water rafting on the Aragvi river (Grade 2-3 difficulty). Includes professional instructor, safety gear, and a traditional Georgian BBQ lunch by the riverbank after the ride.",
                    img: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=2070"
                }
            ]
        },
        { 
            title: { en: "Luxury & Leisure", ka: "ფუფუნება და დასვენება" }, 
            desc: { en: "5-Star Resorts", ka: "5-ვარსკვლავიანი კურორტები" }, 
            img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070", 
            tags: { en: ["Relax", "Luxury"], ka: ["რელაქსი", "ლუქსი"] },
            subItems: [
                { 
                    title: "Black Sea Riviera: Batumi", 
                    desc: "5 Days | Sea & Modernity",
                    details: "DAY 1: Batumi Boulevard walk and Alphabet Tower sunset.\n\nDAY 2: Private tour of Botanical Garden and local Fish Market lunch.\n\nDAY 3: Mountainous Adjara: Makhuntseti Waterfall and Queen Tamar Bridge.\n\nDAY 4: Gonio Fortress and relaxation at a private beach club in Kvariati.\n\nDAY 5: Casino or shopping morning before departure.",
                    img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070"
                },
                { 
                    title: "The Grand Tour", 
                    desc: "8 Days | East to West",
                    details: "The ultimate Georgian experience.\n\nDay 1: Tbilisi City Tour.\nDay 2: Kakheti Wine Region.\nDay 3: Kazbegi Mountains.\nDay 4: Kutaisi & Prometheus Cave.\nDay 5: Martvili Canyon boat ride.\nDay 6-7: Batumi & Black Sea Coast.\nDay 8: Departure.",
                    img: "https://images.unsplash.com/photo-1585965685478-22765e69a843?q=80&w=2070"
                },
                { 
                    title: "Tsinandali Estate Weekend", 
                    desc: "2 Days | History & Wine",
                    details: "Stay at the historic Radisson Collection Tsinandali. Includes a private tour of Prince Chavchavadze's museum, exclusive wine tasting in the archives, and access to the rooftop infinity pool.",
                    img: "https://images.unsplash.com/photo-1584455390266-0337f26d0794?q=80&w=2070"
                }
            ]
        },
        { 
            title: { en: "Wine & Gastronomy", ka: "ღვინო და გასტრონომია" }, 
            desc: { en: "Qvevri Tastings", ka: "ქვევრის დეგუსტაცია" }, 
            img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070", 
            tags: { en: ["Culture", "Wine"], ka: ["კულტურა", "ღვინო"] },
            subItems: [
                { 
                    title: "The Wine Route: Royal Kakheti", 
                    desc: "3 Days | Cradle of Wine",
                    details: "DAY 1: Gombori Pass drive. Ikalto Academy. Check-in at Tsinandali Estate.\n\nDAY 2: Visit Alaverdi Monastery cellar. Lunch at a biodynamic vineyard with Chacha distillation masterclass.\n\nDAY 3: Signagi 'City of Love'. Bodbe Monastery. Traditional Supra feast with polyphonic singing.",
                    img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2068"
                },
                { 
                    title: "Tbilisi Gastro Tour", 
                    desc: "1 Day | Food & Markets",
                    details: "A walking tour through the flavors of Tbilisi. Visit the Dezerter Bazaar to taste local cheese and spices. Khinkali making masterclass in a local home. Dinner at a modern Georgian fusion restaurant.",
                    img: "https://images.unsplash.com/photo-1603002730629-64df815039c5?q=80&w=2070"
                },
                { 
                    title: "Chateau Mukhrani", 
                    desc: "1 Day | Royal History",
                    details: "Experience the royal history of the Bagrationi dynasty. Tour the restored castle, walk the vineyards, and enjoy a premium tasting of 5 wines followed by a gourmet lunch.",
                    img: "https://images.unsplash.com/photo-1572571301957-3f2f65733239?q=80&w=2070"
                }
            ]
        },
        { 
            title: { en: "Casino & Nightlife", ka: "კაზინო და ღამის ცხოვრება" }, 
            desc: { en: "VIP Access", ka: "VIP წვდომა" }, 
            img: "https://images.unsplash.com/photo-1596306499317-849aa5dd3396?q=80&w=2070", 
            tags: { en: ["VIP", "Nightlife"], ka: ["VIP", "გართობა"] },
            subItems: [
                { 
                    title: "VIP Casino Weekend", 
                    desc: "3 Days | High Stakes",
                    details: "DAY 1: VIP Tarmac pickup. Transfer to Biltmore/Pullman. Access to Shangri La private rooms.\n\nDAY 2: Private Sulfur Bath recovery. Dinner at Funicular. VIP entry to Bassiani/Khidi.\n\nDAY 3: Late check-out. Luxury shopping at Galleria. Airport transfer.",
                    img: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2070"
                },
                { 
                    title: "Batumi Junket Tour", 
                    desc: "Flight + Hotel Free",
                    details: "Exclusive offer for qualified players. We cover your flight and 5-star accommodation at Eclipse or Leogrand Casino hotels. Minimum deposit required. 24/7 host service included.",
                    img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?q=80&w=2070"
                },
                { 
                    title: "Private Club Hosting", 
                    desc: "Nightlife Access",
                    details: "Skip the face control. We secure the best tables at Tbilisi's top venues like Noble Savage, Republic, and specialized techno clubs. Security detail available upon request.",
                    img: "https://images.unsplash.com/photo-1574391884720-28d7641f53aa?q=80&w=2070"
                }
            ]
        }
    ],

    // 3. SERVICES GRID (The 4 Boxes in Section 2)
    servicesCards: [
        { 
            title: { en: "Medical Tourism", ka: "სამედიცინო" }, 
            desc: { en: "Wellbeing & Health", ka: "ჯანმრთელობა" }, 
            img: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2079", 
            subItems: [
                { 
                    title: "Hair Transplantation", 
                    desc: "FUE/DHI Method | 3 Days", 
                    details: "World-class hair transplant using FUE method. \n\nDay 1: Arrival & Consultation.\nDay 2: Procedure (Painless, ~6 hours).\nDay 3: Check-up & Departure.\n\nIncludes hotel and transfers.",
                    img: "https://images.unsplash.com/photo-1584650549336-6e046ce9c5ba?q=80&w=2070"
                },
                { 
                    title: "Dental Tourism", 
                    desc: "Hollywood Smile | 5 Days", 
                    details: "Save 70% on dental work compared to EU/US. Zirconia crowns, implants, and veneers done by top specialists. We organize your entire stay while you get your perfect smile.",
                    img: "https://images.unsplash.com/photo-1606811841689-23e2e1f6e920?q=80&w=2070"
                },
                { 
                    title: "Balneological Spa", 
                    desc: "Recovery & Rehab", 
                    details: "Post-treatment recovery programs in Tbilisi Balneological Resort. Sulfur baths, mud wraps, and therapeutic massage in a luxury setting.",
                    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070"
                }
            ]
        },
        { 
            title: { en: "MICE & Corporate", ka: "MICE" }, 
            desc: { en: "Events & Conferences", ka: "ღონისძიებები" }, 
            img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069", 
            subItems: [
                { 
                    title: "The MICE Executive Retreat", 
                    desc: "4 Days | Team Building", 
                    details: "Day 1: Arrival & Rooftop Cocktail.\nDay 2: Full day conference with simultaneous translation.\nDay 3: Team building at Chateau Mukhrani (Wine blending).\nDay 4: Old Town Tour & Departure.",
                    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070"
                },
                { 
                    title: "Conference Management", 
                    desc: "Full Tech Support", 
                    details: "We handle hall booking at Pullman/Sheraton, sound & light systems, LED screens, and catering coffee breaks for delegations of any size.",
                    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000"
                },
                { 
                    title: "Gala Dinner Organization", 
                    desc: "Impressive Evenings", 
                    details: "Arranging gala dinners with Georgian polyphonic choirs, traditional dancers, and toastmasters (Tamada) at the city's most exclusive venues.",
                    img: "https://images.unsplash.com/photo-1519671482538-518b5c2bcc4c?q=80&w=2070"
                }
            ]
        },
        { 
            title: { en: "Business Opportunities", ka: "ბიზნეს შესაძლებლობები" }, 
            desc: { en: "Investment & Partners", ka: "ინვესტიციები" }, 
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070", 
            subItems: [
                { 
                    title: "Company Registration", 
                    desc: "1-Day Setup", 
                    details: "Fast-track business setup. We provide legal address, translator, and bank account opening assistance. You can start operating in 24 hours.",
                    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070"
                },
                { 
                    title: "Real Estate Investment", 
                    desc: "High ROI Properties", 
                    details: "Guided tour of investment properties in Tbilisi and Batumi. Consultation with legal experts on residency through investment.",
                    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073"
                },
                { 
                    title: "B2B Matchmaking", 
                    desc: "Local Partners", 
                    details: "We connect you with verified suppliers, distributors, or partners in your specific industry sector in Georgia.",
                    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069"
                }
            ]
        },
        { 
            title: { en: "Guides & Transport", ka: "გიდები და ტრანსპორტი" }, 
            desc: { en: "Logistics", ka: "ლოჯისტიკა" }, 
            img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070", 
            subItems: [
                { 
                    title: "VIP Chauffeur Service", 
                    desc: "Mercedes S-Class / V-Class", 
                    details: "Rent a premium vehicle with a professional, English-speaking driver for city or cross-country travel. Daily rates available.",
                    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070"
                },
                { 
                    title: "Certified Guides", 
                    desc: "Multilingual Experts", 
                    details: "Hire a licensed guide who specializes in history, wine, or culture. Available languages: English, Russian, Arabic, German, Hebrew.",
                    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070"
                },
                { 
                    title: "Airport Fast Track", 
                    desc: "Meet & Greet", 
                    details: "Skip the lines. Personal assistant meets you at the aircraft door, handles passport control, and escorts you to your waiting car.",
                    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2070"
                }
            ]
        }
    ],

    // 4. BLOG POSTS
    blogPosts: [
        { title: { en: "Vineyards of Kakheti", ka: "კახეთის ვენახები" }, date: { en: "Oct 2025", ka: "ოქტ 2025" }, img: "https://images.unsplash.com/photo-1566346547477-173084076792?q=80&w=2070", text: { en: "A journey through...", ka: "მოგზაურობა..." } },
        { title: { en: "Medical Excellence", ka: "სამედიცინო ხარისხი" }, date: { en: "Sep 2025", ka: "სექ 2025" }, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053", text: { en: "Why Georgia...", ka: "რატომ არის საქართველო..." } },
        { title: { en: "Ski Season Guide", ka: "სათხილამურო სეზონი" }, date: { en: "Aug 2025", ka: "აგვ 2025" }, img: "https://images.unsplash.com/photo-1610198871574-53537a702467?q=80&w=2070", text: { en: "Everything you need...", ka: "ყველაფერი რაც გჭირდებათ..." } },
        { title: { en: "Tbilisi Nightlife", ka: "თბილისის ღამის ცხოვრება" }, date: { en: "July 2025", ka: "ივლისი 2025" }, img: "https://images.unsplash.com/photo-1555992336-03a2316dbbb3?q=80&w=2064", text: { en: "Best clubs...", ka: "საუკეთესო კლუბები..." } }
    ]
};
