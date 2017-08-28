import nodePlayground from '../../src/node-playground';

describe('nodePlayground', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(nodePlayground, 'greet');
      nodePlayground.greet();
    });

    it('should have been run once', () => {
      expect(nodePlayground.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(nodePlayground.greet).to.have.always.returned('hello');
    });
  });
});
