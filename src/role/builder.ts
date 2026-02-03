import harvester from './carrier'
import nge from './newft/newgetenergy'

const builder = {

    run : (creep :Creep) => {
    
        if (creep.store.getFreeCapacity() === 0){
        
            creep.memory.mode = 'BUILDING';
            
        } else if (creep.store.getFreeCapacity() === creep.store.getCapacity()){
        
            creep.memory.mode = 'HARVESTING';
            
            
        }
        
        
        if (creep.memory.mode === 'BUILDING' || creep.memory.mode === 'UPGRADING' || creep.memory.mode === 'CARRYING'){
            
            const construction = creep.room.find(FIND_CONSTRUCTION_SITES)
            const sources = creep.room.find(FIND_MY_STRUCTURES,{filter:(structure) => 
                {return structure.structureType === STRUCTURE_SPAWN || 
                    structure.structureType === STRUCTURE_EXTENSION && 
                    (structure.store.getFreeCapacity()??0) > 0
                }})
            if (sources.length > 0){
                harvester.run(creep);
            
            }else if (construction.length > 0){
            
                if (creep.build(construction[0]) === ERR_NOT_IN_RANGE){
                
                    creep.moveTo(construction[0]);
                    
                }
            } else if (construction.length === 0){
                
                harvester.run(creep);
            }
            
        } else if (creep.memory.mode === 'HARVESTING'){
            
               
            nge.run(creep);                
            
        }
    }
};

export default builder;