export default {
  name: 'Signup',
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-8 col-lg-6">
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <button type="button" class="btn btn-sm btn-outline-secondary me-2" @click="goBack">Back</button>
                <button type="button" class="btn btn-sm btn-outline-primary" @click="goHome">Home</button>
              </div>
              <h3 class="card-title mb-3">Customer Sign Up</h3>
              <form @submit.prevent="submitSignup">
                <div class="form-group mb-2">
                  <label for="name">Full name</label>
                  <input v-model="name" id="name" class="form-control form-control-sm" required />
                </div>
                <div class="form-group mb-2">
                  <label for="email">Email</label>
                  <input v-model="email" id="email" type="email" class="form-control form-control-sm" required />
                </div>
                <div class="form-group mb-2">
                  <label for="location">Location</label>
                  <input v-model="location" id="location" class="form-control form-control-sm" placeholder="City or village" />
                </div>
                <div class="form-group mb-3">
                  <label for="password">Password</label>
                  <input v-model="password" id="password" type="password" class="form-control form-control-sm" required />
                </div>
                <div class="d-flex justify-content-end">
                  <button class="btn btn-success btn-sm" type="submit">Sign Up</button>
                </div>
              </form>
              <div v-if="message" class="mt-3 alert" :class="success ? 'alert-success' : 'alert-danger'">{{ message }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return { name: '', email: '', password: '', message: '', success: false };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    goHome() {
      this.$router.push('/');
    },
    submitSignup() {
        const payload = { name: this.name, email: this.email, password: this.password, role: 'customer', location: this.location };
      fetch('/api/signup-customer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(r => r.json())
        .then(data => {
          if (data && data.success) {
            this.message = 'Signup successful. Redirecting...';
            this.success = true;
            this.$router.push('/login');
            setTimeout(() => this.$router.push('/login'), 1200);
          } else {
            this.message = data && data.error ? data.error : 'Signup failed';
            this.success = false;
          }
        })
        .catch(() => {
          this.message = 'Network error';
          this.success = false;
        });
    }
  }
};
