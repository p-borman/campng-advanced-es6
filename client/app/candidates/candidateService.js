class CandidateService {
  constructor($http) {
    this.http = $http;
  }

  query() {
    return this.http.get("/candidates").then( (response) => {
      return response.data;
    });
  }

  get(id) {
    return this.http.get("/candidate/"+id).then( (response) => {
      return response.data;
    });
  }

}

CandidateService.$inject = ["$http"];

export default CandidateService;
