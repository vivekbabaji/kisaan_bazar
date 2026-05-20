export default {
  name: 'SellVegetables',
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="mb-3">
                <button type="button" class="btn btn-sm btn-outline-secondary me-2" @click="goBack">Back</button>
                <button type="button" class="btn btn-sm btn-outline-primary" @click="goHome">Home</button>
              </div>
              <h3 class="card-title mb-3">Sell Your Vegetable</h3>
              <p class="text-muted">Add details about the crop you want to sell so buyers can see it immediately.</p>
              <form @submit.prevent="submitVegetable">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label for="name" class="form-label">Vegetable Name</label>
                    <input id="name" v-model="vegetable.name" class="form-control form-control-sm" required />
                  </div>
                  <div class="col-md-6">
                    <label for="breed" class="form-label">Breed / Variety</label>
                    <input id="breed" v-model="vegetable.breed" class="form-control form-control-sm" required />
                  </div>
                  <div class="col-md-12">
                    <label for="description" class="form-label">Description</label>
                    <textarea id="description" v-model="vegetable.description" class="form-control form-control-sm" rows="3" required></textarea>
                  </div>
                  <div class="col-md-6">
                    <label for="farmer" class="form-label">Farmer Name</label>
                    <input id="farmer" v-model="vegetable.farmer" class="form-control form-control-sm" disabled />
                  </div>
                  <div class="col-md-6">
                    <label for="location" class="form-label">Location</label>
                    <input id="location" v-model="vegetable.location" class="form-control form-control-sm" required />
                  </div>
                  <div class="col-md-4">
                    <label for="uploadDate" class="form-label">Uploaded</label>
                    <input id="uploadDate" type="date" v-model="vegetable.uploadDate" class="form-control form-control-sm" required />
                  </div>
                  <div class="col-md-4">
                    <label for="price" class="form-label">Price (₹/kg)</label>
                    <input id="price" type="number" v-model.number="vegetable.price" class="form-control form-control-sm" required />
                  </div>
                  <div class="col-md-4">
                    <label for="quantity" class="form-label">Quantity (kg)</label>
                    <input id="quantity" type="number" v-model.number="vegetable.quantity" class="form-control form-control-sm" required />
                  </div>
                </div>
                <div class="d-flex justify-content-end mt-4">
                  <button class="btn btn-success btn-sm" type="submit">Submit Listing</button>
                </div>
              </form>
              <div v-if="message" class="mt-3 alert" :class="success ? 'alert-success' : 'alert-danger'">{{ message }}</div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Preview</h5>
              <p class="text-muted small mb-2">This preview shows the details buyers will see.</p>
              <ul class="list-unstyled">
                <li><strong>Name:</strong> {{ vegetable.name }}</li>
                <li><strong>Breed:</strong> {{ vegetable.breed }}</li>
                <li><strong>Description:</strong> {{ vegetable.description }}</li>
                <li><strong>Farmer:</strong> {{ vegetable.farmer }}</li>
                <li><strong>Location:</strong> {{ vegetable.location }}</li>
                <li><strong>Uploaded:</strong> {{ vegetable.uploadDate }}</li>
                <li><strong>Price:</strong> ₹{{ vegetable.price }}/kg</li>
                <li><strong>Quantity:</strong> {{ vegetable.quantity }} kg</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      vegetable: {
        name: 'Okra',
        breed: 'Local',
        description: 'Tender okra picked this morning; ideal for bhindi fry.',
        farmer: 'Sita Devi',
        location: 'Mathura, UP',
        uploadDate: '2026-05-18',
        price: 42,
        quantity: 80
      },
      farmerId: null,
      message: '',
      success: false
    };
  },
  mounted() {
    const farmerId = this.$route.query.id;
    if (farmerId) {
      this.farmerId = farmerId;
      fetch(`/api/farmers/${farmerId}`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.vegetable.farmer = data.data.name;
            if (!this.vegetable.location && data.data.location) {
              this.vegetable.location = data.data.location;
            }
          }
        })
        .catch(() => {
          // ignore if farm fetch fails, form still works with manual name.
        });
    }
  },
  methods: {
    submitVegetable() {
      const payload = {
        name: this.vegetable.name,
        breed: this.vegetable.breed,
        description: this.vegetable.description,
        location: this.vegetable.location,
        upload_date: this.vegetable.uploadDate,
        price: this.vegetable.price,
        quantity: this.vegetable.quantity,
        farmer_id: this.farmerId,
        farmer: this.vegetable.farmer
      };

      fetch('/api/vegetables', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.message = 'Vegetable listing saved successfully.';
            this.success = true;
            setTimeout(() => window.history.back(), 1200);
          } else {
            this.message = data.error || 'Unable to save listing.';
            this.success = false;
          }
        })
        .catch(() => {
          this.message = 'Unable to save listing. Network error.';
          this.success = false;
        });
    },
    goBack() {
      window.history.back();
    },
    goHome() {
      this.$router.push('/');
    }
  }
};
