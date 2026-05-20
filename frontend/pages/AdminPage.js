export default {
  name: 'AdminPage',
  template: `
    <div class="container py-5">
      <div class="mb-3">
        <button type="button" class="btn btn-sm btn-outline-secondary me-2" @click="goBack">Back</button>
        <button type="button" class="btn btn-sm btn-outline-primary" @click="goHome">Home</button>
      </div>
      <h3 class="mb-3">Admin Dashboard</h3>
      <p class="text-muted">Total users: <strong>{{ totalUsers }}</strong></p>

      <div class="card mt-4">
        <div class="card-body">
          <h5 class="card-title mb-3">Users</h5>
          <div class="table-responsive">
            <table class="table table-sm table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Location</th>
                  <th>Joined</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="u in users" :key="u.id">
                  <td>{{ u.id }}</td>
                  <td>{{ u.name }}</td>
                  <td>{{ u.email }}</td>
                  <td>{{ u.role }}</td>
                  <td>{{ u.location || '-' }}</td>
                  <td>{{ u.joined }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      users: [
        { id: 1, name: 'Ramesh Kumar', email: 'ramesh@example.com', role: 'farmer', location: 'Aligarh, UP', joined: '2026-01-12' },
        { id: 2, name: 'Sita Devi', email: 'sita@example.com', role: 'farmer', location: 'Mathura, UP', joined: '2026-02-05' },
        { id: 3, name: 'Mahesh', email: 'mahesh@example.com', role: 'farmer', location: 'Agra, UP', joined: '2026-03-11' },
        { id: 4, name: 'Anita', email: 'anita@example.com', role: 'customer', location: 'Lucknow, UP', joined: '2026-04-01' },
        { id: 5, name: 'Neha', email: 'neha@example.com', role: 'customer', location: 'Bareilly, UP', joined: '2026-04-20' },
        { id: 6, name: 'Admin User', email: 'admin@example.com', role: 'admin', location: '', joined: '2026-01-01' }
      ]
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    goHome() {
      this.$router.push('/');
    }
  },
  computed: {
    totalUsers() {
      return this.users.length;
    }
  }
};
