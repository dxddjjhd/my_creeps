import nge from './newft/newgetenergy'


const Upgrader = {
    
    run : (creep :Creep):void => {
    
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
        
            
            
            nge.run(creep);
            
        }
    }
};   


export default Upgrader;
        