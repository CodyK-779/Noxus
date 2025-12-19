// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>NOXUS | Elite Gaming Gear & Keys</title>
//     <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;500;700&display=swap" rel="stylesheet">
//     <style>
//         /* --- CSS VARIABLES & RESET --- */
//         :root {
//             --nox-black: #0a0a0a;
//             --nox-dark: #141414;
//             --nox-panel: #1e1e1e;
//             --nox-red: #e91e3f; /* Neon Crimson */
//             --nox-red-dim: #960f26;
//             --nox-white: #f5f5f5;
//             --nox-gray: #888;
//             --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//             --glow: 0 0 20px rgba(233, 30, 63, 0.5);
//         }

//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }

//         body {
//             background-color: var(--nox-black);
//             color: var(--nox-white);
//             font-family: 'Rajdhani', sans-serif;
//             overflow-x: hidden;
//             line-height: 1.6;
//         }

//         a { text-decoration: none; color: inherit; transition: var(--transition); }
//         ul { list-style: none; }
//         img { width: 100%; display: block; }

//         /* --- TYPOGRAPHY --- */
//         h1, h2, h3, .logo {
//             font-family: 'Orbitron', sans-serif;
//             text-transform: uppercase;
//             letter-spacing: 2px;
//         }

//         .text-gradient {
//             background: linear-gradient(90deg, #fff, var(--nox-gray));
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//         }

//         /* --- NAVIGATION --- */
//         .navbar {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             padding: 1.5rem 5%;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             z-index: 1000;
//             background: rgba(10, 10, 10, 0.8);
//             backdrop-filter: blur(10px);
//             border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//             transition: var(--transition);
//         }

//         .navbar.scrolled {
//             padding: 1rem 5%;
//             background: rgba(10, 10, 10, 0.95);
//             border-bottom: 1px solid var(--nox-red);
//         }

//         .logo {
//             font-size: 1.8rem;
//             font-weight: 900;
//             color: var(--nox-red);
//             text-shadow: var(--glow);
//         }

        // .nav-links {
        //     display: flex;
        //     gap: 2.5rem;
        // }

        // .nav-links a {
        //     font-weight: 500;
        //     font-size: 1.1rem;
        //     position: relative;
        // }

        // .nav-links a::after {
        //     content: '';
        //     position: absolute;
        //     bottom: -5px;
        //     left: 0;
        //     width: 0;
        //     height: 2px;
        //     background: var(--nox-red);
        //     transition: var(--transition);
        // }

        // .nav-links a:hover { color: var(--nox-red); }
        // .nav-links a:hover::after { width: 100%; }

//         .nav-icons {
//             display: flex;
//             gap: 1.5rem;
//             align-items: center;
//         }

//         .cart-btn {
//             position: relative;
//             cursor: pointer;
//         }

//         .cart-count {
//             position: absolute;
//             top: -8px;
//             right: -8px;
//             background: var(--nox-red);
//             color: white;
//             font-size: 0.7rem;
//             width: 18px;
//             height: 18px;
//             border-radius: 50%;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             font-weight: bold;
//         }

//         /* --- HERO SECTION --- */
//         .hero {
//             height: 100vh;
//             display: flex;
//             align-items: center;
//             position: relative;
//             padding: 0 5%;
//             overflow: hidden;
//         }

//         /* Abstract Background */
//         .hero::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: 
//                 radial-gradient(circle at 70% 20%, rgba(233, 30, 63, 0.15) 0%, transparent 40%),
//                 linear-gradient(to bottom, var(--nox-black), transparent 20%, var(--nox-black)),
//                 url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop') center/cover;
//             opacity: 0.6;
//             z-index: -1;
//         }

//         .hero-content {
//             max-width: 600px;
//             z-index: 1;
//         }

//         .hero h1 {
//             font-size: 4rem;
//             line-height: 1.1;
//             margin-bottom: 1rem;
//         }

//         .hero p {
//             font-size: 1.2rem;
//             color: var(--nox-gray);
//             margin-bottom: 2rem;
//             max-width: 450px;
//         }

//         .btn {
//             display: inline-block;
//             padding: 1rem 2.5rem;
//             background: transparent;
//             border: 1px solid var(--nox-red);
//             color: var(--nox-red);
//             font-family: 'Orbitron', sans-serif;
//             font-weight: 700;
//             text-transform: uppercase;
//             cursor: pointer;
//             position: relative;
//             overflow: hidden;
//             transition: var(--transition);
//             clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
//         }

//         .btn:hover {
//             background: var(--nox-red);
//             color: white;
//             box-shadow: var(--glow);
//         }

//         .btn-fill {
//             background: var(--nox-red);
//             color: white;
//             border: none;
//         }

//         .btn-fill:hover {
//             background: var(--nox-red-dim);
//         }

//         /* --- CATEGORIES (Glitch Cards) --- */
//         .categories {
//             padding: 5rem 5%;
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//             gap: 2rem;
//         }

//         .cat-card {
//             background: var(--nox-panel);
//             padding: 2rem;
//             border: 1px solid rgba(255,255,255,0.05);
//             position: relative;
//             transition: var(--transition);
//             overflow: hidden;
//             cursor: pointer;
//         }

//         .cat-card:hover {
//             transform: translateY(-5px);
//             border-color: var(--nox-red);
//         }

//         .cat-card h3 {
//             font-size: 1.5rem;
//             margin-bottom: 0.5rem;
//         }

//         .cat-card p { color: var(--nox-gray); font-size: 0.9rem; }
        
//         .cat-icon {
//             font-size: 2rem;
//             color: var(--nox-red);
//             margin-bottom: 1rem;
//         }

//         /* --- FEATURED GRID (Bento Style) --- */
//         .featured {
//             padding: 5rem 5%;
//         }

//         .section-header {
//             display: flex;
//             justify-content: space-between;
//             align-items: end;
//             margin-bottom: 3rem;
//             border-bottom: 1px solid rgba(255,255,255,0.1);
//             padding-bottom: 1rem;
//         }

//         .grid-container {
//             display: grid;
//             grid-template-columns: repeat(4, 1fr);
//             grid-template-rows: repeat(2, 300px);
//             gap: 1.5rem;
//         }

//         .game-card {
//             position: relative;
//             border-radius: 4px;
//             overflow: hidden;
//             group: isolate;
//         }

//         .game-card.large { grid-column: span 2; grid-row: span 2; }
//         .game-card.wide { grid-column: span 2; }

//         .game-img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             transition: transform 0.5s ease;
//         }

//         .game-card:hover .game-img { transform: scale(1.05); }

//         .game-overlay {
//             position: absolute;
//             bottom: 0;
//             left: 0;
//             width: 100%;
//             background: linear-gradient(to top, black, transparent);
//             padding: 2rem 1.5rem 1.5rem;
//             transform: translateY(20px);
//             transition: var(--transition);
//         }

//         .game-card:hover .game-overlay { transform: translateY(0); }

//         .game-title { font-size: 1.4rem; margin-bottom: 0.2rem; }
//         .game-price { color: var(--nox-red); font-weight: 700; font-size: 1.1rem; }
        
//         .tag {
//             position: absolute;
//             top: 1rem;
//             right: 1rem;
//             background: var(--nox-red);
//             padding: 0.2rem 0.6rem;
//             font-size: 0.7rem;
//             font-weight: 700;
//             text-transform: uppercase;
//         }

//         /* --- MOBILE MENU --- */
//         .hamburger {
//             display: none;
//             cursor: pointer;
//             font-size: 1.5rem;
//         }

//         /* --- FOOTER --- */
//         footer {
//             background: var(--nox-dark);
//             padding: 4rem 5%;
//             margin-top: 4rem;
//             border-top: 1px solid rgba(255,255,255,0.05);
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//             gap: 3rem;
//         }

//         footer h4 { margin-bottom: 1.5rem; color: var(--nox-white); }
//         footer ul li { margin-bottom: 0.8rem; color: var(--nox-gray); cursor: pointer; transition: 0.2s;}
//         footer ul li:hover { color: var(--nox-red); padding-left: 5px; }

//         /* --- RESPONSIVE --- */
//         @media (max-width: 900px) {
//             .grid-container {
//                 grid-template-columns: 1fr;
//                 grid-template-rows: auto;
//             }
//             .game-card.large, .game-card.wide { grid-column: span 1; grid-row: span 1; height: 300px; }
            
//             .hero h1 { font-size: 2.5rem; }
            
//             .hamburger { display: block; }
//             .nav-links {
//                 position: fixed;
//                 top: 0;
//                 right: -100%;
//                 height: 100vh;
//                 width: 70%;
//                 background: var(--nox-dark);
//                 flex-direction: column;
//                 padding: 5rem 2rem;
//                 transition: 0.4s ease;
//                 border-left: 2px solid var(--nox-red);
//             }
//             .nav-links.active { right: 0; }
//         }
//     </style>
// </head>
// <body>

//     <nav class="navbar" id="navbar">
//         <div class="logo">NOXUS</div>
//         <ul class="nav-links" id="navLinks">
//             <li><a href="#home">Store</a></li>
//             <li><a href="#games">Games</a></li>
//             <li><a href="#hardware">Hardware</a></li>
//             <li><a href="#community">Community</a></li>
//         </ul>
//         <div class="nav-icons">
//             <div class="hamburger" onclick="toggleMenu()">☰</div>
//             <div class="cart-btn" onclick="addToCart()">
//                 🛒
//                 <span class="cart-count" id="cartCount">0</span>
//             </div>
//             <a href="#" class="btn" style="padding: 0.5rem 1rem; font-size: 0.8rem;">Login</a>
//         </div>
//     </nav>

//     <section class="hero" id="home">
//         <div class="hero-content">
//             <h1 class="text-gradient">Dominate <br>The Arena</h1>
//             <p>Experience the next generation of gaming. Elite gear, instant keys, and immersive worlds await. Welcome to Noxus.</p>
//             <div style="display: flex; gap: 1rem;">
//                 <button class="btn btn-fill">Browse Games</button>
//                 <button class="btn">View Hardware</button>
//             </div>
//         </div>
//     </section>

//     <section class="categories">
//         <div class="cat-card">
//             <div class="cat-icon">🎮</div>
//             <h3>Digital Keys</h3>
//             <p>Instant delivery for Steam, Xbox, & PS5.</p>
//         </div>
//         <div class="cat-card">
//             <div class="cat-icon">⌨️</div>
//             <h3>Peripherals</h3>
//             <p>Mechanical keyboards & eSports mice.</p>
//         </div>
//         <div class="cat-card">
//             <div class="cat-icon">🎧</div>
//             <h3>Audio Gear</h3>
//             <p>Spatial audio headsets for total immersion.</p>
//         </div>
//     </section>

//     <section class="featured" id="games">
//         <div class="section-header">
//             <div>
//                 <h2>Trending Now</h2>
//                 <p style="color: var(--nox-gray)">Top rated by the Noxus community</p>
//             </div>
//             <a href="#" style="color: var(--nox-red); font-weight: 700;">View All -></a>
//         </div>

//         <div class="grid-container">
//             <div class="game-card large">
//                 <div class="tag">Best Seller</div>
//                 <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1000&auto=format&fit=crop" alt="Cyberpunk" class="game-img">
//                 <div class="game-overlay">
//                     <div class="game-title">Neon Shadow: 2077</div>
//                     <div class="game-price">$59.99</div>
//                 </div>
//             </div>

//             <div class="game-card">
//                 <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=500&auto=format&fit=crop" alt="FPS" class="game-img">
//                 <div class="game-overlay">
//                     <div class="game-title">Tactical Ops</div>
//                     <div class="game-price">$29.99</div>
//                 </div>
//             </div>
//             <div class="game-card">
//                 <div class="tag" style="background: #2196f3;">New</div>
//                 <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=500&auto=format&fit=crop" alt="Rims" class="game-img">
//                 <div class="game-overlay">
//                     <div class="game-title">Apex Drift</div>
//                     <div class="game-price">$39.99</div>
//                 </div>
//             </div>

//             <div class="game-card wide">
//                 <div class="tag" style="background: #ff9800;">Sale -50%</div>
//                 <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000&auto=format&fit=crop" alt="Hardware" class="game-img">
//                 <div class="game-overlay">
//                     <div class="game-title">Noxus Pro Mechanical Keyboard</div>
//                     <div class="game-price"><span style="text-decoration: line-through; color: #888; font-size: 0.9rem; margin-right: 5px;">$120</span> $59.99</div>
//                 </div>
//             </div>
//         </div>
//     </section>

//     <footer>
//         <div>
//             <div class="logo" style="margin-bottom: 1rem;">NOXUS</div>
//             <p style="color: var(--nox-gray); font-size: 0.9rem;">
//                 The ultimate destination for gamers. <br>Power. Precision. Performance.
//             </p>
//         </div>
//         <div>
//             <h4>Shop</h4>
//             <ul>
//                 <li>New Releases</li>
//                 <li>Best Sellers</li>
//                 <li>Peripherals</li>
//                 <li>Gift Cards</li>
//             </ul>
//         </div>
//         <div>
//             <h4>Support</h4>
//             <ul>
//                 <li>Order Status</li>
//                 <li>Returns</li>
//                 <li>Help Center</li>
//                 <li>Contact Us</li>
//             </ul>
//         </div>
//         <div>
//             <h4>Stay Connected</h4>
//             <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
//                 <input type="email" placeholder="Enter email" style="padding: 0.5rem; background: #333; border: none; color: white;">
//                 <button class="btn-fill" style="padding: 0.5rem 1rem;">Join</button>
//             </div>
//         </div>
//     </footer>

//     <script>
//         // Sticky Navbar Effect
//         window.addEventListener('scroll', function() {
//             const navbar = document.getElementById('navbar');
//             if (window.scrollY > 50) {
//                 navbar.classList.add('scrolled');
//             } else {
//                 navbar.classList.remove('scrolled');
//             }
//         });

//         // Mobile Menu Toggle
//         function toggleMenu() {
//             const nav = document.getElementById('navLinks');
//             nav.classList.toggle('active');
//         }

//         // Simple Cart Logic
//         let count = 0;
//         const cartBadge = document.getElementById('cartCount');
        
//         // Add click event to all buttons/cards for demo purposes
//         const buyButtons = document.querySelectorAll('.game-card, .btn');
        
//         buyButtons.forEach(btn => {
//             btn.addEventListener('click', () => {
//                 addToCart();
//             });
//         });

//         function addToCart() {
//             count++;
//             cartBadge.innerText = count;
            
//             // Simple animation bump
//             cartBadge.style.transform = "scale(1.5)";
//             setTimeout(() => {
//                 cartBadge.style.transform = "scale(1)";
//             }, 200);
//         }
//     </script>
// </body>
// </html>