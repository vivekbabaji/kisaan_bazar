export default {
  name: 'BuyFresh',
  template: `
    <div class="container py-5">
      <div class="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-4">
        <div>
          <button type="button" class="btn btn-sm btn-outline-secondary me-2 mb-2" @click="goBack">Back</button>
          <button type="button" class="btn btn-sm btn-outline-primary mb-2" @click="goHome">Home</button>
          <h3 class="mb-2">Buy Fresh Now</h3>
          <p class="text-muted mb-0">Browse fresh vegetables uploaded by farmers, without login or signup.</p>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-4" v-for="veg in vegetables" :key="veg.id">
          <div class="card h-100 shadow-sm">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title mb-1">{{ veg.name }} <small class="text-muted">({{ veg.breed }})</small></h5>
              <p class="card-text text-muted small mb-2">{{ veg.description }}</p>
              <ul class="list-unstyled small mb-3">
                <li><strong>Price:</strong> ₹{{ veg.price }}/kg</li>
                <li><strong>Quantity:</strong> {{ veg.quantity }} kg</li>
                <li><strong>Location:</strong> {{ veg.location }}</li>
                <li><strong>Uploaded:</strong> {{ veg.upload_date || veg.uploadDate }}</strong></li>
              </ul>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <span class="badge bg-success text-white small">{{ veg.farmer }}</span>
                <button class="btn btn-outline-success btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      vegetables: [
        {
          id: 1,
          name: 'Tomato',
          breed: 'Roma',
          uploadDate: '2026-05-19',
          location: 'Aligarh, UP',
          price: 30,
          quantity: 120,
          farmer: 'Ramesh Kumar',
          description: 'Fresh ripe tomatoes harvested this morning.'
        },
        {
          id: 2,
          name: 'Lady Finger',
          breed: 'Bhindi-Local',
          uploadDate: '2026-05-18',
          location: 'Mathura, UP',
          price: 40,
          quantity: 80,
          farmer: 'Sita Devi',
          description: 'Crisp and tender lady fingers available in small quantities.'
        },
        {
          id: 3,
          name: 'Potato',
          breed: 'Kufri Jyoti',
          uploadDate: '2026-05-17',
          location: 'Agra, UP',
          price: 22,
          quantity: 300,
          farmer: 'Mahesh',
          description: 'Clean, washed potatoes ready for all recipes.'
        },
        {
          id: 4,
          name: 'Spinach',
          breed: 'Local',
          uploadDate: '2026-05-19',
          location: 'Lucknow, UP',
          price: 25,
          quantity: 60,
          farmer: 'Anita',
          description: 'Leafy spinach harvested fresh this morning.'
        },
        {
          id: 5,
          name: 'Cauliflower',
          breed: 'White Star',
          uploadDate: '2026-05-16',
          location: 'Meerut, UP',
          price: 35,
          quantity: 45,
          farmer: 'Gopal',
          description: 'Firm cauliflower heads, pesticide-free.'
        }
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
  }
};
