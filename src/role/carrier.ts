import upgrader from './upgrader'
import nge from './newft/newgetenergy'

const carrier = {

    run : (creep : Creep) => {
        
        if (creep.store.getFreeCapacity() === creep.store.getCapacity()){
        
            creep.memory.mode = 'HARVESTING';
        
        } else if (creep.store.getFreeCapacity() === 0){
        
            creep.memory.mode = 'CARRYING';
        
        }
        
        if (creep.memory.mode === 'HARVESTING'){
        
            //creep获取能量
            
            nge.run(creep);
            
            


        } else if (creep.memory.mode === 'CARRYING' || creep.memory.mode === 'UPGRADING') {
        
            //creep运输能量至未满的建筑（或进行升级控制器）
            
            const structures = creep.room.find(FIND_STRUCTURES,{filter : (structure) => {
                return (structure.structureType === STRUCTURE_SPAWN || 
                structure.structureType === STRUCTURE_TOWER || 
                structure.structureType === STRUCTURE_EXTENSION) && 
                ((structure as StructureSpawn | StructureExtension).store?.getFreeCapacity(RESOURCE_ENERGY) ?? 0) >0}});
            
            const resource = creep.room.find(FIND_DROPPED_RESOURCES);
            
            if (structures.length > 0){
                       
                const target = structures[0] as StructureSpawn | StructureExtension;
            
                if (creep.transfer(structures[0],RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                
                    creep.moveTo(structures[0]);
                
                }
            
            }
        
        }
        
    }

};


export default carrier;