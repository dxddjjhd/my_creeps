import { errorMapper } from './modules/errorMapper.js'
import qc from './modules/quantitycontroller'
import upgrader from './role/upgrader'
import builder from './role/builder'
import mc from './modules/memoryclear'
import harvester from './role/harvester'


export const loop = errorMapper(() => {
    

    mc.run()


    qc.run('upgrader',1);
    qc.run('builder',1);
    qc.run('harvester',2);


    
    for (let name in Game.creeps){
    
        let creep : Creep = Game.creeps[name];
        
        if (creep.memory.role === 'upgrader'){
        
            upgrader.run(creep,0);
            
        }
        
        if (creep.memory.role === 'builder'){
        
            builder.run(creep);
        }
        
        if (creep.memory.role === 'harvester'){
        
            harvester.run(creep);
        
        }
    }
})

