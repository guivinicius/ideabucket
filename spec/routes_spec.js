'use strict';

var request = require('request'),
    util    = require('util');

describe('routes', function(){

  describe('index', function(){

    it('responds successfully', function(done){
      request('http://localhost:3000', function(error, response){
        expect(response.statusCode).toEqual(200);
        done();
      });
    });

    it('has the correct body', function(done){
      request('http://localhost:3000', function(error, response, body){
        expect(body).toContain('Ideas Bucket API');
        done();
      });
    });

  });

  describe('ideas', function(){

    describe('index', function(){

      it('responds successfully', function(done){
        request('http://localhost:3000/ideas', function(error, response){
          expect(response.statusCode).toEqual(200);
          done();
        });
      });

      it('returns a list of ideas', function(done){
        request('http://localhost:3000/ideas', function(error, response, body){

          expect(body.ideas).toContain(util.format('%j', {ideas: []}));
          done();
        });
      });

    });

  });

});
