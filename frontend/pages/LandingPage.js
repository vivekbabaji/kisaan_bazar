export default {
  name: 'LandingPage',
  template: `
    <div class="landing-page">
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div class="container">
          <a class="navbar-brand fw-bold text-success" href="#home">
            <i class="fas fa-seedling"></i>
            Kisaan Bazar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
           
              <li class="nav-item"><router-link class="nav-link" to="/login">Login</router-link></li>
              <li class="nav-item"><router-link class="nav-link btn btn-success text-white ms-2" to="/signup">Join as customer</router-link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" class="hero-section pt-5 mt-5">
        <div class="container hero-content">
          <div class="mb-3">
            <button class="btn btn-sm btn-outline-secondary" @click="goBack">Back</button>
          </div>
          <div class="row align-items-center">
            <div class="col-lg-10">
              <h1 class="display-10 fw-bold text-dark mb-10">
                Fair Prices for Farmers, Fresh Produce for Everyone
              </h1>
              <p class="lead text-muted mb-4">
                Kisaan Bazar is a community-driven digital marketplace that connects nearby farmers directly with consumers and fellow farmers. The platform enables farmers to sell fresh produce at fair prices without relying on sabzi mandi middlemen, while consumers gain access to fresh vegetables at lower costs.
              </p>
              <div class="d-flex flex-wrap gap-3">
                <router-link class="btn btn-success btn-lg" to="/signup-farmer">Join as Farmer</router-link>
                <router-link class="btn btn-outline-success btn-lg" to="/buyfresh">Buy Fresh Now</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing-flow" class="py-5">
        <div class="container">
          <div class="problem-illustration p-4 rounded-4 shadow-sm mx-auto" style="max-width: 900px;">
            <div class="solution-box pt-4 border-top mt-4">
              <h5 class="text-success mb-3">Price Flow of Sabzi Mandi</h5>
              <div class="statement-list">
                <p class="mb-0">Step 1: The farmer sells the produce at ₹20/kg.</p>
                <p class="mb-0">Step 2: The produce passes through Sabzi Mandi at ₹40/kg.</p>
                <p class="mb-0">Step 3: The consumer pays ₹80/kg for the same produce.</p>
              </div>
            </div>
            <div class="solution-box pt-4 border-top mt-4">
              <h5 class="text-success mb-3">✓ Kisaan Bazar Solution</h5>
              <div class="statement-list">
                <p class="mb-2">Farmer earns ₹50/kg directly with Kisaan Bazar.</p>
                <p class="mb-0">Consumer pays ₹50/kg for fresh produce without middlemen markup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="features-section py-5">
        <div class="container">
          <h2 class="text-center fw-bold mb-3">The Sabzi Mandi Problem</h2>
          <p class="text-center text-muted lead mb-5">Farmers are trapped in a system where middlemen profit the most.</p>

          <div class="row g-4 mb-5">
            <div class="col-lg-6">
              <div class="problem-card p-4 h-100 rounded-4">
                <h5 class="text-danger mb-3">❌ Current System (Sabzi Mandi)</h5>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2"><i class="fas fa-times text-danger me-2"></i>Farmers sell at lowest prices</li>
                  <li class="mb-2"><i class="fas fa-times text-danger me-2"></i>Middlemen control everything</li>
                  <li class="mb-2"><i class="fas fa-times text-danger me-2"></i>Prices keep increasing for consumers</li>
                  <li class="mb-2"><i class="fas fa-times text-danger me-2"></i>Farmers buy vegetables at inflated prices</li>
                  <li><i class="fas fa-times text-danger me-2"></i>No direct connection or trust</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="solution-card p-4 h-100 rounded-4">
                <h5 class="text-success mb-3">✅ Kisaan Bazar Solution</h5>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Farmers get fair prices (50-60% increase)</li>
                  <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Complete elimination of middlemen</li>
                  <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Consumers save 30-40% vs market</li>
                  <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Farmers help farmers with community trade</li>
                  <li><i class="fas fa-check text-success me-2"></i>Transparent direct farmer-to-consumer pricing</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 class="text-center fw-bold mb-5 mt-5">How Kisaan Bazar Works</h3>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="feature-card p-4 h-100 rounded-4">
                <div class="feature-icon mb-3"><i class="fas fa-handshake"></i></div>
                <h4 class="h5">Direct Connection</h4>
                <p class="text-muted mb-0">Farmers connect directly with consumers and other farmers without intermediaries.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="feature-card p-4 h-100 rounded-4">
                <div class="feature-icon mb-3"><i class="fas fa-balance-scale"></i></div>
                <h4 class="h5">Fair Pricing</h4>
                <p class="text-muted mb-0">Farmers set their own price based on quality and demand.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="feature-card p-4 h-100 rounded-4">
                <div class="feature-icon mb-3"><i class="fas fa-users"></i></div>
                <h4 class="h5">Farmer Community</h4>
                <p class="text-muted mb-0">Farmers buy from each other at fair community prices.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="feature-card p-4 h-100 rounded-4">
                <div class="feature-icon mb-3"><i class="fas fa-percent"></i></div>
                <h4 class="h5">No Middlemen Markup</h4>
                <p class="text-muted mb-0">More value stays with the farmer instead of middlemen.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="feature-card p-4 h-100 rounded-4">
                <div class="feature-icon mb-3"><i class="fas fa-leaf"></i></div>
                <h4 class="h5">Fresh Guarantee</h4>
                <p class="text-muted mb-0">Vegetables move quickly from farm to buyer, not stale mandi stock.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="feature-card p-4 h-100 rounded-4">
                <div class="feature-icon mb-3"><i class="fas fa-chart-line"></i></div>
                <h4 class="h5">Income Growth</h4>
                <p class="text-muted mb-0">Farmers earn more directly from every sale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" class="benefits-section bg-light py-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-6">
              <h2 class="fw-bold mb-4">For Farmers</h2>
              <p class="text-muted mb-3"><strong>Escape the Sabzi Mandi Trap</strong></p>
              <ul class="list-unstyled benefits-list">
                <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Sell directly at higher prices</li>
                <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>No middlemen exploitation</li>
                <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Build direct customer relationships</li>
                <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Buy from farmer community at fair rates</li>
                <li><i class="fas fa-check-circle text-success me-2"></i>Payment within 48 hours</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bold mb-4">For Consumers</h2>
              <p class="text-muted mb-3"><strong>Get Fresh Produce at Fair Prices</strong></p>
              <ul class="list-unstyled benefits-list">
                <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Save 30-40% versus market prices</li>
                <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Farm-fresh vegetables within 24 hours</li>
                <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>Know exactly which farmer grew your food</li>
                <li class="mb-2"><i class="fas fa-check-circle text-success me-2"></i>No hidden markups</li>
                <li><i class="fas fa-check-circle text-success me-2"></i>Bulk order discounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="stats-section py-5 text-white">
        <div class="container">
          <div class="row text-center g-4">
            <div class="col-md-3">
              <h3 class="display-5 fw-bold">45%</h3>
              <p class="lead mb-0">More Income for Farmers</p>
            </div>
            <div class="col-md-3">
              <h3 class="display-5 fw-bold">35%</h3>
              <p class="lead mb-0">Savings for Consumers</p>
            </div>
            <div class="col-md-3">
              <h3 class="display-5 fw-bold">0</h3>
              <p class="lead mb-0">Middlemen Cost</p>
            </div>
            <div class="col-md-3">
              <h3 class="display-5 fw-bold">24h</h3>
              <p class="lead mb-0">Farm to Table</p>
            </div>
          </div>
        </div>
      </section>

      <section id="signup" class="cta-section py-5">
        <div class="container text-center">
          <h2 class="fw-bold mb-3">Break Free from Sabzi Mandi Today</h2>
          <p class="lead text-muted mb-4">Join thousands of farmers and consumers who have already escaped the middleman trap and built a fair agricultural market.</p>
          <div class="d-flex justify-content-center gap-3 flex-wrap mb-3">
            <button class="btn btn-success btn-lg">I'm a Farmer - Sell Direct</button>
            <button class="btn btn-outline-success btn-lg">I'm a Buyer - Save Money</button>
          </div>
          <p class="text-muted small">No registration fees • No hidden charges • Start earning/saving today</p>
        </div>
      </section>

      <section id="contact" class="contact-section bg-light py-5">
        <div class="container">
          <h2 class="text-center fw-bold mb-5">Get in Touch</h2>
          <div class="row g-4">
            <div class="col-md-4 text-center">
              <div class="contact-card p-4 h-100 rounded-4 shadow-sm">
                <i class="fas fa-phone fa-2x text-success mb-3"></i>
                <h5>Phone</h5>
                <p class="text-muted mb-0">+91 0000000000</p>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="contact-card p-4 h-100 rounded-4 shadow-sm">
                <i class="fas fa-envelope fa-2x text-success mb-3"></i>
                <h5>Email</h5>
                <p class="text-muted mb-0">info@kisaanbazar.com</p>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <div class="contact-card p-4 h-100 rounded-4 shadow-sm">
                <i class="fas fa-map-marker-alt fa-2x text-success mb-3"></i>
                <h5>Address</h5>
                <p class="text-muted mb-0">Earth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer bg-dark text-white py-4">
        <div class="container">
          <div class="row g-4">
            <div class="col-md-4">
              <h6 class="fw-bold">About Kisaan Bazar</h6>
              <p class="small text-muted">Connecting farmers directly with customers for fresh, organic agricultural products.</p>
            </div>
            <div class="col-md-4">
              <h6 class="fw-bold">Quick Links</h6>
              <ul class="list-unstyled footer-links mb-0">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="col-md-4">
              <h6 class="fw-bold">Follow Us</h6>
              <div class="d-flex gap-3">
                <a href="#" class="text-white"><i class="fab fa-facebook fa-lg"></i></a>
                <a href="#" class="text-white"><i class="fab fa-twitter fa-lg"></i></a>
                <a href="#" class="text-white"><i class="fab fa-instagram fa-lg"></i></a>
                <a href="#" class="text-white"><i class="fab fa-linkedin fa-lg"></i></a>
              </div>
            </div>
          </div>
          <hr class="bg-secondary my-4" />
          <p class="text-center small text-muted mb-0">© 2026 Kisaan Bazar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  `,

  methods: {
    goBack() {
      window.history.back();
    },

    injectStyles() {
      // Prevent duplicate injection
      if (document.getElementById('kisaan-bazar-styles')) return;

      const style = document.createElement('style');
      style.id = 'kisaan-bazar-styles';
      style.textContent = `
        /* ===== CSS Variables ===== */
        :root {
          --green-primary:   #2e7d32;
          --green-light:     #4caf50;
          --green-pale:      #e8f5e9;
          --green-pale2:     #c8e6c9;
          --red-pale:        #ffebee;
          --red-border:      #ef9a9a;
          --shadow-sm:       0 2px 8px rgba(0,0,0,.08);
          --shadow-md:       0 4px 20px rgba(0,0,0,.12);
          --radius:          16px;
          --transition:      .25s ease;
        }

        /* ===== Global Reset ===== */
        .landing-page * {
          box-sizing: border-box;
        }
        .landing-page {
          font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
          color: #1a1a1a;
          overflow-x: hidden;
        }

        /* ===== Navbar ===== */
        .landing-page .navbar {
          padding: 14px 0;
          transition: box-shadow var(--transition);
        }
        .landing-page .navbar-brand {
          font-size: 1.4rem;
          letter-spacing: -.3px;
          gap: 8px;
          display: flex;
          align-items: center;
        }
        .landing-page .navbar-brand i {
          font-size: 1.2rem;
        }
        .landing-page .nav-link {
          font-weight: 500;
          color: #444 !important;
          padding: 6px 14px !important;
          border-radius: 8px;
          transition: color var(--transition), background var(--transition);
        }
        .landing-page .nav-link:hover {
          color: var(--green-primary) !important;
          background: var(--green-pale);
        }
        .landing-page .navbar-nav .btn.nav-link {
          padding: 6px 18px !important;
          border-radius: 50px;
          font-weight: 600;
        }

        /* ===== Hero Section ===== */
        .landing-page .hero-section {
          min-height: 85vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #f1f8e9 0%, #ffffff 50%, #e8f5e9 100%);
          position: relative;
          overflow: hidden;
        }
        .landing-page .hero-section::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(76,175,80,.18) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .landing-page .hero-section::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(46,125,50,.12) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .landing-page .hero-content {
          position: relative;
          z-index: 1;
          padding: 60px 0;
        }
        .landing-page .hero-section h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          line-height: 1.2;
          letter-spacing: -.5px;
        }
        .landing-page .hero-section .lead {
          font-size: 1.1rem;
          line-height: 1.75;
          max-width: 680px;
        }

        /* ===== Pricing Flow Section ===== */
        .landing-page .problem-illustration {
          background: #ffffff;
          border: 1px solid #e0e0e0;
        }
        .landing-page .solution-box {
          border-color: #e8f5e9 !important;
        }
        .landing-page .statement-list p {
          padding: 10px 14px;
          background: var(--green-pale);
          border-left: 4px solid var(--green-light);
          border-radius: 6px;
          margin-bottom: 8px !important;
          font-size: .95rem;
          color: #333;
        }

        /* ===== Features Section ===== */
        .landing-page .features-section {
          background: #fafafa;
        }
        .landing-page .features-section > .container > h2 {
          font-size: 2rem;
        }

        /* Problem card */
        .landing-page .problem-card {
          background: var(--red-pale);
          border: 1px solid var(--red-border);
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .landing-page .problem-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .landing-page .problem-card li {
          font-size: .95rem;
          color: #555;
        }

        /* Solution card */
        .landing-page .solution-card {
          background: var(--green-pale);
          border: 1px solid var(--green-pale2);
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .landing-page .solution-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .landing-page .solution-card li {
          font-size: .95rem;
          color: #444;
        }

        /* Feature cards */
        .landing-page .feature-card {
          background: #ffffff;
          border: 1px solid #e8f5e9;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
          cursor: default;
        }
        .landing-page .feature-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 32px rgba(46,125,50,.15);
          border-color: var(--green-light);
        }
        .landing-page .feature-card h4 {
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 8px;
        }
        .landing-page .feature-icon {
          width: 52px;
          height: 52px;
          background: var(--green-pale);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: var(--green-primary);
          transition: background var(--transition), transform var(--transition);
        }
        .landing-page .feature-card:hover .feature-icon {
          background: var(--green-light);
          color: #fff;
          transform: scale(1.1) rotate(-5deg);
        }

        /* ===== Benefits Section ===== */
        .landing-page .benefits-section {
          background: linear-gradient(180deg, #f5f5f5 0%, #f1f8e9 100%);
        }
        .landing-page .benefits-section h2 {
          color: #1a1a1a;
          font-size: 1.8rem;
        }
        .landing-page .benefits-list li {
          font-size: .97rem;
          color: #444;
          padding: 6px 0;
          border-bottom: 1px solid rgba(0,0,0,.05);
          transition: color var(--transition);
        }
        .landing-page .benefits-list li:last-child {
          border-bottom: none;
        }
        .landing-page .benefits-list li:hover {
          color: var(--green-primary);
        }
        .landing-page .benefits-list .fa-check-circle {
          font-size: 1rem;
        }

        /* ===== Stats Section ===== */
        .landing-page .stats-section {
          background: linear-gradient(135deg, var(--green-primary) 0%, #1b5e20 100%);
          position: relative;
          overflow: hidden;
        }
        .landing-page .stats-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .landing-page .stats-section .container {
          position: relative;
        }
        .landing-page .stats-section h3 {
          font-size: clamp(2.4rem, 6vw, 3.5rem);
          font-weight: 900;
          letter-spacing: -1px;
          text-shadow: 0 2px 12px rgba(0,0,0,.2);
        }
        .landing-page .stats-section .lead {
          font-size: .95rem;
          opacity: .88;
          margin-top: 4px;
        }
        .landing-page .stats-section .col-md-3 {
          padding: 24px 16px;
          border-radius: var(--radius);
          transition: background var(--transition);
        }
        .landing-page .stats-section .col-md-3:hover {
          background: rgba(255,255,255,.1);
        }

        /* ===== CTA Section ===== */
        .landing-page .cta-section {
          background: linear-gradient(135deg, #f1f8e9 0%, #ffffff 100%);
          border-top: 1px solid #e8f5e9;
          border-bottom: 1px solid #e8f5e9;
        }
        .landing-page .cta-section h2 {
          font-size: 2rem;
        }
        .landing-page .cta-section .btn-success {
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          box-shadow: 0 4px 18px rgba(46,125,50,.3);
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .landing-page .cta-section .btn-success:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(46,125,50,.4);
        }
        .landing-page .cta-section .btn-outline-success {
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          transition: transform var(--transition);
        }
        .landing-page .cta-section .btn-outline-success:hover {
          transform: translateY(-2px);
        }

        /* ===== Contact Section ===== */
        .landing-page .contact-section {
          background: #f9fbe7;
        }
        .landing-page .contact-card {
          background: #ffffff;
          border: 1px solid #e8f5e9;
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .landing-page .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 28px rgba(46,125,50,.14);
        }
        .landing-page .contact-card h5 {
          font-weight: 700;
          margin: 10px 0 6px;
        }
        .landing-page .contact-card i {
          display: block;
        }

        /* ===== Footer ===== */
        .landing-page .footer {
          background: #111 !important;
        }
        .landing-page .footer-links a {
          color: #9e9e9e;
          text-decoration: none;
          font-size: .9rem;
          display: inline-block;
          padding: 3px 0;
          transition: color var(--transition);
        }
        .landing-page .footer-links a:hover {
          color: var(--green-light);
        }
        .landing-page .footer .d-flex a {
          transition: color var(--transition), transform var(--transition);
          display: inline-block;
        }
        .landing-page .footer .d-flex a:hover {
          color: var(--green-light) !important;
          transform: translateY(-3px);
        }
        .landing-page .footer hr {
          border-color: #333 !important;
          opacity: 1;
        }

        /* ===== Buttons (global overrides) ===== */
        .landing-page .btn-success {
          background-color: var(--green-primary);
          border-color: var(--green-primary);
        }
        .landing-page .btn-success:hover {
          background-color: #1b5e20;
          border-color: #1b5e20;
        }
        .landing-page .btn-outline-success {
          color: var(--green-primary);
          border-color: var(--green-primary);
        }
        .landing-page .btn-outline-success:hover {
          background-color: var(--green-primary);
          border-color: var(--green-primary);
          color: #fff;
        }

        /* ===== Scrollbar ===== */
        .landing-page ::-webkit-scrollbar {
          width: 6px;
        }
        .landing-page ::-webkit-scrollbar-track {
          background: #f5f5f5;
        }
        .landing-page ::-webkit-scrollbar-thumb {
          background: var(--green-pale2);
          border-radius: 99px;
        }
        .landing-page ::-webkit-scrollbar-thumb:hover {
          background: var(--green-light);
        }

        /* ===== Smooth Scroll ===== */
        html {
          scroll-behavior: smooth;
        }

        /* ===== Responsive tweaks ===== */
        @media (max-width: 768px) {
          .landing-page .hero-section {
            min-height: auto;
            padding-bottom: 40px;
          }
          .landing-page .hero-content {
            padding: 40px 0 20px;
          }
          .landing-page .stats-section h3 {
            font-size: 2rem;
          }
          .landing-page .cta-section h2 {
            font-size: 1.5rem;
          }
          .landing-page .feature-card,
          .landing-page .contact-card {
            margin-bottom: 4px;
          }
        }
      `;

      document.head.appendChild(style);
    }
  },

  mounted() {
    // Inject component styles
    this.injectStyles();

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  },

  beforeUnmount() {
    // Clean up injected styles when component is destroyed
    const style = document.getElementById('kisaan-bazar-styles');
    if (style) style.remove();
  }
};
