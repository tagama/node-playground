import {requestPromise as rp } from 'request-promise';


const _withOptions = (site_url) => {
    var config = {
        uri: ((site_url)),
        proxy: 'http://localhost:3128',
        json: true
    };
    return config;
};
rp(_withOptions('http://transparencia.mprj.mp.br/contracheque/remuneracao-de-todos-os-membros-ativos;jsessionid=uAgMUzFVg8KiC6yFjUGMdHAl.node2?p_p_id=mprjbeneficiosmembrosativos_WAR_mprjbeneficiocnmp115portlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&p_p_col_id=column-2&p_p_col_pos=1&p_p_col_count=2&currentPage=1&pageSize=20&ano=2017&cmd=get-servidores&tipoFunc=MATIV&mes=6&_=1503933054293'))
.then(console.log);