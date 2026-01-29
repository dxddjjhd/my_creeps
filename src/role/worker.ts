import ct from '@/constants'


const worker = {

    run : (creep:Creep) =>{
        
        const containers = creep.room.find(FIND_STRUCTURES,{filter : (container) => {return container.structureType === STRUCTURE_CONTAINER}});
        const sources = creep.room.find(FIND_SOURCES)
        if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE){
        
            creep.moveTo(containers[0]);    
        
        }
    
    }

};

export default worker;