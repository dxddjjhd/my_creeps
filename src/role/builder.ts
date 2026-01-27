import upgrader from './upgrader'

const builder = {

    run : (creep :Creep) => {
    
        if (creep.store.getFreeCapacity() === 0){
        
            creep.memory.mode = 'BUILDING';
            
        } else if (creep.store.getFreeCapacity() === creep.store.getCapacity()){
        
            creep.memory.mode = 'HARVESTING';
            
            
        }
        
        
        if (creep.memory.mode === 'BUILDING' || creep.memory.mode === 'UPGRADING'){
            
            const construction = creep.room.find(FIND_CONSTRUCTION_SITES)
            
            if (construction.length > 0){
            
                if (creep.build(construction[0]) === ERR_NOT_IN_RANGE){
                
                    creep.moveTo(construction[0]);
                    
                }
            } else if (construction.length === 0){
                
                upgrader.run(creep,0);
            }
            
        } else if (creep.memory.mode === 'HARVESTING'){
        
               
                    
            const sources = creep.room.find(FIND_SOURCES);
            
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                
                creep.moveTo(sources[0]);  
            
            }
        }
    }
};

export default builder;