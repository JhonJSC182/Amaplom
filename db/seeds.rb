# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# Creating a demo user

User.create!(
    name: 'Demo',
    email: 'demo@user.io',
    password: 'password'
)


#creating products


# Electronics

laptop = Product.create(
    name: "Laptop",
    description: "Good condition",
    price: 505.99,
    category: "electronics",
    rating: 4
)

mouse = Product.create(
    name: "J-Tech Digital Ergonomic Mouse with Wireless Connection, Removable Palm Rest, Thumb Buttons, Rechargeable Battery, 800 DPI, Compatible with Windows and MAC OS",
    description: " The J-Tech Digital V638s comfortable, ergonomic “handshake” design greatly reduces arm/wrist/hand strain while providing relief for carpal tunnel syndrome. Back/forward thumb buttons provide extra convenience. (Button functionality can also be changed or reassigned using third-party software.) Works on most non-metallic surfaces. The built-in lithium battery is fully rechargeable.",
    price: 24.99,
    category: "electronics",
    rating: 4
)

tools = Product.create(
    name: "STREBITO Electronics Precision Screwdriver Sets 142-Piece with 120 Bits Magnetic Repair Tool Kit for iPhone, MacBook, Computer, Laptop, PC, Tablet, PS4, Xbox, Nintendo, Game Console",
    description: "This precision screwdriver set has 120 bits, complete with every driver bit you’ll need to tackle any repair or DIY project. In addition, this repair kit has 22 practical accessories, such as magnetizer, magnetic mat, ESD tweezers, suction cup, spudger, cleaning brush, etc. Whether you're a professional or a amateur, this toolkit has what you need to repair all cell phone, computer, laptops, SSD, iPad, game consoles, tablets, glasses, HVAC, sewing machine, etc",
    price: 27.99,
    category: "electronics",
    rating: 2
)

earplugs = Product.create(
    name: "Wireless Earbuds, 25 Hours Long Battery, Mics, 5.3 Bluetooth, LED Power Display. IPX4 Waterproof, Clear Calling with Noice Cancelling. (White)",
    description: "Enjoy up to 25 hours of uninterrupted playback with a single charge, High-quality microphones ensure clear calls and voice commands. Advanced Bluetooth 5.3 technology for seamless connectivity and extended range. Intuitive LED power display keeps you informed of battery status at a glance",
    price: 23.99,
    category: "electronics",
    rating: 5
)

keyboard = Product.create(
    name: "Logitech MK270 Wireless Keyboard And Mouse Combo For Windows, 2.4 GHz Wireless, Compact Mouse, 8 Multimedia And Shortcut Keys, For PC, Laptop - Black",
    description: "Reliable Plug and Play: The USB receiver provides a reliable wireless connection up to 33 ft (1), so you can forget about drop-outs and delays and you can take it wherever you use your computer.Keyboard Key type: Deep profile. Mouse Scroll Wheel: Yes, 2D, optical.Enhanced Function Keys : Yes. Ergonomic : No.",
    price: 22.99,
    category: "electronics",
    rating: 2
)

screen = Product.create(
    name: "Sceptre 24-inch Professional Thin 1080p LED Monitor 99% sRGB 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)",
    description: "Multiple Ports: Two HDMI ports and one VGA port provide up to 75HZ refresh rate, refining picture clarity in all action-packed gaming sequences and graphic design projects. Audio In and a Headphone Jack provide diverse audio options.",
    price: 99.97,
    category: "electronics",
    rating: 4
)

cables = Product.create(
    name: "Amazon Basics High-Speed HDMI Cable For Television, A Male to A Male, 18 Gbps, 4K/60Hz, 6 Feet, Black",
    description: "SUPPORTS 4K VIDEO: Supports 4K video at 60 Hz, 2160p, 48-bit/px color depth, as well as bandwidth up to 18Gbps, Ethernet, 3D, and Audio Return Channel (ARC)",
    price: 5.99,
    category: "electronics",
    rating: 4
)

headphones = Product.create(
    name: "Logitech H390 Wired Headset for PC/Laptop, Stereo Headphones with Noise Cancelling Microphone, USB-A, in-Line Controls for Video Meetings, Music, Gaming and Beyond - Black",
    description: "Optimum Comfort: PC headphones with plush, padded headband and earcups.Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance. Change the earbud tips to ones that fit more snugly in your ear.Specific uses for product : personal",
    price: 21.99,
    category: "electronics",
    rating: 4
)



# books

book1 = Product.create(
    name: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    description: "If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights.",
    price: 15,
    category: "books",
    rating: 4
)


book2 = Product.create(
    name: "The 48 Laws of Power",
    description: "In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum.",
    price: 25.49,
    category: "books",
    rating: 5
)


book3 = Product.create(
    name: "The 33 Strategies of War (Joost Elffers Books)",
    description: "Robert Greene’s groundbreaking guides, The 48 Laws of Power, The Art of Seduction, and Mastery, espouse profound, timeless lessons from the events of history to help readers vanquish an enemy, ensnare an unsuspecting victim, or become the greatest in your field. In The 33 Strategies of War, Greene has crafted an important addition to this ruthless and unique series.",
    price: 112,
    category: "books",
    rating: 4
)


book4 = Product.create(
    name: "The Law of Success: The Master Wealth-Builder's Complete and Original Lesson Plan for Achieving Your Dreams",
    description: "This is the master volume of the extraordinary work that began the career of Napoleon Hill. Originally produced by Hill in 1928 as an eight-book series, The Law of Success is now available to contemporary readers in a single edition, redesigned and reset for ease of reading.",
    price: 17.99,
    category: "books",
    rating: 4
)


book5 = Product.create(
    name: "Choose Your Enemies Wisely: Business Planning for the Audacious Few",
    description: " Theyre the haters and the doubters who said youd never make it, the ones who stomped on your dreams. When you think about your enemies, you get emotional. You feel like you wont let anything—or anyone—stop you.",
    price: 18.99,
    category: "books",
    rating: 3
)


book6 = Product.create(
    name: "Psycho-Cybernetics: Updated and Expanded",
    description: "Since its first publication in 1960, Maxwell Maltzs landmark bestseller has inspired and enhanced the lives of more than 30 million readers. In this updated edition, with a new introduction and editorial commentary by Matt Furey, president of the Psycho-Cybernetics Foundation, the original text has been annotated and amplified to make Maltzs message even more relevant for the contemporary reader.",
    price: 11.49,
    category: "books",
    rating: 4
)


book7 = Product.create(
    name: "Power vs. Force",
    description: "Dive deep into the realms of consciousness with Dr. David Hawkins' groundbreaking masterpiece, Power vs. Force, a roadmap to understanding human behavior and emotions.",
    price: 14.79,
    category: "books",
    rating: 2
)


laptop = Product.create(
    name: "The Way of the Superior Man: A Spiritual Guide to Mastering the Challenges of Women, Work, and Sexual Desire (20th Anniversary Edition)",
    description: "Though much has changed in society since the first publication of The Way of the Superior Man, men of all ages still. Including an all-new preface by author David Deida, this 20th-anniversary edition of the classic guide to male spirituality offers the next generation the opportunity to cultivate trust in the moment and put forth the best versions of themselves in an ever-changing world.",
    price: 8.49,
    category: "books",
    rating: 5
)



#best sellers

best1 = Product.create(
    name: "Stanley Quencher H2.0 FlowState Stainless Steel Vacuum Insulated Tumbler with Lid and Straw for Water, Iced Tea or Coffee",
    description: "YOUR DREAM TUMBLER: Whichever way your day flows, the H2.0 FlowState tumbler keeps you refreshed with fewer refills. Double wall vacuum insulation means drinks stay cold, iced or hot for hours. Choose between our 14oz, 20oz, 30oz,40oz and 64oz options depending on your hydration needs. The narrow base on all sizes (except 64oz) fits just about any car cup holder, keeping it right by your side.",
    price: 35,
    category: "bestseller",
    rating: 4
)

best2 = Product.create(
    name: "CELSIUS Assorted Flavors Official Variety Pack, Functional Essential Energy Drinks, 12 Fl Oz (Pack of 12)",
    description: "Kosher diet, gulten free, vegan",
    price: 35,
    category: "bestseller",
    rating: 3
)

best3 = Product.create(
    name: "Frito Lay Fun Times Mix Variety Pack, (Pack of 40)",
    description: "40 single serve favorites - Doritos Nacho Cheese, Doritos Cool Ranch, Lay's Sour Cream & Onion, Rold Gold Tiny Twists, Smartfood White Cheddar Popcorn, Cheetos Crunchy, Cheetos Puffs, and Sunchips Harvest Cheddar",
    price: 40,
    category: "bestseller",
    rating: 4
)

best4 = Product.create(
    name: "Nespresso Capsules VertuoLine, Medium and Dark Roast Coffee, Variety Pack, Stormio, Odacio, Melozio, 30 Count, Brews 7.77 Fl Oz (Pack of 3 )",
    description: "NESPRESSO VERTUOLINE VARIETY PACK ASSORTMENT: This Nespresso coffee assortment offers 30 Nespresso Pods in a variety of 3 best-selling coffee blends for the Nespresso VertuoLine System.10 Stormio, 10 Odacio, 10 Melozio",
    price: 37.50,
    category: "bestseller",
    rating: 5
)

best5 = Product.create(
    name: "NESPRESSO VERTUOLINE VARIETY PACK ASSORTMENT: This Nespresso coffee assortment offers 30 Nespresso Pods in a variety of 3 best-selling coffee blends for the Nespresso VertuoLine System.10 Stormio, 10 Odacio, 10 Melozio",
    description: "The Original Pro Chopper - Our superstar veggie slicer has been creating waves on TikTok! Simple to use, set up, and clean, save time and energy during meal prep with our OG vegetable chopper. Chop, slice, and dice your ingredients like a seasoned chef!",
    price: 24,
    category: "bestseller",
    rating: 4
)

best6 = Product.create(
    name: "D'Addario Guitar Strings - Acoustic Guitar Strings - 80/20 Bronze - For 6 String Guitar - Deep, Bright, Projecting Tone - EJ11 - Light, 12-53",
    description: "PRECISION WOUND - D’Addario 80/20 Bronze acoustic guitar strings are precision wound over a hexagonal high carbon steel core.",
    price: 5.99,
    category: "bestseller",
    rating: 4
)

best7 = Product.create(
    name: "Ailun Glass Screen Protector for iPhone 14 / iPhone 13 / iPhone 13 Pro [6.1 Inch] Display 3 Pack Tempered Glass, Case Friendly",
    description: "WORKS FOR iPhone 14/iPhone 13/13 Pro 6.1 Inch Display Screen 0.33mm tempered glass screen protector. Featuring maximum protection from scratches, scrapes, and bumps.【Not fit for iPhone 14 Pro】",
    price: 24.99,
    category: "bestseller",
    rating: 3
)

best8 = Product.create(
    name: "LEGO Creator 3 in 1 Mighty Dinosaur Toy, Transforms from T. rex to Triceratops to Pterodactyl Dinosaur Figures, Great Gift for 7-12 Year Old Boys & Girls, 31058",
    description: "T. rex Dinosaur Toy with bright orange eyes, posable joints and head, large claws and an opening mouth with pointed teeth",
    price: 11.99,
    category: "bestseller",
    rating: 4
)

# New

new1 = Product.create(
    name: "64” Tripod for Cell Phone & Camera, Phone Tripod with Remote and Phone Holder, Portable Tripod for iPhone, Phone Tripod for Video Recording, Cell Phone Tripod Mount Stand for Cellphone",
    description: "Made of premium aluminum alloy and stainless steel, Liphisy phone tripod with remote keeps your device stay securely in place for still shots and video recording.",
    price: 17.99,
    category: "newReleases",
    rating: 4
)

new2 = Product.create(
    name: "4K Brushless Motor Drone - Aerial Photography Drone with Camera - Versatile Quadcopter with Altitude Hold, Headless Mode - Camera Drone for Adults - Foldable Remote Control Drone - Gift",
    description: "The new upgrade system obstacle avoidance drone, intelligent four-way obstacle avoidance, bid farewell to difficult control, refuse to crash, 4K high-definition high-resolution lens, clear picture 𝐪𝐮𝐚𝐥𝐢𝐭𝐲, support 90 ° angle adjustment, easy to capture large scenes, the drone can achieve 360° rollover through the remote control during flight.",
    price: 489.99,
    category: "newReleases",
    rating: 3
)

new3 = Product.create(
    name: "Creative Electronic Monster Dinosaur Stealing Coin Musical Moving Piggy Bank Coin Bank Money Box Anime Gift for Boys Girls Kids",
    description: "A funny design to the popular prank BANK series, the dinosaur monster is a cute piggy bank. suspicious and glowing monster with red LED lights while roaring, and stealing coins. it has different sounds.",
    price: 12.99,
    category: "newReleases",
    rating: 2
)

new4 = Product.create(
    name: "HUSAN Piggy Banks for Kids, Electronic Password Code Money Banks ATM Banks Box Coin Bank for Children Boys and Girls (Camouflage Blue)",
    description: "Packing Size: 14.3x15x20.3cm (5.63x5.9x7.99 inch); Packing Weight: 640g (1.41lb); Capacity: Store 600 pieces of coins or 100 pieces of paper money; Batteries: 3 pieces of AA batteries (not included).",
    price: 18.99,
    category: "newReleases",
    rating: 3
)

new5 = Product.create(
    name: "Oura Ring Gen3 Heritage - Silver - Size 8 - Smart Ring - Size First with Oura Sizing Kit - Sleep Tracking Wearable - Heart Rate - Fitness Tracker - 5-7 Days Battery Life",
    description: "SIZE BEFORE YOU BUY - Oura Ring sizes are different from standard ring sizes. Purchase an Oura Ring Sizing Kit on Amazon and receive a $10 Amazon credit towards the future purchase of an Oura Ring (terms and conditions apply).",
    price: 299,
    category: "newReleases",
    rating: 3
)

new6 = Product.create(
    name: "Donald Trump Never Surrender Colorized Mugshot 2 Dollar Bill Uncirculated Commemorative Coin",
    description: "Exclusive Collectible: Own a piece of history with this unique colorized $2 bill featuring President Trump's historic mugshot, a truly distinctive addition to any collection.",
    price: 18.99,
    category: "newReleases",
    rating: 4
)

new7 = Product.create(
    name: "Apple Watch Series 9 45mm (GPS + Cellular) Aluminum Black with Medium/Large Black Sport Band",
    description: "WHY APPLE WATCH SERIES 9 — Your essential companion for a healthy life is now even more powerful. The S9 chip enables a superbright display and a magical new way to quickly and easily interact with your Apple Watch without touching the screen. Advanced health, safety, and activity features provide powerful insights and help when you need it. And redesigned apps in watchOS give you more information at a glance.",
    price: 369.99,
    category: "newReleases",
    rating: 5
)

new8 = Product.create(
    name: "OXILAM Upgraded 9005 9006 LED Bulbs Combo, 600% Ultra Brighter, 1:1 Mini Size, 6500K Cool White, 9005/HB3 9006/HB4 Halogen Replacement, Canbus Ready, Pack of 4",
    description: "OXILAM 9005 9006 LED bulbs adopt the latest 2024 LED chip technology, providing 40000 lumens of light output per set, 6 times brighter than halogen bulbs. These 6500K cool white lights provide clear vision, enhancing nighttime road visibility for safe driving on dim and remote roads. It is an excellent choice for upgrading front bulbs, fog lights, high lamps and low lamp. (A set includes 2 9005 LED bulbs and 2 9006 LED bulbs)",
    price: 59.49,
    category: "newReleases",
    rating: 4
)