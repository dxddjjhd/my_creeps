import { errorMapper } from './modules/errorMapper.js'
import qc from './modules/quantitycontroller'
import upgrader from './role/upgrader'
import builder from './role/builder'
import mc from './modules/memoryclear'
import worker from './role/worker'
import carrier from './role/carrier'
import repairer from './role/repairer'
import tower from './structures/tower'
import oc from './explore/outsideControiier'


export const loop = errorMapper(() => {
    

    mc.run()
    

    for (let roomname in Game.rooms){

        const room = Game.rooms[roomname];
        const creep = room.find(FIND_HOSTILE_CREEPS);
        if (creep.length > 0){

            tower.attack(creep);
        }
    }
    
    qc.run('carrier',1,'internal');
    qc.run('worker',1,'internal');
    qc.run('upgrader',1,'internal');
    qc.run('builder',1,'internal');
    qc.run('repairer',1,'internal');


    const creeps = Object.values(Game.creeps).filter((creep) => {return creep.memory.tag === 'internal'});
    for (let creep of creeps){
    
        
        
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

        else if (creep.memory.role === 'repairer'){

            repairer.run(creep);

        }
    }

    oc.run();
})

