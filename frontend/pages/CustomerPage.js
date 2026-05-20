export default {
  name: 'CustomerPage',
  template: `
    <div class="container py-5">
      <div class="mb-3">
        <button type="button" class="btn btn-sm btn-outline-secondary me-2" @click="goBack">Back</button>
        <button type="button" class="btn btn-sm btn-outline-primary" @click="goHome">Home</button>
      </div>
      <h3 class="mb-4">Welcome, {{ customer.name || 'Customer' }}</h3>
      <p class="text-muted mb-4">Fresh produce from nearby farmers.</p>
      <div class="row g-4">
        <div class="col-md-4" v-for="veg in vegetables" :key="veg.id">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title mb-1">{{ veg.name }} <small class="text-muted">({{ veg.breed }})</small></h5>
              <p class="card-text text-muted small mb-2">{{ veg.description }}</p>
              <ul class="list-unstyled small mb-3">
                <li><strong>Uploaded:</strong> {{ veg.upload_date || veg.uploadDate }}</li>
                <li><strong>Price:</strong> ₹{{ veg.price }}/kg</li>
                <li><strong>Quantity:</strong> {{ veg.quantity }} kg</li>
                <li><strong>Location:</strong> {{ veg.location }}</li>
              </ul>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <button class="btn btn-outline-success btn-sm">Contact Farmer</button>
                <span class="badge bg-success text-white small">{{ veg.farmer }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      customer: { name: '' },
      vegetables: [],
      message: ''
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
  mounted() {
    const customerId = this.$route.query.id;
    if (customerId) {
      fetch(`/api/customers/${customerId}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.customer = data.data;
          } else {
            this.message = data.error || 'Unable to load customer details';
          }
        })
        .catch(() => {
          this.message = 'Unable to load customer details from server';
        });
    }

    fetch('/api/vegetables')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.vegetables = data.data;
        } else {
          this.message = data.error || 'Failed to load customer vegetables';
        }
      })
      .catch(() => {
        this.message = 'Unable to connect to the backend';
      });
  }
};
