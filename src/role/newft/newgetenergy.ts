import nh from './newharvest'


const nge = {

    run : (creep :Creep) => {
    
        const containers = creep.room.find(FIND_STRUCTURES,{filter : (container) => {return container.structureType === STRUCTURE_CONTAINER && container.store.getUsedCapacity(RESOURCE_ENERGY) > 0}});
            
        if (containers){
            if (creep.withdraw(containers[0],RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                
                creep.moveTo(containers[0]);
            }
        } else if(containers.length === 0){
            nh.run(creep);
        }
    
    }

};

export default nge;