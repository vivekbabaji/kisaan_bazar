export default {
  name: 'FarmerUploads',
  template: `
    <div class="container py-5">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 class="mb-1">My Uploaded Vegetables</h3>
          <p class="text-muted mb-0">Only your own vegetables are shown here.</p>
          <p v-if="farmer.name" class="small text-muted">Farmer: {{ farmer.name }}</p>
        </div>
        <div>
          <button class="btn btn-sm btn-outline-secondary me-2" @click="goBack">Back</button>
          <button class="btn btn-sm btn-outline-primary me-2" @click="goHome">Home</button>
          <button class="btn btn-success btn-sm" @click="goUpload">Upload New Vegetable</button>
        </div>
      </div>

      <div v-if="message" class="alert alert-info">{{ message }}</div>

      <div v-if="vegetables.length === 0" class="text-center text-muted py-5">
        <p>No vegetables uploaded yet. Use the upload button to add your first item.</p>
      </div>

      <div class="row g-4" v-if="vegetables.length > 0">
        <div class="col-md-4" v-for="veg in vegetables" :key="veg.id">
          <div class="card h-100 shadow-sm border-success">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title mb-1">{{ veg.name }} <small class="text-muted">({{ veg.breed }})</small></h5>
              <p class="card-text text-muted small mb-2">{{ veg.description }}</p>
              <ul class="list-unstyled small mb-3">
                <li><strong>Location:</strong> {{ veg.location }}</li>
                <li><strong>Uploaded:</strong> {{ veg.upload_date || veg.uploadDate }}</li>
                <li><strong>Price:</strong> ₹{{ veg.price }}/kg</li>
                <li><strong>Quantity:</strong> {{ veg.quantity }} kg</li>
              </ul>
              <div class="mt-auto text-end">
                <span class="badge bg-success">My Upload</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      farmer: { name: '' },
      vegetables: [],
      message: '',
      farmerId: null
    };
  },
  mounted() {
    const farmerId = this.$route.query.id;
    this.farmerId = farmerId;
    if (!farmerId) {
      this.message = 'Farmer ID is missing. Please login again.';
      return;
    }

    fetch(`/api/farmers/${farmerId}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.farmer = data.data;
        }
      })
      .catch(() => {
        this.message = 'Unable to load farmer details.';
      });

    fetch(`/api/farmers/${farmerId}/vegetables`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.vegetables = data.data;
          if (data.data.length === 0) {
            this.message = 'You have not uploaded any vegetables yet.';
          }
        } else {
          this.message = data.error || 'Unable to load your uploads.';
        }
      })
      .catch(() => {
        this.message = 'Unable to load your uploads from server.';
      });
  },
  methods: {
    goBack() {
      window.history.back();
    },
    goHome() {
      this.$router.push(`/farmer_dashboard?id=${this.farmerId}`);
    },
    goUpload() {
      if (this.farmerId) {
        this.$router.push(`/sell-vegetables?id=${this.farmerId}`);
      } else {
        this.$router.push('/sell-vegetables');
      }
    }
  }
};
