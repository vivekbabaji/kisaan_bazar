export default {
  name: 'FarmerPage',
  template: `
    <div class="container py-5">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
        <div>
          <h3 class="mb-2">Farmer Dashboard</h3>
          <p class="text-muted mb-0">Welcome, {{ farmer.name || 'Farmer' }}. View produce listed by other farmers and start selling your own vegetables.</p>
        </div>
        <div class="d-flex gap-2 align-items-center">
          <button type="button" class="btn btn-sm btn-outline-secondary" @click="goBack">Back</button>
          <button type="button" class="btn btn-outline-primary btn-sm" @click="goFarmerUploads">My Uploads</button>
          <button type="button" class="btn btn-success" @click="goUpload">Upload Vegetables</button>
        </div>
      </div>

      <div v-if="message" class="alert alert-info">{{ message }}</div>

            <div v-if="myVegetables.length" class="mb-4">
        <h5 class="mb-3">My Uploaded Vegetables</h5>
        <div class="row g-4">
          <div class="col-md-4" v-for="item in myVegetables" :key="item.id">
            <div class="card h-100 border-success shadow-sm">
              <div class="card-body d-flex flex-column">
                <h5 class="card-title mb-1">{{ item.name }} <small class="text-muted">({{ item.breed }})</small></h5>
                <p class="card-text text-muted small mb-2">{{ item.description }}</p>
                <ul class="list-unstyled small mb-3">
                  <li><strong>Location:</strong> {{ item.location }}</li>
                  <li><strong>Uploaded:</strong> {{ item.upload_date }}</li>
                  <li><strong>Price:</strong> ₹{{ item.price }}/kg</li>
                  <li><strong>Quantity:</strong> {{ item.quantity }} kg</li>
                </ul>
                <div class="mt-auto text-end">
                  <span class="badge bg-success text-white small">My Upload</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-4" v-for="item in otherVegetables" :key="item.id">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title mb-1">{{ item.name }} <small class="text-muted">({{ item.breed }})</small></h5>
              <p class="card-text text-muted small mb-2">{{ item.description }}</p>
              <ul class="list-unstyled small mb-3">
                <li><strong>Farmer:</strong> {{ item.farmer }}</li>
                <li><strong>Location:</strong> {{ item.location }}</li>
                <li><strong>Uploaded:</strong> {{ item.upload_date || item.uploadDate }}</li>
                <li><strong>Price:</strong> ₹{{ item.price }}/kg</li>
                <li><strong>Quantity:</strong> {{ item.quantity }} kg</li>
              </ul>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <span class="badge bg-secondary text-white small">Other Farmer</span>
                <button class="btn btn-outline-success btn-sm" @click="contactFarmer(item.farmer)">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  `,
  data() {
    return {
      message: '',
      farmer: { name: '' },
      farmerId: null,
      otherVegetables: [],
      myVegetables: []
    };
  },
  mounted() {
    const farmerId = this.$route.query.id;
    this.farmerId = farmerId;
    if (farmerId) {
      fetch(`/api/farmers/${farmerId}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.farmer = data.data;
          } else {
            this.message = data.error || 'Unable to load farmer details';
          }
        })
        .catch(() => {
          this.message = 'Unable to load farmer details from server';
        });
     
    }

    fetch('/api/vegetables')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.otherVegetables = data.data;
        } else {
          this.message = data.error || 'Unable to load vegetables';
        }
      })
      .catch(() => {
        this.message = 'Unable to load vegetables from server';
      });

      fetch(`/api/farmers/${this.farmerId}/vegetables`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.myVegetables = data.data;
            if (!data.data.length) {
              this.message = 'No uploaded vegetables found yet.';
            } else {
              this.message = '';
            }
          } else {
            this.message = data.error || 'Unable to load your uploads';
          }
        })
        .catch(() => {
          this.message = 'Unable to load your uploads from server';
        });
  },
  methods: {
    loadMyUploads() {
      if (!this.farmerId) {
        this.message = 'Farmer ID is missing. Please login again.';
        return;
      }
      
    },
    goUpload() {
      if (this.farmerId) {
        this.$router.push(`/sell-vegetables?id=${this.farmerId}`);
      } else {
        this.$router.push('/sell-vegetables');
      }
    },
    goFarmerUploads() {
      if (this.farmerId) {
        this.$router.push(`/farmer-uploads?id=${this.farmerId}`);
      } else {
        this.message = 'Farmer ID is missing. Please login again.';
      }
    },
    contactFarmer(farmer) {
      this.message = `Contact request sent to ${farmer}.`;
    },
    goBack() {
      window.history.back();
    }
  }
};
