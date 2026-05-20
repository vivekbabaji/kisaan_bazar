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
              <li class="nav-item"><a class="nav-link" href="#features">Features</a></li>
              <li class="nav-item"><a class="nav-link" href="#benefits">Benefits</a></li>
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
                      Kisaan Bazar is a community-driven digital marketplace that connects nearby farmers directly with consumers and fellow farmers. The platform enables farmers to sell fresh produce at fair prices without relying on sabzi mandi middlemen, while consumers gain access to fresh vegetables at lower costs. </p>
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
                <p class="text-muted mb-0">+91 9876543210</p>
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
                <p class="text-muted mb-0">123 Farm Road, Agriculture City</p>
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
              <div class="d-flex">
                <a href="#" class="text-white me-2"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-white me-2"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-white me-2"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-white"><i class="fab fa-linkedin"></i></a>
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
    }
  },
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
};
