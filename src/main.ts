import { errorMapper } from './modules/errorMapper.js'
import qc from './modules/quantitycontroller'
import upgrader from './role/upgrader'
import builder from './role/builder'
import mc from './modules/memoryclear'
import harvester from './role/harvester'
import worker from './role/worker'

export const loop = errorMapper(() => {
    

    mc.run()


    qc.run('upgrader',2);
    qc.run('builder',1);
    qc.run('harvester',1);
    qc.run('worker',1);

    
    for (let name in Game.creeps){
    
        let creep : Creep = Game.creeps[name];
        
        if (creep.memory.role === 'upgrader'){
        
            upgrader.run(creep);
            
        }
        
        else if (creep.memory.role === 'builder'){
        
            builder.run(creep);
        }
        
        else if (creep.memory.role === 'harvester'){
        
            harvester.run(creep);
        
        }
        
        else if (creep.memory.role === 'worker'){
        
            worker.run(creep);
        
        }
    }
})

