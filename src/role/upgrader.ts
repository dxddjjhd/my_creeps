const Upgrader = {
    
    run : (creep :Creep,targetsource: number):void => {
    
        if (creep.store.getFreeCapacity() === 0) {
            creep.memory.mode = 'UPGRADING';
            
        } else if (creep.store.getFreeCapacity() === creep.store.getCapacity()) {
            
            creep.memory.mode = 'HARVESTING';
        }
        
        
        if (creep.memory.mode === 'UPGRADING') {
            
            
            if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
            
                creep.moveTo(creep.room.controller);
            
            }
            
        } else if (creep.memory.mode === 'HARVESTING') {
        
            const sources = creep.room.find(FIND_SOURCES);
            
            if (creep.harvest(sources[targetsource]) === ERR_NOT_IN_RANGE) {
                
                creep.moveTo(sources[targetsource]);
                
            }
        }
    }
};   


export default Upgrader;
        