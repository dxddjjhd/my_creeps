import upgrader from './upgrader'
import nge from './newft/newgetenergy'

const harvester = {

    run : (creep : Creep) => {
    
        if (creep.store.getFreeCapacity() === creep.store.getCapacity()){
        
            creep.memory.mode = 'HARVESTING';
        
        } else if (creep.store.getFreeCapacity() === 0){
        
            creep.memory.mode = 'CARRYING';
        
        }
        
        if (creep.memory.mode === 'HARVESTING'){
        
            nge.run(creep);
        
        } else if (creep.memory.mode === 'CARRYING' || creep.memory.mode === 'UPGRADING') {
        
            const structures = creep.room.find(FIND_STRUCTURES,{filter : (structure) => {
                return (structure.structureType === STRUCTURE_SPAWN || 
                structure.structureType === STRUCTURE_EXTENSION) && 
                ((structure as StructureSpawn | StructureExtension).store?.getFreeCapacity(RESOURCE_ENERGY) ?? 0) >0}});
            
            if (structures.length > 0){
                       
                const target = structures[0] as StructureSpawn | StructureExtension;
            
                if (creep.transfer(structures[0],RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                
                    creep.moveTo(structures[0]);
                
                }
            
            } else {
            
                upgrader.run(creep);
            }
        
        }
        
    }

};


export default harvester;