import RatyModule from './raty'
import RatyComponent from './raty.component';

describe('Raty', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RatyModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RatyController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Component', () => {
      // component/directive specs
      let component = RatyComponent();
  });
});
