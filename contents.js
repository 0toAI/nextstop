/* ============================================================
   --- YOUR CONTROL PANEL (ADMIN) ---
   Change text and images here.
   ============================================================ */

const config = {
    whatsapp: "995591705710", 

    // 1. HERO SLIDES
    heroSlides: [
        { 
            title: { en: "The Heart of the Caucasus", ka: "კავკასიის გული" },
            desc: { en: "Discover 8,000 years of history.", ka: "აღმოაჩინეთ 8,000 წლოვანი ისტორია." },
            img: "https://images.unsplash.com/photo-1536599018102-9f80336b083a?q=80&w=2070", 
            fullText: { en: "Experience the full breadth of Georgia...", ka: "გამოიცანით საქართველოს სრული მშვენება..." }
        },
        { 
            title: { en: "Winter in Gudauri", ka: "ზამთარი გუდაურში" },
            desc: { en: "Premium Ski Packages", ka: "პრემიუმ სათხილამურო პაკეტები" },
            img: "https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=2070",
            fullText: { en: "Our Gudauri ski package...", ka: "ჩვენი გუდაურის სათხილამურო პაკეტი..." }
        },
        { 
            title: { en: "VIP Lifestyle", ka: "VIP ცხოვრების სტილი" },
            desc: { en: "Yachts, Casinos & Private Jets", ka: "იახტები, კაზინოები და კერძო თვითმფრინავები" },
            img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2070",
            fullText: { en: "Join our exclusive Junket...", ka: "შემოუერთდით ჩვენს ექსკლუზიურ ჯანკეტ..." }
        }
    ],

    // 2. TRAVEL GRID
    travelCards: [
        { title: { en: "Adventure", ka: "თავგადასავალი" }, desc: { en: "Hiking & Rafting", ka: "ლაშქრობა და რაფტინგი" }, img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073", tag: { en: "Active", ka: "აქტიური" }, text: { en: "Explore the untamed wilderness...", ka: "გამოიკვლიეთ ველური ბუნება..." } },
        { title: { en: "Luxury & Leisure", ka: "ფუფუნება და დასვენება" }, desc: { en: "5-Star Resorts", ka: "5-ვარსკვლავიანი კურორტები" }, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070", tag: { en: "Relax", ka: "რელაქსი" }, text: { en: "Stay in Georgia's finest...", ka: "დაისვენეთ..." } },
        { title: { en: "Wine Route", ka: "ღვინის გზა" }, desc: { en: "Qvevri Tastings", ka: "ქვევრის დეგუსტაცია" }, img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070", tag: { en: "Culture", ka: "კულტურა" }, text: { en: "Visit the cradle of wine...", ka: "ეწვიეთ ღვინის სამშობლოს..." } },
        { title: { en: "Casino & Nightlife", ka: "კაზინო" }, desc: { en: "VIP Access", ka: "VIP წვდომა" }, img: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=2070", tag: { en: "VIP", ka: "VIP" }, text: { en: "Experience the vibrant nightlife...", ka: "გამოიცანით ღამის ცხოვრება..." } }
    ],

    // 3. SERVICES GRID
    servicesCards: [
        { title: { en: "Medical Tourism", ka: "სამედიცინო" }, desc: { en: "Wellbeing & Health", ka: "ჯანმრთელობა" }, img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070", text: { en: "Top clinics...", ka: "საუკეთესო კლინიკები..." } },
        { title: { en: "MICE & Corporate", ka: "MICE" }, desc: { en: "Events & Conferences", ka: "ღონისძიებები" }, img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069", text: { en: "Full logistical support...", ka: "ლოჯისტიკური მხარდაჭერა..." } },
        { title: { en: "Business Opportunities", ka: "ბიზნეს შესაძლებლობები" }, desc: { en: "Investment & Partners", ka: "ინვესტიციები" }, img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070", text: { en: "We facilitate B2B...", ka: "B2B კავშირები..." } },
        { title: { en: "Guides & Transport", ka: "გიდები და ტრანსპორტი" }, desc: { en: "Logistics", ka: "ლოჯისტიკა" }, img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070", text: { en: "Seamless logistics...", ka: "შეუფერხებელი ლოჯისტიკა..." } }
    ],

    // 4. BLOG POSTS
    blogPosts: [
        { title: { en: "Vineyards of Kakheti", ka: "კახეთის ვენახები" }, date: { en: "Oct 2025", ka: "ოქტ 2025" }, img: "https://images.unsplash.com/photo-1566346547477-173084076792?q=80&w=2070", text: { en: "A journey...", ka: "მოგზაურობა..." } },
        { title: { en: "Medical Excellence", ka: "სამედიცინო ხარისხი" }, date: { en: "Sep 2025", ka: "სექ 2025" }, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053", text: { en: "Why Georgia...", ka: "რატომ არის საქართველო..." } },
        { title: { en: "Ski Season Guide", ka: "სათხილამურო სეზონი" }, date: { en: "Aug 2025", ka: "აგვ 2025" }, img: "https://images.unsplash.com/photo-1610198871574-53537a702467?q=80&w=2070", text: { en: "Everything you need...", ka: "ყველაფერი რაც გჭირდებათ..." } },
        { title: { en: "Tbilisi Nightlife", ka: "თბილისის ღამის ცხოვრება" }, date: { en: "July 2025", ka: "ივლისი 2025" }, img: "https://images.unsplash.com/photo-1555992336-03a2316dbbb3?q=80&w=2064", text: { en: "Best clubs...", ka: "საუკეთესო კლუბები..." } }
    ]
};
