import CandidatesModule from "./candidates"

describe('CandidateService', () => {
  beforeEach(window.module(CandidatesModule.name));

  let candidateService, httpBackend;
  var bobId = 44;
  let bobName = "Bob";
  let bob = { name: bobName, id: bobId };

  beforeEach(inject((CandidateService, $httpBackend) => {
    candidateService = CandidateService;
    httpBackend = $httpBackend;
  }));

  it("should GET SOME candidates", function() {
    httpBackend.expectGET('/candidates').respond([bob]);

    candidateService.query().then( (candidates) => {
      expect(candidates).not.null;
      expect(candidates).not.undefined;
      expect(candidates.length).to.equal(1);
      expect(candidates[0].name).to.equal(bobName);
    });

    httpBackend.flush();
  });

  it("should FIND ONE LOUSY candidate by id", function() {
      httpBackend.expectGET('/candidate/'+ bobId).respond(bob);

    candidateService.get(bobId).then( (candidate) => {
      expect(candidate).not.null;
      expect(candidate).not.undefined;
      expect(candidate.name).to.equal(bobName);
    });

    httpBackend.flush();
  });

});
