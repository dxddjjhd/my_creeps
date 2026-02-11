import qc from '@/modules/quantitycontroller'
import outmove from './outmove';

const oc = {

    run : () => {
        
//        qc.run('worker',1,'external','W37S39');
//        qc.run('carrier',1,'external','W37S39');
        qc.run('worker',1,'external','W38S38');
        qc.run('carrier',1,'external','W38S38');


        const pioneer = Object.values(Game.creeps).filter((creep) => {return creep.memory.tag === 'external'});

        for (let creep of pioneer){
            if (creep.memory.mode === 'CARRYING'){
                outmove.run(creep,'W37S38');
            } else {
                if (creep.memory.target === 'W37S39'){
                    outmove.run(creep,'W37S39');
                } else if (creep.memory.target === 'W38S38'){
                    outmove.run(creep,'W38S38');
                }
            }
        }
    }
};

export default oc;