import nh from './newharvest'


const nge = {

    run : (creep :Creep) => {
    
        const containers = creep.room.find(FIND_STRUCTURES,{filter : (container) => {return container.structureType === STRUCTURE_CONTAINER && container.store.getUsedCapacity(RESOURCE_ENERGY) > 0}});
        const storage = creep.room.find(FIND_STRUCTURES,{filter : (container) => {return container.structureType === STRUCTURE_STORAGE && container.store.getUsedCapacity(RESOURCE_ENERGY) > 0}});    
        
        if (creep.memory.role === 'upgrader' || creep.memory.mode === 'BUILDING' || creep.memory.role === 'repairer'){
            
            if (creep.withdraw(storage[0],RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                
                creep.moveTo(storage[0]);
            }
        }
        
        else if (containers.length > 0){
            
            if (creep.withdraw(containers[0],RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                
                creep.moveTo(containers[0]);
            }
        } else if(containers.length === 0){
            const resource = creep.room.find(FIND_DROPPED_RESOURCES);
            if (resource.length > 0){

                if (creep.pickup(resource[0]) === ERR_NOT_IN_RANGE){

                    creep.moveTo(resource[0]);
                }    
            
            } else if (resource.length === 0){

                if (creep.memory.role === 'carrier'){
                    creep.moveTo(Game.spawns['Spawn1']);
                }
                nh.run(creep);
            
            }
            
            
        }
    
    }

};

export default nge;