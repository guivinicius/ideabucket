'use strict';

var frisby = require('frisby'),
    url = 'http://localhost:3000/ideas';


describe('Ideas Controller', function(){

  describe('GET index', function(){
    frisby.create('returns http success').get(url).expectStatus(200).toss();
  });

  describe('GET show', function(){
    frisby.create('returns http success').get(url + '/1').expectStatus(200).toss();
  });

  describe('POST create', function(){
    frisby.create('returns http success').post(url).expectStatus(200).toss();
  });

  describe('PUT update', function(){
    frisby.create('returns http success').put(url + '/1').expectStatus(200).toss();
  });

  describe('DELETE delete', function(){
    frisby.create('returns http success').delete(url + '/1').expectStatus(200).toss();
  });

});
