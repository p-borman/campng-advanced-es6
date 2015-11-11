import CandidatesModule from "./candidates"
import EditCandidateController from "./edit.controller"
import setup from "sinon-stub-promise";

describe('EditCandidateController', () => {
  beforeEach(window.module(CandidatesModule.name));

  let editCandidateController, serviceMock, stateMock, getPromise, updatePromise, candidate, stateTransitionSpy;

  let id = 1;
  let bob = {name: "Bob", id: id};
  let tom = {name: "Tom", id: id};

  beforeEach( () => {
    setup(sinon);
    getPromise= sinon.stub().returnsPromise();
    updatePromise= sinon.stub().returnsPromise();
    serviceMock = {
      get: getPromise,
      update : updatePromise
    };
    stateTransitionSpy = sinon.spy();
    stateMock = { go: stateTransitionSpy };
    getPromise.resolves(bob);
    updatePromise.resolves(tom);
    editCandidateController = new EditCandidateController(serviceMock, {id: id}, stateMock);
    editCandidateController.candidate = {};
  });

  it("updates the candidate", () => {
    editCandidateController.update(candidate);
    expect(updatePromise).to.have.been.calledWith(editCandidateController.candidate);
    expect(getPromise).to.have.been.calledWith(id);
    expect(stateTransitionSpy).to.have.been.calledWith("showCandidate", {id: id});
  });
});
