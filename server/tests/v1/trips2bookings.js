import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

const { expect } = chai;
chai.use(chaiHttp);

describe('Testing the booking Endpoint', () => {
  describe('Testing the bookASeatOnATrip Endpoint', () => {
    it('should book a seat on a trip successfully on an empty bus without specifying a seat number', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 1,
        });
      expect(res).to.have.status(201);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
    });

    it('should book a seat on a trip successfully on an empty bus without specifying a seat number', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 3,
        });
      expect(res).to.have.status(201);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
    });

    it('should book a seat on a trip successfully specifying a seat number', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 1,
          seatnumber: 14,
        });
      expect(res).to.have.status(201);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
    });

    it('should book a seat on a trip successfully on an empty bus specifying a seat number', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 2,
          seatnumber: 1,
        });
      expect(res).to.have.status(201);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
    });

    it('should book a seat on a trip successfully on a non-empty bus without specifying a seat number', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 3,
        });
      expect(res).to.have.status(201);
      expect(res.body).to.have.property('status');
      expect(res.body).to.have.property('data');
    });

    it('should return a vehicle full error specifying a seat number', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 2,
          seatnumber: 1,
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('status');
    });

    it('should return a vehicle full error without specifying a seat number', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 2,
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('status');
    });


    it('should return a seat already taken error message', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 1,
          seatnumber: 14,
        });
      expect(res).to.have.status(409);
      expect(res.body).to.have.property('status');
    });


    it('should return a wrong trip id number error', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 100,
          seatnumber: 14,
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('status');
    });

    it('should return a seat number doesnt exist message(400)', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 1,
          seatnumber: 25,
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('status');
    });

    it('should return a validation error', async () => {
      const res = await chai.request(app).post('/api/v1/bookings').set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdG5hbWUiOiJtYWNobyIsImlzYWRtaW4iOnRydWUsImVtYWlsIjoibGlub0BnbS5jb20iLCJpYXQiOjE1NjE3MDUwMjh9.-KMTYqYKJTTIkm_Xo67KINlK8Q6ZMQItENkfskyWX8E').type('form')
        .send({
          tripid: 'a',
        });
      expect(res).to.have.status(400);
      expect(res.body).to.have.property('status');
    });
  });
});
