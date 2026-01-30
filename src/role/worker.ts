const worker = {

    run : (creep:Creep) =>{
        
        const containers = creep.room.find(FIND_STRUCTURES,{filter : (container) => {return container.structureType === STRUCTURE_CONTAINER}});
        const sources = creep.room.find(FIND_SOURCES)
        if (creep.pos.x ===containers[0].pos.x && 
            creep.pos.y === containers[0].pos.y
        ){

            creep.harvest(sources[0]);
            
        
        } else {

            creep.moveTo(containers[0]);

        }
    
    }

};

export default worker;