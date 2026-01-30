import { errorMapper } from './modules/errorMapper.js'
import qc from './modules/quantitycontroller'
import upgrader from './role/upgrader'
import builder from './role/builder'
import mc from './modules/memoryclear'
import worker from './role/worker'
import carrier from './role/carrier'

export const loop = errorMapper(() => {
    

    mc.run()
    

    qc.run('upgrader',1);
    qc.run('builder',1);
    qc.run('carrier',1);
    qc.run('worker',1);
    
    
    for (let name in Game.creeps){
    
        let creep : Creep = Game.creeps[name];
        
        if (creep.memory.role === 'upgrader'){
        
            upgrader.run(creep);
            
        }
        
        else if (creep.memory.role === 'builder'){
            
            builder.run(creep);
        }
        
        else if (creep.memory.role === 'carrier'){
        
            carrier.run(creep);
        
        }
        
        else if (creep.memory.role === 'worker'){
            
            worker.run(creep);
        
        }
    }
})

