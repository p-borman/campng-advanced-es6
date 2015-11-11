class EditController {
  constructor(CandidateService, $stateParams, $state) {
    this.candidateService = CandidateService;
    this.state = $state;
    this.candidateService.get($stateParams.id).then( (candidate) => {
      this.candidate = candidate;
    });
  }

  update() {
    this.candidateService.update(this.candidate).then( (candidate) => {
      this.state.go("showCandidate", {id: candidate.id});
    });
  }
}

export default EditController;
