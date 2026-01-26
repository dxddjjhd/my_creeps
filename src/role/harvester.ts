import upgrader from './upgrader'


const harvester = {

    run : (creep : Creep) => {
    
        if (creep.store.getFreeCapacity() === creep.store.getCapacity()){
        
            creep.memory.mode = 'HARVESTING';
        
        } else if (creep.store.getFreeCapacity() === 0){
        
            creep.memory.mode = 'CARRYING';
        
        }
        
        if (creep.memory.mode === 'HARVESTING'){
        
            const sources = creep.room.find(FIND_SOURCES);
            
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                
                creep.moveTo(sources[0]);
            }
        
        } else if (creep.memory.mode === 'CARRYING') {
        
            const structures = creep.room.find(FIND_STRUCTURES,{filter : (structure) => {return structure.structureType === STRUCTURE_SPAWN || structure.structureType === STRUCTURE_EXTENSION}});
            
            if (structures.length > 0){
            
                if (creep.transfer(structures[0],RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                
                    creep.moveTo(structures[0]);
                
                }
            
            }
        
        }
        
    }

};


export default harvester;