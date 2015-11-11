import CandidatesModule from "./candidates"

describe('CandidateService', () => {
  beforeEach(window.module(CandidatesModule.name));

  let candidateService, httpBackend;

  beforeEach(inject((CandidateService, $httpBackend) => {
    candidateService = CandidateService;
    httpBackend = $httpBackend;
  }));

  it("should find candidates", function() {
    let retrievedCandidates = [];
    httpBackend.expectGET('/candidates').respond([{name: "Bob"}]);
    candidateService.query().then( (candidates) => {
      retrievedCandidates = candidates;
      expect(retrievedCandidates.length).to.equal(1);
    });
    httpBackend.flush();
  });

  it("should find candidate by id", function() {
    let retrievedCandidate = {};
    httpBackend.expectGET('/candidates/1').respond({name: "Bob", id: 1});
    candidateService.get(1).then( (candidate) => {
      retrievedCandidate = candidate;
      expect(retrievedCandidate.id).to.equal(1);
    });
    httpBackend.flush();
  });

  it("should create candidates", function() {
    let candidate = {name: "Bob"};
    let retrievedCandidate = {};
    httpBackend.expectPOST('/candidates', JSON.stringify(candidate)).respond({name: "Bob", id: 1});
    candidateService.create(candidate).then( (candidate) => {
      retrievedCandidate = candidate;
      expect(retrievedCandidate.id).to.equal(1);
    });
    httpBackend.flush();
  });

  it("should update candidates", function() {
    let candidate = {id: 1, name: "Bob"};
    let retrievedCandidate = {};
    httpBackend.expectPOST(`/candidates/${candidate.id}`, JSON.stringify(candidate)).respond({name: "Bob", id: 1});
    candidateService.update(candidate).then( (candidate) => {
      retrievedCandidate = candidate;
      expect(retrievedCandidate.id).to.equal(1);
    });
    httpBackend.flush();
  });

});
