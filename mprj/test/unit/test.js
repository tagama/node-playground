import retrieve from '../../src/retrieve'

describe('Retrieve', function () {

  it('should validade first result', function () {
    return retrieve.getMemberDataAsObjects().then((data) => {
      let membro = data[0];
      membro.nome.should.equal('ADELIA BARBOZA DE CARVALHO')
      membro.cargo.should.equal('PROCURADOR DE JUSTICA')
      membro.lotacao.should.equal('1ª PROCURADORIA DE JUSTIÇA JUNTO À 22ª CÂMARA CÍVEL DO TRIBUNAL DE JUSTIÇA DO ESTADO DO RIO DE JANEIRO')
      membro.remuneracao.should.equal('R$ 30.471,10')
      membro.outrasVerbas.should.equal('R$ 1.579,82')
      membro.funcaoConfianca.should.equal('R$ 0,00')
      membro.gratificacaoNatalina.should.equal('R$ 0,00')
      membro.ferias.should.equal('R$ 0,00')
      membro.abono.should.equal('R$ 3.525,60')
      membro.totalBruto.should.equal('R$ 35.576,52')
      membro.contribuicaoPrevidenciaria.should.equal('R$ 3.525,60')
      membro.impostoRenda.should.equal('R$ 6.975,10')
      membro.retencaoTeto.should.equal('R$ 0,00')
      membro.totalDescontos.should.equal('R$ 10.500,70')
      membro.rendimentoTotalLiquido.should.equal('R$ 25.075,82')
      membro.indenizacoes.should.equal('R$ 14.485,37')
      membro.outrasRemuneracoes.should.equal('R$ 1.010,00');
    })
  });

});