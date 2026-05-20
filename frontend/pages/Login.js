/*export default {
  name: 'Login',
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-md-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title mb-3">Login</h3>
              <form @submit.prevent="submitLogin">
                <div class="form-group mb-2">
                  <label for="email">Email</label>
                  <input v-model="email" id="email" type="email" class="form-control form-control-sm" required />
                </div>
                <div class="form-group mb-3">
                  <label for="password">Password</label>
                  <input v-model="password" id="password" type="password" class="form-control form-control-sm" required />
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <router-link to="/signup" class="small">Create account</router-link>
                  <button class="btn btn-primary btn-sm" type="submit">Login</button>
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
    return { email: '', password: '', message: '', success: false };
  },
  methods: {
    
    submitLogin() {
      const payload = { email: this.email, password: this.password };
      fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(r => r.json())
        .then(data => {
          if (data && data.success) {
            this.message = 'Login successful. Redirecting...';
            this.success = true;
            setTimeout(() => this.$router.push('/'), 900);
          } else {
            this.message = data && data.error ? data.error : 'Login failed';
            this.success = false;
          }
        })
        .catch(() => {
          this.message = 'Network error';
          this.success = false;
        });
    }
    
   async onLogin() {
                     // Dummy role check based on username
                     if (this.username === 'admin' && this.password === '1234') {
                         this.$router.push('/admin_dashboard');
                     } else if (this.username === 'farmer' && this.password === '1234') {
                         this.$router.push('/farmer_dashboard');
                     } else if (this.username === 'customer' && this.password === '1234') {
                         this.$router.push('/customer_dashboard');
                     } else {
                         alert('Invalid username or password.');
                     }
                 }
  }
};
*/
export default {
        template : `
            <div style="background: linear-gradient(135deg, #e3f2fd 0%, #f8bbd0 100%); min-height: 100vh;" class="d-flex align-items-center justify-content-center">
                <div class="card shadow-lg p-4 animate__animated animate__fadeIn" style="max-width: 400px; width: 100%; border-radius: 1.5rem;">
                    <div class="text-center mb-3">
                        <span style="font-size: 3rem; color: #1976d2;">
                            <i class="bi bi-person-circle"></i>
                        </span>
                        <p> </p>
                        <p> </p>
                    </div>
                    <h2 class="mb-4 text-center text-primary fw-bold">Login</h2>
                    <div class="mb-3 text-start">
                      <button type="button" class="btn btn-sm btn-outline-secondary me-2" @click="goBack">Back</button>
                      <button type="button" class="btn btn-sm btn-outline-primary" @click="goHome">Home</button>
                    </div>
                    <form @submit.prevent="onLogin">
                        <div class="mb-3">
                            <label for="username" class="form-label fw-semibold">Username</label>
                            <input type="text" class="form-control form-control-lg rounded-pill" id="username" v-model="username" placeholder="Enter your username" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label fw-semibold">Password</label>
                            <input type="password" class="form-control form-control-lg rounded-pill" id="password" v-model="password" placeholder="Enter your password" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg rounded-pill w-100 mt-3 shadow-sm" @click="onLogin">Login</button>
                    </form>
                    <div class="mt-3 text-center">
                        <small class="text-muted">Don't have an account? <router-link to="/register" class="text-decoration-none text-primary">Register</router-link></small>
                    </div>
                    <div v-if="message" class="mt-3 alert" :class="success ? 'alert-success' : 'alert-danger'">{{ message }}</div>
                </div>
            </div>
        `,
        data() {
            return {
                username: '',
                password: '',
                message: '',
                success: false
            };
        },
        methods: {
            async onLogin() {
                try {
                    const response = await fetch('/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ username: this.username, password: this.password })
                    });
                    const data = await response.json();

                    if (data && data.success && data.data && data.data.role) {
                        this.message = 'Login successful. Redirecting...';
                        this.success = true;
                        let route = '/';
                        if (data.data.role === 'admin') route = '/admin_dashboard';
                        else if (data.data.role === 'farmer' && data.data.id) route = `/farmer_dashboard?id=${data.data.id}`;
                        else if (data.data.role === 'customer' && data.data.id) route = `/customer_dashboard?id=${data.data.id}`;
                        setTimeout(() => this.$router.push(route), 800);
                    } else {
                        this.message = data && data.error ? data.error : 'Invalid username or password.';
                        this.success = false;
                    }
                } catch (error) {
                    this.message = 'Network error. Please try again.';
                    this.success = false;
                }
            },
            goBack() {
                window.history.back();
            },
            goHome() {
                this.$router.push('/');
            }
        }
}