class ShowCandidateController {
  constructor(CandidateService,$stateParams) {
    CandidateService.get($stateParams.id).then( (candidate) => {
      this.candidate = candidate;
    });
  }
}

export default ShowCandidateController;
